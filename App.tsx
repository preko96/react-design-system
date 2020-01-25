import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Box, Container } from './src/components/Box';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import Typography from './src/components/Typography';

type Idk = 'a' | 'b' | 'c';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <Box pt="xlarge" />
        <Box bg="ternary">
          <Typography size="h1" type="normal">
            Lorem ipus a
          </Typography>
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
