import * as variables from 'variables';
import * as React from 'react';
import FocusLock from 'react-focus-lock';
import Icon from 'components/Icon';
import { ILanguage } from 'interfaces';
import {
  MegaMenuLanguagePickerMainContent,
  MegaMenuMainContentTitle,
} from 'components/MegaMenu/MegaMenuStyles';
import { Stores } from 'store';
import {
  StyledLanguagePickerWrapper,
  StyledMegaMenuLanguagePickerWrapper,
  StyledMegaMenuMainContentLanguagesWrapper,
  StyledMegaMenuMainContentLanguage,
  StyledMegaMenuMainContentLanguagesDisclaimer,
} from './MegaMenuLanguagePickerWrapperStyled';

// ========================
// Interfaces
// ========================
interface IMegaMenuLanguagePickerWrapperProps {
  handleLocaleChange: (langCode: string, ev?: React.MouseEvent) => void;
  languages: ILanguage[];
  onLinkKeyUp: (ev: React.KeyboardEvent) => void;
  isUsingKeyboard?: boolean;
  onMouseLeave?: any;
}

/**
 * The MegaMenuLanguagePickerWrapper component.
 */

const MegaMenuLanguagePickerWrapper: React.FC<IMegaMenuLanguagePickerWrapperProps> = ({
  handleLocaleChange,
  languages,
  isUsingKeyboard,
  onLinkKeyUp,
  onMouseLeave,
}) => {
  const { dictionary } = React.useContext(Stores);
  const params = new URLSearchParams(window.location.search);
  const paramString = params.toString().length > 0 ? `?${params.toString()}` : '';
  return (
    <div className="row">
      <StyledLanguagePickerWrapper className="col-lg-5 offset-lg-10 no-padding-right">
        <div className="row inner-language-picker-row">
          <div className="col-lg-15">
            <FocusLock returnFocus disabled={!isUsingKeyboard}>
              <StyledMegaMenuLanguagePickerWrapper onMouseLeave={onMouseLeave}>
                <MegaMenuLanguagePickerMainContent>
                  <MegaMenuMainContentTitle className="bold italic fs-19 lang-title">
                    {dictionary['Language'] || 'Languages'}
                  </MegaMenuMainContentTitle>

                  <FocusLock returnFocus disabled={!isUsingKeyboard}>
                    <StyledMegaMenuMainContentLanguagesWrapper>
                      {languages.map((language: ILanguage, index: number) => (
                        <StyledMegaMenuMainContentLanguage
                          data-no-swup
                          className={`fs-14 semibold ${language.selected && 'active'}`}
                          allContentAvailable={language.notAllContentAvailable ? false : true}
                          key={index}
                          href={`${language.url}${paramString}`}
                          onKeyDown={(ev: React.KeyboardEvent) => onLinkKeyUp(ev)}
                          onClick={(ev: React.MouseEvent) =>
                            handleLocaleChange(language.languageCode, ev)
                          }
                        >
                          {language.selected && (
                            <Icon
                              name="arrow"
                              iconSize={16}
                              iconHeight={8}
                              color={variables.white}
                            />
                          )}
                          {language.name} {language.notAllContentAvailable && '*'}
                        </StyledMegaMenuMainContentLanguage>
                      ))}
                      <StyledMegaMenuMainContentLanguagesDisclaimer>
                        *{dictionary['Not_All_Content_Available'] || 'Not all content available'}
                      </StyledMegaMenuMainContentLanguagesDisclaimer>
                    </StyledMegaMenuMainContentLanguagesWrapper>
                  </FocusLock>
                </MegaMenuLanguagePickerMainContent>
              </StyledMegaMenuLanguagePickerWrapper>
            </FocusLock>
          </div>
        </div>
      </StyledLanguagePickerWrapper>
    </div>
  );
};

export default MegaMenuLanguagePickerWrapper;
