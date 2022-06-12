module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          current: 'currentColor',
          red: '#e2001a',
          blue: '#005ea8',
          yellow: '#ffdd00',
          green: '#009036',
          orange: '#f29400',
          purple: '#93117e',
        },
      },
    },
  
    daisyui: {
      themes: [
        {
          mytheme: {
            "primary": "#6419E6",
            "secondary": "#D926A9",
            "accent": "#1FB2A6",
            "neutral": "#191D24",
            "base-100": "#2A303C",
            "info": "#1A368D",
            "success": "#0033A0",
            "warning": "#FFD100",
            "error": "#FF0000",
  
            "red": "#e2001a",
            "blue": "#005ea8",
            "yelllow": "#ffdd00",
            "green": "#009036",
            "orange": "#f29400",
            "purple": "#93117e",
          },
        },
      ],
    },
    plugins: [require("daisyui")],
  }
  