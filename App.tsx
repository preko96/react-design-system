import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import Level from './src/components/Level';
import Typography from './src/components/Typography';

const text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Level gap="small">
            <Level.Left>
              <View style={{ height: 50, width: 50, backgroundColor: 'red' }} />
            </Level.Left>
            <Level.Wrap>
              <Typography>{text}</Typography>
            </Level.Wrap>
          </Level>
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
