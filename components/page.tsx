"use client";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";

export default function LoginPage() {
  const handleGoogleLogin = async () => {
    // Memulai alur OAuth 2.0. Supabase akan menangani Step 2 & 3 (handshake token) otomatis.
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        // URL tujuan setelah Google memberikan persetujuan
        redirectTo: `${window.location.origin}/auth/callback`,
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    });

    if (error) {
      console.error("Auth Error:", error.message);
      alert("Gagal menghubungkan ke Google: " + error.message);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-stone-50 px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white p-10 rounded-[2.5rem] shadow-xl border border-stone-100 text-center"
      >
        <h1 className="text-3xl font-bold text-stone-900 mb-2">Selamat Datang</h1>
        <p className="text-stone-500 mb-8 font-medium">Masuk ke Dashboard Weddify Anda</p>
        
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 py-4 border-2 border-stone-100 rounded-2xl font-bold text-stone-700 hover:bg-stone-50 hover:border-stone-200 transition-all active:scale-95"
        >
          <img 
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
            alt="Google" 
            className="w-5 h-5"
          />
          Lanjut dengan Google
        </button>
        
        <p className="mt-8 text-xs text-stone-400 leading-relaxed">
          Dengan masuk, Anda mendapatkan akses otomatis ke status pesanan menggunakan email yang sudah terverifikasi oleh Google.
        </p>
      </motion.div>
    </main>
  );
}