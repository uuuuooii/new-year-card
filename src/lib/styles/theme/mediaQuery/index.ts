const mediaQueryPx = {
  mobile: 475,
  tablet: 768,
  laptop: 1024,
  desktop: 1240,
};

const customMediaQuery = (maxWidth: number) =>
  `@media screen and (max-width: ${maxWidth}px)`;

const mediaQuery = {
  mobile: customMediaQuery(mediaQueryPx.mobile),
  tablet: customMediaQuery(mediaQueryPx.tablet),
  laptop: customMediaQuery(mediaQueryPx.laptop),
  desktop: customMediaQuery(mediaQueryPx.desktop),
};

export default mediaQuery;
