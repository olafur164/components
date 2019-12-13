import * as variables from 'variables';
import styled from 'styled-components';

interface ILanguageAnchor {
  allContentAvailable: boolean;
}

export const StyledLanguagePickerWrapper = styled.div`
  padding-right: 0;
  .inner-language-picker-row {
    background-color: ${variables.secondaryMegaMenu};
  }
`;

export const StyledMegaMenuLanguagePickerWrapper = styled.div`
  width: 100%;
  padding: 5rem 2rem;
  .lang-title {
    padding: 0 0 0 2rem;
  }
`;

export const StyledMegaMenuMainContentLanguagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
`;

export const StyledMegaMenuMainContentLanguage = styled.a<ILanguageAnchor>`
  width: 40%;
  cursor: pointer;
  line-height: 1.875rem;
  letter-spacing: -0.02rem;
  color: ${props => (props.allContentAvailable ? variables.white : 'rgba(255, 255, 255, 0.6)')};
  padding: 0 0 0 2rem;
  &.active,
  &:hover {
    background-color: ${variables.darkPurple};
  }
  &.active {
    svg {
      margin-left: -0.8rem;
      transform: translateX(-0.5rem);
    }
  }
`;

export const StyledMegaMenuMainContentLanguagesDisclaimer = styled.div`
  margin-top: 2.5rem;
  letter-spacing: -0.02rem;
  color: rgba(255, 255, 255, 0.6);
  width: 100%;
  padding: 0 0 0 2rem;
`;
