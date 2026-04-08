export const shadows = {
  none: 'none',
  sm:   '0 1px 2px rgba(0,0,0,0.4)',
  base: '0 2px 8px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.3)',
  md:   '0 4px 16px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3)',
  lg:   '0 8px 32px rgba(0,0,0,0.6), 0 4px 8px rgba(0,0,0,0.3)',
  xl:   '0 16px 48px rgba(0,0,0,0.7), 0 8px 16px rgba(0,0,0,0.4)',
  '2xl':'0 24px 64px rgba(0,0,0,0.8), 0 12px 24px rgba(0,0,0,0.4)',

  // Glow effects
  glow: {
    cyan:   '0 0 20px rgba(0,212,245,0.3), 0 0 40px rgba(0,212,245,0.15)',
    cyanSm: '0 0 10px rgba(0,212,245,0.25)',
    green:  '0 0 20px rgba(0,200,116,0.3), 0 0 40px rgba(0,200,116,0.15)',
    red:    '0 0 20px rgba(240,61,38,0.3), 0 0 40px rgba(240,61,38,0.15)',
    amber:  '0 0 20px rgba(255,195,0,0.3), 0 0 40px rgba(255,195,0,0.15)',
  },

  // Inset
  inset: {
    base: 'inset 0 1px 0 rgba(255,255,255,0.05)',
    md:   'inset 0 2px 4px rgba(0,0,0,0.3)',
  },
} as const

export type ShadowToken = typeof shadows
