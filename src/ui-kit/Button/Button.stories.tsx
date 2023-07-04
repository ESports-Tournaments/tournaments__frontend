import '~/styles/global.scss';

import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <Button name="Test" onClick={action('onClick')} />;
  },
};

export default meta;
