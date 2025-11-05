import React from 'react';
import Hero from './components/Hero.jsx';
import InvestmentHighlights from './components/InvestmentHighlights.jsx';
import Facilities from './components/Facilities.jsx';
import Legality from './components/Legality.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      <Hero />
      <InvestmentHighlights />
      <Facilities />
      <Legality />
      <footer className="mt-20 border-t border-slate-200/70 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-500">© {new Date().getFullYear()} Nazra Cikahuripan. All rights reserved.</p>
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <span>Strategic land plot near Jakarta • East Bogor</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
