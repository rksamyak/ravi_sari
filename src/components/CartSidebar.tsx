'use client';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { formatPrice } from '@/data/products';

export default function CartSidebar() {
  const { items, removeFromCart, updateQuantity, totalPrice, isCartOpen, setIsCartOpen } = useCart();
  if (!isCartOpen) return null;
  return (
    <div className="fixed inset-0 z-[70]">
      <div className="absolute inset-0 bg-black/50" onClick={() => setIsCartOpen(false)} />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-xl flex flex-col">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="font-serif text-xl font-bold text-[#8B1A2B]">Shopping Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              <p className="text-gray-500">Your cart is empty</p>
              <button onClick={() => setIsCartOpen(false)} className="mt-4 text-[#8B1A2B] font-medium hover:underline">Continue Shopping</button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.product.id} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-20 h-24 bg-gradient-to-br from-rose-200 to-amber-100 rounded flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">{item.product.name}</p>
                    <p className="text-sm font-bold text-[#8B1A2B] mt-1">{formatPrice(item.product.price)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-sm hover:bg-gray-100">-</button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-sm hover:bg-gray-100">+</button>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.product.id)} className="text-gray-400 hover:text-red-500 self-start">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        {items.length > 0 && (
          <div className="border-t p-4 space-y-3">
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-[#8B1A2B]">{formatPrice(totalPrice)}</span>
            </div>
            <Link href="/cart" onClick={() => setIsCartOpen(false)} className="block w-full bg-[#8B1A2B] text-white text-center py-3 rounded-lg font-medium hover:bg-[#6d1422] transition">
              View Cart & Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
