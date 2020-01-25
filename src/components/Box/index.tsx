import styled from 'styled-components/native';
import React from 'react';
import { backgroundColor, BackgroundProps, margin, MarginProps, padding, PaddingProps } from '../utils';

type BoxProps = PaddingProps & MarginProps & BackgroundProps;

const Box = styled.View<BoxProps>(padding, margin, backgroundColor);

const Container = styled(Box)``;
Container.defaultProps = { p: 'normal' };

const SectionHorizontal = styled(Box)``;
SectionHorizontal.defaultProps = { px: 'normal' };

const SectionVertical = styled(Box)``;
SectionVertical.defaultProps = { py: 'normal' };

class Section extends React.PureComponent<BoxProps> {
  static Horizontal = SectionHorizontal;
  static Vertical = SectionVertical;
  render() {
    return <Box p="normal" {...this.props} />;
  }
}

export { Box, Container, Section };
