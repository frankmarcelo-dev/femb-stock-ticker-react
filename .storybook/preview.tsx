import type { Preview } from '@storybook/react'
import '../src/design-system/styles/tokens.css'
import '../src/design-system/styles/reset.css'
import '../src/design-system/styles/global.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark',    value: '#07090f' },
        { name: 'surface', value: '#0d1220' },
        { name: 'light',   value: '#f0f2f5' },
      ],
    },
    docs: {
      theme: {
        base: 'dark',
        colorPrimary: '#00d4f5',
        colorSecondary: '#00b8d9',
        appBg: '#07090f',
        appContentBg: '#0d1220',
        appBorderColor: '#24334d',
        appBorderRadius: 6,
        textColor: '#e2e8f6',
        textInverseColor: '#07090f',
        barTextColor: '#8896ac',
        barSelectedColor: '#00d4f5',
        barBg: '#0d1220',
        inputBg: '#121929',
        inputBorder: '#24334d',
        inputTextColor: '#e2e8f6',
        fontBase: '"DM Sans", system-ui, sans-serif',
        fontCode: '"JetBrains Mono", monospace',
      },
    },
  },
}

export default preview
