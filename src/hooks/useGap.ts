import useTheme from './useTheme';
import { DefaultTheme } from 'styled-components';

// @ts-ignore
export type GapProp = keyof DefaultTheme['space'] | (keyof DefaultTheme['space'])[];

export default function useGap(gap: GapProp) {
  const theme = useTheme();
  const [spaceX = 0, spaceY = 0] = Array.isArray(gap) ? [theme.space[gap[0]], theme.space[gap[1]]] : [theme.space[gap], theme.space[gap]];
  return [spaceX, spaceY];
}
