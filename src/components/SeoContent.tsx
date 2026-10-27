'use client';
import { useState } from 'react';

export default function SeoContent() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl font-serif font-bold text-gray-800 mb-4">Buy Ethnic Wear for Women Online at Ravi</h2>
        <div className={`text-sm text-gray-600 leading-relaxed space-y-3 ${expanded ? '' : 'max-h-24 overflow-hidden relative'}`}>
          <p>Ravi is your one-stop destination for premium ethnic wear online. With a legacy spanning over 101 years, we bring you the finest collection of handloom sarees, designer lehengas, elegant kurtis, and much more.</p>
          <p>Our collection features authentic Banarasi silk sarees, Kanchipuram pattu sarees, Mysore silk sarees, and many more varieties sourced directly from the weavers. Each piece is crafted with love and showcases the rich textile heritage of India.</p>
          <p>Whether you are looking for bridal wear, festive outfits, or everyday ethnic fashion, Ravi has something for everyone. Shop with confidence knowing that every product comes with a guarantee of authenticity and quality.</p>
          <p>We offer free shipping on orders above ₹999, easy returns within 7 days, and multiple payment options including COD, UPI, and all major credit/debit cards.</p>
          {!expanded && <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent" />}
        </div>
        <button onClick={() => setExpanded(!expanded)} className="mt-3 text-[#8B1A2B] font-medium text-sm hover:underline">
          {expanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </section>
  );
}
