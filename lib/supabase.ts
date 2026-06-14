import { createClient } from '@supabase/supabase-js';

// 1. Mencoba mengambil variabel dari .env.local
const urlFromEnv = process.env.NEXT_PUBLIC_SUPABASE_URL;
const keyFromEnv = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// 2. Memberikan fallback (nilai cadangan) agar aplikasi tetap berjalan
const supabaseUrl = urlFromEnv || "https://uozglcsxmzrlvyouzdcs.supabase.co";
const supabaseAnonKey = keyFromEnv || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvemdsY3N4bXpybHZ5b3V6ZGNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNTYwNjYsImV4cCI6MjA5NjkzMjA2Nn0.ggNNS6NeEmQsSDoZ1cS4uMRJ4ca1RqZKqUTVarBv3Uc";

// 3. Debugging: Memberitahu Anda di terminal apakah variabel terbaca dari file atau menggunakan cadangan
if (!urlFromEnv || !keyFromEnv) {
  console.warn("⚠️ Peringatan: .env.local tidak terbaca! Menggunakan nilai hardcoded sebagai cadangan.");
} else {
  console.log("✅ Supabase berhasil terhubung menggunakan variabel dari .env.local");
}

// 4. Inisialisasi client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);