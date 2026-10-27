'use client';
import { products } from '@/data/products';
import CategoryPage from '@/components/CategoryPage';

export default function GownsPage() {
  const categoryProducts = products.filter(p => p.category === 'gowns');
  return <CategoryPage title="Gowns" description="Indo-Western gowns for modern elegance" products={categoryProducts.length > 0 ? categoryProducts : products.slice(0, 12)} breadcrumb="Gowns" />;
}
