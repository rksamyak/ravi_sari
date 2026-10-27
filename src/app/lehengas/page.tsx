'use client';
import { products } from '@/data/products';
import CategoryPage from '@/components/CategoryPage';

export default function LehengasPage() {
  const categoryProducts = products.filter(p => p.category === 'lehengas');
  return <CategoryPage title="Lehengas" description="Designer lehengas for weddings & celebrations" products={categoryProducts.length > 0 ? categoryProducts : products.slice(0, 12)} breadcrumb="Lehengas" />;
}
