import { DefaultTheme, StyledProps } from 'styled-components';

export type BackgroundProps = { bg?: keyof DefaultTheme['colors'] };
export type PaddingProps = {
  p?: keyof DefaultTheme['space'];
  px?: keyof DefaultTheme['space'];
  py?: keyof DefaultTheme['space'];
  pt?: keyof DefaultTheme['space'];
  pr?: keyof DefaultTheme['space'];
  pb?: keyof DefaultTheme['space'];
  pl?: keyof DefaultTheme['space'];
};
export type MarginProps = {
  m?: keyof DefaultTheme['space'];
  mx?: keyof DefaultTheme['space'];
  my?: keyof DefaultTheme['space'];
  mt?: keyof DefaultTheme['space'];
  mr?: keyof DefaultTheme['space'];
  mb?: keyof DefaultTheme['space'];
  ml?: keyof DefaultTheme['space'];
};

export const backgroundColor = (props: StyledProps<BackgroundProps>) => ({
  backgroundColor: props.theme.colors[props.bg],
});

export const padding = (props: StyledProps<PaddingProps>) => ({
  padding: props.theme.space[props.p],
  paddingHorizontal: props.theme.space[props.px],
  paddingVertical: props.theme.space[props.py],
  paddingTop: props.theme.space[props.pt],
  paddingRight: props.theme.space[props.pr],
  paddingBottom: props.theme.space[props.pb],
  paddingLeft: props.theme.space[props.pl],
});

export const margin = (props: StyledProps<MarginProps>) => ({
  margin: props.theme.space[props.m],
  marginHorizontal: props.theme.space[props.mx],
  marginVertical: props.theme.space[props.my],
  marginTop: props.theme.space[props.mt],
  marginRight: props.theme.space[props.mr],
  marginBottom: props.theme.space[props.mb],
  marginLeft: props.theme.space[props.ml],
});
