import * as React from "react";
import loadable from "@loadable/component";
import Hamburger from "components/Hamburger";
import Icon from "components/Icon";
import { getLanguageFromUrl } from "helpers/location.helper";
import {
  StyledMegaMenu,
  MegaMenuTopLevelLinksWrapper,
  MegaMenuTopLevelLink,
  MegaMenuTopLevelButton,
  MegaMenuTopLevelSpanWithIcon,
  MegaMenuMarelIcon,
  MegaMenuSectionArrow,
  MegaMenuSectionArrowWrapper
} from "./MegaMenuStyles";
import { IMegaMenuProps } from "./MegaMenuInterfaces";

const DetectOutsideClick = loadable(() =>
  import("components/DetectOutsideClick")
);
const MegaMenuLanguagePickerWrapper = loadable(() =>
  import("./MegaMenuLanguagePickerWrapper")
);
const MegaMenuMainContentComponent = loadable(() =>
  import("./MegaMenuMainContent")
);
const MegaMenuSecondLevelLinksWrapper = loadable(() =>
  import("./MegaMenuSecondLevelLinksWrapper")
);
const MobileMegaMenu = loadable(() => import("./MobileMegaMenu"));

const throttle = require("lodash.throttle");

interface IMegaMenuState {
  menuTree: any;
  selectedSecondLevel: number;
  selectedTopLevel: number;
  lastLevelContent: any[];
  checked: boolean;
  docked: boolean;
  languagePickerOpen: boolean;
  mobileMenuOpen: boolean;
  useMobileMenu: boolean;
  isUsingKeyboard: boolean;
  navWidth?: number;
}

/**
 * The MegaMenu component.
 */
class MegaMenu extends React.PureComponent<IMegaMenuProps, IMegaMenuState> {
  public arrowRefs: React.ReactNode[] = [];
  public arrowAnims: any[] = [];
  private componentId: string = "megamenu";

  private firstLevelRefs: HTMLAnchorElement[] = [];
  // private languageRef: HTMLAnchorElement;
  // private logoRef: HTMLAnchorElement;

  constructor(props: any) {
    super(props);

    this.state = {
      menuTree: props.menuTree,
      selectedSecondLevel: -1,
      selectedTopLevel: -1,
      lastLevelContent: [],
      checked: false,
      docked: window.pageYOffset > 0 ? true : false,
      languagePickerOpen: false,
      mobileMenuOpen: false,
      useMobileMenu: window.innerWidth < 1050,
      isUsingKeyboard: false
    };

    // Change animated state to mounted
    if (props.changeComponentAnimatedState) {
      props.changeComponentAnimatedState(this.componentId, "mounted");
    }
  }

  // Change appearance of the component if the scroll position is close to the top.
  public componentDidMount() {
    if (!this.props.docked) {
      window.addEventListener("scroll", this.windowScrollListener());
    }
    document.body.classList.remove("no-scroll");

    // const navWidth = this.calculateNavWidth();

    window.addEventListener("resize", this.windowResizeListener());
    window.addEventListener("keyup", this.onEscape);
  }

  public componentWillUnmount() {
    window.removeEventListener("scroll", this.windowScrollListener());
    window.removeEventListener("resize", this.windowResizeListener());
    window.removeEventListener("keyup", this.onEscape);
  }

  public windowScrollListener() {
    return throttle(() => {
      this.setState({
        docked: window.pageYOffset > 0
      });
    }, 200);
  }

  public windowResizeListener = () => {
    return throttle(() => {
      // const navWidth = this.calculateNavWidth();
      this.setState({
        useMobileMenu: window.innerWidth < 1050
      });
    }, 150);
  };

  // Calculate navWidth function not in use atm.
  // public calculateNavWidth() {
  //   const arr: any[] = [...this.firstLevelRefs, this.languageRef, this.logoRef];
  //   let totalWidth: number = 0;
  //   arr.map((ref: HTMLAnchorElement | HTMLButtonElement) => {
  //     try {
  //       const rect = ref.getBoundingClientRect();
  //       const style = window.getComputedStyle(ref);
  //       totalWidth +=
  //         rect.width + parseFloat(style.marginLeft || '0') + parseFloat(style.marginRight || '0');
  //     } catch (ignore) {
  //       /* tslint:disable */
  //       console.warn('couldnt calculate nav item width', ignore);
  //       /* tslint:enable */
  //     }
  //   });
  //   return totalWidth;
  // }

  // Close the menu when Escape is pressed.
  public onEscape = (ev: KeyboardEvent) => {
    if (!ev || !ev.key) {
      return;
    }

    if (
      ev.key === "Escape" &&
      (this.state.selectedSecondLevel > -1 ||
        this.state.selectedTopLevel > -1 ||
        this.state.mobileMenuOpen)
    ) {
      this.closeMenu();
    }
  };

  public handleLocaleChange = (locale: string, ev?: React.MouseEvent) => {
    if (ev) {
      ev.preventDefault();
    }
    if (this.props.onLocaleChange) {
      this.props.onLocaleChange(locale);
    }
  };

  // Close the megamenu if the user hovers anywhere outside it.
  public handleMegamenuClose = () => {
    if (this.state.isUsingKeyboard || window.innerWidth < 1049) {
      return;
    }
    this.closeMenu();
  };

  public closeMainContent = (ev: React.KeyboardEvent) => {
    if (ev.key === "ArrowUp") {
      this.closeMenu(this.state.selectedSecondLevel > -1);
    }
  };

  // Resets state to init state.
  public closeMenu = (onlyMainContent = false) => {
    if (onlyMainContent) {
      this.setState({
        lastLevelContent: []
      });
    } else {
      this.setState({
        checked: false,
        isUsingKeyboard: false,
        languagePickerOpen: false,
        mobileMenuOpen: false,
        selectedSecondLevel: -1,
        selectedTopLevel: -1
      });
    }
  };

  public toggleLanguagePicker = (toggledState: boolean) => {
    this.setState({
      languagePickerOpen: toggledState
    });
  };
  public handleLanguagePickerClose = () => {
    this.setState({
      languagePickerOpen: false
    });
  };

  public onKeyCloseLanguagePicker = (ev: React.KeyboardEvent) => {
    if (ev.key === "ArrowUp") {
      ev.preventDefault();
      this.handleLanguagePickerClose();
    }
  };

  public openFirstMenu(index: number, firstLevelMenuItem: any) {
    const mainContentIndex = Object.keys(firstLevelMenuItem).indexOf(
      "mainContent"
    );

    if (firstLevelMenuItem.industries) {
      this.setState({
        lastLevelContent: [],
        selectedTopLevel: index,
        selectedSecondLevel: -1,
        checked: true,
        languagePickerOpen: false
      });
    } else {
      this.setState({
        lastLevelContent:
          mainContentIndex > -1 ? this.state.menuTree[index].mainContent : [],
        selectedTopLevel: index,
        selectedSecondLevel: -1,
        checked: true,
        languagePickerOpen: false
      });
    }
  }

  // Handler for when hovering over a top level link.
  public handleTopLevelChange(index: number, firstLevelMenuItem: any) {
    this.openFirstMenu(index, firstLevelMenuItem);
  }

  public handleTopLevelKeyUp = (index: number, firstLevelMenuItem: any) => (
    ev: React.KeyboardEvent
  ) => {
    if (!ev || !ev.key || !ev.target) {
      return;
    }

    const target = ev.target as HTMLElement;

    if (target.tagName === "BUTTON") {
      const buttonOpenKeys = [" ", "Enter", "ArrowDown"];

      if (buttonOpenKeys.includes(ev.key)) {
        ev.preventDefault();
        this.setState({ isUsingKeyboard: true });
        this.openFirstMenu(index, firstLevelMenuItem);
      }
    } else if (target.tagName === "A") {
      const aOpenKeys = ["ArrowDown"];

      if (aOpenKeys.includes(ev.key)) {
        ev.preventDefault();
        this.setState({ isUsingKeyboard: true });
        this.openFirstMenu(index, firstLevelMenuItem);
      }
    }
  };

  public handleSecondLevelKeyDown = (
    industryIndex: number,
    ev: React.KeyboardEvent
  ) => {
    if (!ev || !ev.key || !ev.target) {
      return;
    }

    const buttonOpenKeys = [" ", "Enter", "ArrowDown"];
    const closeMenuKeys = ["ArrowUp"];

    if (buttonOpenKeys.includes(ev.key)) {
      ev.preventDefault();
      this.handleSecondLevelChange(industryIndex);
    } else if (closeMenuKeys.includes(ev.key)) {
      ev.preventDefault();
      this.closeMenu();
    }
  };

  // Handler for when hovering over a second level link.
  public handleSecondLevelChange = (index: number) => {
    const industryIndex = this.state.menuTree.findIndex((menuTreeItem: any) =>
      menuTreeItem.hasOwnProperty("industries")
    );

    this.setState({
      lastLevelContent: this.state.menuTree[industryIndex].industries[index]
        .mainContent,
      selectedSecondLevel: index
    });
  };

  public openLanguagePicker() {
    this.setState({
      languagePickerOpen: true,
      checked: false
    });
  }

  public handleLanguageKeyUp = (ev: React.KeyboardEvent) => {
    if (!ev || !ev.key) {
      return;
    }

    const buttonOpenKeys = [" ", "Enter", "ArrowDown"];
    const closeMenuKeys = ["ArrowUp"];

    if (buttonOpenKeys.includes(ev.key)) {
      ev.preventDefault();
      this.openLanguagePicker();
    } else if (closeMenuKeys.includes(ev.key)) {
      ev.preventDefault();
      this.closeMenu();
    }
  };

  public openMobileMenu = () => {
    this.setState({
      mobileMenuOpen: !this.state.mobileMenuOpen
    });
  };

  public hamburgerKeyUp = (ev: React.KeyboardEvent) => {
    if (ev.key === "ArrowDown") {
      this.setState({ mobileMenuOpen: true });
    } else if (ev.key === "ArrowUp") {
      this.setState({ mobileMenuOpen: false });
    }
  };

  public getTopLevelItems() {
    const topLevelLinks: any = [];

    this.props.menuTree.map((topLevelLink: any) => {
      topLevelLinks.push(topLevelLink);
    });

    return topLevelLinks;
  }

  public renderArrow(firstLevelMenuItem: any, index: number) {
    const show =
      this.state.selectedTopLevel === index &&
      this.state.checked &&
      ((firstLevelMenuItem.industries &&
        firstLevelMenuItem.industries.length > 0) ||
        (firstLevelMenuItem.mainContent &&
          firstLevelMenuItem.mainContent.length > 0));

    return (
      <MegaMenuSectionArrowWrapper
        show={show}
        ref={(el: any) => (this.arrowRefs[index] = el)}
      >
        <MegaMenuSectionArrow
          key={index + 2}
          topLevel={this.state.menuTree[index].hasOwnProperty("industries")}
        />
      </MegaMenuSectionArrowWrapper>
    );
  }

  public render() {
    const topLevelItems = this.getTopLevelItems();
    return (
      <StyledMegaMenu
        className={`${this.props.className ? this.props.className : ""} ${
          this.state.docked ? "scrolled" : ""
        }`}
        docked={this.state.docked}
        onMouseLeave={() => this.handleMegamenuClose()}
        useMobileMenu={this.state.useMobileMenu}
      >
        <div className="nav">
          <div className="mega-menu-logo-wrapper">
            <MegaMenuMarelIcon
              href={`/${getLanguageFromUrl()}`}
              // ref={(ref: HTMLAnchorElement) => this.logoRef = ref}
            >
              <span className="sr-only">Marel {this.props.industryLogo} </span>
              <Icon
                name={this.props.industryLogo || "logo"}
                iconSize={this.state.useMobileMenu ? 100 : 133}
                iconHeight={this.state.useMobileMenu ? 30 : 47}
              />
            </MegaMenuMarelIcon>
          </div>
          <nav className="mega-menu-toplevel-links-wrapper">
            <MegaMenuTopLevelLinksWrapper>
              {topLevelItems.map((firstLevelMenuItem: any, index: number) => {
                const haspopup =
                  (Array.isArray(firstLevelMenuItem.industries) &&
                    firstLevelMenuItem.industries.length > 0) ||
                  (Array.isArray(firstLevelMenuItem.mainContent) &&
                    firstLevelMenuItem.mainContent.length > 0);
                return firstLevelMenuItem.src ? (
                  <MegaMenuTopLevelLink
                    key={index}
                    href={firstLevelMenuItem.src}
                    onMouseEnter={() =>
                      this.handleTopLevelChange(index, firstLevelMenuItem)
                    }
                    className="fs-15 semibold"
                    useMobileMenu={this.state.useMobileMenu}
                    ref={(ref: HTMLAnchorElement) =>
                      (this.firstLevelRefs[index] = ref)
                    }
                    onKeyDown={this.handleTopLevelKeyUp(
                      index,
                      firstLevelMenuItem
                    )}
                    aria-expanded={
                      haspopup && this.state.selectedTopLevel === index
                    }
                    color={
                      firstLevelMenuItem.color
                        ? firstLevelMenuItem.color
                        : "transparent"
                    }
                  >
                    {firstLevelMenuItem.name}
                    {this.renderArrow(firstLevelMenuItem, index)}
                  </MegaMenuTopLevelLink>
                ) : (
                  <MegaMenuTopLevelButton
                    as="button"
                    key={index}
                    onMouseEnter={() =>
                      this.handleTopLevelChange(index, firstLevelMenuItem)
                    }
                    className="fs-15 semibold"
                    useMobileMenu={this.state.useMobileMenu}
                    ref={(ref: HTMLAnchorElement) =>
                      (this.firstLevelRefs[index] = ref)
                    }
                    onKeyDown={this.handleTopLevelKeyUp(
                      index,
                      firstLevelMenuItem
                    )}
                    aria-expanded={
                      haspopup && this.state.selectedTopLevel === index
                    }
                    color={
                      firstLevelMenuItem.color
                        ? firstLevelMenuItem.color
                        : "transparent"
                    }
                  >
                    {firstLevelMenuItem.name}
                    {this.renderArrow(firstLevelMenuItem, index)}
                  </MegaMenuTopLevelButton>
                );
              })}
            </MegaMenuTopLevelLinksWrapper>
          </nav>
          <div className="mega-menu-language-picker-wrapper">
            <MegaMenuTopLevelLinksWrapper
              useMobileMenu={this.state.useMobileMenu}
              className="mega-menu-actions"
              style={{ position: "relative" }}
            >
              <Hamburger
                handleClick={this.openMobileMenu}
                handleKeyUp={this.hamburgerKeyUp}
                open={this.state.mobileMenuOpen}
              />
              <MegaMenuTopLevelButton
                as="button"
                onMouseEnter={() => this.openLanguagePicker()}
                className="mega-menu-action-languages fs-15 semibold"
                useMobileMenu={this.state.useMobileMenu}
                // ref={(ref: HTMLAnchorElement) => this.languageRef = ref}
                onKeyDown={this.handleLanguageKeyUp}
                aria-expanded={this.state.languagePickerOpen}
                onClick={() => this.openLanguagePicker()}
                style={{ position: "unset", height: "auto" }}
              >
                <MegaMenuTopLevelSpanWithIcon>
                  <Icon name="globe" iconSize={16} />
                  {this.props.dictionary["Language"] || "Languages"}
                </MegaMenuTopLevelSpanWithIcon>
                {this.state.languagePickerOpen && (
                  <MegaMenuSectionArrowWrapper
                    show={this.state.languagePickerOpen}
                  >
                    <MegaMenuSectionArrow />
                  </MegaMenuSectionArrowWrapper>
                )}
              </MegaMenuTopLevelButton>
            </MegaMenuTopLevelLinksWrapper>
          </div>
        </div>

        <DetectOutsideClick
          className="detect-outside-click-secondlevel-wrapper"
          handleClose={this.closeMenu}
          disable={this.state.mobileMenuOpen || window.innerWidth < 1000}
        >
          {this.state.selectedTopLevel > -1 &&
            this.props.menuTree[this.state.selectedTopLevel].industries &&
            this.props.menuTree.map(
              (firstLevelMenuItem: any, index: number) =>
                firstLevelMenuItem.industries &&
                this.state.checked && (
                  <div className="row secondLevelLinksWrapperRow" key={index}>
                    <MegaMenuSecondLevelLinksWrapper
                      firstLevelMenuItem={firstLevelMenuItem}
                      selectedSecondLevel={this.state.selectedSecondLevel}
                      handleMouseEnter={this.handleSecondLevelChange}
                      index={index}
                      docked={this.state.docked}
                      changeComponentAnimatedState={
                        this.props.changeComponentAnimatedState
                      }
                      isUsingKeyboard={this.state.isUsingKeyboard}
                      onSecondLevelKeyDown={this.handleSecondLevelKeyDown}
                    />
                  </div>
                )
            )}

          {this.state.lastLevelContent &&
            this.state.lastLevelContent.length > 0 &&
            this.state.checked && (
              <MegaMenuMainContentComponent
                lastLevelContent={this.state.lastLevelContent}
                closeMainContent={this.closeMainContent}
                closeMenu={this.closeMenu}
                mobileMenuOpen={
                  this.state.useMobileMenu && this.state.mobileMenuOpen
                }
                isUsingKeyboard={this.state.isUsingKeyboard}
              />
            )}
          {this.state.languagePickerOpen && !this.state.useMobileMenu && (
            <MegaMenuLanguagePickerWrapper
              languages={this.props.languages}
              handleLocaleChange={this.handleLocaleChange}
              onMouseLeave={() => this.handleLanguagePickerClose()}
              onLinkKeyUp={this.onKeyCloseLanguagePicker}
              isUsingKeyboard={this.state.isUsingKeyboard}
            />
          )}
        </DetectOutsideClick>

        {this.state.useMobileMenu && this.state.mobileMenuOpen && (
          <MobileMegaMenu
            linksToPages={topLevelItems}
            changeComponentAnimatedState={
              this.props.changeComponentAnimatedState
            }
            languages={this.props.languages}
            closeMenu={this.closeMenu}
            toggleLanguagePicker={this.toggleLanguagePicker}
            languagePickerOpen={this.state.languagePickerOpen}
          />
        )}
      </StyledMegaMenu>
    );
  }
}

export default MegaMenu;
