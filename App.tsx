import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Box } from './src/components/Box';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import Typography from './src/components/Typography';

const text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Box pt="xlarge" />
          <Box bg="ternary">
            <Typography size="h3" type="normal">
              {text}
            </Typography>
          </Box>
        </ScrollView>
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
