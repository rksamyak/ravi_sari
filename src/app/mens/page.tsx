'use client';
import { products } from '@/data/products';
import CategoryPage from '@/components/CategoryPage';

export default function MensCollectionPage() {
  const categoryProducts = products.filter(p => p.category === 'mens');
  return <CategoryPage title="Men's Collection" description="Premium ethnic wear for men" products={categoryProducts.length > 0 ? categoryProducts : products.slice(0, 12)} breadcrumb="Men's Collection" />;
}
