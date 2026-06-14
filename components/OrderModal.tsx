"use client";
import { useState } from "react";
import { supabase } from "../lib/supabase";
import { Package } from "../data/siteData";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: Package | null;
}

export default function OrderModal({ isOpen, onClose, selectedPackage }: OrderModalProps) {
  const [data, setData] = useState({ nama: "", tanggal: "" });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  if (!isOpen || !selectedPackage) return null;

  const handleOrder = async () => {
    // Validasi Dasar (SOP UX)
    if (data.nama.length < 3) {
      return alert("Nama pengantin minimal 3 karakter.");
    }
    if (!data.tanggal) {
      return alert("Silakan pilih tanggal pernikahan.");
    }
    
    setStatus('loading');
    
    // 1. Simpan ke Database Supabase
    const { error } = await supabase
      .from('orders')
      .insert([{ 
        wedding_name: data.nama, 
        wedding_date: data.tanggal, 
        package_name: selectedPackage.name,
        price: selectedPackage.price
      }]);
      
    if (error) {
      setStatus('error');
      return;
    }

    setStatus('success');
    const text = `Halo Admin Weddify, saya ingin pesan ${selectedPackage.name}. Data: Nama Pengantin: ${data.nama}, Tanggal: ${data.tanggal}`;
    window.open(`https://wa.me/628123456789?text=${encodeURIComponent(text)}`);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-2xl w-full max-w-sm shadow-2xl">
        <h3 className="text-xl font-bold mb-4">Pesan {selectedPackage.name}</h3>
        {status === 'success' ? (
          <div className="text-center py-4">
            <div className="text-green-500 text-4xl mb-2">✓</div>
            <p className="font-medium">Pesanan Berhasil Dicatat!</p>
            <button onClick={onClose} className="mt-4 text-stone-500 underline">Tutup</button>
          </div>
        ) : (
          <>
        <input 
          className="w-full p-3 border rounded-lg mb-3" 
          placeholder="Nama Pengantin" 
          onChange={(e) => setData({...data, nama: e.target.value})}
        />
        <input 
          type="date" 
          className="w-full p-3 border rounded-lg mb-6" 
          onChange={(e) => setData({...data, tanggal: e.target.value})}
        />
        <div className="flex gap-2">
          <button onClick={onClose} className="w-full py-3 border rounded-lg">Batal</button>
          <button 
            onClick={handleOrder} 
            disabled={status === 'loading'}
            className={`w-full py-3 ${status === 'loading' ? 'bg-stone-400' : 'bg-green-600'} text-white rounded-lg font-bold transition-all`}
          >
            {status === 'loading' ? "Memproses..." : "Kirim ke WA"}
          </button>
        </div>
          </>
        )}
      </div>
    </div>
  );
}