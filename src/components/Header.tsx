'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import CartSidebar from './CartSidebar';
import MobileMenu from './MobileMenu';
import SearchBar from './SearchBar';

const navLinks = [
  { name: 'Sarees', href: '/sarees' },
  { name: 'Lehengas', href: '/lehengas' },
  { name: 'Wedding', href: '/wedding' },
  { name: 'Salwar Kameez', href: '/salwar-kameez' },
  { name: 'Kurtis', href: '/kurtis' },
  { name: 'Gowns', href: '/gowns' },
  { name: 'Blouses', href: '/blouses' },
  { name: "Men's", href: '/mens' },
  { name: 'Accessories', href: '/accessories' },
  { name: 'Fabrics', href: '/fabrics' },
];

export default function Header() {
  const { totalItems, setIsCartOpen } = useCart();
  const { totalItems: wishlistCount } = useWishlist();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#8B1A2B] text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span>Free Shipping on orders above ₹999 | COD Available</span>
          <div className="hidden md:flex gap-4">
            <Link href="/about" className="hover:text-amber-300 transition">About Us</Link>
            <Link href="/contact" className="hover:text-amber-300 transition">Contact</Link>
            <span>📞 +91 98765 43210</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Mobile menu btn */}
          <button onClick={() => setMobileOpen(true)} className="lg:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-3xl md:text-4xl font-bold text-[#8B1A2B] tracking-wide">Ravi</span>
            <span className="hidden sm:block text-[10px] text-gray-500 leading-tight">ETHNIC<br/>WEAR</span>
          </Link>

          {/* Search - desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <SearchBar />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3 md:gap-5">
            <button onClick={() => setSearchOpen(!searchOpen)} className="md:hidden p-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <Link href="/account" className="hidden sm:block p-2 hover:text-[#8B1A2B] transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </Link>
            <Link href="/wishlist" className="p-2 hover:text-[#8B1A2B] transition relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              {wishlistCount > 0 && <span className="absolute -top-1 -right-1 bg-[#8B1A2B] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">{wishlistCount}</span>}
            </Link>
            <button onClick={() => setIsCartOpen(true)} className="p-2 hover:text-[#8B1A2B] transition relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              {totalItems > 0 && <span className="absolute -top-1 -right-1 bg-[#8B1A2B] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">{totalItems}</span>}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        {searchOpen && (
          <div className="md:hidden px-4 pb-3">
            <SearchBar />
          </div>
        )}

        {/* Nav */}
        <nav className="hidden lg:block border-t border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex justify-center gap-1">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#8B1A2B] hover:bg-rose-50 transition rounded-t-lg">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} links={navLinks} />
      <CartSidebar />
    </>
  );
}
