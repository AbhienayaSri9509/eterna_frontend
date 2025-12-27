import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        success: '#16A34A',
        danger: '#DC2626'
      }
    }
  },
  plugins: []
}

export default config
