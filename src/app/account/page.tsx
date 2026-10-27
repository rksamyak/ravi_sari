'use client';
import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function AccountPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', password: '', phone: '' });

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-[#8B1A2B] to-[#4A1942] text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold">{isLogin ? 'Login' : 'Create Account'}</h1>
          <p className="text-white/70 mt-2">{isLogin ? 'Welcome back!' : 'Join the Ravi family'}</p>
        </div>
      </div>
      <div className="max-w-md mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: isLogin ? 'Login' : 'Register' }]} />
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <div className="flex mb-6 border-b">
            <button onClick={() => setIsLogin(true)} className={`flex-1 pb-3 text-sm font-semibold transition ${isLogin ? 'text-[#8B1A2B] border-b-2 border-[#8B1A2B]' : 'text-gray-400'}`}>Login</button>
            <button onClick={() => setIsLogin(false)} className={`flex-1 pb-3 text-sm font-semibold transition ${!isLogin ? 'text-[#8B1A2B] border-b-2 border-[#8B1A2B]' : 'text-gray-400'}`}>Register</button>
          </div>
          <form onSubmit={e => e.preventDefault()} className="space-y-4">
            {!isLogin && <div><label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label><input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B1A2B]" placeholder="Enter your name" /></div>}
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Email</label><input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B1A2B]" placeholder="you@example.com" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1">Password</label><input type="password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B1A2B]" placeholder="••••••••" /></div>
            {!isLogin && <div><label className="block text-sm font-medium text-gray-700 mb-1">Phone</label><input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#8B1A2B]" placeholder="+91 98765 43210" /></div>}
            <button type="submit" className="w-full bg-[#8B1A2B] text-white py-3.5 rounded-lg font-semibold hover:bg-[#6d1422] transition text-lg">{isLogin ? 'Login' : 'Create Account'}</button>
          </form>
          {isLogin && <p className="text-center mt-4"><a href="#" className="text-sm text-[#8B1A2B] hover:underline">Forgot Password?</a></p>}
        </div>
      </div>
    </div>
  );
}
