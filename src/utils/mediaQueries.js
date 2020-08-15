export const breakpoints = {
  sm: "600",
  md: "900",
  lg: "1200",
};

export const mediaQuerieMax = (key) => {
  return (style) => `@media (max-width: ${breakpoints[key]}px) { ${style} }`;
};
export const mediaQuerieMin = (key) => {
  return (style) => `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
};
