"use client";
import { Sparkles, Crown, Diamond, Package } from "lucide-react";

interface BundlingProps {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  onOrder: (pkg: { name: string; price: string }) => void;
}

export default function BundlingCard({ name, price, features, isPopular, onOrder }: BundlingProps) {
  // Mapping ikon dengan fallback ke ikon Package jika nama tidak ditemukan
  const icons: Record<string, JSX.Element> = {
    "Paket Silver": <Sparkles className="w-8 h-8 text-stone-400" />,
    "Paket Gold": <Crown className="w-8 h-8 text-pink-500" />,
    "Paket Platinum": <Diamond className="w-8 h-8 text-sky-500" />
  };

  return (
    <div className={`p-8 rounded-3xl border-2 flex flex-col transition-all duration-300 ${
      isPopular 
        ? "border-pink-500 bg-white shadow-2xl scale-105" 
        : "border-stone-100 bg-white hover:border-stone-200"
    }`}>
      {isPopular && (
        <span className="self-start text-[10px] font-black bg-pink-500 text-white px-3 py-1 rounded-full mb-4 uppercase tracking-widest shadow-sm">
          Paling Laris
        </span>
      )}
      
      {/* Vektor Icon dengan Fallback */}
      <div className="mb-6">
        {icons[name] || <Package className="w-8 h-8 text-stone-400" />}
      </div>

      <h3 className="text-xl font-bold mb-1 text-stone-900">{name}</h3>
      <p className="text-4xl font-extrabold mb-6 text-stone-900">{price}</p>
      
      <ul className="mb-8 space-y-4 flex-grow">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-sm text-stone-600">
            <div className="mr-3 w-5 h-5 rounded-full bg-stone-100 flex items-center justify-center shrink-0">
              <span className="text-[10px] font-bold text-stone-700">✓</span>
            </div>
            {feature}
          </li>
        ))}
      </ul>
      
      <button 
        onClick={() => onOrder({ name, price })}
        className={`w-full py-4 rounded-xl font-bold transition-all duration-200 ${
          isPopular 
            ? "bg-pink-600 text-white shadow-lg shadow-pink-200 hover:bg-pink-700 active:scale-[0.98]" 
            : "bg-stone-900 text-white hover:bg-stone-800 active:scale-[0.98]"
        }`}
      >
        Pilih Paket
      </button>
    </div>
  );
}