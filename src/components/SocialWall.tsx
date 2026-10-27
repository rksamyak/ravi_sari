const gradients = [
  'from-rose-400 to-pink-600', 'from-amber-400 to-orange-600', 'from-purple-400 to-violet-600',
  'from-teal-400 to-emerald-600', 'from-blue-400 to-indigo-600', 'from-fuchsia-400 to-pink-600',
];

export default function SocialWall() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-[#1a1a1a] mb-2">#RaviEthnic</h2>
        <p className="text-center text-gray-500 mb-10">Follow us on Instagram for daily inspiration</p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {gradients.map((g, i) => (
            <div key={i} className={`aspect-square bg-gradient-to-br ${g} rounded-lg relative group cursor-pointer overflow-hidden`}>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition text-2xl">♥</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
