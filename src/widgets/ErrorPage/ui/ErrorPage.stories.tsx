import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'shared/context/theme';
import ErrorPage from './ErrorPage';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'widgets/ErrorPage', // widgets/ — путь в storybook ErrorPage — заголовок
  component: ErrorPage, // React-компонент, к которому относятся истории
  tags: ['autodocs'],
} satisfies Meta<typeof ErrorPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {
  // декортор для текущей стори
  decorators: [ThemeDecorator(Theme.DARK)],
};
