'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300">
      {/* Newsletter */}
      <div className="bg-[#8B1A2B]">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white text-xl font-serif font-bold">Subscribe & Get 10% Off</h3>
            <p className="text-white/80 text-sm mt-1">Join our newsletter for exclusive offers & new arrivals</p>
          </div>
          <form className="flex w-full md:w-auto" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" className="px-4 py-3 rounded-l-lg w-full md:w-72 text-gray-800 focus:outline-none" />
            <button className="bg-[#C5A44E] text-white px-6 py-3 rounded-r-lg font-medium hover:bg-[#b89540] transition whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-serif text-2xl font-bold text-white mb-4">Ravi</h4>
          <p className="text-sm text-gray-400 mb-4">Your trusted destination for premium ethnic wear. Celebrating Indian heritage with authentic handloom collections.</p>
          <div className="flex gap-3">
            {['facebook', 'instagram', 'twitter', 'youtube'].map(social => (
              <a key={social} href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8B1A2B] transition text-xs uppercase">{social[0].toUpperCase()}</a>
            ))}
          </div>
        </div>
        <div>
          <h5 className="text-white font-semibold mb-4">Shop</h5>
          <ul className="space-y-2 text-sm">
            {[['Sarees', '/sarees'], ['Lehengas', '/lehengas'], ['Kurtis', '/kurtis'], ['Salwar Kameez', '/salwar-kameez'], ['Gowns', '/gowns'], ['Wedding Collection', '/wedding']].map(([name, href]) => (
              <li key={href}><Link href={href} className="hover:text-[#C5A44E] transition">{name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-white font-semibold mb-4">Help</h5>
          <ul className="space-y-2 text-sm">
            {['Track Order', 'Shipping Policy', 'Return Policy', 'Size Guide', 'FAQ', 'Privacy Policy'].map(item => (
              <li key={item}><a href="#" className="hover:text-[#C5A44E] transition">{item}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-white font-semibold mb-4">Contact</h5>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><span>📍</span> 123 Silk Lane, Mysore, Karnataka 570001</li>
            <li className="flex gap-2"><span>📞</span> +91 98765 43210</li>
            <li className="flex gap-2"><span>✉️</span> support@ravi.com</li>
            <li className="flex gap-2"><span>🕐</span> Mon-Sat: 10AM - 8PM</li>
          </ul>
        </div>
      </div>

      {/* Trust & Payment */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-4 text-xs text-gray-500">
            <span>Visa</span><span>Mastercard</span><span>UPI</span><span>PayTM</span><span>GPay</span><span>COD</span>
          </div>
          <p className="text-xs text-gray-500">&copy; 2024 Ravi Ethnic Wear. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
