import React from 'react';

type PreferencesContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  toggleRTL: () => void;
};

export const PreferencesContext = React.createContext<PreferencesContextType>({
  theme: 'light',
  toggleTheme: () => {},
  toggleRTL: () => {},
});
