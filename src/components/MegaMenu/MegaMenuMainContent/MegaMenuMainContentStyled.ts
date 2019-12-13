import * as variables from 'variables';
import styled from 'styled-components';

export const StyledMegaMenuMainContentColumnWrapper = styled.div`
  color: ${variables.white};

  a {
    color: white;
  }

  ${(props: { mobileMenuOpen?: boolean }) => props.mobileMenuOpen && 'margin-bottom: 2.5rem;'};
`;

export const MegaMenuMainContentWrapper = styled.div`
  position: relative;

  ${(props: { mobileMenuOpen?: boolean }) =>
    props.mobileMenuOpen && 'margin-right: -2.91rem; margin-left: -2.91rem; z-index: 2; '};

  .col-lg-2,
  .col-lg-4 {
    ${(props: { mobileMenuOpen?: boolean }) =>
      props.mobileMenuOpen && 'max-width: 100%; flex: 100%'};
  }

  /* IE only styles */
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    .default-card-small-vertical-content-wrapper {
      width: 100%;
    }
  }
`;

export const HeadingRow = styled.div`
  padding-bottom: 0;
`;

export const MegaMenuMainContentColumn = styled.div`
  display: ${(props: { inline: boolean }) => (props.inline ? 'inline-block' : 'block')};
  width: ${(props: any) => (props.inline ? '50%' : '100%')};
  line-height: 1.375rem;

  :first-child {
    margin-bottom: ${(props: { inline: boolean }) => (props.inline ? '1.25rem' : '0.75rem')};
  }

  :nth-child(even) {
    margin-bottom: ${(props: { inline: boolean }) => (props.inline ? '1.25rem' : '0.75rem')};
  }

  :nth-child(odd):not(:first-child) {
    margin-top: ${(props: { inline: boolean }) => (props.inline ? '1.25rem' : '0')};
    margin-bottom: ${(props: { inline: boolean }) => (props.inline ? '0' : '0.75rem')};
  }
`;

export const MegaMenuMainContentColumnOuterWrapper = styled.div`
  &.mega-menu-main-content-line-mobile {
    padding-left: 24px;
    padding-right: 24px;
  }
  &.mega-menu-main-content-other-line-mobile {
    padding-left: 48px;
    padding-right: 48px;
  }
`;

export const MegaMenuSpecies = styled.a`
  display: inline-flex;
  align-items: center;
  color: ${variables.white};

  ${(props: { mobileMenuOpen?: boolean }) => props.mobileMenuOpen && 'align-items: flex-start;'};

  @media (max-width: 370px) {
    font-size: 1.125rem !important;
    line-height: 1.3rem;
  }
  @media (max-width: 340px) {
    font-size: 0.875rem !important;
  }

  svg {
    margin-right: 1rem;
    flex-shrink: 0;

    @media (max-width: ${variables.mobileMax}) {
      width: 1.875rem;
    }
  }
`;

export const MegaMenuMainContentLinkIconAndTextWrapper = styled.a`
  display: inline-flex;
  align-items: center;
  color: ${variables.white};
  margin-right: 4rem;
  margin-top: 0.5rem;

  svg {
    margin-right: 1.5rem;
  }

  ${(props: { mobileMenuOpen?: boolean }) =>
    props.mobileMenuOpen && 'display: flex; :not(:last-child) {margin-bottom: 2rem;}'};
`;
