import React, { ComponentType, createContext, FC, useContext } from 'react';
import { DefaultTheme } from 'styled-components';
import { ViewProps } from 'react-native';
import Flex, { FlexChildrenProps, FlexContainerProps } from '../Flex';
import { BoxProps } from '../Box';
import useGap from '../../hooks/useGap';
import styled from 'styled-components/native';

const GapContext = createContext<number[] | undefined>(undefined);

type LevelProps = ViewProps &
  BoxProps &
  FlexContainerProps & {
    gap?: keyof DefaultTheme['space'];
  };

type LevelChildProps = ViewProps &
  BoxProps &
  FlexChildrenProps & {
    gap: number[];
  };

const LevelContainer: FC<LevelProps> = ({ gap, style, ...otherProps }) => {
  const [spaceX, spaceY] = useGap(gap);
  return (
    <GapContext.Provider value={[spaceX, spaceY]}>
      <Flex style={[style, { marginLeft: -spaceX, marginTop: -spaceY, flexWrap: 'nowrap' }]} {...otherProps} />
    </GapContext.Provider>
  );
};

const childGap = (props: LevelChildProps) => {
  const [spaceX, spaceY] = props.gap;
  return { paddingLeft: spaceX, paddingTop: spaceY };
};

export const Left = styled(Flex.Children).attrs({
  flexGrow: 1,
  flexShrink: 1,
  justifyContent: 'flex-start',
})<LevelChildProps>(childGap, { alignItems: 'flex-start' });

export const Center = styled(Flex.Children).attrs({
  flexGrow: 1,
  flexShrink: 1,
})<LevelChildProps>(childGap, { alignItems: 'center' });

export const Right = styled(Flex.Children).attrs({
  flexGrow: 1,
  flexShrink: 1,
})<LevelChildProps>(childGap, { alignItems: 'flex-end' });

export const Wrap = styled(Flex.Children).attrs({
  flexShrink: 1,
})<LevelChildProps>(childGap);

export const Full = styled(Flex.Children).attrs({
  flexGrow: 1,
  flexShrink: 1,
})<LevelChildProps>(childGap);

function withGap<T>(WrappedComponent: ComponentType<T>) {
  return function WithGap(props: Omit<T, 'gap'>) {
    const gap = useContext(GapContext);
    // @ts-ignore
    return <WrappedComponent gap={gap} {...props} />;
  };
}

export default class Level extends React.PureComponent<LevelProps> {
  static Left = withGap(Left);
  static Center = withGap(Center);
  static Right = withGap(Right);
  static Wrap = withGap(Wrap);
  static Full = withGap(Full);

  render() {
    return <LevelContainer {...this.props} />;
  }
}
