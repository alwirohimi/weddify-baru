"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { themes } from "@/data/siteData";

const categories = ["Semua", "Classic", "Modern", "Floral", "Rustic"];

export default function ThemesPage() {
  const [filter, setFilter] = useState("Semua");
  const [search, setSearch] = useState("");

  const filteredThemes = useMemo(
    () =>
      themes.filter((theme) => {
        const matchFilter = filter === "Semua" || theme.category === filter;
        const matchSearch = theme.name.toLowerCase().includes(search.toLowerCase());
        return matchFilter && matchSearch;
      }),
    [filter, search]
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-slate-100 text-stone-950">
      <Navbar />

      <section className="relative overflow-hidden pt-32 pb-16 sm:pb-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-rose-100 to-transparent opacity-90" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="rounded-[40px] border border-rose-200/70 bg-white/95 p-10 shadow-soft backdrop-blur-xl">
            <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
              <div className="max-w-2xl">
                <span className="inline-flex rounded-full bg-rose-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">
                  Katalog Tema Premium
                </span>
                <h1 className="mt-6 text-5xl font-semibold tracking-tight text-stone-950 sm:text-6xl">
                  Pilih tema undangan digital yang tampil memukau
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
                  Weddify menyediakan koleksi tema modern, floral, klasik, dan rustic dengan estetika yang elegan dan navigasi yang mudah digunakan.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="#themes"
                    className="inline-flex items-center justify-center rounded-full bg-rose-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-500/20 transition hover:bg-rose-700"
                  >
                    Jelajahi Tema
                  </Link>
                  <Link
                    href="#about"
                    className="inline-flex items-center justify-center rounded-full border border-stone-200 bg-white px-7 py-3 text-sm font-semibold text-stone-700 transition hover:bg-stone-50"
                  >
                    Kenapa Weddify
                  </Link>
                </div>
              </div>

              <div className="rounded-[32px] bg-gradient-to-br from-rose-50 via-white to-slate-100 p-8 shadow-soft border border-rose-200">
                <div className="space-y-5">
                  <div className="rounded-3xl bg-white p-6 shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
                      Koleksi Tema
                    </p>
                    <p className="mt-3 text-4xl font-semibold text-stone-950">{themes.length}+</p>
                    <p className="mt-2 text-sm leading-6 text-stone-500">
                      Setiap nama tema dipilih untuk menghadirkan suasana romantis dan profesional.
                    </p>
                  </div>
                  <div className="grid gap-4">
                    <div className="rounded-3xl bg-white p-6 shadow-sm">
                      <p className="text-sm font-medium text-stone-900">Responsif & Cepat</p>
                      <p className="mt-2 text-sm leading-6 text-stone-500">Tampilan optimal di layar desktop, tablet, dan ponsel.</p>
                    </div>
                    <div className="rounded-3xl bg-white p-6 shadow-sm">
                      <p className="text-sm font-medium text-stone-900">Mudah dipilih</p>
                      <p className="mt-2 text-sm leading-6 text-stone-500">Filter kategori dan pencarian memudahkan Anda menemukan mood desain yang tepat.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="themes" className="px-6 pb-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 xl:grid-cols-[280px_1fr]">
          <aside className="hidden xl:block">
            <div className="sticky top-28 space-y-6">
              <div className="rounded-[32px] border border-stone-200 bg-white p-6 shadow-soft">
                <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-600">Filter Cepat</h2>
                <p className="mt-3 text-sm leading-6 text-stone-600">
                  Pilih kategori tema atau gunakan pencarian untuk menemukan inspirasi yang paling sesuai.
                </p>
                <div className="mt-6 space-y-3">
                  {categories.slice(1).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-left text-sm font-medium text-stone-700 transition hover:border-rose-300 hover:bg-rose-50"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div className="rounded-[32px] border border-stone-200 bg-white p-6 shadow-soft">
                <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">Fitur Unggulan</h3>
                <ul className="mt-4 space-y-3 text-sm text-stone-600">
                  <li>• Tema siap pakai dengan tampilan premium</li>
                  <li>• Akses cepat ke preview dan detail</li>
                  <li>• Mendukung RSVP, buku tamu, dan custom domain</li>
                </ul>
              </div>
            </div>
          </aside>

          <div className="space-y-8">
            <div className="rounded-[32px] border border-stone-200 bg-white p-6 shadow-soft">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-stone-950">Pilih Tema Anda</h2>
                  <p className="mt-2 text-sm text-stone-500">{filteredThemes.length} tema ditemukan dalam kategori “{filter}”.</p>
                </div>
                <div className="w-full max-w-md">
                  <label htmlFor="search" className="sr-only">Cari nama tema</label>
                  <input
                    id="search"
                    type="text"
                    placeholder="Cari nama tema..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded-3xl border border-stone-200 bg-stone-50 px-5 py-3 text-sm text-stone-900 outline-none transition focus:border-rose-300 focus:ring-4 focus:ring-rose-100"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                      filter === cat
                        ? "bg-rose-600 text-white shadow-lg shadow-rose-500/20"
                        : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {filteredThemes.length > 0 ? (
              <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {filteredThemes.map((theme) => (
                  <article
                    key={theme.id}
                    className="group overflow-hidden rounded-[32px] border border-stone-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        fill
                        src={theme.image}
                        alt={theme.name}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 flex flex-col gap-2">
                        <span className="rounded-full bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-stone-900">
                          {theme.category}
                        </span>
                        <h3 className="text-xl font-semibold text-white">{theme.name}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-stone-600">
                        Desain tema elegan yang cocok untuk undangan pernikahan dan acara romantis.
                      </p>
                      <Link
                        href={`/themes/${theme.id}`}
                        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-rose-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-rose-700"
                      >
                        Lihat Preview
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-[32px] border border-stone-200 bg-white p-16 text-center shadow-soft">
                <p className="text-lg font-semibold text-stone-950">Tidak ada tema ditemukan.</p>
                <p className="mt-3 text-sm text-stone-500">Coba gunakan kata kunci lain atau pilih kategori yang berbeda.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="about" className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[40px] border border-stone-200 bg-white p-10 shadow-soft">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-rose-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">
                Kenapa Weddify
              </span>
              <h2 className="mt-6 text-4xl font-semibold tracking-tight text-stone-950">
                Desain undangan digital yang elegan dan mudah digunakan
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
                Setiap tema dirancang untuk memberikan pengalaman visual yang halus dan responsif, cocok untuk undangan pernikahan, tunangan, atau acara spesial lain.
              </p>
            </div>
            <div className="grid gap-5">
              {[
                { title: "Tampilan modern", desc: "Font halus, warna hangat, dan tata letak bersih untuk kesan premium." },
                { title: "Navigasi mudah", desc: "Filter kategori dan preview langsung membantu tamu menemukan informasi dengan cepat." },
                { title: "Siap pakai", desc: "Desain siap digunakan dan mudah dipersonalisasi tanpa harus menyesuaikan ulang UI." },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-stone-200 bg-rose-50/80 p-6">
                  <h3 className="text-lg font-semibold text-stone-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-stone-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
