"use client";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials } from "@/data/siteData";

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Apa Kata Mereka?</h2>
          <p className="text-stone-500">Kebahagiaan klien adalah prioritas utama kami di Weddify.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col gap-4"
            >
              <div className="flex gap-1 text-yellow-500">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-stone-600 italic leading-relaxed">
                "{item.content}"
              </p>

              <div className="mt-4">
                <h4 className="font-bold text-stone-900">{item.name}</h4>
                <p className="text-xs text-stone-400 uppercase tracking-widest">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}