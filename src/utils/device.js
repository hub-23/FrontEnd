const size = {
  xs: 0,
  sm: '480px',
  md: '768px', // було 834
  lg: '992px',
  xl: '1200px',
  xxl: '1440px',
  xxxl: '2560',
};

export const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`,
  xxl: `(max-width: ${size.xxl})`,
  xxxl: `(max-width: ${size.xxl})`,

  mobile: `(min-width: ${size.sm})`,
  tablet: `(min-width: ${size.md})`,
  desktop: `(min-width: ${size.xxl})`,
};
