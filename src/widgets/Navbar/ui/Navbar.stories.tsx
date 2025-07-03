import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'shared/context/theme';
import { Navbar } from './Navbar';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'widgets/Navbar', // widgets/ — путь в storybook Navbar — заголовок
  component: Navbar, // React-компонент, к которому относятся истории
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {
  // декортор для текущей стори
  decorators: [ThemeDecorator(Theme.DARK)],
};
