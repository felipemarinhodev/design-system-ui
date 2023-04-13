import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

const meta = {
  title: 'Component/Card',
  component: Card
} satisfies Meta<typeof Card>
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <Card {...args}>
      <h1>Test Card</h1>
      <Button />
    </Card>
  )
}