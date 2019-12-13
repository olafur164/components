import * as React from 'react';

/**
 * Component that alerts if you click outside of it and its children.
 */
interface IDetectOutsideClickProps {
  handleClose: () => void;
  disable?: boolean;
  className?: string;
}

export default class DetectOutsideClick extends React.PureComponent<IDetectOutsideClickProps> {
  private wrapperRef: any;

  constructor(props: any) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  public componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    document.addEventListener('keyup', this.onEsc);
  }

  public componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    document.removeEventListener('keyup', this.onEsc);
  }

  /**
   * Set the wrapper ref
   */
  public setWrapperRef(node: any) {
    this.wrapperRef = node;
  }


  public onEsc = (e: KeyboardEvent) => {
    if (this.props.disable) { return; }

    if (e.keyCode === 27) {
      this.props.handleClose();
    }
  }

  /**
   * Alert if clicked on outside of element
   */
  public handleClickOutside(event: MouseEvent) {
    if (this.props.disable) { return; }

    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.handleClose();
    }
  }

  public render() {
    return (
      <div className={`detect-outside-click ${this.props.className}`} ref={this.setWrapperRef}>
        {this.props.children}
      </div>
    );
  }
}
