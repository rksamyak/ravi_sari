'use client';
import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-white">
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#4A1942] text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold">Contact Us</h1>
          <p className="text-white/70 mt-2">We&apos;d love to hear from you</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Contact Us' }]} />
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Get in Touch</h2>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <span className="text-4xl">✅</span>
                <h3 className="text-xl font-bold text-green-800 mt-3">Thank You!</h3>
                <p className="text-green-600 mt-2">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                <div><label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label><input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B1A2B]" /></div>
                <div><label className="block text-sm font-medium text-gray-700 mb-1">Email</label><input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B1A2B]" /></div>
                <div><label className="block text-sm font-medium text-gray-700 mb-1">Phone</label><input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B1A2B]" /></div>
                <div><label className="block text-sm font-medium text-gray-700 mb-1">Message</label><textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B1A2B]" /></div>
                <button type="submit" className="w-full bg-[#8B1A2B] text-white py-3.5 rounded-lg font-semibold hover:bg-[#6d1422] transition text-lg">Send Message</button>
              </form>
            )}
          </div>
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Visit Our Stores</h2>
            <div className="space-y-6">
              {[
                { city: 'Mysore - Flagship', address: '123 Silk Lane, Devaraja Market, Mysore 570001', phone: '+91 98765 43210' },
                { city: 'Bangalore', address: '45 MG Road, Brigade Junction, Bangalore 560001', phone: '+91 98765 43211' },
                { city: 'Mumbai', address: '78 Linking Road, Bandra West, Mumbai 400050', phone: '+91 98765 43212' },
              ].map(store => (
                <div key={store.city} className="bg-[#FFF8F0] rounded-xl p-6">
                  <h3 className="font-bold text-gray-900">{store.city}</h3>
                  <p className="text-sm text-gray-600 mt-1">📍 {store.address}</p>
                  <p className="text-sm text-gray-600 mt-1">📞 {store.phone}</p>
                  <p className="text-sm text-gray-600 mt-1">🕐 Mon-Sat: 10AM - 8PM</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Customer Support</h3>
              <p className="text-sm text-gray-600">📧 support@ravi.com</p>
              <p className="text-sm text-gray-600 mt-1">📞 Toll Free: 1800-123-4567</p>
              <p className="text-sm text-gray-600 mt-1">💬 WhatsApp: +91 98765 43210</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
