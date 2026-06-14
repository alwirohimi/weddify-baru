import { themes } from "@/data/siteData";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

export default function ThemeDetailPage({ params }: Props) {
  const { id } = params;
  const theme = themes.find((t) => t.id === id);

  if (!theme) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-24 px-8">
        <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center">
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-stone-100 bg-stone-100 shadow-2xl">
            <Image
              fill
              src={theme.image}
              alt={theme.name}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-rose-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.22em] text-rose-700">
              {theme.category}
            </span>
            <h1 className="text-5xl font-bold text-stone-950">{theme.name}</h1>
            <div className="space-y-4 text-stone-600 text-lg leading-relaxed">
              <p>
                Sempurnakan momen spesial Anda dengan desain <strong>{theme.name}</strong>. Tema ini menghadirkan perpaduan estetika visual yang menawan dengan fungsionalitas digital modern.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-rose-600 font-bold">✓</span> Responsive Design (Mobile Friendly)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-rose-600 font-bold">✓</span> Fitur RSVP & Buku Tamu Digital
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-rose-600 font-bold">✓</span> Integrasi Google Maps & Musik Latar
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-stone-200 bg-white px-8 py-4 text-lg font-semibold text-stone-700 transition hover:bg-stone-100"
              >
                Kembali ke Katalog
              </Link>
              <Link
                href="/#paket"
                className="inline-flex items-center justify-center rounded-full bg-rose-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-rose-700"
              >
                Pilih Paket & Pesan
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
