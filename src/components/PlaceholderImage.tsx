'use client';

const gradients: Record<string, string> = {
  sarees: 'from-rose-800 via-red-700 to-amber-600',
  lehengas: 'from-purple-800 via-fuchsia-700 to-pink-500',
  wedding: 'from-red-900 via-rose-700 to-pink-500',
  kurtis: 'from-blue-800 via-indigo-700 to-violet-500',
  'salwar-kameez': 'from-fuchsia-800 via-pink-600 to-rose-400',
  gowns: 'from-violet-900 via-purple-700 to-indigo-500',
  blouses: 'from-amber-800 via-orange-600 to-yellow-400',
  mens: 'from-slate-800 via-zinc-600 to-gray-400',
  accessories: 'from-teal-800 via-emerald-600 to-green-400',
  fabrics: 'from-cyan-800 via-sky-600 to-blue-400',
  default: 'from-rose-900 via-pink-800 to-amber-700',
};

interface PlaceholderImageProps {
  name: string;
  category?: string;
  className?: string;
  gradient?: string;
}

export default function PlaceholderImage({ name, category, className = '', gradient }: PlaceholderImageProps) {
  const bg = gradient || gradients[category || 'default'] || gradients.default;
  return (
    <div className={`bg-gradient-to-br ${bg} flex items-center justify-center relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 right-4 w-32 h-32 border border-white/30 rounded-full" />
        <div className="absolute bottom-8 left-8 w-20 h-20 border border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/10 rotate-45" />
      </div>
      <div className="text-center z-10 px-4">
        <p className="text-white/90 font-serif text-sm md:text-base font-medium tracking-wide leading-tight">{name}</p>
      </div>
    </div>
  );
}
