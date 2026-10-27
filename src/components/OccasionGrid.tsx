import Link from 'next/link';
import { occasions } from '@/data/products';

export default function OccasionGrid() {
  return (
    <section className="py-12 md:py-16 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-[#1a1a1a] mb-2">Shop by Occasion</h2>
        <p className="text-center text-gray-500 mb-10">Find the perfect outfit for every event</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {occasions.map(occ => (
            <Link key={occ.name} href={`/sarees?occasion=${occ.slug}`} className="group relative h-48 md:h-56 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className={`absolute inset-0 bg-gradient-to-br ${occ.gradient} group-hover:scale-110 transition-transform duration-500`} />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <span className="text-3xl mb-2">{}</span>
                <h3 className="text-lg font-serif font-bold">{occ.name}</h3>
                <span className="text-sm text-white/70 mt-1 group-hover:text-white transition">Explore →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
