'use client';
import { products } from '@/data/products';
import CategoryPage from '@/components/CategoryPage';

export default function AccessoriesPage() {
  const categoryProducts = products.filter(p => p.category === 'accessories');
  return <CategoryPage title="Accessories" description="Complete your ethnic look" products={categoryProducts.length > 0 ? categoryProducts : products.slice(0, 12)} breadcrumb="Accessories" />;
}
