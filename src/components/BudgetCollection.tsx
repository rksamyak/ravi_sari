'use client';
import Link from 'next/link';
import { getProductsByPriceRange } from '@/data/products';

const ranges = [
  { label: 'Under ₹999', min: 0, max: 999, gradient: 'from-emerald-700 to-teal-500' },
  { label: 'Under ₹1,999', min: 0, max: 1999, gradient: 'from-blue-700 to-indigo-500' },
  { label: 'Under ₹4,999', min: 0, max: 4999, gradient: 'from-purple-700 to-violet-500' },
  { label: 'Under ₹9,999', min: 0, max: 9999, gradient: 'from-rose-700 to-pink-500' },
];

export default function BudgetCollection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-[#1a1a1a] mb-2">Shop by Budget</h2>
        <p className="text-center text-gray-500 mb-10">Beautiful ethnic wear for every budget</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {ranges.map(range => {
            const prods = getProductsByPriceRange(range.min, range.max);
            return (
              <Link key={range.label} href={`/sarees?maxPrice=${range.max}`} className="group relative h-52 md:h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${range.gradient} group-hover:scale-105 transition-transform duration-500`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  <span className="text-3xl font-serif font-bold mb-1">{range.label}</span>
                  <span className="text-white/70 text-sm">{prods.length}+ Products</span>
                  <span className="mt-4 border border-white/50 px-4 py-1.5 rounded-lg text-sm group-hover:bg-white group-hover:text-gray-800 transition">Shop Now</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
