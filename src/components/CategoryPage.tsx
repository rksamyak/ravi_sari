'use client';
import { useState, useMemo } from 'react';
import { Product } from '@/data/products';
import ProductCard from './ProductCard';
import FilterSidebar from './FilterSidebar';
import Breadcrumbs from './Breadcrumbs';

interface CategoryPageProps {
  title: string;
  description: string;
  products: Product[];
  breadcrumb: string;
}

export default function CategoryPage({ title, description, products, breadcrumb }: CategoryPageProps) {
  const [filters, setFilters] = useState<Record<string, string[]>>({});
  const [sort, setSort] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];
    if (filters['Color']?.length) result = result.filter(p => filters['Color'].includes(p.color));
    if (filters['Fabric']?.length) result = result.filter(p => filters['Fabric'].some(f => p.fabric.includes(f)));
    if (filters['Occasion']?.length) result = result.filter(p => filters['Occasion'].includes(p.occasion));

    switch (sort) {
      case 'price-low': result.sort((a, b) => a.price - b.price); break;
      case 'price-high': result.sort((a, b) => b.price - a.price); break;
      case 'newest': result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); break;
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
      default: result.sort((a, b) => b.reviews - a.reviews);
    }
    return result;
  }, [products, filters, sort]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#4A1942] text-white py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif font-bold">{title}</h1>
          <p className="text-white/70 mt-2">{description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumbs items={[{ label: breadcrumb }]} />

        <div className="flex gap-8 pb-12">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <FilterSidebar filters={filters} onFilterChange={setFilters} />
          </div>

          {/* Products */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-500">{filtered.length} products found</p>
              <div className="flex items-center gap-3">
                <button onClick={() => setShowFilters(true)} className="lg:hidden flex items-center gap-1 text-sm border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-100">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
                  Filters
                </button>
                <select value={sort} onChange={e => setSort(e.target.value)} className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#8B1A2B]">
                  <option value="popular">Most Popular</option>
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">No products match your filters</p>
                <button onClick={() => setFilters({})} className="mt-4 text-[#8B1A2B] font-medium hover:underline">Clear Filters</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {showFilters && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowFilters(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-xl overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-serif text-lg font-bold">Filters</h3>
              <button onClick={() => setShowFilters(false)} className="p-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <FilterSidebar filters={filters} onFilterChange={setFilters} />
          </div>
        </div>
      )}
    </div>
  );
}
