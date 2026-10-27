'use client';
import { products } from '@/data/products';
import CategoryPage from '@/components/CategoryPage';

export default function WeddingCollectionPage() {
  const categoryProducts = products.filter(p => p.category === 'wedding');
  return <CategoryPage title="Wedding Collection" description="Make your special day unforgettable" products={categoryProducts.length > 0 ? categoryProducts : products.slice(0, 12)} breadcrumb="Wedding Collection" />;
}
