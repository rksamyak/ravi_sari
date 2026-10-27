'use client';
import { getNewArrivals } from '@/data/products';
import ProductCard from './ProductCard';

export default function NewArrivals() {
  const newProducts = getNewArrivals().slice(0, 8);
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-[#1a1a1a] mb-2">New Arrivals</h2>
        <p className="text-center text-gray-500 mb-10">Fresh additions to our collection</p>
        <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {newProducts.map(product => (
            <div key={product.id} className="min-w-[240px] md:min-w-[280px] snap-start">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
