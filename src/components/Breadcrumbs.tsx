import Link from 'next/link';

interface BreadcrumbItem { label: string; href?: string; }

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="text-sm text-gray-500 py-4">
      <ol className="flex flex-wrap items-center gap-1">
        <li><Link href="/" className="hover:text-[#8B1A2B] transition">Home</Link></li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <span>/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-[#8B1A2B] transition">{item.label}</Link>
            ) : (
              <span className="text-gray-800 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
