// data/siteData.ts

// Interface agar struktur data rapi dan konsisten
export interface Package {
  name: string;
  price: string;
  features: string[];
}

export interface Benefit {
  title: string;
  desc: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface Theme {
  id: string;
  name: string;
  image: string;
  category: "Classic" | "Modern" | "Floral" | "Rustic";
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

// Data Paket
export const packages: Package[] = [
  { 
    name: "Paket Silver", 
    price: "Rp 99.000", 
    features: ["Desain Eksklusif", "Musik Latar", "Revisi 1x"] 
  },
  { 
    name: "Paket Gold", 
    price: "Rp 199.000", 
    features: ["Semua Paket Silver", "Buku Tamu Digital", "Custom Domain", "Revisi 3x"] 
  },
];

// Data Keunggulan
export const keunggulan: Benefit[] = [
  { title: "Proses Cepat", desc: "Selesai dalam 1x24 jam setelah data lengkap diterima." },
  { title: "Responsif", desc: "Tampilan otomatis menyesuaikan layar HP tamu agar terlihat elegan." },
  { title: "Fitur Lengkap", desc: "Dilengkapi RSVP, Galeri Foto, dan Amplop Digital terintegrasi." },
];

// Data Tema (Inspirasi Wevitation)
export const themes: Theme[] = [
  { id: "1", name: "Midnight Rose", category: "Modern", image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800" },
  { id: "2", name: "Golden Leaves", category: "Classic", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800" },
  { id: "3", name: "Rustic Wood", category: "Rustic", image: "https://images.unsplash.com/photo-1522673607200-164883eecd4c?q=80&w=800" },
  { id: "4", name: "Spring Garden", category: "Floral", image: "https://images.unsplash.com/photo-1519225495810-7512532452c1?q=80&w=800" },
];

// Data Testimoni
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Aditya & Sarah",
    role: "Pengantin Baru",
    content: "Weddify membuat proses undangan kami jadi sangat mudah. Desainnya sangat premium dan tamu-tamu kami sangat terkesan!",
    rating: 5,
  },
  {
    id: "2",
    name: "Budi & Laras",
    role: "Pengantin Baru",
    content: "Fitur RSVP-nya sangat membantu kami mendata tamu yang hadir. Sangat worth it dengan harganya!",
    rating: 5,
  },
];

// Data FAQ
export const faqs: FAQ[] = [
  { 
    q: "Berapa lama proses pengerjaan?", 
    a: "Hanya 1x24 jam setelah data lengkap kami terima." 
  },
  { 
    q: "Bisakah ganti foto?", 
    a: "Ya, Anda bisa mengganti foto kapan saja melalui dashboard klien yang kami sediakan." 
  },
  { 
    q: "Apakah link undangan bisa expired?", 
    a: "Tergantung paket yang dipilih, rata-rata link aktif hingga 1 tahun setelah acara." 
  },
];