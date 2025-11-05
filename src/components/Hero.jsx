import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mountain, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.15),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-28 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            Clean & Clear Legality
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Make Your Dream Home and Smart Investment a Reality
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Want to own your own home or grow your assets in a thriving area? Nazra Cikahuripan is your perfect choice — strategic location, high investment value, and easy access from multiple directions.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#highlights"
              className="group inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:shadow-slate-900/20"
            >
              Explore Highlights
            </a>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Get Pricing
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
            <div className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-blue-600" /> Near planned Mekarsari LRT & East Bogor Expansion
            </div>
            <div className="inline-flex items-center gap-2">
              <Mountain className="h-4 w-4 text-emerald-600" /> Mountain and city views
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="relative mx-auto mt-14 max-w-6xl"
        >
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-blue-50/50 via-transparent to-emerald-50/60" />
            <img
              src="https://images.unsplash.com/photo-1512813382947-4b0ef3b85cb5?q=80&w=1974&auto=format&fit=crop"
              alt="Nazra Cikahuripan landscape"
              className="h-72 w-full object-cover sm:h-[28rem]"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
