'use client';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; href: string }[];
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute left-0 top-0 bottom-0 w-72 bg-white shadow-xl overflow-y-auto">
        <div className="p-4 border-b flex justify-between items-center">
          <span className="font-serif text-2xl font-bold text-[#8B1A2B]">Ravi</span>
          <button onClick={onClose} className="p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <nav className="py-2">
          {links.map(link => (
            <Link key={link.href} href={link.href} onClick={onClose} className="block px-6 py-3 text-gray-700 hover:bg-rose-50 hover:text-[#8B1A2B] transition font-medium">
              {link.name}
            </Link>
          ))}
          <div className="border-t mt-2 pt-2">
            <Link href="/account" onClick={onClose} className="block px-6 py-3 text-gray-700 hover:bg-rose-50">My Account</Link>
            <Link href="/wishlist" onClick={onClose} className="block px-6 py-3 text-gray-700 hover:bg-rose-50">Wishlist</Link>
            <Link href="/cart" onClick={onClose} className="block px-6 py-3 text-gray-700 hover:bg-rose-50">Cart</Link>
            <Link href="/about" onClick={onClose} className="block px-6 py-3 text-gray-700 hover:bg-rose-50">About Us</Link>
            <Link href="/contact" onClick={onClose} className="block px-6 py-3 text-gray-700 hover:bg-rose-50">Contact</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
