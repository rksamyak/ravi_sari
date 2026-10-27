'use client';
import { products } from '@/data/products';
import CategoryPage from '@/components/CategoryPage';

export default function SareesPage() {
  const categoryProducts = products.filter(p => p.category === 'sarees');
  return <CategoryPage title="Sarees" description="Exquisite collection of silk, cotton & designer sarees" products={categoryProducts.length > 0 ? categoryProducts : products.slice(0, 12)} breadcrumb="Sarees" />;
}
