export const radii = {
  none: 0,
  sm: 2,
  md: 4,
  lg: 8,
  xl: 16,
  xxl: 32,
  full: 9999,
} as const;

export type Radius = keyof typeof radii;
