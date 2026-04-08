export const animation = {
  duration: {
    instant:  '50ms',
    fast:     '100ms',
    base:     '150ms',
    slow:     '250ms',
    slower:   '400ms',
    slowest:  '600ms',
  },

  easing: {
    linear:      'linear',
    ease:        'ease',
    easeIn:      'cubic-bezier(0.4, 0, 1, 1)',
    easeOut:     'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut:   'cubic-bezier(0.4, 0, 0.2, 1)',
    spring:      'cubic-bezier(0.34, 1.56, 0.64, 1)',
    anticipate:  'cubic-bezier(0.36, -0.21, 0.26, 1.36)',
  },
} as const

export type AnimationToken = typeof animation
