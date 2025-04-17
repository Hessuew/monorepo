import typographyPlugin from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import animate from 'tailwindcss-animate';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        xs: '480px'
      },
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        theme: 'var(--aw-color-theme)',
        page: 'var(--aw-color-page)',
        dark: 'var(--aw-color-dark)',
        default: 'var(--aw-color-text-default)',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      fontFamily: {
        title: [
          'var(--aw-font-esbuild, ui-sans-serif)',
          ...defaultTheme.fontFamily.sans
        ],
        sans: [
          'var(--aw-font-sans, ui-sans-serif)',
          ...defaultTheme.fontFamily.sans
        ],
        serif: [
          'var(--aw-font-serif, ui-serif)',
          ...defaultTheme.fontFamily.serif
        ],
        signature: [
          'Tangerine',
          ...defaultTheme.fontFamily.serif
        ],
        heading: [
          'var(--aw-font-heading, ui-sans-serif)',
          ...defaultTheme.fontFamily.sans
        ]
      },
      fontSize: {
        jesus: '24rem'
      },
      animation: {
        fade: 'fadeInUp 1s both',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite',
        'shine': 'shine 20s linear infinite',
        'marquee': 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: 0,
            transform: 'translateY(2rem)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          }
        },
        bounceGentle: {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        },
        gradient: {
          to: { backgroundPosition: 'var(--bg-size, 300%) 0' }
        },
        shine: {
          '0%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
          '100%': { backgroundPosition: '0% 0%' }
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
    animate
  ],
  darkMode: ['class', 'class'],
};
