'use client';
import Link from 'next/link';
import { getTrendingProducts } from '@/data/products';
import ProductCard from './ProductCard';

export default function TrendingProducts() {
  const trending = getTrendingProducts().slice(0, 8);
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1a1a1a]">Trending Now</h2>
            <p className="text-gray-500 mt-1">Most loved by our customers</p>
          </div>
          <Link href="/sarees" className="text-[#8B1A2B] font-medium hover:underline hidden md:block">View All →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {trending.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-8 md:hidden">
          <Link href="/sarees" className="text-[#8B1A2B] font-medium hover:underline">View All →</Link>
        </div>
      </div>
    </section>
  );
}
