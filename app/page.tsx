import { products } from '@/lib/products';
import ProductList from '@/components/productList';
import { ShoppingBag } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-orange-500 rounded-xl">
              <ShoppingBag className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              Каталог товаров
            </h1>
          </div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Электроника, аксессуары и гаджеты — всё, что нужно для работы и отдыха.
            Всего в каталоге: {products.length} товаров.
          </p>
        </div>

        {/* Клиентский компонент со списком товаров */}
        <ProductList products={products} />
      </div>
    </main>
  );
}