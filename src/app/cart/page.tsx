'use client';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/data/products';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import PlaceholderImage from '@/components/PlaceholderImage';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const shipping = totalPrice >= 999 ? 0 : 99;
  const grandTotal = totalPrice + shipping;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#4A1942] text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold">Shopping Cart</h1>
          <p className="text-white/70 mt-2">{items.length} items in your cart</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Cart' }]} />
        {items.length > 0 ? (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {items.map(item => (
                <div key={item.product.id} className="bg-white rounded-xl p-4 md:p-6 shadow-sm flex gap-4 md:gap-6">
                  <PlaceholderImage name={item.product.name} category={item.product.category} className="w-24 h-32 md:w-32 md:h-40 rounded-lg flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <Link href={`/product/${item.product.slug}`} className="text-lg font-medium text-gray-800 hover:text-[#8B1A2B] transition">{item.product.name}</Link>
                    <p className="text-sm text-gray-500 mt-1">{item.product.fabric} | {item.product.color}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <span className="text-xl font-bold text-[#8B1A2B]">{formatPrice(item.product.price)}</span>
                      {item.product.originalPrice > item.product.price && <span className="text-sm text-gray-400 line-through">{formatPrice(item.product.originalPrice)}</span>}
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="px-3 py-1.5 hover:bg-gray-100 transition text-sm">-</button>
                        <span className="px-4 py-1.5 border-x border-gray-300 text-sm">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="px-3 py-1.5 hover:bg-gray-100 transition text-sm">+</button>
                      </div>
                      <button onClick={() => removeFromCart(item.product.id)} className="text-red-500 hover:text-red-700 text-sm font-medium">Remove</button>
                    </div>
                  </div>
                </div>
              ))}
              <button onClick={clearCart} className="text-sm text-gray-500 hover:text-red-500 transition">Clear Cart</button>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-4">Order Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-gray-600">Subtotal</span><span className="font-medium">{formatPrice(totalPrice)}</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Shipping</span><span className="font-medium">{shipping === 0 ? <span className="text-green-600">FREE</span> : formatPrice(shipping)}</span></div>
                  {shipping > 0 && <p className="text-xs text-gray-400">Free shipping on orders above ₹999</p>}
                  <div className="border-t pt-3 flex justify-between text-lg font-bold">
                    <span>Total</span><span className="text-[#8B1A2B]">{formatPrice(grandTotal)}</span>
                  </div>
                </div>
                <button className="w-full bg-[#8B1A2B] text-white py-3.5 rounded-lg font-semibold hover:bg-[#6d1422] transition mt-6 text-lg">Proceed to Checkout</button>
                <Link href="/sarees" className="block text-center text-sm text-[#8B1A2B] mt-3 hover:underline">Continue Shopping</Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <svg className="w-20 h-20 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            <h2 className="text-xl font-serif font-bold text-gray-600 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-4">Add some beautiful ethnic wear to your cart</p>
            <Link href="/sarees" className="inline-block bg-[#8B1A2B] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#6d1422] transition">Start Shopping</Link>
          </div>
        )}
      </div>
    </div>
  );
}
