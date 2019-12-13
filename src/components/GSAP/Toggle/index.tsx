import * as React from 'react';

import styled from 'styled-components';
import { IInOut, presetProps, PresetTypes } from '../presets';
import { gsap } from 'gsap';

// ========================
// Components
// ========================

const GSAPLayer = styled.div<IStyledGSAPLayerProps>`
  ${({ initialState, ...props }) => {
    const styles: string[] = [];
    const base = initialState === 'visible' ? props.in : props.out;

    styles.push(base.opacity !== undefined ? `opacity: ${base.opacity};` : '');
    styles.push(base.transformOrigin ? `transform-origin: ${base.transformOrigin};` : '');
    styles.push(
      base.x || base.y || base.z
        ? `transform: translate3d(${base.x || '0'}, ${base.y || '0'}, 0);`
        : ''
    );

    styles.push(base.z ? `z-index: ${base.z}` : '');

    if (props.fullWidth) {
      styles.push('width: 100%;');
    }

    return styles.join('');
  }}
`;

// ========================
// Interfaces
// ========================

interface IGSAPLayerProps {
  children?: React.ReactNode;
  initialState?: 'hidden' | 'visible';
  show?: boolean;
  preset?: PresetTypes;
  in?: IInOut;
  out?: IInOut;
  style?: any;
  onFinish?: any;
  fullWidth?: boolean;
}

interface IStyledGSAPLayerProps {
  in: IInOut;
  out: IInOut;
  initialState?: 'hidden' | 'visible';
  style?: any;
  fullWidth?: boolean;
}

class Toggle extends React.PureComponent<IGSAPLayerProps, any> {
  public static defaultProps = {
    initialState: 'hidden',
    show: false,
    onFinish: () => true,
  };

  private layerRef: any = null;
  private propsIn: IInOut = {};
  private propsOut: IInOut = {};

  public componentDidUpdate() {
    this.setLayer();
  }

  public setLayer() {
    if (this.props.show) {
      this.showLayer();
    } else {
      this.hideLayer();
    }
  }

  public showLayer() {
    const { duration, ...options } = this.propsIn;
    options.ease = options.ease ? options.ease : 'expo.out';

    if (this.layerRef) {
      const anim = gsap.to(this.layerRef, duration || 0.4, options);

      anim.eventCallback('onComplete', this.props.onFinish || (() => true));
    }
  }

  public hideLayer() {
    const { duration, ...options } = this.propsOut;
    options.ease = options.ease ? options.ease : 'expo.out';

    const anim = gsap.to(this.layerRef, duration || 0.4, options);

    anim.eventCallback('onComplete', this.props.onFinish || (() => true));
  }

  public render() {
    const { children, preset, show, in: propsIn, out: propsOut, onFinish, ...props } = this.props;

    const newProps = preset ? presetProps(preset) : props;

    this.propsIn = newProps.in;
    this.propsOut = newProps.out;

    const finalProps = {
      ...props,
      in: newProps ? newProps.in : propsIn,
      out: newProps ? newProps.out : propsOut,
      style: newProps && newProps.style ? newProps.style : props.style ? props.style : undefined,
      ref: (el: any) => (this.layerRef = el),
    };

    return React.createElement(GSAPLayer, finalProps, children);
  }
}

export default Toggle;
