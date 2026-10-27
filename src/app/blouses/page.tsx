'use client';
import { products } from '@/data/products';
import CategoryPage from '@/components/CategoryPage';

export default function BlousesPage() {
  const categoryProducts = products.filter(p => p.category === 'blouses');
  return <CategoryPage title="Blouses" description="Designer readymade blouses" products={categoryProducts.length > 0 ? categoryProducts : products.slice(0, 12)} breadcrumb="Blouses" />;
}
