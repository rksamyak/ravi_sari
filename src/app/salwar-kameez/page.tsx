'use client';
import { products } from '@/data/products';
import CategoryPage from '@/components/CategoryPage';

export default function SalwarKameezPage() {
  const categoryProducts = products.filter(p => p.category === 'salwar-kameez');
  return <CategoryPage title="Salwar Kameez" description="Elegant suits for every occasion" products={categoryProducts.length > 0 ? categoryProducts : products.slice(0, 12)} breadcrumb="Salwar Kameez" />;
}
