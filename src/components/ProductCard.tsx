'use client';
import Link from 'next/link';
import { Product, formatPrice } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import PlaceholderImage from './PlaceholderImage';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const wishlisted = isInWishlist(product.id);

  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="relative overflow-hidden">
        <Link href={`/product/${product.slug}`}>
          <PlaceholderImage name={product.name} category={product.category} className="w-full aspect-[3/4] group-hover:scale-105 transition-transform duration-500" />
        </Link>
        {product.discount > 0 && (
          <span className="absolute top-3 left-3 bg-[#8B1A2B] text-white text-xs font-bold px-2 py-1 rounded">{product.discount}% OFF</span>
        )}
        {product.isNew && (
          <span className="absolute top-3 right-12 bg-[#C5A44E] text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
        )}
        <button onClick={() => toggleWishlist(product)} className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition ${wishlisted ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'}`}>
          <svg className="w-4 h-4" fill={wishlisted ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button onClick={() => addToCart(product)} className="w-full bg-white text-[#8B1A2B] py-2 rounded-lg font-medium text-sm hover:bg-gray-100 transition">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="p-4">
        <Link href={`/product/${product.slug}`}>
          <h3 className="text-sm font-medium text-gray-800 hover:text-[#8B1A2B] transition line-clamp-1">{product.name}</h3>
        </Link>
        <p className="text-xs text-gray-500 mt-1">{product.fabric} | {product.color}</p>
        <div className="flex items-center gap-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-amber-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          ))}
          <span className="text-xs text-gray-400 ml-1">({product.reviews})</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-bold text-[#8B1A2B]">{formatPrice(product.price)}</span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
          )}
        </div>
      </div>
    </div>
  );
}
