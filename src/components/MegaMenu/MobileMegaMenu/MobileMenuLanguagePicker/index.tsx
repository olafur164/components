import * as React from 'react';
import * as variables from 'variables';
import { ILanguage } from 'interfaces';
import Icon from 'components/Icon';
import { Stores } from '@marelStore';
import {
  StyledMobileMenuLanguagePickerWrapper,
  StyledMobileMenuLanguagePickerInner,
  StyledMegaMenuMainContentLanguage,
  StyledMobileMenuLanguagesDisclaimer,
  MobileMenuLanguagePickerButton,
  MobileMenuLanguagePickerIconAndText,
} from './MobileMenuLanguagePickerStyles';

interface IMobileMenuLanguagePickerProps {
  languages: ILanguage[];
  languagePickerOpen: boolean;
  handleLanguagePickerState: any;
}

const MobileMenuLanguagePicker: React.FC<IMobileMenuLanguagePickerProps> = ({
  handleLanguagePickerState,
  languagePickerOpen,
  languages,
}) => {
  const { dictionary } = React.useContext(Stores);
  return (
    <StyledMobileMenuLanguagePickerWrapper languagePickerOpen={languagePickerOpen}>
      <MobileMenuLanguagePickerButton
        onClick={() => handleLanguagePickerState(!languagePickerOpen)}
      >
        <MobileMenuLanguagePickerIconAndText className="fs-16 lh-19 semibold">
          <Icon name="globe" iconSize={16} color={variables.white} />
          <span>{dictionary['Language'] || 'Languages'}</span>
        </MobileMenuLanguagePickerIconAndText>
        <Icon
          name="chevron"
          rotateDeg={languagePickerOpen ? 0 : 180}
          iconSize={16}
          color="rgba(255, 255, 255, 0.4)"
        />
      </MobileMenuLanguagePickerButton>
      {languagePickerOpen && (
        <StyledMobileMenuLanguagePickerInner>
          <div>
            {languages.map((language: ILanguage, index: number) => (
              <StyledMegaMenuMainContentLanguage
                data-no-swup
                href={language.url}
                key={index}
                className="fs-18 lh-22 bold"
                isCurrent={language.selected}
                allContentAvailable={language.notAllContentAvailable ? false : true}
              >
                {language.selected && (
                  <Icon name="arrow" iconSize={16} iconHeight={8} color={variables.white} />
                )}
                {language.name} {language.notAllContentAvailable && '*'}
              </StyledMegaMenuMainContentLanguage>
            ))}
          </div>
          <StyledMobileMenuLanguagesDisclaimer>
            *{dictionary['Not_All_Content_Available'] || 'Not all content available'}
          </StyledMobileMenuLanguagesDisclaimer>
        </StyledMobileMenuLanguagePickerInner>
      )}
    </StyledMobileMenuLanguagePickerWrapper>
  );
};

export default MobileMenuLanguagePicker;
