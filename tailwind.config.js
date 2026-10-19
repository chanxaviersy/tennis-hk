/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        tennis: {
          green: '#2E7D32',
          'green-light': '#4CAF50',
          'green-dark': '#1B5E20',
          orange: '#FF8F00',
          amber: '#FFB300',
          accent: '#FF6D00',
          'accent-light': '#FF9E40',
          ball: '#CCFF00',
          'ball-highlight': '#E8FF5E'
        }
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-hk)', 'var(--font-poppins)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'var(--font-noto-sans-hk)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-space-grotesk)', 'monospace']
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'slide-up': 'slideUp 0.4s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out'
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      backgroundImage: {
        'court-pattern': "linear-gradient(135deg, #2E7D32 25%, transparent 25%), linear-gradient(225deg, #2E7D32 25%, transparent 25%), linear-gradient(45deg, #2E7D32 25%, transparent 25%), linear-gradient(315deg, #2E7D32 25%, transparent 25%)"
      }
    }
  },
  plugins: []
};
