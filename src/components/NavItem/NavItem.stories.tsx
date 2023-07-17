import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import NavItem from './NavItem';

export default {
  title: 'Components/NavItem',
  component: NavItem,
  tags: ['autodocs'],
  decorators: [(Story) => <MemoryRouter>{Story()}</MemoryRouter>],
} as Meta;

type Story = StoryObj<typeof NavItem>;
export const Default: Story = {
  args: {
    label: 'Home',
    path: '/',
    dropdown: [
      {
        label: 'Team',
        path: '/team',
      },
      {
        label: 'Company',
        path: '/company',
      },
    ],
  },
};
