import { createClient } from '@supabase/supabase-js';

// 1. Mencoba mengambil variabel dari .env.local
const urlFromEnv = process.env.NEXT_PUBLIC_SUPABASE_URL;
const keyFromEnv = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// 2. Memberikan fallback (nilai cadangan) agar aplikasi tetap berjalan
const supabaseUrl = urlFromEnv || "";
const supabaseAnonKey = keyFromEnv || "";

// 3. Debugging: Memberitahu Anda di terminal apakah variabel terbaca dari file atau menggunakan cadangan
if (!urlFromEnv || !keyFromEnv) {
  console.error("❌ ERROR: .env.local tidak ditemukan atau variabel lingkungan hilang!");
} else {
  console.log("✅ Supabase berhasil terhubung menggunakan variabel dari .env.local");
}

// 4. Inisialisasi client
// Catatan: Untuk Google OAuth, pastikan URL Redirect di Dashboard Supabase 
// disetel ke: http://localhost:3000/auth/callback (saat development)
// Dan di Google Console Authorized Redirect URI adalah:
// https://[PROJECT_ID].supabase.co/auth/v1/callback
export const supabase = createClient(supabaseUrl, supabaseAnonKey);