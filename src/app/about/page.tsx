import Breadcrumbs from '@/components/Breadcrumbs';

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#4A1942] text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold">About Ravi</h1>
          <p className="text-white/70 mt-2">Our heritage, our story</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'About Us' }]} />
        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-[#8B1A2B] to-[#4A1942] text-white rounded-2xl p-8 md:p-12 mb-12 text-center">
            <span className="text-[#C5A44E] font-medium tracking-widest uppercase text-sm">Est. 1920</span>
            <h2 className="text-4xl font-serif font-bold mt-3 mb-4">101+ Years of Excellence</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">From a small handloom workshop in Mysore to one of India&apos;s most trusted ethnic wear brands, our journey has been woven with passion and tradition.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#FFF8F0] rounded-xl p-6">
              <h3 className="text-xl font-serif font-bold text-[#8B1A2B] mb-3">Our Vision</h3>
              <p className="text-gray-600">To make authentic Indian handloom accessible to every woman, preserving centuries-old weaving traditions while embracing modern fashion sensibilities.</p>
            </div>
            <div className="bg-[#FFF8F0] rounded-xl p-6">
              <h3 className="text-xl font-serif font-bold text-[#8B1A2B] mb-3">Our Mission</h3>
              <p className="text-gray-600">To support artisan communities, promote sustainable fashion, and deliver premium quality ethnic wear with an unmatched shopping experience.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
            {[{ num: '101+', label: 'Years' }, { num: '500+', label: 'Artisans' }, { num: '50,000+', label: 'Happy Customers' }, { num: '1,000+', label: 'Designs' }].map(s => (
              <div key={s.label} className="bg-gray-50 rounded-xl p-6">
                <span className="text-3xl font-serif font-bold text-[#8B1A2B]">{s.num}</span>
                <p className="text-gray-500 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Our Craftsmanship</h3>
          <p className="text-gray-600 leading-relaxed mb-4">Every Ravi product goes through a meticulous quality check. Our sarees are woven by master weavers who have inherited their craft through generations. We source the finest silks from Kanchipuram, Varanasi, Mysore, and Paithan.</p>
          <p className="text-gray-600 leading-relaxed">We believe in fair trade and ensure that our artisans receive fair wages for their extraordinary skills. When you buy from Ravi, you support the livelihoods of hundreds of weaver families across India.</p>
        </div>
      </div>
    </div>
  );
}
