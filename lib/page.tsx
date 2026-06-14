import { themes } from "@/data/siteData";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ThemeDetailPage({ params }: Props) {
  const { id } = await params;
  const theme = themes.find((t) => t.id === id);

  if (!theme) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-24 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Preview Gambar Tema */}
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-stone-100 border border-stone-100">
            <Image
              fill
              src={theme.image}
              alt={theme.name}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Detail Informasi */}
          <div className="flex flex-col">
            <div className="mb-4">
              <span className="bg-stone-100 text-stone-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                {theme.category}
              </span>
            </div>
            
            <h1 className="text-5xl font-bold mb-6 text-stone-900">{theme.name}</h1>
            
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed mb-10">
              <p>
                Sempurnakan momen spesial Anda dengan desain <strong>{theme.name}</strong>. Tema ini menghadirkan perpaduan estetika visual yang menawan dengan fungsionalitas digital modern.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-stone-900 font-bold">✓</span> Responsive Design (Mobile Friendly)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-stone-900 font-bold">✓</span> Fitur RSVP & Buku Tamu Digital
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-stone-900 font-bold">✓</span> Integrasi Google Maps & Musik Latar
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/#paket" 
                className="bg-stone-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-stone-800 transition-all shadow-lg text-center active:scale-95"
              >
                Pilih Paket & Pesan Sekarang
              </Link>
              <Link 
                href="/themes" 
                className="flex items-center justify-center px-8 py-4 border border-stone-200 rounded-xl font-bold text-stone-600 hover:bg-stone-100 transition-all"
              >
                Kembali ke Katalog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}