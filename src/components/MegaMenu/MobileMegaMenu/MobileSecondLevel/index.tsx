import * as React from 'react';
import * as variables from 'variables';
import Icon from 'components/Icon';
import {
  StyledMobileSecondLevelWrapper,
  StyledMobileSecondLevel,
  MobileSecondLevelLink,
  MobileSecondLevelLinkIconAndTextWrapper,
  MobileSecondLevelArrow,
  MegaMenuSectionArrowWrapper,
  MegaMenuSectionArrow,
} from './MobileSecondLevelStyles';

interface IMobileSecondLevelProps {
  firstLevelMenuItem: any;
  selectedSecondLevel: number;
  index: number;
  lastLevelContent?: any;
  handleClick: (index: number) => void;
  handleClosingSecondLevel?: any;
  checked?: boolean;
  changeComponentAnimatedState: (componentId: string, state: string) => void;
  renderArrow?: any;
}

const MobileSecondLevel: React.FC<IMobileSecondLevelProps> = ({
  firstLevelMenuItem,
  changeComponentAnimatedState,
  handleClosingSecondLevel,
  lastLevelContent,
  selectedSecondLevel,
  handleClick,
}) => {
  const componentId: string = 'mobile-megamenu-secondlevel';
  const hasLastLevelContent = lastLevelContent.length > 0;
  React.useEffect(() => {
    changeComponentAnimatedState(componentId, 'mounted');
  }, []);

  const hasSelectedSecondLevel = selectedSecondLevel > -1;

  return (
    <StyledMobileSecondLevelWrapper>
      <StyledMobileSecondLevel
        isAnyOpen={hasSelectedSecondLevel}
        className={`${hasSelectedSecondLevel && 'flex-row'}`}
        id={`${variables._ANIMATION}styled_mobilemenu_second_level`}
      >
        {firstLevelMenuItem.industries.map((industry: any, industryIndex: number) => (
          <MobileSecondLevelLink
            key={industryIndex}
            isAnyOpen={hasSelectedSecondLevel}
            aria-label={industry.name}
            aria-expanded={selectedSecondLevel === industryIndex}
            onClick={() => handleClick(industryIndex)}
          >
            <MobileSecondLevelLinkIconAndTextWrapper
              isAnyOpen={hasSelectedSecondLevel}
              show={selectedSecondLevel === industryIndex}
              hasLastLevelContent={hasLastLevelContent}
              id={`${variables._ANIMATION}styled_megamenu_second_level_link`}
              className="bold"
            >
              <MegaMenuSectionArrowWrapper
                show={selectedSecondLevel === industryIndex}
                docked={false}
              >
                <MegaMenuSectionArrow />
              </MegaMenuSectionArrowWrapper>

              <Icon name={industry.icon} color={variables.white} iconSize={32} />
              <span className={`lh-26 fs-22 ${hasLastLevelContent && 'sr-only'}`}>
                {industry.name}
              </span>
            </MobileSecondLevelLinkIconAndTextWrapper>

            {hasSelectedSecondLevel && selectedSecondLevel === industryIndex && (
              <MobileSecondLevelArrow
                className="mobile-second-level-chevron"
                onClick={() => handleClosingSecondLevel()}
                tabIndex={hasSelectedSecondLevel ? 0 : -1}
              >
                <Icon
                  name="chevron-down"
                  rotateDeg={selectedSecondLevel === industryIndex ? 180 : 0}
                  color="rgba(255, 255, 255, 0.4)"
                  iconSize={32}
                />
              </MobileSecondLevelArrow>
            )}
          </MobileSecondLevelLink>
        ))}
      </StyledMobileSecondLevel>
    </StyledMobileSecondLevelWrapper>
  );
};

export default MobileSecondLevel;
