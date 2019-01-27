const screenLg = 1200;
const screenMd = 992;
const screenSm = 768;
const screenLgMin = screenLg;
const screenMdMax = screenLg - 1;
const screenSmMax = screenMd - 1;
const screenXsMax = screenSm - 1;

function matchMediaQuery(query: string): boolean {
  return window.matchMedia(query).matches;
}

function isLg(): boolean {
  return matchMediaQuery(`(min-width: ${screenLgMin}px)`);
}

function isMd(): boolean {
  return matchMediaQuery(`(max-width: ${screenMdMax}px) and (min-width: ${screenMd}px)`);
}

function isSm(): boolean {
  return matchMediaQuery(`(max-width: ${screenSmMax}px) and (min-width: ${screenSm}px)`);
}

function isXs(): boolean {
  return matchMediaQuery(`(max-width: ${screenXsMax}px)`);
}

function isMobile(): boolean {
  return isSm() || isXs();
}

export { isLg, isMd, isSm, isXs, isMobile};

