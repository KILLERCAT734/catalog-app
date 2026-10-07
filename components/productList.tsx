'use client';

import { useState } from 'react';
import { Product } from '@/lib/products';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart, Check, X } from 'lucide-react';

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  const [filter, setFilter] = useState<string>('Все');

  const categories = ['Все', 'Ноутбуки', 'Телефоны', 'Планшеты', 'Аксессуары'];

  const filtered =
    filter === 'Все' ? products : products.filter((p) => p.category === filter);

  return (
    <div>
      {/* Фильтр по категориям */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === cat
                ? 'bg-orange-500 text-white'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Сетка товаров */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <Card
            key={product.id}
            className="flex flex-col hover:shadow-lg transition-shadow"
          >
            <CardHeader>
              {/* Заглушка вместо картинки */}
              <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center mb-4">
                <span className="text-6xl">📱</span>
              </div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded">
                  {product.category}
                </span>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium text-slate-700">
                    {product.rating}
                  </span>
                </div>
              </div>
              <CardTitle className="text-base leading-tight">
                {product.name}
              </CardTitle>
            </CardHeader>

            <CardContent className="flex-1">
              <p className="text-sm text-slate-600 line-clamp-2">
                {product.description}
              </p>
            </CardContent>

            <CardFooter className="flex flex-col gap-3 pt-4 border-t">
              <div className="flex items-center justify-between w-full">
                <span className="text-xl font-bold text-slate-900">
                  {product.price.toLocaleString('ru-RU')} ₽
                </span>
                {product.inStock ? (
                  <span className="flex items-center gap-1 text-xs text-green-600">
                    <Check className="w-3 h-3" />
                    В наличии
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-xs text-red-500">
                    <X className="w-3 h-3" />
                    Нет в наличии
                  </span>
                )}
              </div>
              <Button
                disabled={!product.inStock}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white disabled:opacity-50"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                В корзину
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-slate-500 py-12">
          В этой категории пока нет товаров
        </p>
      )}
    </div>
  );
}