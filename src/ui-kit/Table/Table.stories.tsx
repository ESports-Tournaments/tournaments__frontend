import { Meta, StoryObj } from '@storybook/react';

import Table from './Table';

const meta = {
  title: 'Table',
  component: Table,
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: [
      {
        title: 'Name',
        key: 'name',
      },
      {
        title: 'Age',
        key: 'age',
      },
      {
        title: 'Address',
        key: 'address',
      },
      {
        title: 'Tags',
        key: 'tags',
      },
    ],
    data: [
      {
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      },
    ],
  },
};

export const WithCustomRenderData: Story = {
  args: {
    columns: [
      ...Default.args.columns,
      {
        title: 'Action',
        key: 'action',
      },
    ],
    data: [
      ...Default.args.data,
      {
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
        action: <button>Add friend</button>,
      },
    ],
  },
};

export default meta;
