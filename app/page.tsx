import WelcomeScreen from "@/components/WelcomeScreen";
import Countdown from "@/components/Countdown";
import GuestForm from "@/components/GuestForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50 flex flex-col items-center py-16 px-4 md:px-8">
      {/* WelcomeScreen akan menutupi layar saat pertama kali dibuka.
         Saat tombol "Buka Undangan" diklik, dia akan menghilang.
      */}
      <WelcomeScreen />

      {/* Bagian Judul (Hero) */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-pink-600 mb-4">
          Pernikahan Kami
        </h1>
        <p className="text-lg text-gray-700 italic">
          Kami tidak sabar menunggu hari bahagia ini.
        </p>
      </section>

      {/* Bagian Countdown */}
      <section className="w-full flex justify-center mb-16">
        <Countdown targetDate="2026-12-31T00:00:00" />
      </section>

      {/* Bagian Buku Tamu */}
      <section className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl border border-pink-100">
        <GuestForm />
      </section>
    </main>
  );
}