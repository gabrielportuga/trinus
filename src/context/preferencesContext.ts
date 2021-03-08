import React from 'react';
import { User } from '../service/secureStore';

type PreferencesContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  toggleRTL: () => void;
  user: User;
};

export const PreferencesContext = React.createContext<PreferencesContextType>({
  theme: 'light',
  toggleTheme: () => {},
  toggleRTL: () => {},
  user: null
});
