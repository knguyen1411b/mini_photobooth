import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          '50': '#fef1f6',
          '100': '#fee5ef',
          '200': '#ffcbe0',
          '300': '#ffa1c5',
          '400': '#ff528f',
          '500': '#fa3a78',
          '600': '#ea1851',
          '700': '#cc0a3a',
          '800': '#a80c30',
          '900': '#8c0f2c',
          '950': '#560115',
        },
      },
    },
  },
  plugins: [],
}
export default config
