module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: "#000000", // black - Medical authority and sophisticated restraint
        secondary: "#FFFFFF", // white - Clinical cleanliness and content clarity
        accent: "#E31E24", // red-600 - Vital energy and critical action focus
        
        // Background Colors
        background: "#FAFAFA", // gray-50 - Subtle warmth without clinical sterility
        surface: "#F5F5F5", // gray-100 - Card depth and content separation
        
        // Text Colors
        'text-primary': "#1A1A1A", // gray-900 - Extended reading comfort and hierarchy
        'text-secondary': "#666666", // gray-500 - Supporting information and metadata
        
        // Status Colors
        success: "#22C55E", // green-500 - Positive progress and completed actions
        warning: "#F59E0B", // amber-500 - Attention without alarm or panic
        error: "#EF4444", // red-500 - Clear concern with helpful guidance
        
        // Border Colors
        border: "#E5E5E5", // gray-300 - Minimal borders for form inputs and content separation
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'], // Headlines and CTAs
        'inter': ['Inter', 'sans-serif'], // Body text
        'mono': ['JetBrains Mono', 'monospace'], // Technical precision and data
        'sans': ['Inter', 'sans-serif'], // Default sans-serif
      },
      fontWeight: {
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1)', // Subtle card elevation
        'modal': '0 10px 25px -3px rgba(0, 0, 0, 0.1)', // Interactive states and modals
        'unfreezing': '0 20px 40px -10px rgba(0, 0, 0, 0.15)', // Special unfreezing effect
      },
      animation: {
        'unfreezing': 'unfreezing 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in': 'fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        unfreezing: {
          '0%': { 
            transform: 'perspective(1000px) rotateX(0deg) translateY(0px)',
            opacity: '0.8'
          },
          '100%': { 
            transform: 'perspective(1000px) rotateX(5deg) translateY(-5px)',
            opacity: '1'
          }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { 
            transform: 'translateY(20px)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateY(0px)',
            opacity: '1'
          }
        }
      },
      transitionDuration: {
        '300': '300ms',
        '600': '600ms',
      },
      transitionTimingFunction: {
        'clinical': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'clinical': '8px',
        'card': '12px',
      },
      backdropBlur: {
        'clinical': '8px',
      },
    },
  },
  plugins: [],
}