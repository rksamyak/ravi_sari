'use client';
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Product } from '@/data/products';

interface WishlistContextType {
  items: Product[];
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: number) => boolean;
  totalItems: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

function loadWishlist(): Product[] {
  if (typeof window === 'undefined') return [];
  try {
    const saved = localStorage.getItem('ravi-wishlist');
    return saved ? JSON.parse(saved) : [];
  } catch { return []; }
}

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Product[]>(loadWishlist);

  useEffect(() => {
    localStorage.setItem('ravi-wishlist', JSON.stringify(items));
  }, [items]);

  const toggleWishlist = useCallback((product: Product) => {
    setItems(prev => prev.find(i => i.id === product.id) ? prev.filter(i => i.id !== product.id) : [...prev, product]);
  }, []);

  const isInWishlist = useCallback((productId: number) => items.some(i => i.id === productId), [items]);

  return (
    <WishlistContext.Provider value={{ items, toggleWishlist, isInWishlist, totalItems: items.length }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error('useWishlist must be used within WishlistProvider');
  return ctx;
}
