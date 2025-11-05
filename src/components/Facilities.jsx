import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Sun, ShieldCheck, CheckCircle } from 'lucide-react';

const facilities = [
  { icon: <Leaf className="h-5 w-5 text-emerald-600" />, title: 'Fruit Picking Park' },
  { icon: <Sun className="h-5 w-5 text-amber-500" />, title: 'Green Open Space' },
  { icon: <ShieldCheck className="h-5 w-5 text-blue-600" />, title: 'Prayer Room' },
  { icon: <CheckCircle className="h-5 w-5 text-slate-700" />, title: 'Concrete Road ± 8m' },
  { icon: <CheckCircle className="h-5 w-5 text-slate-700" />, title: 'Drainage System' },
  { icon: <CheckCircle className="h-5 w-5 text-slate-700" />, title: 'Street Lights in Every Area' },
  { icon: <CheckCircle className="h-5 w-5 text-slate-700" />, title: 'Electricity Network' },
];

const Facilities = () => {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Comfortable Living Surrounded by Nature</h2>
          <p className="mt-3 text-slate-600">Equipped with facilities that support a peaceful and beautiful lifestyle.</p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-slate-50 p-2.5 ring-1 ring-slate-200">
                  {f.icon}
                </div>
                <p className="font-medium text-slate-900">{f.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
