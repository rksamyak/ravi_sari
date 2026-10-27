import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';

export const metadata: Metadata = {
  title: 'Ravi - Premium Ethnic Wear | Sarees, Lehengas, Kurtis Online',
  description: 'Shop the finest collection of ethnic wear at Ravi. Authentic silk sarees, designer lehengas, kurtis, and more with 101+ years of heritage. Free shipping above ₹999.',
  keywords: 'ethnic wear, sarees, lehengas, kurtis, indian wear, silk sarees, wedding sarees',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <WishlistProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
