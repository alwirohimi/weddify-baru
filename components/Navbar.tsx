import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight text-stone-950">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-500 text-sm font-bold text-white shadow-lg shadow-rose-500/20">
            W
          </span>
          Weddify
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-stone-600 md:flex">
          <Link href="#themes" className="transition hover:text-stone-900">
            Tema
          </Link>
          <Link href="#about" className="transition hover:text-stone-900">
            Tentang
          </Link>
          <Link href="/#paket" className="transition hover:text-stone-900">
            Paket
          </Link>
        </nav>

        <Link
          href="#themes"
          className="hidden rounded-full bg-rose-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-rose-500/20 transition hover:bg-rose-700 md:inline-flex"
        >
          Login
        </Link>
      </div>
    </header>
  );
}
