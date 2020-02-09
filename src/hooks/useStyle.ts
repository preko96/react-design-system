import {StyleSheet} from 'react-native';
import {DependencyList, useMemo} from 'react';

export default function useStyleSheet<T>(styles: T, deps: DependencyList) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => StyleSheet.create(styles), deps);
}
