export const GAME_ITEMS = [
  { label: 'Бесплатные', path: '##' },
  { label: 'Платные', path: '##' },
  { label: 'Простые', path: '##' },
  { label: 'Новинки', path: '##' },
  { label: 'Облачные', path: '##' },
  { label: 'Торговая площадка', path: '##' },
];

export const TOURNAMENTS_ITEMS = [
  { label: 'Все турниры', path: '' },
  { label: 'Напарники', path: '/teamfinder' },
  { label: 'Рейтинги', path: '/ratings' },
];

export const MEDIA_ITEMS = [
  { label: 'Все материалы', path: '##' },
  { label: 'Новости игр', path: '##' },
  { label: 'Статьи', path: '##' },
  { label: 'Руководства', path: '##' },
  { label: 'Индустрия', path: '##' },
  { label: 'База игр', path: '##' },
  { label: 'Игры Будущего', path: '##' },
];

export const NAV_ITEMS = [
  { label: 'Игры', path: '/games', dropdown: GAME_ITEMS },
  { label: 'Live', path: '/live' },
  { label: 'Турниры', path: '/tournaments', dropdown: TOURNAMENTS_ITEMS },
  { label: 'Media', path: '/media', dropdown: MEDIA_ITEMS },
];
