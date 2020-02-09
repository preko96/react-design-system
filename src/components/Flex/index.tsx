import React from 'react';
import styled from 'styled-components/native';
import { Box, BoxProps } from '../Box';
import {
  AlignContentProps,
  AlignItemsProps,
  AlignSelfProps,
  FlexDirectionProps,
  FlexGrowProps,
  FlexShrinkProps,
  FlexWrapProps,
  JustifyContentProps,
} from 'styled-system';
import { CSSObject } from 'styled-components';
import { ViewProps } from 'react-native';

export type FlexContainerProps = {
  flexDirection?: FlexDirectionProps['flexDirection'];
  flexWrap?: FlexWrapProps['flexWrap'];
  justifyContent?: JustifyContentProps['justifyContent'];
  alignItems?: AlignItemsProps['alignItems'];
  alignContent?: AlignContentProps['alignContent'];
};

export type FlexChildrenProps = {
  flexGrow?: FlexGrowProps['flexGrow'];
  flexShrink?: FlexShrinkProps['flexShrink'];
  alignSelf?: AlignSelfProps['alignSelf'];
};

const Container = styled(Box)<FlexContainerProps>(props => {
  const { flexDirection, flexWrap, justifyContent, alignItems, alignContent } = props;
  return { flexDirection, flexWrap, justifyContent, alignItems, alignContent } as CSSObject;
});

const Children = styled(Box)<FlexChildrenProps>(props => {
  const { flexGrow, flexShrink, alignSelf } = props;
  return { flexGrow, flexShrink, alignSelf } as CSSObject;
});

Container.defaultProps = {
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
};

export default class Flex extends React.PureComponent<ViewProps & BoxProps & FlexContainerProps> {
  static Children = Children;
  render() {
    return <Container {...this.props} />;
  }
}
