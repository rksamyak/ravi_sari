'use client';
import Link from 'next/link';
import { categories } from '@/data/products';

export default function CategoryCircles() {
  return (
    <section className="py-12 md:py-16 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-[#1a1a1a] mb-2">Shop by Category</h2>
        <p className="text-center text-gray-500 mb-10">Explore our handpicked collections</p>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link key={cat.name} href={`/${cat.slug}`} className="group flex flex-col items-center gap-3">
              <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br ${cat.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 ring-4 ring-white`}>
                <span className="text-white text-xs md:text-sm font-medium text-center leading-tight px-2">{cat.name.split(' ')[0]}</span>
              </div>
              <span className="text-xs md:text-sm text-gray-700 font-medium text-center group-hover:text-[#8B1A2B] transition">{cat.name}</span>
              <span className="text-[10px] text-gray-400">{cat.count}+ Items</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
