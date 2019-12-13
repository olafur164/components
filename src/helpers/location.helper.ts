// Allowed country codes
export const allowedCountryCodes = [
  'en', // english
  'is', // icelandic
  'zh', // chinese
  'zh-cn', // chinese
  'cn', // chinese
  'da', // danish
  'dk', // danish
  'de', // german
  'es', // spanish
  'fr', // french
  'it', // italian
  'nl', // netherlands
  'no', // norwegian
  'nb', // norwegian Bokmål
  'pl', // polish
  'pt', // portuguese
  'ru', // russian
  'sk', // slovak
  'vi', // vietnamese
  'sv', // swedish
  'se', // swedish
];

/**
 * Extract locale from url
 * @param pathname Pathname of the URI, not full URL (skip http...)
 * @param defaultLocale default locale to return, such as en, pt or is.
 */
export const getLanguageFromUrl = (pathname?: string, defaultLocale?: string) => {
  if (!pathname) {
    pathname = window.location.pathname;
  }

  const language = pathname.replace(/^\/([^\/]*).*$/, '$1');

  if (allowedCountryCodes.includes(language)) {
    return language;
  }

  return defaultLocale ? defaultLocale : '';
};

export const translateDate = (pathname?: string, defaultLocale?: string) => {
  if (!pathname) {
    pathname = window.location.pathname;
  }

  const language = pathname.replace(/^\/([^\/]*).*$/, '$1');

  if (allowedCountryCodes.includes(language)) {
    if (language === 'no') {
      return 'nn'; // norwegian
    } else if (language === 'cn') {
      return 'zh-cn'; // chinese
    } else if (language === 'se') {
      return 'sv'; // swedish
    } else if (language === 'dk') {
      return 'da'; // swedish
    } else {
      return language;
    }
  }

  return defaultLocale ? defaultLocale : 'en-GB';
};

/**
 *
 * @param pathname Redirect to a pathname.
 */
export const redirect = (pathname: string) => {
  const url = `${window.location.origin}${
    getLanguageFromUrl() === '' ? '' : `/${getLanguageFromUrl()}`
  }/${pathname}`.toLowerCase();

  // Use Barba transition library if available.
  if (window.Barba) {
    window.Barba.Pjax.goTo(url);
  } else {
    window.location.assign(url);
  }
};

/**
 *
 * @param pathname Redirect to a pathname with locale.
 */
export const changeCurrentPageLocale = (locale: string) => {
  const argRegEx = new RegExp(
    '((/)' + getLanguageFromUrl(window.location.pathname) + '(/)?)|^/',
    'g'
  );
  const currentUrlWithoutLocale = window.location.pathname.replace(argRegEx, '');

  const localeChange = allowedCountryCodes.includes(locale) ? '/' + locale : '';
  const redirectUrl = `${localeChange}/${currentUrlWithoutLocale}`;

  // Use Barba transition library if available.
  if (window.Barba) {
    window.Barba.Pjax.goTo(redirectUrl);
  } else {
    window.location.assign(redirectUrl);
  }
};


export const goToUrl = (params?: string, path?: string) => {
    
  const data = {
    url: path || window.location.pathname,
    random: Math.random(),
    source: "swup",
  }
  history.pushState(data, '', params);
}