import React from 'react';
import { motion } from 'framer-motion';
import { Train, MapPin, DollarSign, Mountain } from 'lucide-react';

const items = [
  {
    icon: <Train className="h-5 w-5 text-blue-600" />,
    title: 'Strategic Access',
    desc: 'Close to the planned Mekarsari LRT and East Bogor Expansion with easy access from multiple directions.',
  },
  {
    icon: <DollarSign className="h-5 w-5 text-emerald-600" />,
    title: 'Affordable Price',
    desc: 'Starting from IDR 690,000 per meter — unmatched value for land closest to Jakarta.',
  },
  {
    icon: <Mountain className="h-5 w-5 text-orange-600" />,
    title: 'Scenic Views',
    desc: 'Enjoy the comfort of quiet surroundings with mountain and city panoramas.',
  },
  {
    icon: <MapPin className="h-5 w-5 text-fuchsia-600" />,
    title: 'Prime Location',
    desc: 'A growing area with strong upside potential — ideal for living or investment.',
  },
];

const InvestmentHighlights = () => {
  return (
    <section id="highlights" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            The Nazra Cikahuripan Land Plot is the Right Choice
          </h2>
          <p className="mt-3 text-slate-600">
            Strategic, accessible, and designed for future growth — a smart move for homeowners and investors alike.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-slate-50 p-2.5 ring-1 ring-inset ring-slate-200">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          id="cta"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-14 overflow-hidden rounded-3xl border border-emerald-200/60 bg-gradient-to-tr from-emerald-50 to-white p-8 shadow-lg"
        >
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-emerald-700">Dream Land Plot</p>
              <h3 className="mt-1 text-2xl font-bold text-slate-900">Closest to Jakarta with very affordable prices</h3>
              <p className="mt-1 text-slate-600">Starting from <span className="font-semibold text-slate-900">IDR 690,000 / m²</span></p>
            </div>
            <a
              href="#legality"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 font-medium text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
            >
              Learn About Legality
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentHighlights;
