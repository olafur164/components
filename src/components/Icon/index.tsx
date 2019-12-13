import * as React from 'react';
import styled from 'styled-components';
// missing pagecolorOverrides import

const ua = navigator.userAgent;
const browser = {
  isChrome: /chrome/i.test(ua),
  isFirefox: /firefox/i.test(ua),

  // https://msdn.microsoft.com/en-us/library/ms537503(v=vs.85).aspx
  isIE: /msie/i.test(ua) || /trident/i.test(ua),
  isEdge: /edge/i.test(ua)
};

if (browser.isIE) {
  import('./svg');
}

export const getIconSize = (iconSize: string | number | undefined): string | undefined => {
  if (typeof iconSize === 'number') {
    return `${iconSize / 16}rem`;
  }

  switch (iconSize) {
    case 'mini': {
      return '0.4rem';
    }
    case 'tiny': {
      return '0.5rem';
    }
    case 'smaller': {
      return '0.75rem';
    }
    case 'small': {
      return '0.875rem';
    }
    case 'medium': {
      return '1rem';
    }
    case 'large': {
      return '1.5rem';
    }
    case 'large-big': {
      return '2rem';
    }
    case 'big': {
      return '2.5rem';
    }
    case 'great': {
      return '3rem';
    }
    case 'huge': {
      return '4rem';
    }
    case 'massive': {
      return '8rem';
    }
    default: {
      return undefined;
    }
  }
}

// ========================
// Components
// ========================
const StyledIcon = styled.svg`
  width: ${(props: IIconProps) => (props.iconSize ? `${props.iconSize}` : '100%')};
  min-width: ${(props: IIconProps) => (props.iconSize ? `${props.iconSize}` : '100%')};
  height: ${(props: IIconProps) =>
    props.iconHeight
      ? typeof props.iconHeight === 'string'
        ? props.iconHeight
        : `${props.iconHeight}px`
      : props.iconSize
        ? props.iconSize
        : '100%'};
  transform: ${(props: IIconProps) => `${props.rotateDeg ? `rotate(${props.rotateDeg}deg)` : 'none'}`};
  use, path {
    ${(props: IIconProps) =>
    props.color === 'page-color' ? pageColorOverrides('fill') : `fill: ${props.color};`}
    ${(props: IIconProps) =>
    props.color === 'page-color' ? pageColorOverrides('color') : `color: ${props.color};`}
  }
`;

// ========================
// Interfaces
// ========================
interface IIconProps {
  name: string;
  color?: string;
  colorGradient?: boolean;
  iconSize?: string | number;
  iconHeight?: string | number;
  rotateDeg?: number;
  className?: string;
  spritePath?: string;
}

/**
 * The Icon component.
 */
const Icon: React.FC<IIconProps> = (
  { name, color, colorGradient, iconSize, iconHeight, rotateDeg, className, spritePath }
) => {

  const iconName = name.indexOf('icon-', 0) === 0 ? name.replace('icon-', '') : name;

  const path = (browser.isIE) ? `#sprite_icon-${iconName}` : `${'/assets/support/sprite.svg'}#icon-${iconName}`

  return (
    <StyledIcon
      name={iconName}
      className={`sprite sprite-${iconName} ${iconName} ${className &&
        className}`}
      color={color}
      width="100%"
      height="100%"
      iconSize={getIconSize(iconSize)}
      iconHeight={iconHeight}
      rotateDeg={rotateDeg}
      aria-hidden="true"
      fill={color}
    >
      <use xlinkHref={path} />
    </StyledIcon>
  );

}

export default Icon;
