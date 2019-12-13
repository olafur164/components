import * as React from 'react';
import * as variables from 'variables';
import styled from 'styled-components';
import { Stores } from 'store';

// ========================
// Components
// ========================

const StyledHamburger = styled.button`
  display: inline-flex;
  align-content: center;
  background-color: transparent;
  color: ${variables.marelPrimaryBrandColor};
`;

const HamburgerIcon = styled.div`
  position: relative;
  height: 12px;
  width: 16px;
  transition: transform .2s ease .2s;
  transform: ${(props: {open: boolean}) => (props.open ? 'rotate(-45deg)' : 'rotate(0deg)')};
`;

const HamburgerPatty = styled.div`
  position: absolute;
  top: 50%;
  background-color: ${variables.marelPrimaryBrandColor};
  height: 2px;
  width: 16px;
  transition-timing-function: cubic-bezier(.215,.61,.355,1);

  &:before {
    content: '';
    background-color: ${variables.marelPrimaryBrandColor};
    left: 0;
    width: 12px;
    height: 2px;
    position: absolute;
    opacity: ${(props: { open: boolean }) => (props.open ? 0 : 1)};
    top: ${(props: { open: boolean }) => (props.open ? '0' : '-0.375rem')};
  }

  &:after {
    content: '';
    background-color: ${variables.marelPrimaryBrandColor};
    left: 0;
    width: ${(props: { open: boolean }) => (props.open ? '16px' : '9px')};
    height: 2px;
    position: absolute;
    transition: ${(props: { open: boolean }) =>
      props.open
        ? 'bottom .2s ease, width .2s ease, transform .2s cubic-bezier(.215,.61,.355,1) .2s'
        : 'transform .2s cubic-bezier(.215,.61,.355,1), bottom .2s ease .2s, width .2s ease .2s'};
    bottom: ${(props: { open: boolean }) => (props.open ? '0' : '-0.375rem')};
    transform: ${(props: { open: boolean }) => (props.open ? 'rotate(-90deg)' : 'rotate(0deg)')};
  }
`;

const HamburgerLabel = styled.div`
  margin-left: 0.5rem;
`;

// ========================
// Interfaces
// ========================
interface IHamburgerProps {
  handleClick: () => void;
  handleKeyUp: (ev: React.KeyboardEvent) => void;
  open: boolean;
}

/**
 * The Hamburger component.
 */

 const Hamburger: React.FC<IHamburgerProps> = ({open, handleClick, handleKeyUp}) => {
  const { dictionary } = React.useContext(Stores);
  const ariaLabel = `${
    open
      ? dictionary['Close'] || 'Close'
      : dictionary['Open'] || 'Open'
  } ${dictionary['Menu'] || 'Menu'}`;
  return (
    <StyledHamburger
      className="hamburger"
      onClick={() => {
        handleClick();
      }}
      onKeyUp={(ev: React.KeyboardEvent) => {
        handleKeyUp(ev);
      }}
      aria-expanded={open}
      aria-label={ariaLabel}
    >
      <HamburgerIcon open={open}>
        <HamburgerPatty className="hamburger-icon" open={open} />
      </HamburgerIcon>
      <HamburgerLabel className="semibold fs-15 lh-17">
        {dictionary['Menu'] || 'Menu'}
      </HamburgerLabel>
    </StyledHamburger>
  );
 }

export default Hamburger;
