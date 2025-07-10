module.exports = {
  theme: {
    extend: {
      animation: {
        'blob': 'blob 12s infinite ease-in-out',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1) rotate(0deg)',
          },
          '25%': {
            transform: 'translate(20px, -30px) scale(1.05) rotate(90deg)',
          },
          '50%': {
            transform: 'translate(-15px, 20px) scale(0.95) rotate(180deg)',
          },
          '75%': {
            transform: 'translate(25px, 15px) scale(1.02) rotate(270deg)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1) rotate(360deg)',
          },
        }
      }
    }
  }
}