import type { Decorator } from '@storybook/react';
import { Theme, ThemeProvider, useTheme } from 'shared/context/theme';
import { classNames } from 'shared/lib';

export const ThemeDecorator =
  (theme: Theme): Decorator =>
  // eslint-disable-next-line react/display-name
  (Story) =>
    (
      <ThemeProvider initialTheme={theme}>
        <App>
          <Story />
        </App>
      </ThemeProvider>
    );

interface StoryProps {
  children: React.ReactNode;
}
function App({ children }: StoryProps) {
  const { theme } = useTheme();
  return <div className={classNames('app', {}, [theme])}>{children}</div>;
}
