import * as React from 'react';
import { PresetTypes } from '../presets';
import Toggle from '../Toggle';

// ========================
// Interfaces
// ========================

interface IAppearProps {
  delay?: number;
  preset?: PresetTypes;
  onFinish?: any;
  style?: any;
}

class Appear extends React.PureComponent<IAppearProps, any> {
  public static defaultProps = {
    delay: 0,
    preset: 'fadeIn',
  };

  private timeout: any = 0;

  constructor(props: IAppearProps) {
    super(props);

    this.state = {
      show: false,
    };
  }

  public componentDidMount() {
    if (this.props.delay) {
      this.timeout = setTimeout(() => {
        this.setState({ show: true });
      }, this.props.delay);
    } else {
      this.setState({ show: true });
    }
  }

  public componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  public render() {
    const { preset, children, onFinish, ...props } = this.props;
    return (
      <Toggle preset={preset} onFinish={onFinish} show={this.state.show} {...props}>
        {children}
      </Toggle>
    );
  }
}

export default Appear;
