'use client';
import { products } from '@/data/products';
import CategoryPage from '@/components/CategoryPage';

export default function KurtisPage() {
  const categoryProducts = products.filter(p => p.category === 'kurtis');
  return <CategoryPage title="Kurtis" description="Trendy & comfortable everyday ethnic wear" products={categoryProducts.length > 0 ? categoryProducts : products.slice(0, 12)} breadcrumb="Kurtis" />;
}
