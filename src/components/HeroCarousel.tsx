'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { bannerSlides } from '@/data/products';

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(prev => (prev + 1) % bannerSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[50vh] md:h-[70vh] overflow-hidden">
      {bannerSlides.map((slide, i) => (
        <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTMwVjBoLTEydjRoMTJ6TTI0IDI0di0yaDEydjJIMjR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
          <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 leading-tight drop-shadow-lg">{slide.title}</h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow">{slide.subtitle}</p>
              <Link href={slide.link} className="inline-block bg-white text-[#8B1A2B] px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-amber-50 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                {slide.cta}
              </Link>
            </div>
          </div>
        </div>
      ))}
      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {bannerSlides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full transition-all ${i === current ? 'bg-white w-8' : 'bg-white/50'}`} />
        ))}
      </div>
      {/* Arrows */}
      <button onClick={() => setCurrent(prev => (prev - 1 + bannerSlides.length) % bannerSlides.length)} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button onClick={() => setCurrent(prev => (prev + 1) % bannerSlides.length)} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>
    </section>
  );
}
