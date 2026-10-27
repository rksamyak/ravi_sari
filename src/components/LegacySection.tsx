export default function LegacySection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#8B1A2B] via-[#6d1422] to-[#4A1942]" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/30 rounded-full" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
        <span className="text-[#C5A44E] font-medium tracking-widest uppercase text-sm">Our Heritage</span>
        <h2 className="text-4xl md:text-6xl font-serif font-bold mt-4 mb-6">101+ Years of Legacy</h2>
        <div className="w-24 h-1 bg-[#C5A44E] mx-auto mb-6" />
        <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
          For over a century, we have been weaving dreams into fabric. Each saree tells a story of tradition, 
          craftsmanship, and the rich cultural heritage of India. From the looms of Mysore to your wardrobe — 
          experience the legacy of authentic handloom.
        </p>
        <div className="flex justify-center gap-12 mt-12">
          <div>
            <span className="text-4xl md:text-5xl font-serif font-bold text-[#C5A44E]">101+</span>
            <p className="text-white/70 text-sm mt-1">Years</p>
          </div>
          <div>
            <span className="text-4xl md:text-5xl font-serif font-bold text-[#C5A44E]">50K+</span>
            <p className="text-white/70 text-sm mt-1">Happy Customers</p>
          </div>
          <div>
            <span className="text-4xl md:text-5xl font-serif font-bold text-[#C5A44E]">1000+</span>
            <p className="text-white/70 text-sm mt-1">Designs</p>
          </div>
        </div>
      </div>
    </section>
  );
}
