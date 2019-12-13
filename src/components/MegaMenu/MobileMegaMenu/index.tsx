import * as React from 'react';
import FocusLock from 'react-focus-lock';
import styled from 'styled-components';
import { ILanguage } from 'interfaces';
import * as variables from 'variables';
import Icon from 'components/Icon';
import { IIndustry } from '../MegaMenuInterfaces';
import animations from '../animations';
import MobileMenuMainContentComponent from '../MegaMenuMainContent';
import MobileMenuLanguagePicker from './MobileMenuLanguagePicker';
import MobileSecondLevel from './MobileSecondLevel';

// ========================
// Components
// ========================

const StyledMobileMenuWrapper = styled.div`
  position: fixed;
  top: 4.5rem;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 99999;
  background-color: #364052;
  transition: top 0.3s;
  max-height: calc(100% - 72px);
`;

const StyledMobileMenu = styled.div`
  height: 100%;
  width: 100%;
  padding: 80px 48px 24px 48px;
  transition: opacity, visibility 0.7s;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  height: calc(100vh - 144px); /** 144px = height of header + language button **/

  @media (max-width: ${variables.mobileMedium}) {
    padding: 48px 48px 24px;
  }
`;

export const MobileMegaMenuTopLevelLinksWrapper = styled.ul`
  display: flex;

  flex-direction: column;
  list-style: none;
  &.mega-menu-actions {
    .hamburger {
      @media (min-width: ${variables.tabletMax}) {
        display: none;
      }
    }
  }
`;

const MobileMegaMenuTopLevelItemWrapper = styled.li`
  transition: margin-bottom 0.3s, padding-bottom 0.3s;
  &:not(:last-child) {
    margin-bottom: ${(props: { isOpen: boolean }) => (props.isOpen ? '64px' : '24px')};
  }
  :last-child {
    margin-bottom: ${(props: any) => (props.isLink ? '96px' : '72px')};
  }
  color: ${variables.white};
  font-size: 32px;
  letter-spacing: -0.02em;
  opacity: ${(props: { isOpen: boolean; isAnyOpen: boolean }) =>
    props.isAnyOpen ? (props.isOpen ? 1 : 0.3) : 1};
  &:hover {
    opacity: 1;
  }
  .mobile-menu-top-level {
    position: relative;
    padding-bottom: ${(props: { isOpen: boolean }) => (props.isOpen ? '24px' : 0)};
  }
`;

export const MobileMegaMenuTopLevelButton = styled.button`
  color: ${variables.white};
  font-size: 32px;
  letter-spacing: -0.02em;
  background-color: transparent;
  width: 100%;
  text-align: left;
  padding: 0;
`;

const MobileMegaMenuTopLevelAnchor = MobileMegaMenuTopLevelButton.withComponent('a');

const MobileTopLevelDivWithIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > svg {
    fill: ${variables.white};
  }
`;

export const MegaMenuSectionArrow = styled.span`
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-top: 12px solid
    ${(props: { topLevel: boolean }) =>
      props.topLevel ? variables.secondaryMegaMenu : variables.darkPurple};
  transform: rotate(180deg);
  align-self: center;
`;

export const MegaMenuSectionArrowWrapper = styled.div`
  height: 0px;
  display: flex;
  flex-direction: column;
  visibility: ${(props: { show: boolean }) => (props.show ? 'visible' : 'hidden')};
  position: absolute;
  bottom: 7px;
`;

// ========================
// Interfaces
// ========================
interface IMobileMenuProps {
  linksToPages: IMobileMenuLink[];
  languages: ILanguage[];
  closeMenu: (onlyMainContent?: boolean) => void;
  changeComponentAnimatedState: (componentId: string, state: string) => void;
  languagePickerOpen: boolean;
  toggleLanguagePicker: (toggledState: boolean) => void;
  onLocaleChange?: (locale: string) => void;
}

export interface IMobileMenuLink {
  name: string;
  src?: string;
  color?: string;
  industries?: IIndustry[];
  mainContent?: any;
}
/**
 * The mobile megamenu component.
 */

const MobileMegaMenu: React.FC<IMobileMenuProps> = ({
  linksToPages,
  toggleLanguagePicker,
  languagePickerOpen,
  changeComponentAnimatedState,
  languages,
  closeMenu,
}) => {
  const [menuTree, setMenuTree] = React.useState<any>(linksToPages);
  const [selectedTopLevel, setTopLevel] = React.useState(-1);
  const [selectedSecondLevel, setSecondLevel] = React.useState(-1);
  const [lastLevelContent, setLastLevelContent] = React.useState<any>([]);
  const thisRef = React.useRef(null);
  const componentId: string = 'mobilemenu';
  const topLevelItems = linksToPages;
  const hasSelectedTopLevel = selectedTopLevel > -1;
  const industryIndex = menuTree.findIndex((menuTreeItem: any) =>
    menuTreeItem.hasOwnProperty('industries')
  );
  const selectedTopLevelEqualsIndustryIndex = selectedTopLevel === industryIndex;
  React.useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  const handleTopLevelChange = (index: number, firstLevelMenuItem: any) => {
    const mainContentIndex = Object.keys(firstLevelMenuItem).indexOf('mainContent');

    setSecondLevel(-1);
    toggleLanguagePicker(false);
    if (selectedTopLevel === index) {
      setLastLevelContent([]);
      setTopLevel(-1);
      if (lastLevelContent && lastLevelContent.length > 0 && thisRef) {
        animations.closeMobileLastLevelContent(
          thisRef,
          `${variables._ANIMATION}styled_mobilemenu_second_level`,
          () => {
            changeComponentAnimatedState(componentId, 'animated');
          }
        );
      }
    } else {
      const newLastLevelContent = firstLevelMenuItem.industries
        ? selectedSecondLevel > -1 && firstLevelMenuItem.industries[selectedSecondLevel].mainContent
        : mainContentIndex > -1
        ? menuTree[index].mainContent
        : [];
      setLastLevelContent(newLastLevelContent);
      setTopLevel(index);
      if (mainContentIndex > -1) {
        animations.openMobileLastLevelContent(
          thisRef,
          `${variables._ANIMATION}styled_mobilemenu_second_level`,
          () => {
            changeComponentAnimatedState(componentId, 'animated');
          }
        );
      } else {
        animations.closeMobileLastLevelContent(
          thisRef,
          `${variables._ANIMATION}styled_mobilemenu_second_level`,
          () => {
            changeComponentAnimatedState(componentId, 'animated');
          }
        );
      }
    }
  };

  const handleSecondLevelChange = (index: number) => {
    if (selectedSecondLevel !== index) {
      setLastLevelContent(menuTree[industryIndex].industries[index].mainContent);
      setSecondLevel(index);
      animations.openMobileLastLevelContent(
        thisRef,
        `${variables._ANIMATION}styled_megamenu_main_content_wrapper`,
        () => {
          changeComponentAnimatedState(componentId, 'animated');
        }
      );
    }
  };
  const handleClosingSecondLevel = () => {
    setLastLevelContent([]);
    setSecondLevel(-1);
    animations.closeMobileLastLevelContent(
      thisRef,
      `${variables._ANIMATION}styled_mobilemenu_second_level`,
      () => {
        changeComponentAnimatedState(componentId, 'animated');
      }
    );
  };
  const renderArrow = (firstLevelMenuItem: any, index: number) => {
    return (
      selectedTopLevel > -1 &&
      ((firstLevelMenuItem.industries && firstLevelMenuItem.industries.length > 0) ||
        (firstLevelMenuItem.mainContent && firstLevelMenuItem.mainContent.length > 0)) && (
        <MegaMenuSectionArrowWrapper show={selectedTopLevel === index}>
          <MegaMenuSectionArrow
            key={index + 2}
            topLevel={menuTree[index].hasOwnProperty('industries')}
          />
        </MegaMenuSectionArrowWrapper>
      )
    );
  };

  const getCurrentName = (): string => {
    return selectedTopLevelEqualsIndustryIndex
      ? menuTree[industryIndex].industries[selectedSecondLevel].name
      : menuTree[selectedTopLevel].name;
  };
  const getCurrentSrc = (): string => {
    return selectedTopLevelEqualsIndustryIndex
      ? menuTree[industryIndex].industries[selectedSecondLevel].src
      : menuTree[selectedTopLevel].src;
  };

  return (
    <StyledMobileMenuWrapper>
      <FocusLock returnFocus>
        <StyledMobileMenu ref={thisRef}>
          <MobileMegaMenuTopLevelLinksWrapper>
            {topLevelItems.map((link: any, index: number) =>
              link.industries || (link.mainContent && link.mainContent.length > 0) ? (
                <MobileMegaMenuTopLevelItemWrapper
                  key={index}
                  className="fs-32 lh-38 bold"
                  isIndustry={Array.isArray(link.industries) && link.industries.length > 0}
                  isAnyOpen={hasSelectedTopLevel}
                  isOpen={selectedTopLevel === index}
                  color={link.color}
                >
                  <TopLevelItemPicker
                    href={`#${link.name}`}
                    aria-expanded={selectedTopLevel === index}
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault();
                      handleTopLevelChange(index, link);
                    }}
                    isLink={false}
                  >
                    <MobileTopLevelDivWithIcon className="mobile-menu-top-level">
                      <span className="bold">{link.name}</span>
                      <Icon
                        name="chevron-down"
                        rotateDeg={selectedTopLevel === index ? 180 : 0}
                        iconSize={32}
                        color="rgba(255, 255, 255, 0.4)"
                      />
                      {renderArrow(link, index)}
                    </MobileTopLevelDivWithIcon>
                  </TopLevelItemPicker>
                  {hasSelectedTopLevel &&
                    selectedTopLevel === index &&
                    topLevelItems[selectedTopLevel].industries &&
                    topLevelItems.map(
                      (firstLevelMenuItem: any, i: number) =>
                        firstLevelMenuItem.industries &&
                        hasSelectedTopLevel && (
                          <MobileSecondLevel
                            key={i}
                            firstLevelMenuItem={firstLevelMenuItem}
                            selectedSecondLevel={selectedSecondLevel}
                            lastLevelContent={lastLevelContent}
                            checked={hasSelectedTopLevel}
                            handleClick={handleSecondLevelChange}
                            handleClosingSecondLevel={handleClosingSecondLevel}
                            index={i}
                            changeComponentAnimatedState={changeComponentAnimatedState}
                            renderArrow={renderArrow}
                          />
                        )
                    )}
                  {selectedTopLevel === index &&
                    lastLevelContent &&
                    lastLevelContent.length > 0 &&
                    hasSelectedTopLevel && (
                      <MobileMenuMainContentComponent
                        name={getCurrentName()}
                        src={getCurrentSrc()}
                        lastLevelContent={lastLevelContent}
                        closeMainContent={() => {
                          /*TypeScript*/
                        }}
                        closeMenu={closeMenu}
                        mobileMenuOpen={true}
                      />
                    )}
                </MobileMegaMenuTopLevelItemWrapper>
              ) : (
                <MobileMegaMenuTopLevelItemWrapper
                  key={index}
                  isLink={true}
                  isAnyOpen={hasSelectedTopLevel}
                >
                  <TopLevelItemPicker
                    className="fs-32 lh-38 bold"
                    color={link.color}
                    href={link.src}
                    isLink={!!link.src}
                  >
                    {link.name}
                  </TopLevelItemPicker>
                </MobileMegaMenuTopLevelItemWrapper>
              )
            )}
          </MobileMegaMenuTopLevelLinksWrapper>
        </StyledMobileMenu>
        <MobileMenuLanguagePicker
          languagePickerOpen={languagePickerOpen}
          handleLanguagePickerState={toggleLanguagePicker}
          languages={languages}
        />
      </FocusLock>
    </StyledMobileMenuWrapper>
  );
};

// class MobileMegaMenu extends React.Component<IMobileMenuProps, IState> {
//   private i18n: I18nHelper;
//   private thisRef: any;
//   private componentId: string = 'mobilemenu';

//   constructor(props: IMobileMenuProps) {
//     super(props);
//     this.i18n = new I18nHelper(this.props.translations);
//     this.handleSecondLevelChange = this.handleSecondLevelChange.bind(this);
//     this.state = {
//       menuTree: this.props.linksToPages,
//       selectedSecondLevel: -1,
//       selectedTopLevel: -1,
//       lastLevelContent: [],
//       checked: false,
//       docked: false,
//       languagePickerOpen: false,
//     };
//   }
//   public componentDidMount() {
//     document.body.classList.add('no-scroll');
//   }
//   public componentWillUnmount() {
//     document.body.classList.remove('no-scroll');
//   }

//   public handleLocaleChange = (locale: string, ev: MouseEvent) => {
//     ev.preventDefault();

//     if (this.props.onLocaleChange) {
//       this.props.onLocaleChange(locale);
//     }
//   };

//   // Handler for when opening a top level page.
//   public handleTopLevelChange = (index: number, firstLevelMenuItem: any) => {
//     const { selectedTopLevel, lastLevelContent } = this.state;

//     const mainContentIndex = Object.keys(firstLevelMenuItem).indexOf('mainContent');

//     if (selectedTopLevel === index) {
//       this.setState({
//         lastLevelContent: [],
//         selectedTopLevel: -1,
//         selectedSecondLevel: -1,
//         checked: false,
//         languagePickerOpen: false,
//       });
//       if (lastLevelContent && lastLevelContent.length > 0) {
//         animations.closeMobileLastLevelContent(
//           ReactDOM.findDOMNode(this.thisRef),
//           `${variables._ANIMATION}styled_mobilemenu_second_level`,
//           () => {
//             this.props.changeComponentAnimatedState(this.componentId, 'animated');
//           }
//         );
//       }
//     } else {
//       this.setState({
//         lastLevelContent: firstLevelMenuItem.industries
//           ? this.state.selectedSecondLevel > -1 &&
//             firstLevelMenuItem.industries[this.state.selectedSecondLevel].mainContent
//           : mainContentIndex > -1
//             ? this.state.menuTree[index].mainContent
//             : [],
//         selectedTopLevel: index,
//         selectedSecondLevel: -1,
//         checked: true,
//         languagePickerOpen: false,
//       });
//       if (mainContentIndex > -1) {
//         animations.openMobileLastLevelContent(
//           ReactDOM.findDOMNode(this.thisRef),
//           `${variables._ANIMATION}styled_mobilemenu_second_level`,
//           () => {
//             this.props.changeComponentAnimatedState(this.componentId, 'animated');
//           }
//         );
//       } else {
//         animations.closeMobileLastLevelContent(
//           ReactDOM.findDOMNode(this.thisRef),
//           `${variables._ANIMATION}styled_mobilemenu_second_level`,
//           () => {
//             this.props.changeComponentAnimatedState(this.componentId, 'animated');
//           }
//         );
//       }
//     }
//   };

//   // Handler for when opening second level link.
//   public handleSecondLevelChange(index: number) {
//     const { menuTree, selectedSecondLevel } = this.state;

//     const industryIndex = this.state.menuTree.findIndex((menuTreeItem: any) =>
//       menuTreeItem.hasOwnProperty('industries')
//     );
//     if (selectedSecondLevel !== index) {
//       this.setState({
//         lastLevelContent: menuTree[industryIndex].industries[index].mainContent,
//         selectedSecondLevel: index,
//       });
//       animations.openMobileLastLevelContent(
//         ReactDOM.findDOMNode(this.thisRef),
//         `${variables._ANIMATION}styled_megamenu_main_content_wrapper`,
//         () => {
//           this.props.changeComponentAnimatedState(this.componentId, 'animated');
//         }
//       );
//     }
//   }

//   public handleClosingSecondLevel = () => {
//     this.setState({
//       lastLevelContent: [],
//       selectedSecondLevel: -1,
//     });
//     animations.closeMobileLastLevelContent(
//       ReactDOM.findDOMNode(this.thisRef),
//       `${variables._ANIMATION}styled_mobilemenu_second_level`,
//       () => {
//         if (this.props.changeComponentAnimatedState) {
//           this.props.changeComponentAnimatedState(this.componentId, 'animated');
//         }
//       }
//     );
//   };

//   public getCurrentName = () => {
//     const { menuTree, selectedSecondLevel, selectedTopLevel } = this.state;

//     const industryIndex = this.state.menuTree.findIndex((menuTreeItem: any) =>
//       menuTreeItem.hasOwnProperty('industries')
//     );

//     if (selectedTopLevel === industryIndex) {
//       return menuTree[industryIndex].industries[selectedSecondLevel].name;
//     }
//     return this.state.menuTree[selectedTopLevel].name;
//   };

//   public getCurrentSrc = () => {
//     const { menuTree, selectedSecondLevel, selectedTopLevel } = this.state;

//     const industryIndex = this.state.menuTree.findIndex((menuTreeItem: any) =>
//       menuTreeItem.hasOwnProperty('industries')
//     );

//     if (selectedTopLevel === industryIndex) {
//       return menuTree[industryIndex].industries[selectedSecondLevel].src;
//     }
//     return this.state.menuTree[selectedTopLevel].src;
//   };

//   public getTopLevelItems() {
//     const topLevelLinks: any = [];

//     this.props.linksToPages.map((topLevelLink: any) => {
//       topLevelLinks.push(topLevelLink);
//     });

//     return topLevelLinks;
//   }

//   public renderArrow = (firstLevelMenuItem: any, index: number) => {
//     return (
//       selectedTopLevel > -1 &&
//       ((firstLevelMenuItem.industries && firstLevelMenuItem.industries.length > 0) ||
//         (firstLevelMenuItem.mainContent && firstLevelMenuItem.mainContent.length > 0)) && (
//         <MegaMenuSectionArrowWrapper show={selectedTopLevel === index}>
//           <MegaMenuSectionArrow
//             key={index + 2}
//             topLevel={menuTree[index].hasOwnProperty('industries')}
//           />
//         </MegaMenuSectionArrowWrapper>
//       )
//     );
//   };
//   public handleLanguagePickerState = () => {
//     this.setState(prevState => ({
//       languagePickerOpen: !prevState.languagePickerOpen,
//     }));
//   };

//   public render() {
//     const topLevelItems = this.props.linksToPages;
//   }
// }
export default MobileMegaMenu;

const TopLevelItemPicker: React.SFC<any> = ({ isLink, children, href, ...rest }) => {
  return isLink ? (
    <MobileMegaMenuTopLevelAnchor href={href} {...rest}>
      {children}
    </MobileMegaMenuTopLevelAnchor>
  ) : (
    <MobileMegaMenuTopLevelButton {...rest}>{children}</MobileMegaMenuTopLevelButton>
  );
};
