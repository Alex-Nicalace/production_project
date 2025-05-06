import { JSX, useCallback, useMemo, useState } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from '../lib/ThemeContext';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

type TThemeProviderProps = { children: JSX.Element };
function ThemeProvider({ children }: TThemeProviderProps): JSX.Element {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const toggleTheme = useCallback(
    (value?: Theme) => {
      const newTheme =
        value || (theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
      setTheme(newTheme);
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    },
    [theme]
  );

  const contextValue = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme]
  );

  return <ThemeContext value={contextValue}>{children}</ThemeContext>;
}

export default ThemeProvider;
