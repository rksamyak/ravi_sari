'use client';
import { useParams } from 'next/navigation';
import { getProductBySlug, formatPrice, products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import PlaceholderImage from '@/components/PlaceholderImage';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import { useState, Suspense } from 'react';

function ProductContent() {
  const { slug } = useParams();
  const product = getProductBySlug(slug as string);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-serif font-bold text-gray-800">Product not found</h1>
        <Link href="/" className="mt-4 inline-block text-[#8B1A2B] hover:underline">← Back to Home</Link>
      </div>
    );
  }

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const wishlisted = isInWishlist(product.id);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumbs items={[{ label: product.category.charAt(0).toUpperCase() + product.category.slice(1), href: `/${product.category}` }, { label: product.name }]} />
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden">
            <PlaceholderImage name={product.name} category={product.category} className="w-full aspect-[3/4]" />
            {product.discount > 0 && (
              <span className="absolute top-4 left-4 bg-[#8B1A2B] text-white text-sm font-bold px-3 py-1.5 rounded-lg">{product.discount}% OFF</span>
            )}
          </div>

          {/* Info */}
          <div className="py-4">
            {product.isNew && <span className="inline-block bg-[#C5A44E] text-white text-xs font-bold px-3 py-1 rounded mb-3">NEW ARRIVAL</span>}
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">{product.name}</h1>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <span className="text-3xl font-bold text-[#8B1A2B]">{formatPrice(product.price)}</span>
              {product.originalPrice > product.price && (
                <>
                  <span className="text-lg text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
                  <span className="bg-green-100 text-green-700 text-sm font-medium px-2 py-0.5 rounded">Save {formatPrice(product.originalPrice - product.price)}</span>
                </>
              )}
            </div>

            <p className="text-gray-600 mt-4 leading-relaxed">{product.description}</p>

            <div className="grid grid-cols-2 gap-4 mt-6 py-4 border-t border-b border-gray-100">
              <div><span className="text-xs text-gray-500">Fabric</span><p className="font-medium text-sm">{product.fabric}</p></div>
              <div><span className="text-xs text-gray-500">Color</span><p className="font-medium text-sm">{product.color}</p></div>
              <div><span className="text-xs text-gray-500">Occasion</span><p className="font-medium text-sm">{product.occasion}</p></div>
              {product.work && <div><span className="text-xs text-gray-500">Work</span><p className="font-medium text-sm">{product.work}</p></div>}
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mt-6">
              <span className="text-sm font-medium text-gray-700">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-2 hover:bg-gray-100 transition">-</button>
                <span className="px-4 py-2 border-x border-gray-300 min-w-[40px] text-center">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-3 py-2 hover:bg-gray-100 transition">+</button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-6">
              <button onClick={() => { for (let i = 0; i < qty; i++) addToCart(product); }} className="flex-1 bg-[#8B1A2B] text-white py-3.5 rounded-lg font-semibold hover:bg-[#6d1422] transition text-lg">
                Add to Cart
              </button>
              <button onClick={() => toggleWishlist(product)} className={`px-5 rounded-lg border-2 transition ${wishlisted ? 'border-red-500 text-red-500 bg-red-50' : 'border-gray-300 text-gray-600 hover:border-red-500 hover:text-red-500'}`}>
                <svg className="w-5 h-5" fill={wishlisted ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </button>
            </div>

            {/* Trust */}
            <div className="grid grid-cols-3 gap-3 mt-6 text-center">
              <div className="bg-gray-50 rounded-lg p-3"><span className="text-lg">🚚</span><p className="text-xs text-gray-600 mt-1">Free Shipping</p></div>
              <div className="bg-gray-50 rounded-lg p-3"><span className="text-lg">↩️</span><p className="text-xs text-gray-600 mt-1">7-Day Returns</p></div>
              <div className="bg-gray-50 rounded-lg p-3"><span className="text-lg">✅</span><p className="text-xs text-gray-600 mt-1">Authentic</p></div>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin w-8 h-8 border-4 border-[#8B1A2B] border-t-transparent rounded-full" /></div>}>
      <ProductContent />
    </Suspense>
  );
}
