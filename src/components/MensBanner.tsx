import Link from 'next/link';

export default function MensBanner() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <Link href="/mens" className="group block relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-zinc-800 to-gray-700" />
          <div className="absolute inset-0 flex items-center justify-between px-8 md:px-16">
            <div>
              <span className="text-[#C5A44E] text-sm font-medium tracking-widest uppercase">New Collection</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-2">Men&apos;s Ethnic Wear</h2>
              <p className="text-white/70 mt-2">Sherwanis, Kurtas & More</p>
              <span className="inline-block mt-4 bg-[#C5A44E] text-white px-6 py-2.5 rounded-lg font-medium group-hover:bg-amber-500 transition">Explore Collection</span>
            </div>
            <div className="hidden md:block w-48 h-48 bg-gradient-to-br from-[#C5A44E]/30 to-transparent rounded-full" />
          </div>
        </Link>
      </div>
    </section>
  );
}
