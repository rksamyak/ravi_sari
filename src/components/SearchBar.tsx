'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { products } from '@/data/products';
import Link from 'next/link';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const router = useRouter();

  const results = query.length > 1
    ? products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase())).slice(0, 5)
    : [];

  return (
    <div className="relative w-full">
      <form onSubmit={e => { e.preventDefault(); if (query) router.push(`/sarees?search=${query}`); }} className="flex">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 200)}
          placeholder="Search for sarees, lehengas, kurtis..."
          className="w-full px-4 py-2.5 border border-gray-300 rounded-l-lg focus:outline-none focus:border-[#8B1A2B] text-sm"
        />
        <button type="submit" className="bg-[#8B1A2B] text-white px-5 rounded-r-lg hover:bg-[#6d1422] transition">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
      </form>
      {focused && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-b-lg shadow-lg z-50 mt-1">
          {results.map(p => (
            <Link key={p.id} href={`/product/${p.slug}`} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-200 to-amber-100 rounded flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-800">{p.name}</p>
                <p className="text-xs text-[#8B1A2B] font-semibold">₹{p.price.toLocaleString('en-IN')}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
