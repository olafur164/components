import { gsap } from 'gsap';
export const secondLevelTimeline = gsap.timeline();
export const mainContentTimeline = gsap.timeline();
export const mobileTopLevelTimeline = gsap.timeline();
export const languageTimeline = gsap.timeline();

const timelinePromise = (timeline: any, callbackFn: () => void) => {
  return new Promise(resolve => {
    timeline.eventCallback('onComplete', () => {
      callbackFn();
      resolve(true);
    });
  });
};

export default {
  openSecondLevel(secondLevel: any, childrenRefs: any, callbackFn: () => void = () => undefined) {
    try {
      secondLevelTimeline.fromTo(
        childrenRefs,
        0.2,
        {
          ease: 'expo.out',
          delay: 0.2,
          stagger: 0.1,
          css: {
            opacity: 0,
            x: '-16px',
          },
        },
        {
          ease: 'expo.out',
          delay: 0.2,
          stagger: 0.1,
          css: {
            opacity: 1,
            x: 0,
          },
        }
      );
    } catch (exception) {
      // tslint:disable-next-line
      console.warn('Failed to tween secondLevel');
    }
    return timelinePromise(secondLevelTimeline, callbackFn);
  },
  openMobileLastLevelContent(
    secondLevel: any,
    secondLevelItem: string,
    callbackFn: () => void = () => undefined
  ) {
    mobileTopLevelTimeline.to(secondLevel, 0.3, { css: { padding: '1.25rem 3rem 0rem 3rem' } });

    return timelinePromise(mobileTopLevelTimeline, callbackFn);
  },
  closeMobileLastLevelContent(
    secondLevel: any,
    secondLevelItem: string,
    callbackFn: () => void = () => undefined
  ) {
    mobileTopLevelTimeline.to(secondLevel, 0.3, { css: { padding: '5rem 3rem 0rem 3rem' } });
    mobileTopLevelTimeline.to(`#${secondLevelItem}`, 0.2, {
      css: {
        flexDirection: 'column',
      },
    });

    return timelinePromise(mobileTopLevelTimeline, callbackFn);
  },

  openMainContent(target: any, mainContentChildren: any, callbackFn: () => void = () => undefined) {
    const children = mainContentChildren.filter((child: any) => child != null);
    try {
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
          opacity: 1,
          x: 0,
        }
      );
    } catch (exception) {
      // tslint:disable-next-line
      console.warn('Failed to tween main content');
    }

    return timelinePromise(mainContentTimeline, callbackFn);
  },

  openLanguagePicker(target: any, callbackFn: () => void = () => undefined) {
    languageTimeline.to(target, 0.3, { css: { opacity: 1 } });

    return timelinePromise(languageTimeline, callbackFn);
  },

  killAll() {
    secondLevelTimeline.kill();
    mainContentTimeline.kill();
    languageTimeline.kill();
  },

  restartAll() {
    secondLevelTimeline.restart();
  },
};
