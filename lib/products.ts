export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: 'Ноутбуки' | 'Телефоны' | 'Планшеты' | 'Аксессуары';
  rating: number;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'MacBook Pro 16"',
    price: 249990,
    description: 'Мощный ноутбук для профессионалов с чипом M3 Max',
    category: 'Ноутбуки',
    rating: 4.9,
    inStock: true,
  },
  {
    id: 2,
    name: 'iPhone 15 Pro',
    price: 119990,
    description: 'Флагманский смартфон с титановым корпусом и камерой 48 МП',
    category: 'Телефоны',
    rating: 4.8,
    inStock: true,
  },
  {
    id: 3,
    name: 'AirPods Pro 2',
    price: 24990,
    description: 'Беспроводные наушники с активным шумоподавлением',
    category: 'Аксессуары',
    rating: 4.7,
    inStock: true,
  },
  {
    id: 4,
    name: 'iPad Air',
    price: 64990,
    description: 'Лёгкий планшет с чипом M1 и дисплеем Liquid Retina',
    category: 'Планшеты',
    rating: 4.6,
    inStock: true,
  },
  {
    id: 5,
    name: 'Samsung Galaxy S24',
    price: 89990,
    description: 'Смартфон с AI-функциями и ярким AMOLED-дисплеем',
    category: 'Телефоны',
    rating: 4.5,
    inStock: true,
  },
  {
    id: 6,
    name: 'Sony WH-1000XM5',
    price: 34990,
    description: 'Накладные наушники с лучшим в классе шумоподавлением',
    category: 'Аксессуары',
    rating: 4.9,
    inStock: false,
  },
  {
    id: 7,
    name: 'Apple Watch Series 9',
    price: 44990,
    description: 'Умные часы с ярким дисплеем и датчиком здоровья',
    category: 'Аксессуары',
    rating: 4.6,
    inStock: true,
  },
  {
    id: 8,
    name: 'Logitech MX Master 3S',
    price: 9990,
    description: 'Эргономичная мышь для продуктивной работы',
    category: 'Аксессуары',
    rating: 4.8,
    inStock: true,
  },
  {
    id: 9,
    name: 'Kindle Paperwhite',
    price: 14990,
    description: 'Электронная книга с подсветкой и влагозащитой',
    category: 'Планшеты',
    rating: 4.7,
    inStock: true,
  },
  {
    id: 10,
    name: 'Dell XPS 15',
    price: 189990,
    description: 'Премиальный ноутбук с безрамочным дисплеем',
    category: 'Ноутбуки',
    rating: 4.5,
    inStock: true,
  },
  {
    id: 11,
    name: 'Xiaomi Pad 6',
    price: 29990,
    description: 'Планшет с экраном 144 Гц и быстрой зарядкой',
    category: 'Планшеты',
    rating: 4.4,
    inStock: true,
  },
  {
    id: 12,
    name: 'Anker PowerBank 20000',
    price: 4990,
    description: 'Ёмкий внешний аккумулятор с быстрой зарядкой',
    category: 'Аксессуары',
    rating: 4.6,
    inStock: true,
  },
];