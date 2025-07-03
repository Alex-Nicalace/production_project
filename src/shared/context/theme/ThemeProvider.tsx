import { JSX, useCallback, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

type TThemeProviderProps = { children: JSX.Element; initialTheme?: Theme };
function ThemeProvider({
  children,
  initialTheme,
}: TThemeProviderProps): JSX.Element {
  const [theme, setTheme] = useState<Theme>(initialTheme ?? defaultTheme);

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
