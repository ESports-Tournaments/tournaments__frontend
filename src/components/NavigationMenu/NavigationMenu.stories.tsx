import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import NavigationMenu from './NavigationMenu';

export default {
  title: 'Components/Navigation',
  component: NavigationMenu,
  tags: ['autodocs'],
  decorators: [(Story) => <MemoryRouter>{Story()}</MemoryRouter>],
} as Meta;

type Story = StoryObj<typeof NavigationMenu>;
export const Default: Story = {
  args: {
    items: [
      {
        label: 'Home',
        path: '/',
      },
      {
        label: 'Products',
        path: '/products',
        dropdown: [
          {
            label: 'Category 1',
            path: '/category1',
          },
          {
            label: 'Category 2',
            path: '/category2',
          },
        ],
      },
      {
        label: 'About',
        path: '/about',
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
      {
        label: 'Contact',
        path: '/contact',
      },
    ],
  },
};
