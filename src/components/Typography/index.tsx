import React from 'react';
import styled, { DefaultTheme } from 'styled-components/native';
import { variant } from 'styled-system';
import { StyledProps } from 'styled-components';

export type TypographyProps = {
  size: keyof DefaultTheme['typography']['size'];
  type: keyof DefaultTheme['typography']['type'];
};

const cropNegativeSpace = (props: StyledProps<TypographyProps>) => {
  const fontSize = props.theme.typography.size[props.size]?.fontSize ?? 16;
  const topCrop = fontSize * -props.theme.typography.crop.top;
  const bottomCrop = fontSize * -props.theme.typography.crop.bottom;

  return {
    fontSize: fontSize,
    marginTop: topCrop,
    marginBottom: bottomCrop,
  };
};

const Typography = styled.Text<TypographyProps>(
  variant({
    prop: 'size',
    scale: 'typography.size',
  }),
  variant({
    prop: 'type',
    scale: 'typography.type',
  }),
  cropNegativeSpace,
);

export default Typography;
