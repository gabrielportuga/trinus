import React from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Main } from './src/components/navigation/main';
import { theme } from './src/core/theme';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppearanceProvider>
        <PaperProvider theme={theme}>
          <Main />
        </PaperProvider>
      </AppearanceProvider>
    </SafeAreaProvider>
  );
}
