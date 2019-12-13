import styled from 'styled-components';
import * as variables from 'variables';

interface IShow {
  show?: boolean;
  isAnyOpen: boolean;
  hasLastLevelContent?: boolean;
}
interface IArrow {
  topLevel?: boolean;
  docked?: boolean;
  show?: boolean;
}

export const StyledMobileSecondLevelWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-right: -3rem;
  margin-left: -3rem;
  padding: 0 3rem;
  background-color: ${variables.secondaryMegaMenu};
`;
export const StyledMobileSecondLevel = styled.ul<IShow>`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  transition: all 0.3s ease;
  padding: ${props => (props.isAnyOpen ? '1.875rem 0' : '2.5rem 0')};
`;

export const MobileSecondLevelLink = styled.button<IShow>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: transparent;
  padding: 0;

  &:not(:last-of-type) {
    margin-right: ${props => props.isAnyOpen && '2rem'};

    @media (max-width: 380px) {
      margin-right: ${props => props.isAnyOpen && '1rem'};
    }
  }
  :not(:last-child) {
    margin-bottom: ${props => (props.isAnyOpen ? 0 : '2rem')};
  }

  > .mobile-second-level-chevron {
    display: flex;
    align-items: center;
    height: 100%;
    position: absolute;
    right: 3rem;
    top: 0;
    svg {
      transition: transform 0.3s;
      width: ${props => props.isAnyOpen && !props.show && 0};
    }
  }
`;

export const MobileSecondLevelLinkIconAndTextWrapper = styled.div<IShow>`
  position: relative;
  display: flex;
  align-items: center;
  opacity: ${props => (props.hasLastLevelContent ? (props.show ? 1 : 0.5) : 1)};
  transition: ${props => (props.show ? 'opacity .2s' : 'none')};
  letter-spacing: -0.02em;
  padding: 32px 0px;
  cursor: pointer;
  color: ${variables.white};

  padding: 0;
  &:hover {
    opacity: 1;
  }
  svg {
    margin-right: ${props => !props.isAnyOpen && '1.5rem'};

    @media (max-width: 380px) {
      width: ${props => props.isAnyOpen && 'calc(28rem / 16)'};
      height: ${props => props.isAnyOpen && 'calc(28rem / 16)'};
    }
  }
`;

export const MobileSecondLevelArrow = styled.div`
  cursor: pointer;
  padding: 0;
  background: transparent;
`;

export const MegaMenuSectionArrowWrapper = styled.div<IArrow>`
  height: 0px;
  display: flex;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  flex-direction: column;
  position: absolute;
  bottom: ${props => (props.docked ? '7px' : 'calc(-2rem + 0.56rem)')};
  left: 25%;
`;

export const MegaMenuSectionArrow = styled.span<IArrow>`
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 7px solid
    ${props => (props.topLevel ? variables.secondaryMegaMenu : variables.darkPurple)};
  transform: rotate(180deg);
  align-self: center;
`;
