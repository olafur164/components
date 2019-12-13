import * as React from 'react';
import { gsap } from 'gsap';

// ========================
// Interfaces
// ========================

interface IGSAPLayerProps {
  duration?: number;
  stagger?: number;
  show?: boolean;
  style?: any;
  options?: any;
}

class Stagger extends React.PureComponent<IGSAPLayerProps, any> {
  public static defaultProps = {
    duration: 0.5,
    stagger: 0.1,
    show: false,
    options: {
      y: 0,
      autoAlpha: 1,
    },
  };

  private tl: any = gsap.timeline({ paused: true });
  private childRefs: any = [];

  public componentDidMount() {
    const { duration, stagger, options } = this.props;

    this.tl.staggerTo(this.childRefs, duration, options, stagger);
    this.tl.restart();
  }

  // public componentDidUpdate() {
  //   this.showIfNeeded();
  // }

  public showIfNeeded() {
    if (this.props.show) {
      this.tl.restart();
    } else {
      this.tl.reverse();
    }
  }

  public renderChildren() {
    const retVal: React.ReactChild[] = [];
    React.Children.map(this.props.children, (child: React.ReactChild, key) => {
      if (React.isValidElement(child)) {
        retVal.push(
          <child.type
            {...child.props}
            style={this.props.style || { opacity: 0, visibility: 'hidden' }}
            key={key}
            ref={(el: any) => (this.childRefs[key] = el)}
          />
        );
      }
    });
    return retVal;
  }

  public render() {
    return this.renderChildren();
  }
}

export default Stagger;
