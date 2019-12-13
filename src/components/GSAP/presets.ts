import * as variables from 'variables';

export type PresetTypes =
  | 'title'
  | 'body'
  | 'titleLeft'
  | 'bodyLeft'
  | 'cta'
  | 'colorCardSlice'
  | 'colorCardTitleLeft'
  | 'colorCardBodyLeft'
  | 'cardsliceLeft'
  | 'cardsliceRight'
  | 'fadeIn'
  | 'fadeInOverlay'
  | 'fadeInOverlayWhite'
  | 'popIn'
  | 'searchBar'
  | 'overlay'
  | 'imgLeft'
  | 'minifiedSearch'
  | 'empty'
  | 'numberOfSearchResults';

export interface IInOut {
  duration?: number;
  opacity?: number;
  delay?: number;
  x?: number | string;
  y?: number | string;
  z?: number | string;
  transformOrigin?: string;
  force3D?: boolean;
  scale?: any;
  ease?: any;
}

const overlayBase: object = {
  zIndex: '0',
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  backgroundColor: variables.black90,
};

const overlayBaseWhite: object = {
  zIndex: '0',
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  backgroundColor: variables.fff60,
};

const absoluteBase: object = {
  position: 'absolute',
  width: '100%',
  height: '100%',
};

const relativeBase: object = {
  position: 'relative',
  width: '100%',
  height: '100%',
};

const fixedBase: object = {
  position: 'fixed',
  bottom: '3.5rem',
  right: '7rem',
};

const presets: object = {
  minifiedSearch: {
    in: {
      opacity: 1,
      duration: 1,
      y: '0rem',
      z: 100,
    },
    out: {
      opacity: 0,
      duration: 0.5,
      y: '64px',
      z: 100,
    },
    style: fixedBase,
  },
  numberOfSearchResults: {
    in: {
      duration: 1,
      opacity: 1,
      delay: 0.2,
      y: '0rem',
    },
    out: {
      duration: 0.8,
      opacity: 0,
      y: '32px',
    },
  },
  title: {
    in: {
      duration: 1,
      opacity: 1,
      delay: 0.2,
      y: '0rem',
    },
    out: {
      duration: 0.8,
      opacity: 0,
      y: '64px',
    },
  },
  body: {
    in: {
      duration: 1,
      opacity: 1,
      delay: 0.3,
      y: '0rem',
    },
    out: {
      duration: 0.8,
      opacity: 0,
      y: '64px',
    },
  },
  titleLeft: {
    in: {
      duration: 1.5,
      opacity: 1,
      delay: 0.4,
      x: '0rem',
    },
    out: {
      duration: 0.8,
      opacity: 0,
      x: '-64px',
    },
  },
  bodyLeft: {
    in: {
      duration: 1.5,
      opacity: 1,
      delay: 0.8,
      x: '0rem',
    },
    out: {
      duration: 0.8,
      opacity: 0,
      x: '-64px',
    },
  },
  colorCardTitleLeft: {
    in: {
      duration: 1.5,
      opacity: 1,
      delay: 1.2,
      x: '0rem',
    },
    out: {
      duration: 0.8,
      opacity: 0,
      x: '-64px',
    },
  },
  colorCardBodyLeft: {
    in: {
      duration: 1.5,
      opacity: 1,
      delay: 1.5,
      x: '0rem',
    },
    out: {
      duration: 0.8,
      opacity: 0,
      x: '-64px',
    },
  },
  cta: {
    in: {
      duration: 1,
      opacity: 1,
      delay: 0.4,
      y: '0rem',
    },
    out: {
      duration: 0.8,
      opacity: 0,
      y: '64px',
    },
  },
  colorCardSlice: {
    in: {
      duration: 1.6,
      delay: 1,
      x: '0%',
      y: '0%',
      z: 100,
      transformOrigin: '0% 0%',
    },
    out: {
      duration: 1.2,
      x: '-100%',
      y: '-50%',
      z: 100,
      transformOrigin: '0% 0%',
    },
    style: absoluteBase,
  },
  cardsliceLeft: {
    in: {
      duration: 1.6,
      x: '0%',
      y: '0%',
      z: 1,
      transformOrigin: '0% 0%',
    },
    out: {
      duration: 1.2,
      x: '-100%',
      y: '-50%',
      z: 1,
      transformOrigin: '0% 0%',
    },
    style: absoluteBase,
  },
  cardsliceRight: {
    in: {
      duration: 1.6,
      x: '0%',
      y: '0%',
      z: 1,
      transformOrigin: '100% 100%',
    },
    out: {
      duration: 1.2,
      x: '100%',
      y: '50%',
      z: 1,
      transformOrigin: '100% 100%',
    },
    style: absoluteBase,
  },
  fadeIn: {
    in: {
      duration: 1.2,
      opacity: 1,
      y: '0%',
      z: 100,
      transformOrigin: '0% 50%',
    },
    out: {
      duration: 1,
      opacity: 0,
      y: '-8px',
      z: 100,
      transformOrigin: '0% 50%',
    },
    style: absoluteBase,
  },
  empty: {
    in: {
      duration: 1.2,
    },
    out: {
      duration: 1,
    },
  },
  fadeInOverlay: {
    in: {
      duration: 0.7,
      opacity: 1,
      transformOrigin: '50% 50%',
    },
    out: {
      duration: 0.7,
      opacity: 0,
      transformOrigin: '50% 50%',
    },
    style: overlayBase,
  },
  fadeInOverlayWhite: {
    in: {
      duration: 1.2,
      opacity: 1,
      transformOrigin: '50% 50%',
    },
    out: {
      duration: 0.7,
      opacity: 0,
      transformOrigin: '50% 50%',
    },
    style: overlayBaseWhite,
  },
  popIn: {
    in: {
      duration: 0.4,
      opacity: 1,
      z: 100,
      scale: 1,
      force3D: true,
      ease: 'back.out',
      transformOrigin: '50% 50%',
    },
    out: {
      duration: 0.4,
      opacity: 0,
      z: 100,
      scale: 0.2,
      force3D: true,
      transformOrigin: '50% 50%',
    },
    style: relativeBase,
  },
  searchBar: {
    in: {
      duration: 1.2,
      opacity: 1,
      y: '0%',
      z: 100,
      transformOrigin: '0% 50%',
    },
    out: {
      duration: 1,
      opacity: 0,
      y: '-8px',
      z: 100,
      transformOrigin: '0% 50%',
    },
  },
  overlay: {
    in: {
      duration: 1.6,
      opacity: 1,
      backgroundPosition: '100%',
      z: 2,
    },
    out: {
      duration: 1.2,
      opacity: 0,
      backgroundPosition: '200%',
      z: 2,
    },
    style: absoluteBase,
  },
  imgLeft: {
    in: {
      duration: 1.6,
      x: '100%',
    },
    out: {
      duration: 1.2,
      x: '0%',
      width: 0,
    },
    style: absoluteBase,
  },
};

export function presetProps(preset: PresetTypes = 'title'): any {
  return presets[preset];
}
