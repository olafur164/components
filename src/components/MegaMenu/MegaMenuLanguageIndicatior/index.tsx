import * as React from 'react';
import styled from 'styled-components';
import * as variables from 'variables';
import Icon from 'components/Icon';
// ========================
// Components
// ========================

const StyledMegaMenuLanguageIndicator = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props: { color?: string }) =>
    props.color || variables.marelPrimaryBrandColor};
  position: relative;
  max-height: 4rem;
  margin: 0 -0.75rem;
  padding: 0 8rem;
  justify-content: flex-end;

  .megamenu-language-indicator-arrow {
    position: relative;
    right: -0.5rem;
    top: -2rem;
    z-index: 4;

    @media (max-width: ${variables.tabletMax}) {
      height: 46px;
      top: -1.5rem;
    }
  }

  @media (max-width: ${variables.tabletMax}) {
    padding: 0 2.265rem;
    max-height: 3.5rem;
  }
`;

const ExplinationText = styled.p`
  color: ${variables.white};
  margin-right: 0.3125rem;

  @media (max-width: ${variables.tabletMax}) {
    display: none;
  }
`;

const ActionText = styled(ExplinationText)`
  @media (max-width: ${variables.tabletMax}) {
    display: block;
  }
`;

// ========================
// Interfaces
// ========================
interface IMegaMenuLanguageIndicatorProps {
  translationLevel: 'partial' | 'none';
  explinationText: string;
  actionText: string;
  color?: string;
}

/**
 * The MegaMenuLanguageIndicator component.
 */
const MegaMenuLanguageIndicator: React.FC<IMegaMenuLanguageIndicatorProps> = ({
  color,
  explinationText,
  actionText,
}) => {
  return (
    <StyledMegaMenuLanguageIndicator color={color}>
      <ExplinationText className="fs-17">{explinationText} -</ExplinationText>
      <ActionText className="semibold">{actionText}</ActionText>
      <Icon
        name="switch-language"
        className="megamenu-language-indicator-arrow"
        iconSize={38}
        iconHeight={66}
        color="transparent"
      />
    </StyledMegaMenuLanguageIndicator>
  );
};

export default MegaMenuLanguageIndicator;
