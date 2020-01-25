import React, { FC } from 'react';
import styled, { DefaultTheme } from 'styled-components/native';
import { variant } from 'styled-system';

export type TypographyProps = {
  size: keyof DefaultTheme['typography']['size'];
  type: keyof DefaultTheme['typography']['type'];
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
  props => {
    const fontSize = props.theme.typography.size[props.size]?.fontSize ?? 16;
    return {
      marginTop: -(fontSize * 0.39),
      marginBottom: -(fontSize * 0.43),
    };
  },
);

export default Typography;
