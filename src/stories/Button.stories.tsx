import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';

const meta = {
  title: 'Component/Button',
  component: Button
} satisfies Meta<typeof Button>
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {}