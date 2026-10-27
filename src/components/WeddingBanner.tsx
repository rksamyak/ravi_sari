import Link from 'next/link';

const banners = [
  { title: 'Wedding Sarees', subtitle: 'Royal Silk Collections', link: '/wedding', gradient: 'from-red-900 via-rose-800 to-pink-700' },
  { title: 'Haldi Collection', subtitle: 'Bright Yellow Elegance', link: '/wedding', gradient: 'from-amber-600 via-yellow-500 to-orange-400' },
  { title: 'Wedding Lehengas', subtitle: 'Bridal Couture', link: '/lehengas', gradient: 'from-fuchsia-900 via-purple-800 to-violet-700' },
];

export default function WeddingBanner() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-[#1a1a1a] mb-2">Wedding Specials</h2>
        <p className="text-center text-gray-500 mb-10">Make your special day unforgettable</p>
        <div className="grid md:grid-cols-3 gap-6">
          {banners.map(b => (
            <Link key={b.title} href={b.link} className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className={`absolute inset-0 bg-gradient-to-br ${b.gradient}`} />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2 group-hover:scale-105 transition-transform">{b.title}</h3>
                <p className="text-white/80 mb-4">{b.subtitle}</p>
                <span className="border-2 border-white px-6 py-2 rounded-lg font-medium group-hover:bg-white group-hover:text-[#8B1A2B] transition">Shop Now</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
