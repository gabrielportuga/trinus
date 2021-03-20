import React from 'react';
import { useColorScheme } from 'react-native-appearance';
import {
  DarkTheme, DefaultTheme, Provider as PaperProvider
} from 'react-native-paper';
import { PreferencesContext } from '../../context/preferencesContext';
import { RootNavigator } from './rootNavigator';


export const Main = () => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = React.useState<'light' | 'dark'>(
    colorScheme === 'dark' ? 'dark' : 'light'
  );

  function toggleTheme() {
    setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
  }

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      theme,
    }),
    [theme]
  );

  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider
        theme={
          theme === 'light'
            ? {
                ...DefaultTheme,
                roundness: 20,
                colors: {
                  ...DefaultTheme.colors,
                  primary: '#46AF94',
                  accent: '#4EC1A4',
                  error: '#f13a59',
                },
              }
            : {
                ...DarkTheme,
                colors: { ...DarkTheme.colors, primary: '#4EC1A4' },
              }
        }
      >
        <RootNavigator />
      </PaperProvider>
    </PreferencesContext.Provider>
  );
};
