/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('tailwindcss').Config} */

// --color-info: var(--color-primary-500);
// --color-info-light: var(--color-primary-400);
// --color-info-dark: var(--color-primary-600);

// --color-success: var(--color-green-500);
// --color-success-light: var(--color-green-400);
// --color-success-dark: var(--color-green-600);

// --color-danger: var(--color-red-500);
// --color-danger-light: var(--color-red-400);
// --color-danger-dark: var(--color-red-600);

// --color-warning: var(--color-yellow-500);
// --color-warning-light: var(--color-yellow-400);
// --color-warning-dark: var(--color-yellow-600);

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // screens: {
      //   xs: 'var(--breakpoint-xs)',
      //   sm: 'var(--breakpoint-sm)',
      //   md: 'var(--breakpoint-md)',
      //   lg: 'var(--breakpoint-lg)',
      //   xl: 'var(--breakpoint-xl)',
      //   '2xl': 'var(--breakpoint-2xl)',
      // },

      fontFamily: {
        // sans: 'var(--font-sans)',
        // serif: 'var(--font-serif)',
        inter: 'var(--font-inter)',
        'general-sans': 'var(--font-general-sans)',
        'plus-jakarta': 'var(--font-plus-jakarta)',
        onest: 'var(--font-onest)',
      },

      fontSize: {
        xs: 'var(--font-xs)',
        sm: 'var(--font-sm)',
        base: 'var(--font-base)',
        md: 'var(--font-md)',
        lg: 'var(--font-lg)',
        xl: 'var(--font-xl)',
        'display-xs': 'var(--font-display-xs)',
        'display-sm': 'var(--font-display-sm)',
        'display-md': 'var(--font-display-md)',
        'display-lg': 'var(--font-display-lg)',
        'display-xl': 'var(--font-display-xl)',
        'display-2xl': 'var(--font-display-2xl)',
      },

      lineHeight: {
        xs: 'var(--line-height-xs)',
        sm: 'var(--line-height-sm)',
        base: 'var(--line-height-base)',
        md: 'var(--line-height-md)',
        lg: 'var(--line-height-lg)',
        xl: 'var(--line-height-xl)',
        'display-xs': 'var(--line-height-display-xs)',
        'display-sm': 'var(--line-height-display-sm)',
        'display-md': 'var(--line-height-display-md)',
        'display-lg': 'var(--line-height-display-lg)',
        'display-xl': 'var(--line-height-display-xl)',
        'display-2xl': 'var(--line-height-display-2xl)',
      },

      fontWeight: {
        regular: 'var(--font-weight-regular)',
        medium: 'var(--font-weight-medium)',
        semibold: 'var(--font-weight-semibold)',
        bold: 'var(--font-weight-bold)',
      },

      // --border-radius: 0.5rem;
      // --border-radius-sm: 0.25rem;
      // --border-radius-md: 0.5rem;
      // --border-radius-lg: 0.75rem;
      // --border-radius-xl: 1rem;

      borderRadius: {
        DEFAULT: 'var(--border-radius)',
        sm: 'var(--border-radius-sm)',
        md: 'var(--border-radius-md)',
        lg: 'var(--border-radius-lg)',
        xl: 'var(--border-radius-xl)',
        full: '9999px',
      },
      /* Transitions */
      // --transition-short: 0.15s;
      // --transition-long: 0.3s;

      transitionDuration: {
        short: 'var(--transition-short)',
        long: 'var(--transition-long)',
      },

      gap: {
        1: 'var(--gap-1)',
        2: 'var(--gap-2)',
        3: 'var(--gap-3)',
        4: 'var(--gap-4)',
        5: 'var(--gap-5)',
        6: 'var(--gap-6)',
        7: 'var(--gap-7)',
        'section-gap': 'var(--section-gap)',
      },

      // #f8fafc;
      // #f1f5f9;
      // #e2e8f0;
      // #cbd5e1;
      // #94a3b8;
      // #64748b;
      // #475569;
      // #334155;
      // #1e293b;
      // #0f172a;
      // grayui: {
      //   DEFAULT: "#F1F2F3",
      //   25: "#FCFCFD",
      //   50: "#F9FAFB",
      //   100: "#F2F4F7",
      //   200: "#EAECF0",
      //   300: "#D0D5DD",
      //   400: "#98A2B3",
      //   500: "#667085",
      //   600: "#475467",
      //   700: "#344054",
      //   800: "#182230",
      //   900: "#101828",
      //   950: "#0C111D",
      // },

      // #182230

      // #e7e8ea 50
      // #d0d2d5 100
      // #b9bcc0 150
      // #a2a6ac 200
      // #8b9097 250
      // #747a82 300
      // #5d646e 350
      // #464e59 400
      // #2f3844 450
      // #182230 // default 500
      // #151e2b 550
      // #131b26 600
      // #101721 650
      // #0e141c 700
      // #0c1118 750
      // #090d13 800
      // #070a0e 850
      // #040609 900
      // #020304 950

      colors: {
        background: {
          DEFAULT: 'hsl(var(--background))',
          muted: 'hsl(var(--background-muted))',
          accent: 'hsl(var(--color-accent))',
        },

        /* Hover/Selected */
        accent: {
          DEFAULT: 'hsl(var(--color-accent))',
          foreground: 'hsl(var(--color-accent-foreground))',
          hover: 'hsl(var(--color-accent-hover))',
        },

        ring: 'hsl(var(--color-ring))',

        foreground: {
          DEFAULT: 'hsl(var(--color-text))',
          light: 'hsl(var(--color-text-light))',
          lighter: 'hsl(var(--color-text-lighter))',
          muted: 'hsl(var(--color-text-muted))',
          'muted-light': 'hsl(var(--color-text-muted-light))',
          'muted-dark': 'hsl(var(--color-text-muted-dark))',
          'muted-darker': 'hsl(var(--color-text-muted-darker))',
        },

        // gray-25: hsl(219 40% 57%)
        // gray-50: hsl(219 40% 54%)
        // gray-100: hsl(219 40% 51%)
        // gray-150: hsl(219 40% 48%)
        // gray-200: hsl(219 40% 45%)
        // gray-250: hsl(219 40% 42%)
        // gray-300: hsl(219 40% 39%)
        // gray-350: hsl(219 40% 36%)
        // gray-400: hsl(219 40% 33%)
        // gray-450: hsl(219 40% 30%)
        // gray-500: hsl(219 40% 27%)
        // gray-550: hsl(219 40% 24%)
        // gray-600: hsl(219 40% 21%)
        // gray-650: hsl(219 40% 18%)
        // gray-700: hsl(219 40% 15%)
        // gray-750: hsl(219 40% 12%)
        // gray-800: hsl(219 40% 9%)
        // gray-850: hsl(219 40% 6%)
        // gray-900: hsl(219 40% 3%)
        // gray-950: hsl(219 40% 0%)

        // hsl(216, 31.3%, 6.3%)
        // #0a0f14
        // #11161c
        // #76797d

        // #0f1623
        // #111827
        // #1d2432
        // #1f2937

        // hsl(219, 40%, 9.8%)
        // hsl(220.9, 39.3%, 11%)
        // hsl(220, 26.6%, 15.5%)

        // #f8fafc;
        // #f1f5f9;
        // #e2e8f0;
        // #cbd5e1;
        // #94a3b8;
        // #64748b;
        // #475569;
        // #334155;
        // #1e293b;
        // #0f172a;

        // rgba(0,0,0,0.02)
        // rgba(0,0,0,0.01)
        // rgba(0,0,0,0)
        // rgba(0,0,0,.1)
        // rgba(0,0,0,.2)
        // rgba(0,0,0,.3)

        layer: {
          DEFAULT: 'hsl(var(--layer-1))',
          2: 'hsl(var(--layer-2))',
          3: 'hsl(var(--layer-3))',
          4: 'hsl(var(--layer-4))',
        },

        border: {
          DEFAULT: 'hsl(var(--color-border))',
          light: 'hsl(var(--color-border-light))',
          lighter: 'hsl(var(--color-border-lighter))',
          hover: 'hsl(var(--color-border-hover))',
          'light-hover': 'hsl(var(--color-border-light-hover))',
        },

        info: {
          DEFAULT: 'hsl(var(--color-info))',
          light: 'hsl(var(--color-info-light))',
          dark: 'hsl(var(--color-info-dark))',
        },

        success: {
          DEFAULT: 'hsl(var(--color-success))',
          light: 'hsl(var(--color-success-light))',
          dark: 'hsl(var(--color-success-dark))',
        },

        error: {
          DEFAULT: 'hsl(var(--color-error))',
          light: 'hsl(var(--color-error-light))',
          dark: 'hsl(var(--color-error-dark))',
        },

        danger: {
          DEFAULT: 'hsl(var(--color-danger))',
          light: 'hsl(var(--color-danger-light))',
          dark: 'hsl(var(--color-danger-dark))',
        },

        warning: {
          DEFAULT: 'hsl(var(--color-warning))',
          light: 'hsl(var(--color-warning-light))',
          dark: 'hsl(var(--color-warning-dark))',
        },

        primary: {
          50: 'hsl(var(--color-primary-50))',
          100: 'hsl(var(--color-primary-100))',
          200: 'hsl(var(--color-primary-200))',
          300: 'hsl(var(--color-primary-300))',
          400: 'hsl(var(--color-primary-400))',
          500: 'hsl(var(--color-primary-500))',
          600: 'hsl(var(--color-primary-600))',
          700: 'hsl(var(--color-primary-700))',
          800: 'hsl(var(--color-primary-800))',
          900: 'hsl(var(--color-primary-900))',
          DEFAULT: 'hsl(var(--color-primary))',
          hover: 'hsl(var(--color-primary-hover))',
          active: 'hsl(var(--color-primary-active))',
          disabled: 'hsl(var(--color-primary-disabled))',
        },

        gray: {
          DEFAULT: 'hsl(var(--color-gray))',
          hover: 'hsl(var(--color-gray-hover))',
          50: 'hsl(var(--color-gray-50))',
          100: 'hsl(var(--color-gray-100))',
          200: 'hsl(var(--color-gray-200))',
          300: 'hsl(var(--color-gray-300))',
          400: 'hsl(var(--color-gray-400))',
          500: 'hsl(var(--color-gray-500))',
          600: 'hsl(var(--color-gray-600))',
          650: 'hsl(var(--color-gray-650))',
          700: 'hsl(var(--color-gray-700))',
          750: 'hsl(var(--color-gray-750))',
          800: 'hsl(var(--color-gray-800))',
          850: 'hsl(var(--color-gray-850))',
          900: 'hsl(var(--color-gray-900))',
          950: 'hsl(var(--color-gray-950))',
        },

        red: {
          50: 'hsl(var(--color-red-50))',
          100: 'hsl(var(--color-red-100))',
          200: 'hsl(var(--color-red-200))',
          300: 'hsl(var(--color-red-300))',
          400: 'hsl(var(--color-red-400))',
          500: 'hsl(var(--color-red-500))',
          600: 'hsl(var(--color-red-600))',
          700: 'hsl(var(--color-red-700))',
          800: 'hsl(var(--color-red-800))',
          900: 'hsl(var(--color-red-900))',
          DEFAULT: 'hsl(var(--color-red))',
        },

        green: {
          50: 'hsl(var(--color-green-50))',
          100: 'hsl(var(--color-green-100))',
          200: 'hsl(var(--color-green-200))',
          300: 'hsl(var(--color-green-300))',
          400: 'hsl(var(--color-green-400))',
          500: 'hsl(var(--color-green-500))',
          600: 'hsl(var(--color-green-600))',
          700: 'hsl(var(--color-green-700))',
          800: 'hsl(var(--color-green-800))',
          900: 'hsl(var(--color-green-900))',
          DEFAULT: 'hsl(var(--color-green))',
        },

        yellow: {
          50: 'hsl(var(--color-yellow-50))',
          100: 'hsl(var(--color-yellow-100))',
          200: 'hsl(var(--color-yellow-200))',
          300: 'hsl(var(--color-yellow-300))',
          400: 'hsl(var(--color-yellow-400))',
          500: 'hsl(var(--color-yellow-500))',
          600: 'hsl(var(--color-yellow-600))',
          700: 'hsl(var(--color-yellow-700))',
          800: 'hsl(var(--color-yellow-800))',
          900: 'hsl(var(--color-yellow-900))',
          DEFAULT: 'hsl(var(--color-yellow))',
        },
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },

        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { transform: 'translateY(-50%)' },
          to: { transform: 'translateY(0)' },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
        'fade-in': 'fadeIn 0.15s ease-in-out',
        'slide-up': 'slideUp 0.15s ease-in-out',
        'fade-in-up': 'fadeIn 0.15s ease-in-out, slideUp 0.15s ease-in-out',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
