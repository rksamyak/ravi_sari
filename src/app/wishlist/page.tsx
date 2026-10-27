'use client';
import { useWishlist } from '@/context/WishlistContext';
import ProductCard from '@/components/ProductCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export default function WishlistPage() {
  const { items } = useWishlist();
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#4A1942] text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold">My Wishlist</h1>
          <p className="text-white/70 mt-2">{items.length} items saved</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Wishlist' }]} />
        {items.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {items.map(product => <ProductCard key={product.id} product={product} />)}
          </div>
        ) : (
          <div className="text-center py-20">
            <svg className="w-20 h-20 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            <h2 className="text-xl font-serif font-bold text-gray-600 mb-2">Your wishlist is empty</h2>
            <p className="text-gray-500 mb-4">Save items you love to your wishlist</p>
            <Link href="/sarees" className="inline-block bg-[#8B1A2B] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#6d1422] transition">Start Shopping</Link>
          </div>
        )}
      </div>
    </div>
  );
}
