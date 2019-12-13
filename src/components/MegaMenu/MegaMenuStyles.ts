import styled, { css, keyframes } from 'styled-components';
import * as variables from 'variables';

// ========================
// Keyframes
// ========================
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
const showMainContent = keyframes`
  0% {
    transform: translate3d(0, -100%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

// ========================
// Components
// ========================

export const StyledMegaMenu = styled.header`
  z-index: 999999;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  svg {
    fill: ${variables.marelPrimaryBrandColor};
    pointer-events: none;
  }
  .row {
    margin-left: 0px;
    margin-right: 0px;
  }

  &:hover,
  &.scrolled {
    .nav {
      &::after {
        height: 100%;
        box-shadow: ${variables.defaultShadow};
        transition: height 0.3s, box-shadow 0.5s;
      }
    }
  }

  .nav {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;

    z-index: 3;
    height: ${(props: { docked: boolean; useMobileMenu: boolean }) =>
      props.docked ? '6rem' : props.useMobileMenu ? '4.5rem' : '7rem'};
    transition: height 0.5s;

    @media (max-width: ${variables.tabletMax}) {
      height: 4.5rem;
    }

    &::after {
      content: '';
      height: 100%;
      box-shadow: none;
      width: 100%;
      background: white;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      transition: height 0.2s 0.2s, box-shadow 0.2s;
    }

    .mega-menu-logo-wrapper {
      padding-left: ${(props: any) => (props.useMobileMenu ? '' : '4vw')};
    }

    .mega-menu-toplevel-links-wrapper {
      flex-grow: 1;
      position: relative;
      height: ${(props: any) => (props.useMobileMenu ? '4.5rem' : '100%')};
      padding-top: ${(props: any) => (props.useMobileMenu ? '0' : '8px')};
      padding-left: 4vw;
    }

    .mega-menu-language-picker-wrapper {
      position: relative;
      height: 100%;
      padding-top: ${(props: any) => (props.useMobileMenu ? '0' : '8px')};
      padding-right: ${(props: any) => (props.useMobileMenu ? '' : '4vw')};
    }
  }
  .detect-outside-click-secondlevel-wrapper {
    z-index: -8;
    width: 100%;
    position: absolute;
  }
  .secondLevelLinksWrapperRow {
    position: relative;
    z-index: 2;
    background-color: ${variables.secondaryMegaMenu};
    padding-left: calc(8vw + 10rem);
  }

  .inner-language-picker-row,
  .secondLevelLinksWrapperRow {
    transform: translate3d(0, -100%, 0);
    animation: ${showMainContent} 0.6s ${variables.easeOutExpo} 1 forwards;
  }
`;

export const MegaMenuTopLevelLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  &.mega-menu-actions {
    justify-content: flex-end;
    padding-right: 1rem;

    .hamburger {
      ${(props: { useMobileMenu?: boolean }) => (props.useMobileMenu ? '' : 'display: none;')}
    }
  }
`;

export const MegaMenuTopLevelLink = styled.a`
  display: ${(props: { useMobileMenu: boolean }) => (props.useMobileMenu ? 'none' : 'inline-flex')};
  flex-direction: column;
  color: ${variables.marelPrimaryBrandColor};
  align-items: center;
  white-space: nowrap;
  /* position: relative;
  height: 100%; */
  justify-content: center;

  &:not(:last-child) {
    margin-right: 3rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 1.9rem;
    width: 1.875rem;
    height: 0.125rem;
    background-color: ${(props: { color?: string }) => (props.color ? props.color : 'transparent')};
    @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
      position: static;
    }
  }
`;

export const MegaMenuTopLevelButton = styled(MegaMenuTopLevelLink)`
  background-color: transparent;
  padding: 0;
  cursor: pointer;

  &.mega-menu-action-languages {
    ${(props: { useMobileMenu: boolean }) => (props.useMobileMenu ? 'display: none;' : '')}
  }
`;

export const MegaMenuTopLevelSpanWithIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  svg {
    margin-right: 0.5rem;
    fill: ${variables.white};
  }
`;

export const MegaMenuMainContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 3.125rem 0 4.5rem 0;
  background-color: ${variables.darkPurple};

  .row {
    /* transform: translate3d(0, -100%, 0);
    animation: ${showMainContent} 0.6s ${variables.easeOutExpo} 1 forwards; */
    padding: ${(props: any) => (props.useMobileMenu ? '3rem 1.5rem 4rem 1.5rem' : '0')};
  }
  .d-flex {
    display: flex;
  }
  .align-items-center {
    align-items: center;
  }
`;

export const MegaMenuLanguagePickerMainContent = styled(MegaMenuMainContent)`
  background-color: ${variables.secondaryMegaMenu};
  padding: 0;
`;
export const MegaMenuMainContentTitle = styled.div`
  color: rgba(255, 255, 255, 1);
  text-transform: uppercase;
  margin-bottom: 1.875rem;
  @media (max-width: ${variables.tabletMax}) {
    margin-top: 1.25rem;
    margin-bottom: 0.625rem;
  }
`;

export const MegaMenuMarelIcon = styled.a`
  display: flex;
  padding: 0 1rem;
`;

export const MegaMenuSectionArrow = styled.span`
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

export const MegaMenuSectionArrowWrapper = styled.div`
  height: 0px;
  display: flex;
  visibility: ${(props: { show: boolean }) => (props.show ? 'visible' : 'hidden')};
  flex-direction: column;
  position: absolute;
  bottom: 7px;
  /* left: calc(50% - 7px); */

  opacity: 0;
  transform: translate3d(0, 7px, 0);

  ${(props: { show: boolean }) =>
    props.show &&
    css`
      animation: ${appear} 0.4s ${variables.easeOutExpo} 1 forwards;
    `};
`;
