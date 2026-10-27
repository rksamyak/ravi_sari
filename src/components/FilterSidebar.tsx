'use client';
import { useState } from 'react';

interface FilterSidebarProps {
  onFilterChange: (filters: Record<string, string[]>) => void;
  filters: Record<string, string[]>;
}

const filterOptions: Record<string, string[]> = {
  'Price Range': ['Under ₹999', '₹1,000 - ₹2,999', '₹3,000 - ₹4,999', '₹5,000 - ₹9,999', '₹10,000+'],
  'Color': ['Red', 'Maroon', 'Purple', 'Green', 'Yellow', 'Blue', 'Pink', 'Gold', 'Beige', 'Orange'],
  'Fabric': ['Pure Silk', 'Cotton', 'Georgette', 'Organza', 'Velvet', 'Linen', 'Net', 'Rayon'],
  'Occasion': ['Wedding', 'Festive', 'Party', 'Casual', 'Office', 'Bridal'],
  'Work Type': ['Zari', 'Embroidery', 'Bandhani', 'Block Print', 'Handwoven', 'Sequin', 'Thread Work'],
};

export default function FilterSidebar({ onFilterChange, filters }: FilterSidebarProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({ 'Price Range': true, 'Color': true });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleFilter = (category: string, value: string) => {
    const current = filters[category] || [];
    const updated = current.includes(value) ? current.filter(v => v !== value) : [...current, value];
    onFilterChange({ ...filters, [category]: updated });
  };

  return (
    <aside className="w-full">
      <h3 className="font-serif text-lg font-bold text-gray-800 mb-4">Filters</h3>
      {Object.entries(filterOptions).map(([category, options]) => (
        <div key={category} className="border-b border-gray-200 py-3">
          <button onClick={() => toggleSection(category)} className="flex justify-between items-center w-full text-sm font-semibold text-gray-700">
            {category}
            <svg className={`w-4 h-4 transition ${openSections[category] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>
          {openSections[category] && (
            <div className="mt-2 space-y-2">
              {options.map(option => (
                <label key={option} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-800">
                  <input type="checkbox" checked={(filters[category] || []).includes(option)} onChange={() => toggleFilter(category, option)} className="w-4 h-4 rounded border-gray-300 text-[#8B1A2B] focus:ring-[#8B1A2B]" />
                  {option}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
      <button onClick={() => onFilterChange({})} className="mt-4 text-sm text-[#8B1A2B] font-medium hover:underline">Clear All Filters</button>
    </aside>
  );
}
