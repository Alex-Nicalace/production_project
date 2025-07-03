import type { Preview } from '@storybook/react-webpack5';
import { RouterDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'shared/context/theme';

import 'app/styles/index.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator],
};

export default preview;
