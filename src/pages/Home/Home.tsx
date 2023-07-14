import { FC } from 'react';

import Table, { ColumnsType } from '~/ui-kit/Table';

type DataType = {
  tournament: string;
  start: string;
  duration: string;
  format: string;
  members: string;
  terms: string;
  prize: string;
  status: string;
};

const columns: ColumnsType<DataType> = [
  {
    title: 'Турнир',
    key: 'tournament',
  },
  {
    title: 'Начало',
    key: 'start',
  },
  {
    title: 'Длит.',
    key: 'duration',
  },
  {
    title: 'Формат',
    key: 'format',
  },
  {
    title: 'Участники',
    key: 'members',
  },
  {
    title: 'Условия',
    key: 'terms',
  },
  {
    title: 'Призовой фонд',
    key: 'prize',
  },
  {
    title: 'Статус',
    key: 'status',
  },
];

const data: DataType[] = [
  {
    tournament: 'Tournament 1',
    start: '2023-07-10',
    duration: '3 days',
    format: 'Single Elimination',
    members: '157 / 256',
    terms: 'Online',
    prize: '$10,000',
    status: 'Ongoing',
  },
  {
    tournament: 'Tournament 2',
    start: '2023-07-15',
    duration: '2 days',
    format: 'Double Elimination',
    members: '59 / 256',
    terms: 'LAN',
    prize: '$5,000',
    status: 'Upcoming',
  },
  {
    tournament: 'Tournament 3',
    start: '2023-07-20',
    duration: '4 days',
    format: 'Round Robin',
    members: '24 / 512',
    terms: 'Online',
    prize: '$8,000',
    status: 'Finished',
  },
];

const Home: FC = () => {
  return (
    <main>
      <Table columns={columns} data={data} />
    </main>
  );
};

export default Home;
