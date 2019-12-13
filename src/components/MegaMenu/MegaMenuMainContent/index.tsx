import * as variables from 'variables';
import * as React from 'react';
import format from 'helpers/dateHelper';
import FocusLock from 'react-focus-lock';
import Icon from 'components/Icon';
import loadable from '@loadable/component';
import { isWithinRange } from 'date-fns';
import { gsap } from 'gsap';
import {
  MegaMenuMainContent,
  MegaMenuMainContentTitle,
} from 'components/MegaMenu/MegaMenuStyles';
import {
  StyledMegaMenuMainContentColumnWrapper,
  MegaMenuMainContentWrapper,
  HeadingRow,
  MegaMenuMainContentColumn,
  MegaMenuMainContentColumnOuterWrapper,
  MegaMenuSpecies,
  MegaMenuMainContentLinkIconAndTextWrapper,
} from './MegaMenuMainContentStyled';
const Clickable = loadable(() => import('components/Clickable'));
const EventCard = loadable(() =>
  import(/* webpackChunkName: "event-card" */ 'components/Card/EventCard')
);
const ArticleCard = loadable(() =>
  import(/* webpackChunkName: "article-card" */ 'components/Card/ArticleCard')
);
const DefaultCard = loadable(() =>
  import(/* webpackChunkName: "default-card" */ 'components/Card/DefaultCard')
);

// ========================
// Interfaces
// ========================
interface IMegaMenuMainContentComponentProps {
  closeMainContent: any;
  lastLevelContent: any;
  mobileMenuOpen: boolean;
  closeMenu: (onlyMainContent?: boolean) => void;
  isUsingKeyboard?: boolean;
  name?: string;
  src?: string;
}

/**
 * The MegaMenuSecondLevelLinksWrapper component.
 *
 * Issues - TODO:
 * We're using a ref to run the open animation in this component but we run the close animation in the parent component.
 * That animation uses another ref, since it's in another component. We should refactor this to use React's forwardRef and HOC.
 */

const MegaMenuMainContentComponent: React.FC<IMegaMenuMainContentComponentProps> = ({
  closeMainContent,
  lastLevelContent,
  mobileMenuOpen,
  closeMenu,
  isUsingKeyboard,
  name,
  src,
}) => {
  const thisRef = React.useRef(null);
  const mainContentTimeline = gsap.timeline();

  React.useEffect(() => {
    if (thisRef && thisRef.current) {
      const children = [...thisRef.current.querySelectorAll('.megamenu_main_content_column')];
      if (children && children.length > 0) {
        mainContentTimeline.fromTo(
          children,
          {
            opacity: 0,
            x: -16,
          },
          {
            ease: 'expo.out',
            clearProps: 'all',
            duration: 0.5,
            stagger: 0.1,
            opacity: 1,
            x: 0,
          }
        );
      }
    }
    return () => {
      mainContentTimeline.kill();
    };
  }, []);
  const lastLevelContentArr = [...lastLevelContent];
  const linksContent = lastLevelContentArr.filter(x => x.navType === 'links');
  const IconLinksContent = lastLevelContentArr.filter(x => x.navType === 'iconLinks');
  const productsContent = lastLevelContentArr.filter(x => x.navType === 'products');
  const highlightsContent = lastLevelContentArr.filter(x => x.navType === 'highlight');
  const validHighlights = highlightsContent
    .filter(x => {
      const start = format(x.startDate);
      const end = format(x.endDate);
      return isWithinRange(new Date(), start, end);
    })
    .sort(x => x.startDate);
  const highlights = validHighlights.length > 0 ? validHighlights : highlightsContent;
  return (
    <FocusLock returnFocus disabled={mobileMenuOpen || !isUsingKeyboard}>
      <MegaMenuMainContentWrapper
        id={`${variables._ANIMATION}styled_megamenu_main_content_wrapper`}
        ref={thisRef}
        className="megamenu-main-content"
        mobileMenuOpen={mobileMenuOpen}
      >
        <MegaMenuMainContent>
          {!mobileMenuOpen && (
            <HeadingRow className="row">
              <div className="offset-lg-2 order-lg-first" />
              {src && (
                <MegaMenuMainContentColumnOuterWrapper
                  className={`col-15 order-0 ${mobileMenuOpen &&
                    'mega-menu-main-content-line-mobile'}`}
                />
              )}
              {linksContent.map((x: any, i: number) => (
                <MegaMenuMainContentColumnOuterWrapper
                  key={`${i}l`}
                  className={`col-15 col-lg-2 order-2 order-lg-1 ${mobileMenuOpen &&
                    'mega-menu-main-content-line-mobile'}`}
                >
                  {x.url ? (
                    <a href={x.url}>
                      <MegaMenuMainContentTitle className="bold italic fs-16">
                        {x.title}
                      </MegaMenuMainContentTitle>
                    </a>
                  ) : (
                    <MegaMenuMainContentTitle className="bold italic fs-16">
                      {x.title}
                    </MegaMenuMainContentTitle>
                  )}
                </MegaMenuMainContentColumnOuterWrapper>
              ))}
              {productsContent.map((x: any, i: number) => (
                <MegaMenuMainContentColumnOuterWrapper
                  key={`${i}l`}
                  className={`col-15 col-lg-4 order-1 order-lg-2 ${mobileMenuOpen &&
                    'mega-menu-main-content-line-mobile'}`}
                >
                  <MegaMenuMainContentTitle className="bold italic fs-16">
                    {x.name}
                  </MegaMenuMainContentTitle>
                </MegaMenuMainContentColumnOuterWrapper>
              ))}
              {highlights.map(
                (x: any, i: number) =>
                  x.content[0] && (
                    <MegaMenuMainContentColumnOuterWrapper
                      key={`${i}l`}
                      className={`col-15 col-lg-4 order-last ${mobileMenuOpen &&
                        'mega-menu-main-content-line-mobile'}`}
                    >
                      <MegaMenuMainContentTitle className="bold italic fs-16">
                        {x.columnTitle}
                      </MegaMenuMainContentTitle>
                    </MegaMenuMainContentColumnOuterWrapper>
                  )
              )}
            </HeadingRow>
          )}
          <div className="row align-items-start">
            <div className="offset-lg-2 order-lg-first" />
            {src && (
              <MegaMenuMainContentColumnOuterWrapper
                className={`col-15 order-0 ${mobileMenuOpen &&
                  'mega-menu-main-content-line-mobile'}`}
              >
                <StyledMegaMenuMainContentColumnWrapper mobileMenuOpen={mobileMenuOpen}>
                  <Clickable
                    className="fs-19 align-items-center"
                    href={src}
                    pxBetweenIconAndText={16}
                    text={`VIEW ${name} PAGE`}
                    color={variables.white}
                  />
                </StyledMegaMenuMainContentColumnWrapper>
              </MegaMenuMainContentColumnOuterWrapper>
            )}
            {linksContent.map((x: any, i: number) => (
              <MegaMenuMainContentColumnOuterWrapper
                key={`${i}l`}
                className={`megamenu_main_content_column col-15 col-lg-2 order-2 order-lg-1 ${mobileMenuOpen &&
                  'mega-menu-main-content-line-mobile'}`}
                id={`${variables._ANIMATION}megamenu_main_content_column`}
              >
                {mobileMenuOpen && (
                  <>
                    {x.url ? (
                      <a href={x.url}>
                        <MegaMenuMainContentTitle className="bold italic fs-19">
                          {x.title}
                        </MegaMenuMainContentTitle>
                      </a>
                    ) : (
                      <MegaMenuMainContentTitle className="bold italic fs-19">
                        {x.title}
                      </MegaMenuMainContentTitle>
                    )}
                  </>
                )}
                <StyledMegaMenuMainContentColumnWrapper>
                  {x.content.map((c: any, ci: number) => {
                    const page = c.src.split('#')[0];
                    const currentHref = window.location.pathname.split('#')[0];
                    const opts = {};
                    if (page === currentHref) {
                      opts['data-no-swup'] = true;
                    }
                    return (
                      <MegaMenuMainContentColumn
                        key={`${ci}ll`}
                        className="semibold fs-14"
                        inline={false}
                      >
                        <a
                          {...opts}
                          href={c.src}
                          onClick={() => closeMenu(true)}
                          onKeyDown={(ev: React.KeyboardEvent) => closeMainContent(ev)}
                        >
                          {c.name}
                        </a>
                      </MegaMenuMainContentColumn>
                    );
                  })}
                </StyledMegaMenuMainContentColumnWrapper>
              </MegaMenuMainContentColumnOuterWrapper>
            ))}
            {productsContent.map((x: any, i: number) => (
              <MegaMenuMainContentColumnOuterWrapper
                key={`${i}l`}
                className={`megamenu_main_content_column col-15 col-lg-4 order-1 order-lg-2 ${mobileMenuOpen &&
                  'mega-menu-main-content-line-mobile'}`}
                id={`${variables._ANIMATION}megamenu_main_content_column`}
              >
                {mobileMenuOpen && (
                  <MegaMenuMainContentTitle className="bold italic fs-19">
                    {x.name}
                  </MegaMenuMainContentTitle>
                )}
                <StyledMegaMenuMainContentColumnWrapper className="flex flex-wrap">
                  {x.content &&
                    x.content.map((c: any, ci: number) => {
                      const page = c.src.split('#')[0];
                      const currentHref = window.location.pathname.split('#')[0];
                      const opts = {};
                      if (page === currentHref) {
                        opts['data-no-swup'] = true;
                      }
                      return (
                        <MegaMenuMainContentColumn
                          key={`${ci}ll`}
                          className="semibold fs-14"
                          inline={true}
                        >
                          <MegaMenuSpecies
                            {...opts}
                            href={c.src}
                            className="fs-22"
                            onClick={() => closeMenu(false)}
                            onKeyDown={(ev: React.KeyboardEvent) => closeMainContent(ev)}
                            mobileMenuOpen={mobileMenuOpen}
                          >
                            {c.icon && (
                              <Icon name={c.icon} iconSize={39} color="rgba(255, 255, 255, 0.4)" />
                            )}
                            <span>{c.name}</span>
                          </MegaMenuSpecies>
                        </MegaMenuMainContentColumn>
                      );
                    })}
                </StyledMegaMenuMainContentColumnWrapper>
              </MegaMenuMainContentColumnOuterWrapper>
            ))}
            {highlights.map(
              (x: any, i: number) =>
                x.content[0] && (
                  <MegaMenuMainContentColumnOuterWrapper
                    key={`${i}l`}
                    className={`megamenu_main_content_column col-15 col-lg-4 order-last ${mobileMenuOpen &&
                      'mega-menu-main-content-line-mobile'}`}
                    id={`${variables._ANIMATION}megamenu_main_content_column`}
                  >
                    {mobileMenuOpen && (
                      <MegaMenuMainContentTitle className="bold italic fs-19">
                        {x.columnTitle}
                      </MegaMenuMainContentTitle>
                    )}
                    <StyledMegaMenuMainContentColumnWrapper>
                      {x.content.map((card: any, ci: number) => (
                        <MegaMenuMainContentColumn key={`${ci}ll`} className="semibold fs-14">
                          {card && card.type === 'article' ? (
                            <ArticleCard
                              type="small-vertical"
                              imageSrc={card.image}
                              cardTitle={card.title}
                              urlToPage={card.src}
                              createdDate={card.createdDate}
                              backgroundColor={variables.fff10}
                              titleColor={variables.white}
                            />
                          ) : card && card.type === 'event' ? (
                            <EventCard
                              type="small-vertical"
                              imageSrc={card.image}
                              cardTitle={card.title}
                              urlToPage={card.src}
                              createdDate={card.createdDate}
                              backgroundColor={variables.fff10}
                              titleColor={variables.white}
                            />
                          ) : (
                            <DefaultCard
                              type="small-vertical"
                              imageSrc={card.image}
                              cardTitle={card.title}
                              urlToPage={card.src}
                              label={card.type}
                              hidePsuedoAnchor
                              backgroundColor={variables.fff10}
                              titleColor={variables.white}
                              onKeyDown={(ev: React.KeyboardEvent) => closeMainContent(ev)}
                            />
                          )}
                        </MegaMenuMainContentColumn>
                      ))}
                    </StyledMegaMenuMainContentColumnWrapper>
                  </MegaMenuMainContentColumnOuterWrapper>
                )
            )}
            {IconLinksContent.map((x: any, i: number) => (
              <MegaMenuMainContentColumnOuterWrapper
                key={`${i}l`}
                className={`megamenu_main_content_column col-lg-11 ${mobileMenuOpen &&
                  'mega-menu-main-content-other-line-mobile'}`}
                id={`${variables._ANIMATION}megamenu_main_content_column`}
              >
                {x.content.map((c: any, ci: number) => (
                  <MegaMenuMainContentLinkIconAndTextWrapper
                    key={`${ci}iL`}
                    className={`megamenu_main_content_icon_link bold fs-20`}
                    href={c.src}
                    onKeyDown={(ev: React.KeyboardEvent) => closeMainContent(ev)}
                  >
                    {c.icon && <Icon name={c.icon} iconSize={32} color={variables.white} />}
                    <span>{c.name}</span>
                  </MegaMenuMainContentLinkIconAndTextWrapper>
                ))}
              </MegaMenuMainContentColumnOuterWrapper>
            ))}
          </div>
        </MegaMenuMainContent>
      </MegaMenuMainContentWrapper>
    </FocusLock>
  );
};

export default MegaMenuMainContentComponent;
