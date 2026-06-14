"use client";
import { useState, useEffect } from "react";

export default function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 text-center my-8">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="bg-pink-100 p-4 rounded-lg min-w-[70px]">
          <div className="text-2xl font-bold text-pink-600">{value}</div>
          <div className="text-xs uppercase">{label}</div>
        </div>
      ))}
    </div>
  );
}