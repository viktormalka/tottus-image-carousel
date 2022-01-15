import { number } from "prop-types";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      body: string;
      heading: string;
      monospace: string;
    };
    fontSizes: number[];
    fontWeights: number[];
    space: number[];
    colors: {
      [k: string]: string;
    };

    // storybook
    breakpoints: {
      [k: string]: number;
    };
    color: Color;
    spacing: {
      [k: string]: SpacingBreakpoints;
    };
    typography: {
      type: {
        body: string;
        heading: string;
        condensed: string;
        regular: string;
      };
      weight: {
        light: number;
        regular: number;
        bold: number;
      };
      size: {
        [k: string]: number;
      };
      display1: {
        [k: string]: StyledVariantProps;
      };
      display2: {
        [k: string]: StyledVariantProps;
      };
      display3: {
        [k: string]: StyledVariantProps;
      };
      display4: {
        [k: string]: StyledVariantProps;
      };
      display5: {
        [k: string]: StyledVariantProps;
      };
      body1: {
        [k: string]: StyledVariantProps;
      };
      body2: {
        [k: string]: StyledVariantProps;
      };
      body3: {
        [k: string]: StyledVariantProps;
      };
      body4: {
        [k: string]: StyledVariantProps;
      };
      tag1: {
        [k: string]: StyledVariantProps;
      };
      tag2: {
        [k: string]: StyledVariantProps;
      };
      tag3: {
        [k: string]: StyledVariantProps;
      };
    };
    shadows: {
      [k: number]: string;
    };
  }
}

interface Color {
  white: string;
  opacity: NestedColor;
  black: string;
  monochrome: NestedColor;
  midnightBlue: NestedColor;
  coolBlue: NestedColor;
  vividMagenta: NestedColor;
  summerOrange: NestedColor;
  sapphire: string;
  amber: string;
  ruby: string;
  emerald: string;
  success: NestedColor;
  warning: NestedColor;
  error: NestedColor;
}

interface NestedColor {
  [k: string]: string;
}

interface SpacingBreakpoints {
  [k: string]: number;
}

interface StyledVariantProps {
  fontFamily: string;
  fontSize: number;
  fontStretch: number;
  lineHeight: number;
}
