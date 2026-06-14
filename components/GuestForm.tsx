"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase"; // Pastikan file ini sudah ada

export default function GuestForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const { error } = await supabase
      .from('guests')
      .insert([{ name, message, presence: true }]);

    if (error) {
      alert("Gagal mengirim ucapan: " + error.message);
    } else {
      alert("Terima kasih, ucapan Anda sudah terkirim!");
      setName("");
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-bold mb-4">Buku Tamu</h2>
      <input 
        className="w-full p-2 border rounded mb-2"
        placeholder="Nama Anda"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea 
        className="w-full p-2 border rounded mb-4"
        placeholder="Tulis ucapan selamat..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="w-full bg-pink-600 text-white p-2 rounded">Kirim</button>
    </form>
  );
}