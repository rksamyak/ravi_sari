export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  subcategory?: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  fabric: string;
  color: string;
  occasion: string;
  description: string;
  inStock: boolean;
  isNew: boolean;
  isTrending: boolean;
  work?: string;
}

export const categories = [
  { name: 'Silk Sarees', slug: 'sarees', count: 245, gradient: 'from-rose-800 to-amber-700' },
  { name: 'Cotton Sarees', slug: 'sarees', count: 180, gradient: 'from-emerald-800 to-teal-600' },
  { name: 'Lehengas', slug: 'lehengas', count: 120, gradient: 'from-purple-800 to-pink-600' },
  { name: 'Wedding Sarees', slug: 'wedding', count: 95, gradient: 'from-red-900 to-rose-600' },
  { name: 'Kurtis', slug: 'kurtis', count: 210, gradient: 'from-blue-800 to-indigo-600' },
  { name: 'Salwar Kameez', slug: 'salwar-kameez', count: 165, gradient: 'from-fuchsia-800 to-pink-500' },
  { name: 'Gowns', slug: 'gowns', count: 88, gradient: 'from-violet-900 to-purple-600' },
  { name: "Men's Wear", slug: 'mens', count: 140, gradient: 'from-slate-800 to-zinc-600' },
];

export const occasions = [
  { name: 'Wedding', slug: 'wedding', gradient: 'from-red-900 via-rose-800 to-pink-700' },
  { name: 'Festive', slug: 'festive', gradient: 'from-amber-700 via-yellow-600 to-orange-500' },
  { name: 'Party Wear', slug: 'party', gradient: 'from-purple-900 via-violet-700 to-fuchsia-600' },
  { name: 'Casual', slug: 'casual', gradient: 'from-teal-700 via-emerald-600 to-green-500' },
  { name: 'Office Wear', slug: 'office', gradient: 'from-slate-700 via-gray-600 to-zinc-500' },
  { name: 'Bridal', slug: 'bridal', gradient: 'from-rose-900 via-red-800 to-pink-700' },
];

export const products: Product[] = [
  { id: 1, name: 'Banarasi Silk Saree', slug: 'banarasi-silk-saree', category: 'sarees', subcategory: 'silk', price: 8999, originalPrice: 14999, discount: 40, rating: 4.8, reviews: 234, image: '/api/placeholder/400/500', images: [], fabric: 'Pure Silk', color: 'Red', occasion: 'Wedding', description: 'Exquisite Banarasi silk saree with intricate gold zari work. Perfect for weddings and special occasions.', inStock: true, isNew: false, isTrending: true, work: 'Zari' },
  { id: 2, name: 'Kanchipuram Pattu Saree', slug: 'kanchipuram-pattu-saree', category: 'sarees', subcategory: 'silk', price: 12999, originalPrice: 19999, discount: 35, rating: 4.9, reviews: 189, image: '/api/placeholder/400/500', images: [], fabric: 'Pure Silk', color: 'Maroon', occasion: 'Wedding', description: 'Traditional Kanchipuram silk saree with temple border and rich pallu design.', inStock: true, isNew: true, isTrending: true, work: 'Temple Border' },
  { id: 3, name: 'Mysore Silk Saree', slug: 'mysore-silk-saree', category: 'sarees', subcategory: 'silk', price: 6999, originalPrice: 9999, discount: 30, rating: 4.7, reviews: 312, image: '/api/placeholder/400/500', images: [], fabric: 'Mysore Silk', color: 'Purple', occasion: 'Festive', description: 'Authentic Mysore silk saree with kasuti embroidery and rich golden border.', inStock: true, isNew: false, isTrending: true, work: 'Kasuti' },
  { id: 4, name: 'Chanderi Cotton Saree', slug: 'chanderi-cotton-saree', category: 'sarees', subcategory: 'cotton', price: 3499, originalPrice: 5999, discount: 42, rating: 4.5, reviews: 156, image: '/api/placeholder/400/500', images: [], fabric: 'Chanderi Cotton', color: 'Yellow', occasion: 'Casual', description: 'Lightweight Chanderi cotton saree with delicate butis and sheer texture.', inStock: true, isNew: true, isTrending: false, work: 'Buti' },
  { id: 5, name: 'Bridal Lehenga Choli', slug: 'bridal-lehenga-choli', category: 'lehengas', price: 24999, originalPrice: 39999, discount: 38, rating: 4.9, reviews: 98, image: '/api/placeholder/400/500', images: [], fabric: 'Raw Silk', color: 'Red', occasion: 'Bridal', description: 'Stunning bridal lehenga with heavy zardozi work and dupatta.', inStock: true, isNew: true, isTrending: true, work: 'Zardozi' },
  { id: 6, name: 'Designer Anarkali Suit', slug: 'designer-anarkali-suit', category: 'salwar-kameez', price: 5999, originalPrice: 8999, discount: 33, rating: 4.6, reviews: 201, image: '/api/placeholder/400/500', images: [], fabric: 'Georgette', color: 'Navy Blue', occasion: 'Party', description: 'Elegant designer Anarkali suit with intricate thread work.', inStock: true, isNew: false, isTrending: true, work: 'Thread Work' },
  { id: 7, name: 'Embroidered Kurti', slug: 'embroidered-kurti', category: 'kurtis', price: 1999, originalPrice: 3499, discount: 43, rating: 4.4, reviews: 423, image: '/api/placeholder/400/500', images: [], fabric: 'Cotton', color: 'Teal', occasion: 'Casual', description: 'Comfortable embroidered kurti with mirror work detailing.', inStock: true, isNew: false, isTrending: false, work: 'Mirror Work' },
  { id: 8, name: 'Paithani Silk Saree', slug: 'paithani-silk-saree', category: 'sarees', subcategory: 'silk', price: 15999, originalPrice: 24999, discount: 36, rating: 4.8, reviews: 87, image: '/api/placeholder/400/500', images: [], fabric: 'Paithani Silk', color: 'Green', occasion: 'Wedding', description: 'Handwoven Paithani silk saree with peacock motifs.', inStock: true, isNew: true, isTrending: true, work: 'Handwoven' },
  { id: 9, name: 'Organza Saree', slug: 'organza-saree', category: 'sarees', subcategory: 'designer', price: 4999, originalPrice: 7999, discount: 38, rating: 4.6, reviews: 178, image: '/api/placeholder/400/500', images: [], fabric: 'Organza', color: 'Peach', occasion: 'Party', description: 'Sheer organza saree with sequin and floral embroidery.', inStock: true, isNew: true, isTrending: true, work: 'Sequin' },
  { id: 10, name: 'Tussar Silk Saree', slug: 'tussar-silk-saree', category: 'sarees', subcategory: 'silk', price: 5499, originalPrice: 8499, discount: 35, rating: 4.5, reviews: 134, image: '/api/placeholder/400/500', images: [], fabric: 'Tussar Silk', color: 'Beige', occasion: 'Festive', description: 'Natural tussar silk saree with hand-painted Madhubani art.', inStock: true, isNew: false, isTrending: false, work: 'Hand Painted' },
  { id: 11, name: 'A-Line Lehenga', slug: 'a-line-lehenga', category: 'lehengas', price: 11999, originalPrice: 18999, discount: 37, rating: 4.7, reviews: 76, image: '/api/placeholder/400/500', images: [], fabric: 'Velvet', color: 'Wine', occasion: 'Wedding', description: 'Royal A-line lehenga in rich velvet with cutdana.', inStock: true, isNew: false, isTrending: true, work: 'Cutdana' },
  { id: 12, name: 'Palazzo Suit Set', slug: 'palazzo-suit-set', category: 'salwar-kameez', price: 3999, originalPrice: 6499, discount: 38, rating: 4.3, reviews: 267, image: '/api/placeholder/400/500', images: [], fabric: 'Rayon', color: 'Mustard', occasion: 'Office', description: 'Chic palazzo suit set with block print patterns.', inStock: true, isNew: true, isTrending: false, work: 'Block Print' },
  { id: 13, name: 'Indo-Western Gown', slug: 'indo-western-gown', category: 'gowns', price: 9999, originalPrice: 15999, discount: 38, rating: 4.7, reviews: 64, image: '/api/placeholder/400/500', images: [], fabric: 'Net', color: 'Dusty Pink', occasion: 'Party', description: 'Glamorous Indo-Western gown with cape sleeves and trail.', inStock: true, isNew: true, isTrending: true, work: 'Stone Work' },
  { id: 14, name: 'Designer Blouse', slug: 'designer-blouse', category: 'blouses', price: 2499, originalPrice: 3999, discount: 38, rating: 4.4, reviews: 345, image: '/api/placeholder/400/500', images: [], fabric: 'Art Silk', color: 'Gold', occasion: 'Wedding', description: 'Intricately designed readymade blouse with aari work.', inStock: true, isNew: false, isTrending: false, work: 'Aari Work' },
  { id: 15, name: "Men's Silk Kurta", slug: 'mens-silk-kurta', category: 'mens', price: 3999, originalPrice: 5999, discount: 33, rating: 4.5, reviews: 189, image: '/api/placeholder/400/500', images: [], fabric: 'Raw Silk', color: 'Cream', occasion: 'Wedding', description: 'Premium silk kurta with subtle thread embroidery.', inStock: true, isNew: true, isTrending: true, work: 'Thread Work' },
  { id: 16, name: "Men's Sherwani", slug: 'mens-sherwani', category: 'mens', price: 14999, originalPrice: 22999, discount: 35, rating: 4.8, reviews: 67, image: '/api/placeholder/400/500', images: [], fabric: 'Jacquard', color: 'Navy', occasion: 'Wedding', description: 'Regal sherwani with gold buttons and rich jacquard.', inStock: true, isNew: true, isTrending: true, work: 'Jacquard' },
  { id: 17, name: 'Linen Saree', slug: 'linen-saree', category: 'sarees', subcategory: 'cotton', price: 2999, originalPrice: 4999, discount: 40, rating: 4.3, reviews: 289, image: '/api/placeholder/400/500', images: [], fabric: 'Linen', color: 'Sky Blue', occasion: 'Casual', description: 'Breathable linen saree with silver zari border.', inStock: true, isNew: false, isTrending: false, work: 'Silver Zari' },
  { id: 18, name: 'Bandhani Saree', slug: 'bandhani-saree', category: 'sarees', subcategory: 'designer', price: 3999, originalPrice: 6499, discount: 38, rating: 4.6, reviews: 198, image: '/api/placeholder/400/500', images: [], fabric: 'Georgette', color: 'Orange', occasion: 'Festive', description: 'Vibrant bandhani saree with traditional tie-dye patterns.', inStock: true, isNew: false, isTrending: true, work: 'Bandhani' },
  { id: 19, name: 'Sharara Set', slug: 'sharara-set', category: 'salwar-kameez', price: 6999, originalPrice: 10999, discount: 36, rating: 4.7, reviews: 112, image: '/api/placeholder/400/500', images: [], fabric: 'Chinon', color: 'Lavender', occasion: 'Party', description: 'Elegant sharara set with sequin embroidery.', inStock: true, isNew: true, isTrending: true, work: 'Sequin' },
  { id: 20, name: 'Printed Cotton Kurti', slug: 'printed-cotton-kurti', category: 'kurtis', price: 999, originalPrice: 1999, discount: 50, rating: 4.2, reviews: 534, image: '/api/placeholder/400/500', images: [], fabric: 'Cotton', color: 'Multi', occasion: 'Casual', description: 'Trendy printed cotton kurti with side slits.', inStock: true, isNew: false, isTrending: false, work: 'Printed' },
  { id: 21, name: 'Haldi Ceremony Lehenga', slug: 'haldi-ceremony-lehenga', category: 'lehengas', price: 8999, originalPrice: 13999, discount: 36, rating: 4.8, reviews: 54, image: '/api/placeholder/400/500', images: [], fabric: 'Organza', color: 'Yellow', occasion: 'Wedding', description: 'Bright yellow haldi ceremony lehenga with gota patti.', inStock: true, isNew: true, isTrending: true, work: 'Gota Patti' },
  { id: 22, name: 'Silk Dupatta', slug: 'silk-dupatta', category: 'accessories', price: 1999, originalPrice: 3499, discount: 43, rating: 4.4, reviews: 278, image: '/api/placeholder/400/500', images: [], fabric: 'Pure Silk', color: 'Pink', occasion: 'Festive', description: 'Luxurious silk dupatta with zari border.', inStock: true, isNew: false, isTrending: false, work: 'Zari Border' },
  { id: 23, name: 'Unstitched Fabric Set', slug: 'unstitched-fabric-set', category: 'fabrics', price: 4999, originalPrice: 7999, discount: 38, rating: 4.6, reviews: 145, image: '/api/placeholder/400/500', images: [], fabric: 'Silk Cotton', color: 'Maroon', occasion: 'Wedding', description: 'Premium unstitched fabric set with pre-matched blouse.', inStock: true, isNew: true, isTrending: false, work: 'Woven' },
  { id: 24, name: 'Embroidered Gown', slug: 'embroidered-gown', category: 'gowns', price: 7999, originalPrice: 12999, discount: 38, rating: 4.6, reviews: 89, image: '/api/placeholder/400/500', images: [], fabric: 'Georgette', color: 'Emerald', occasion: 'Party', description: 'Floor-length embroidered gown with fitted bodice.', inStock: true, isNew: false, isTrending: true, work: 'Embroidery' },
];

export const testimonials = [
  { id: 1, name: 'Priya Sharma', location: 'Mumbai', rating: 5, text: 'Absolutely stunning sarees! The quality of silk is unmatched. Received so many compliments at my sister\'s wedding.', avatar: 'PS' },
  { id: 2, name: 'Anita Reddy', location: 'Bangalore', rating: 5, text: 'Ravi has the best collection of Kanchipuram sarees. Authentic weaving and colors exactly as shown.', avatar: 'AR' },
  { id: 3, name: 'Meena Patel', location: 'Ahmedabad', rating: 4, text: 'Great variety and fair prices. The lehenga I ordered for my engagement was perfect. Fast delivery too!', avatar: 'MP' },
  { id: 4, name: 'Deepa Nair', location: 'Kerala', rating: 5, text: 'Shopping here feels like visiting a premium store. Beautiful packaging and top-notch saree quality.', avatar: 'DN' },
  { id: 5, name: 'Kavita Singh', location: 'Delhi', rating: 5, text: 'Loyal customer for 3 years. Every purchase has been wonderful. Their wedding collection is divine!', avatar: 'KS' },
];

export const bannerSlides = [
  { id: 1, title: 'Wedding Collection 2024', subtitle: 'Celebrate Every Moment in Elegance', cta: 'Shop Now', link: '/wedding', gradient: 'from-rose-950 via-red-900 to-amber-900' },
  { id: 2, title: 'Silk Sarees', subtitle: 'Handwoven Traditions, Timeless Beauty', cta: 'Explore Collection', link: '/sarees', gradient: 'from-purple-950 via-violet-900 to-fuchsia-900' },
  { id: 3, title: 'Festive Special', subtitle: 'Up to 50% Off on Premium Ethnic Wear', cta: 'Shop Festive', link: '/sarees', gradient: 'from-amber-900 via-orange-900 to-red-900' },
];

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}
export function getTrendingProducts(): Product[] {
  return products.filter(p => p.isTrending);
}
export function getNewArrivals(): Product[] {
  return products.filter(p => p.isNew);
}
export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}
export function getProductsByPriceRange(min: number, max: number): Product[] {
  return products.filter(p => p.price >= min && p.price <= max);
}
export function formatPrice(price: number): string {
  return '\u20B9' + price.toLocaleString('en-IN');
}
