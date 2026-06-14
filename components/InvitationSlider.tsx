"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { title: "Selamat Datang", desc: "Pernikahan Kami", bg: "bg-stone-800" },
  { title: "Mempelai Pria", desc: "Renz", bg: "bg-pink-900" },
  { title: "Mempelai Wanita", desc: "MJE", bg: "bg-sky-900" },
];

export default function InvitationSlider() {
  const [index, setIndex] = useState(0);

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000); // Ganti slide setiap 3 detik
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-3xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 ${slides[index].bg} flex flex-col items-center justify-center text-white p-8`}
        >
          <h2 className="text-2xl font-light opacity-80">{slides[index].title}</h2>
          <h1 className="text-5xl font-bold mt-2">{slides[index].desc}</h1>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}