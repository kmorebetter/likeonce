/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-pt-sans)', 'sans-serif'],
        narrow: ['var(--font-pt-sans-narrow)', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            h1: {
              fontFamily: 'var(--font-pt-sans-narrow)',
            },
            h2: {
              fontFamily: 'var(--font-pt-sans-narrow)',
            },
            h3: {
              fontFamily: 'var(--font-pt-sans-narrow)',
            },
            h4: {
              fontFamily: 'var(--font-pt-sans-narrow)',
            },
            h5: {
              fontFamily: 'var(--font-pt-sans-narrow)',
            },
            h6: {
              fontFamily: 'var(--font-pt-sans-narrow)',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
