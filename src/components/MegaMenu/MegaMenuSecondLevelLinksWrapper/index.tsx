import * as React from 'react';
import FocusLock from 'react-focus-lock';
import styled, { css, keyframes } from 'styled-components';
import * as variables from 'variables';
import Icon from 'components/Icon';

// Keyframes

const appear = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 7px, 0);
  }
  50% {
    opacity: 1;
    transform: translate3d(0, 7px, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

// ========================
// Components
// ========================

const StyledMegaMenuSecondLevelLinksWrapper = styled.div`
  justify-content: center;
  color: ${variables.white};
  max-height: 100%;
`;

const MegaMenuSecondLevelLink = styled.a`
  letter-spacing: -0.02rem;
  padding: 2rem 0;
  cursor: pointer;
  display: inline-block;
  color: ${variables.white};
  position: relative;

  svg {
    margin-right: 1rem;
    pointer-events: none;
  }

  &:not(:last-child) {
    margin-right: 2.5rem;
  }
`;
const MegaMenuSecondLevelButton = styled(MegaMenuSecondLevelLink)`
  background-color: transparent;
`;

export const MegaMenuSecondLevelLinkIconAndTextWrapper = styled.div`
  display: flex;
  opacity: ${(props: { show: boolean }) => (props.show ? 1 : 0.5)};
  transition: ${(props: { show: boolean }) => (props.show ? 'opacity .2s' : 'none')};
`;

export const MegaMenuTopLevelLinkText = styled.span`
  display: flex;
  align-self: center;
`;

const MegaMenuSectionArrowWrapper = styled.div`
  height: 0;
  display: flex;
  visibility: ${(props: { show: boolean }) => (props.show ? 'visible' : 'hidden')};
  flex-direction: column;
  position: absolute;
  bottom: 7px;
  left: 50%;

  opacity: 0;
  transform: translate3d(0, 7px, 0);

  ${(props: { show: boolean }) =>
    props.show &&
    css`
      animation: ${appear} 0.4s linear 1 forwards;
    `};

  /* IE only styles */
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    bottom: 0px;
  }
`;

const MegaMenuSectionArrow = styled.span`
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 7px solid
    ${(props: { topLevel?: boolean }) =>
      props.topLevel ? variables.secondaryMegaMenu : variables.darkPurple};
  transform: rotate(180deg);
  align-self: center;
`;

// ========================
// Interfaces
// ========================
interface IMegaMenuSecondLevelLinksWrapperProps {
  firstLevelMenuItem: any;
  selectedSecondLevel: number;
  handleMouseEnter: any;
  index: number;
  docked?: boolean;
  changeComponentAnimatedState?: (componentId: string, state: string) => void;
  isUsingKeyboard?: boolean;
  onSecondLevelKeyDown: (industryIndex: number, ev: React.KeyboardEvent) => void;
}

/**
 * The MegaMenuSecondLevelLinksWrapper component.
 *
 * Issues - TODO:
 * We're using a ref to run the open animation in this component but we run the close animation in the parent component.
 * That animation uses another ref, since it's in another component. We should refactor this to use React's forwardRef and HOC - to do this we'd have to upgrade to React 16.3.
 * Stagger animation is now removed ^^ If it's added in the future again.
 */
class MegaMenuSecondLevelLinksWrapper extends React.Component<
  IMegaMenuSecondLevelLinksWrapperProps,
  any
> {
  // private thisRef: any;
  private itemRefs: any[] = [];
  private componentId: string = 'megamenu-secondlevel';

  constructor(props: IMegaMenuSecondLevelLinksWrapperProps) {
    super(props);

    this.state = {
      show: false,
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);

    // Notify other component that the component is mounted.
    if (this.props.changeComponentAnimatedState) {
      this.props.changeComponentAnimatedState(this.componentId, 'mounted');
    }
  }

  public handleMouseEnter(industryIndex: any) {
    if (this.props.handleMouseEnter) {
      this.props.handleMouseEnter(industryIndex);
    }
  }

  public handleLinkClick = (src: string) => (ev: React.MouseEvent) => {
    if (!src) {
      ev.preventDefault();
    }
  };

  public render() {
    return (
      <FocusLock returnFocus disabled={!this.props.isUsingKeyboard}>
        <StyledMegaMenuSecondLevelLinksWrapper className="styled-second-level-links-wrapper">
          {this.props.firstLevelMenuItem.industries.map((industry: any, industryIndex: number) => {
            return industry.src ? (
              <MegaMenuSecondLevelLink
                key={industryIndex}
                onMouseOver={() => {
                  this.handleMouseEnter(industryIndex);
                }}
                onFocus={() => void 0}
                href={industry.src}
                className="fs-22 bold"
                ref={(ref: any) => (this.itemRefs[industryIndex] = ref)}
                onClick={this.handleLinkClick(industry.src)}
                onKeyDown={(ev: React.KeyboardEvent) =>
                  this.props.onSecondLevelKeyDown(industryIndex, ev)
                }
              >
                <MegaMenuSecondLevelLinkIconAndTextWrapper
                  show={this.props.selectedSecondLevel === industryIndex}
                  id={`${variables._ANIMATION}styled_megamenu_second_level_link`}
                >
                  <Icon name={industry.icon} iconSize={32} color="white" />
                  <MegaMenuTopLevelLinkText>{industry.name}</MegaMenuTopLevelLinkText>
                </MegaMenuSecondLevelLinkIconAndTextWrapper>

                <MegaMenuSectionArrowWrapper
                  show={this.props.selectedSecondLevel === industryIndex}
                >
                  <MegaMenuSectionArrow />
                </MegaMenuSectionArrowWrapper>
              </MegaMenuSecondLevelLink>
            ) : (
              <MegaMenuSecondLevelButton
                as="button"
                key={industryIndex}
                className="fs-22 bold"
                ref={(ref: any) => (this.itemRefs[industryIndex] = ref)}
                onMouseOver={() => {
                  this.handleMouseEnter(industryIndex);
                }}
                onFocus={() => void 0}
                onKeyDown={(ev: React.KeyboardEvent) =>
                  this.props.onSecondLevelKeyDown(industryIndex, ev)
                }
              >
                <MegaMenuSecondLevelLinkIconAndTextWrapper
                  show={this.props.selectedSecondLevel === industryIndex}
                  id={`${variables._ANIMATION}styled_megamenu_second_level_link`}
                >
                  <Icon name={industry.icon} iconSize={32} color="white" />
                  <MegaMenuTopLevelLinkText>{industry.name}</MegaMenuTopLevelLinkText>
                </MegaMenuSecondLevelLinkIconAndTextWrapper>

                <MegaMenuSectionArrowWrapper
                  show={this.props.selectedSecondLevel === industryIndex}
                >
                  <MegaMenuSectionArrow />
                </MegaMenuSectionArrowWrapper>
              </MegaMenuSecondLevelButton>
            );
          })}
        </StyledMegaMenuSecondLevelLinksWrapper>
      </FocusLock>
    );
  }
}

export default MegaMenuSecondLevelLinksWrapper;
