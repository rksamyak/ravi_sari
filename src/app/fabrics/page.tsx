'use client';
import { products } from '@/data/products';
import CategoryPage from '@/components/CategoryPage';

export default function FabricsPage() {
  const categoryProducts = products.filter(p => p.category === 'fabrics');
  return <CategoryPage title="Fabrics" description="Premium unstitched fabric sets" products={categoryProducts.length > 0 ? categoryProducts : products.slice(0, 12)} breadcrumb="Fabrics" />;
}
