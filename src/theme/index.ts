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
    h1: { fontSize: 120 },
    h2: { fontSize: 48 },
    h3: { fontSize: 36 },
    callout: { fontSize: 24 },
    body: { fontSize: 16 },
    caption: { fontSize: 13 },
    footnote: { fontSize: 11 },
  },
  crop: {
    enable: true,
    top: 0.38,
    bottom: 0.43,
  },
};

export default {
  colors,
  space,
  typography,
};
