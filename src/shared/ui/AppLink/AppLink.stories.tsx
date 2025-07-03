import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'shared/context/theme';
import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
  title: 'shared/ui/AppLink', // shared/ui/ — путь в storybook AppLink — заголовок
  component: AppLink, // React-компонент, к которому относятся истории
  tags: ['autodocs'],
  // Пропсы по умолчанию для всех историй
  args: {
    to: '/',
    children: 'Link',
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {};

export const PrimaryDark: Story = {
  // декортор для текущей стори
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Secondary: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
  },
};

export const SecondaryDark: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
  },
  // декортор для текущей стори
  decorators: [ThemeDecorator(Theme.DARK)],
};
