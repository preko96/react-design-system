import React, { FC } from 'react';
import { BoxProps } from '../Box';
import { View, ViewProps } from 'react-native';
import Flex, { FlexContainerProps } from '../Flex';
import useGap, { GapProp } from '../../hooks/useGap';

type InlineProps = ViewProps &
  BoxProps &
  FlexContainerProps & {
    gap?: GapProp;
  };

const Inline: FC<InlineProps> = ({ gap, style, children, ...otherProps }) => {
  const [spaceX, spaceY] = useGap(gap);
  const validChildren = React.Children.toArray(children).filter(React.isValidElement);
  return (
    <Flex style={[style, { marginLeft: -spaceX, marginTop: -spaceY }]} {...otherProps}>
      {React.Children.map(validChildren, child => (
        <View style={{ paddingLeft: spaceX, paddingTop: spaceY }}>{child}</View>
      ))}
    </Flex>
  );
};

Inline.defaultProps = { gap: 'normal' };

export default Inline;
