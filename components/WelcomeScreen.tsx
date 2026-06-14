"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function WelcomeScreen() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-stone-900 text-white"
        >
          <h1 className="text-3xl font-serif mb-4">Undangan Pernikahan</h1>
          <p className="mb-8 opacity-80">Kepada Bapak/Ibu/Saudara/i</p>
          <button
            onClick={() => setIsOpen(true)}
            className="px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform shadow-lg"
          >
            Buka Undangan
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}