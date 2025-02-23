import typographyPlugin from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'
import animatePlugin from 'tailwindcss-animate'

module.exports = {
  darkMode: ['class'],

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        tertiary: {
          DEFAULT: 'hsl(var(--tertiary))',
          foreground: 'hsl(var(--tertiary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch',
            code: {
              color: 'hsl(var(--tertiary-foreground))',
              padding: '2px 4px',
              borderRadius: '4px',
              margin: '0 2px',
              background: 'hsl(var(--tertiary))',
              '&::before': { content: `unset !important` },
              '&::after': { content: `unset !important` },
              fontWeight: 'normal',
            },
            'a code': {
              fontSize: '1em',
            },
            h2: {
              paddingTop: '1rem',
              paddingBottom: '0.75rem',
            },
            'h2 code': {
              color: 'hsl(var(--tertiary-foreground))',
            },
            h3: {
              paddingTop: '0.75rem',
              paddingBottom: '0.5rem',
            },
            'h3 code': {
              color: 'hsl(var(--tertiary-foreground))',
            },
            h4: {
              paddingTop: '0.5rem',
              paddingBottom: '0.25rem',
            },
            'h4 code': {
              color: 'hsl(var(--tertiary-foreground))',
            },
          },
        },
      },
    },
  },
  plugins: [animatePlugin, typographyPlugin],
} satisfies Config
