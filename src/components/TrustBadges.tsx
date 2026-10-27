export default function TrustBadges() {
  const badges = [
    { icon: '🚚', title: 'Free Shipping', desc: 'On orders above ₹999' },
    { icon: '✅', title: 'Authentic Products', desc: '100% genuine handloom' },
    { icon: '↩️', title: 'Easy Returns', desc: '7-day return policy' },
    { icon: '🔒', title: 'Secure Payment', desc: 'SSL encrypted checkout' },
  ];
  return (
    <section className="py-10 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {badges.map(b => (
          <div key={b.title} className="flex flex-col items-center text-center gap-2">
            <span className="text-3xl">{b.icon}</span>
            <h4 className="font-semibold text-gray-800 text-sm">{b.title}</h4>
            <p className="text-xs text-gray-500">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
