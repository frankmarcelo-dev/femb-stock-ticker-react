export const colors = {
  // Base scales
  neutral: {
    0:   '#ffffff',
    50:  '#f0f2f5',
    100: '#d8dde6',
    200: '#b0bac9',
    300: '#8896ac',
    400: '#607290',
    500: '#4a5568',
    600: '#2d3748',
    700: '#1e2a3a',
    800: '#141d2b',
    900: '#0d1421',
    950: '#080b14',
    1000: '#040609',
  },

  cyan: {
    50:  '#e0fcff',
    100: '#b3f5ff',
    200: '#7eeeff',
    300: '#3de6ff',
    400: '#00d4f5',
    500: '#00b8d9',
    600: '#0098b5',
    700: '#007a91',
    800: '#00606f',
    900: '#00474f',
  },

  green: {
    50:  '#e0faf0',
    100: '#b3f2d4',
    200: '#7de9b5',
    300: '#3ddf93',
    400: '#00c874',
    500: '#00a85f',
    600: '#008a4d',
    700: '#006c3c',
    800: '#00502c',
    900: '#00361d',
  },

  red: {
    50:  '#fff0ee',
    100: '#ffd4cc',
    200: '#ffb0a3',
    300: '#ff8573',
    400: '#ff5540',
    500: '#f03d26',
    600: '#d42810',
    700: '#b01800',
    800: '#880f00',
    900: '#620800',
  },

  amber: {
    50:  '#fffbeb',
    100: '#fff3c0',
    200: '#ffe882',
    300: '#ffd640',
    400: '#ffc300',
    500: '#e6a900',
    600: '#c48d00',
    700: '#a07100',
    800: '#7a5600',
    900: '#553c00',
  },

  // Semantic
  background: {
    base:    '#07090f',
    surface: '#0d1220',
    elevated:'#121929',
    overlay: '#18213a',
  },

  border: {
    subtle:  '#1a2338',
    default: '#24334d',
    strong:  '#354d6e',
    focus:   '#00d4f5',
  },

  text: {
    primary:   '#e2e8f6',
    secondary:  '#8896ac',
    tertiary:  '#4a5568',
    inverse:   '#07090f',
    accent:    '#00d4f5',
  },

  market: {
    up:        '#00c874',
    upSubtle:  'rgba(0,200,116,0.12)',
    down:      '#f03d26',
    downSubtle:'rgba(240,61,38,0.12)',
    flat:      '#607290',
    flatSubtle:'rgba(96,114,144,0.12)',
  },

  interactive: {
    primary:        '#00d4f5',
    primaryHover:   '#00b8d9',
    primaryActive:  '#0098b5',
    primarySubtle:  'rgba(0,212,245,0.1)',
    primaryGlow:    'rgba(0,212,245,0.25)',
  },
} as const

export type ColorToken = typeof colors
