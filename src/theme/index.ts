import { StyleSheet } from 'react-native';

const colors = { primary: '#004175', secondary: 'green', ternary: 'red' };
const space = {
  hairline: StyleSheet.hairlineWidth,
  zero: 0,
  xxxsmall: 2,
  xxsmall: 4,
  xsmall: 8,
  small: 12,
  normal: 16,
  medium: 24,
  large: 32,
  xlarge: 64,
  xxlarge: 128,
  xxxlarge: 256,
};

const typography = {
  type: {
    light: {
      fontFamily: 'DamascusLight',
      fontWeight: 100,
    },
    normal: {
      fontFamily: 'Damascus',
      fontWeight: 400,
    },
    semiBold: {
      fontFamily: 'DamascusSemiBold',
      fontWeight: 400,
    },
    bold: {
      fontFamily: 'DamascusBold',
      fontWeight: 700,
    },
  },
  size: {
    h1: {
      fontSize: 150,
      lineHeight: 180,
    },
    h2: {
      fontSize: 48,
      lineHeight: 60,
    },
    h3: {
      fontSize: 36,
      lineHeight: 48,
    },
    callout: {
      fontSize: 24,
      lineHeight: 36,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    caption: {
      fontSize: 13,
      lineHeight: 16,
    },
    footnote: {
      fontSize: 11,
    },
  },
  crop: {
    enable: true,
    top: 0.2,
    bottom: 0.3,
  },
};

export default {
  colors,
  space,
  typography,
};
