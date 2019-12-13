import styled from 'styled-components';
import * as variables from 'variables';

interface ILanguageAnchor {
  allContentAvailable: boolean;
  isCurrent: boolean;
}

export const StyledMobileMenuLanguagePickerWrapper = styled.div`
  background-color: ${variables.secondaryMegaMenu};
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  transition: height 0.7s ease;
  height: ${(props: { languagePickerOpen: boolean }) =>
    props.languagePickerOpen ? '100%' : '4.5rem'};
  z-index: 10;
`;

export const StyledMobileMenuLanguagePickerInner = styled.div`
  position: relative;
  margin-top: 4.5rem;
  padding-bottom: 2.5rem;
  overflow: auto;
  height: calc(100vh - 144px); /** 144px = height of header + language button **/
`;

export const StyledMegaMenuMainContentLanguage = styled.a<ILanguageAnchor>`
  display: flex;
  height: 3rem;
  align-items: center;
  background-color: ${props => props.isCurrent && variables.darkPurple};
  padding-left: 3rem;
  cursor: pointer;
  letter-spacing: -0.02em;
  color: ${props => (props.allContentAvailable ? variables.white : 'rgba(255, 255, 255, 0.6)')};

  > svg {
    position: absolute;
    left: 1rem;
  }
`;

export const StyledMobileMenuLanguagesDisclaimer = styled.div`
  margin-top: 1.5rem;
  margin-left: 3rem;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.6);
`;

export const MobileMenuLanguagePickerButton = styled.button`
  background-color: ${variables.darkPurple};
  height: 72px;

  padding: 0 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  width: 100%;
  z-index: 2;
`;

export const MobileMenuLanguagePickerIconAndText = styled.div`
  color: ${variables.white};
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.875rem;
  }
`;
