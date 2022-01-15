import { DefaultTheme } from "styled-components";
import { rgba } from "polished";

export const theme: DefaultTheme = {
  fontSizes: [10, 14, 16, 20, 24, 34, 48, 60, 96],
  fontWeights: [300, 400, 600],
  fonts: {
    body: "'Ubuntu', Arial, sans-serif",
    heading: "'Ubuntu', Arial, sans-serif",
    monospace: "Consolas, 'Liberation Mono', Menlo, Courier, monospace"
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  colors: {
    white: "#ffffff",
    offWhite: "#f7f7f7",
    offOffWhite: "#fafafa",
    deepBlue: "#081f2d",
    black: "#000000",
    darkGrey: "#101010",
    grey: "#3f3f3f",
    lightGrey: "#757575",
    lighterGrey: "#dfdfdf",
    fuchsia: "#f45197",
    darkFuchsia: "#a62581",
    pink: "#e94591",
    skyBlue: "#19bae4",
    blue: "#008ab1",
    midnightBlue: "#283379",
    space: "#002130",
    deepPurple: "#5b2c80",
    orange: "#ec6225",
    northSea: "#015a8c",
    trueBlue: "#1c4585",
    warmPurple: "#93358d",
    lightNavy: "#194f90",
    orangish: "#ff7f30",
    cobalt: "#1a5090",
    red: "#ff0000"
  },

  // storybook
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1920
  },
  color: {
    white: "#ffffff",
    opacity: {
      white90: rgba(255, 255, 255, 0.9),
      white80: rgba(255, 255, 255, 0.8),
      white70: rgba(255, 255, 255, 0.7),
      white60: rgba(255, 255, 255, 0.6),
      white50: rgba(255, 255, 255, 0.5),
      white40: rgba(255, 255, 255, 0.4),
      white30: rgba(255, 255, 255, 0.3),
      white20: rgba(255, 255, 255, 0.2),
      white10: rgba(255, 255, 255, 0.1)
    },
    black: "#000000",
    monochrome: {
      darker: "#424242",
      dark: "#616161",
      medium: "#9e9e9e",
      light: "#e0e0e0",
      lighter: "#f0f1f2"
    },
    midnightBlue: {
      base: "#081f2d",
      light: "#344c58",
      lighter: "#cdd2d5",
      lightest: "#e6e8ea"
    },
    coolBlue: {
      darker: "#1c355e",
      dark: "#1a428a",
      base: "#194f90",
      light: "#0091b3",
      lighter: "#00c1de"
    },
    vividMagenta: {
      darker: "#592c82",
      dark: "#863399",
      base: "#93358d",
      light: "#f45197",
      lighter: "#e96bb0"
    },
    summerOrange: {
      darker: "#e64b38",
      dark: "#ff671d",
      base: "#ff7f30",
      light: "#ff9e18",
      lighter: "#ffc629"
    },
    sapphire: "#0052ba",
    amber: "#ffbf00",
    ruby: "#9b111e",
    emerald: "#00de81",
    success: {
      darker: "#0a4423",
      dark: "#11763d",
      base: "#18a957",
      light: "#a3ddbc",
      lighter: "#d1eedd"
    },
    warning: {
      darker: "#664b16",
      dark: "#b38327",
      base: "#ffbb38",
      light: "#ffe4af",
      lighter: "#fff1d7"
    },
    error: {
      darker: "#59091a",
      dark: "#9c0f2e",
      base: "#df1642",
      light: "#e95c7b",
      lighter: "#f2a2b3"
    }
  },
  spacing: {
    xxs: {
      xs: 4,
      sm: 4,
      md: 4,
      lg: 4,
      xl: 4,
      xxl: 4
    },
    xs: {
      xs: 8,
      sm: 8,
      md: 8,
      lg: 8,
      xl: 8,
      xxl: 8
    },
    sm: {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
      xxl: 12
    },
    md: {
      xs: 16,
      sm: 16,
      md: 16,
      lg: 16,
      xl: 16,
      xxl: 16
    },
    lg: {
      xs: 24,
      sm: 24,
      md: 24,
      lg: 24,
      xl: 24,
      xxl: 24
    },
    xl: {
      xs: 28,
      sm: 28,
      md: 28,
      lg: 32,
      xl: 32,
      xxl: 44
    },
    xxl: {
      xs: 36,
      sm: 36,
      md: 36,
      lg: 40,
      xl: 52,
      xxl: 68
    },
    xxxl: {
      xs: 80,
      sm: 80,
      md: 120,
      lg: 120,
      xl: 120,
      xxl: 120
    }
  },
  typography: {
    type: {
      /* we may need to come up with better names after adding regular */
      body: "'Ubuntu', Arial, sans-serif",
      heading: "'Ubuntu', Arial, sans-serif",
      condensed: "'Ubuntu', Arial, sans-serif",
      regular: "'Ubuntu', Arial, sans-serif"
    },
    weight: {
      light: 300,
      regular: 400,
      bold: 600
    },
    size: {
      s1: 10,
      s2: 12,
      s3: 14,
      s4: 16,
      m1: 18,
      m2: 21,
      m3: 24,
      m4: 26,
      l1: 32,
      l2: 36,
      l3: 48,
      xl1: 80,
      xl2: 112,
      xl3: 140
    },
    display1: {
      xs: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 32,
        fontStretch: 130,
        lineHeight: 38
      },
      sm: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 32,
        fontStretch: 130,
        lineHeight: 38
      },
      md: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 48,
        fontStretch: 130,
        lineHeight: 56
      },
      lg: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 60,
        fontStretch: 130,
        lineHeight: 72
      },
      xl: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 72,
        fontStretch: 130,
        lineHeight: 80
      },
      xxl: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 84,
        fontStretch: 130,
        lineHeight: 96
      }
    },
    display2: {
      xs: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 24,
        fontStretch: 130,
        lineHeight: 28
      },
      sm: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 32,
        fontStretch: 130,
        lineHeight: 38
      },
      md: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 36,
        fontStretch: 130,
        lineHeight: 40
      },
      lg: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 36,
        fontStretch: 130,
        lineHeight: 40
      },
      xl: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 36,
        fontStretch: 130,
        lineHeight: 43.2
      },
      xxl: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 36,
        fontStretch: 130,
        lineHeight: 40
      }
    },
    display3: {
      xs: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 24,
        fontStretch: 130,
        lineHeight: 28
      },
      sm: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 24,
        fontStretch: 130,
        lineHeight: 28
      },
      md: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 32,
        fontStretch: 130,
        lineHeight: 36
      },
      lg: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 32,
        fontStretch: 130,
        lineHeight: 36
      },
      xl: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 32,
        fontStretch: 130,
        lineHeight: 36
      },
      xxl: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 32,
        fontStretch: 130,
        lineHeight: 36
      }
    },
    display4: {
      xs: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 18,
        fontStretch: 130,
        lineHeight: 16
      },
      sm: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 18,
        fontStretch: 130,
        lineHeight: 16
      },
      md: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 24,
        fontStretch: 130,
        lineHeight: 28
      },
      lg: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 24,
        fontStretch: 130,
        lineHeight: 28
      },
      xl: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 24,
        fontStretch: 130,
        lineHeight: 28
      },
      xxl: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 24,
        fontStretch: 130,
        lineHeight: 28
      }
    },
    display5: {
      xs: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 14,
        fontStretch: 130,
        lineHeight: 16
      },
      sm: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 14,
        fontStretch: 130,
        lineHeight: 16
      },
      md: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 16,
        fontStretch: 130,
        lineHeight: 22
      },
      lg: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 16,
        fontStretch: 130,
        lineHeight: 22
      },
      xl: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 16,
        fontStretch: 130,
        lineHeight: 22
      },
      xxl: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 16,
        fontStretch: 130,
        lineHeight: 22
      }
    },
    body1: {
      xs: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 16,
        fontStretch: 130,
        lineHeight: 22
      },
      sm: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 18,
        fontStretch: 130,
        lineHeight: 24
      },
      md: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 18,
        fontStretch: 130,
        lineHeight: 24
      },
      lg: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 18,
        fontStretch: 130,
        lineHeight: 24
      },
      xl: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 18,
        fontStretch: 130,
        lineHeight: 24
      },
      xxl: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 18,
        fontStretch: 130,
        lineHeight: 24
      }
    },
    body2: {
      xs: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 16,
        fontStretch: 130,
        lineHeight: 18
      },
      sm: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 16,
        fontStretch: 130,
        lineHeight: 18
      },
      md: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 16,
        fontStretch: 130,
        lineHeight: 18
      },
      lg: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 16,
        fontStretch: 130,
        lineHeight: 18
      },
      xl: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 16,
        fontStretch: 130,
        lineHeight: 18
      },
      xxl: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 16,
        fontStretch: 130,
        lineHeight: 18
      }
    },
    body3: {
      xs: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 14,
        fontStretch: 130,
        lineHeight: 18
      },
      sm: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 14,
        fontStretch: 130,
        lineHeight: 18
      },
      md: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 14,
        fontStretch: 130,
        lineHeight: 18
      },
      lg: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 14,
        fontStretch: 130,
        lineHeight: 18
      },
      xl: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 14,
        fontStretch: 130,
        lineHeight: 18
      },
      xxl: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 14,
        fontStretch: 130,
        lineHeight: 18
      }
    },
    body4: {
      xs: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 12,
        fontStretch: 130,
        lineHeight: 16
      },
      sm: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 12,
        fontStretch: 130,
        lineHeight: 16
      },
      md: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 12,
        fontStretch: 130,
        lineHeight: 16
      },
      lg: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 12,
        fontStretch: 130,
        lineHeight: 16
      },
      xl: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 12,
        fontStretch: 130,
        lineHeight: 16
      },
      xxl: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 12,
        fontStretch: 130,
        lineHeight: 16
      }
    },
    tag1: {
      xs: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 14,
        fontStretch: 130,
        lineHeight: 14
      },
      sm: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 14,
        fontStretch: 130,
        lineHeight: 14
      },
      md: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 14,
        fontStretch: 130,
        lineHeight: 14
      },
      lg: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 14,
        fontStretch: 130,
        lineHeight: 14
      },
      xl: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 14,
        fontStretch: 130,
        lineHeight: 14
      },
      xxl: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 14,
        fontStretch: 130,
        lineHeight: 14
      }
    },
    tag2: {
      xs: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 12,
        fontStretch: 130,
        lineHeight: 12
      },
      sm: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 12,
        fontStretch: 130,
        lineHeight: 12
      },
      md: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 12,
        fontStretch: 130,
        lineHeight: 12
      },
      lg: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 12,
        fontStretch: 130,
        lineHeight: 12
      },
      xl: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 12,
        fontStretch: 130,
        lineHeight: 12
      },
      xxl: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 12,
        fontStretch: 130,
        lineHeight: 12
      }
    },
    tag3: {
      xs: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 10,
        fontStretch: 130,
        lineHeight: 10
      },
      sm: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 10,
        fontStretch: 130,
        lineHeight: 10
      },
      md: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 10,
        fontStretch: 130,
        lineHeight: 10
      },
      lg: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 10,
        fontStretch: 130,
        lineHeight: 10
      },
      xl: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 10,
        fontStretch: 130,
        lineHeight: 10
      },
      xxl: {
        fontFamily: "'Ubuntu', Arial, sans-serif",
        fontSize: 10,
        fontStretch: 130,
        lineHeight: 10
      }
    }
  },
  shadows: {
    0: "10px 10px 20px rgba(0, 0, 0, 0.)",
    20: "10px 10px 20px rgba(0, 0, 0, 0.2) ",
    40: "10px 10px 20px rgba(0, 0, 0, 0.4) ",
    60: "10px 10px 20px rgba(0, 0, 0, 0.6) ",
    80: "10px 10px 20px rgba(0, 0, 0, 0.8) ",
    100: "10px 10px 20px rgba(0, 0, 0, 1.0) "
  }
};
