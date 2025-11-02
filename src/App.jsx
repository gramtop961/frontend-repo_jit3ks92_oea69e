import React from 'react';
import Hero from './components/Hero';
import WhyDifferent from './components/WhyDifferent';
import YouthAgenda from './components/YouthAgenda';
import CommunityHub from './components/CommunityHub';

function App() {
  return (
    <div dir="rtl" className="font-sans text-gray-900">
      <header className="sticky top-0 z-20 backdrop-blur bg-white/60 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="font-extrabold text-xl text-emerald-700">حامد بوندو</div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#hero" className="hover:text-emerald-700">الرئيسية</a>
            <a href="#why-different" className="hover:text-emerald-700">لماذا نختلف</a>
            <a href="#youth-agenda" className="hover:text-emerald-700">أجندة الشباب</a>
            <a href="#community" className="hover:text-emerald-700">شارك وتواصل</a>
          </nav>
          <a href="#community" className="md:hidden px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-sm">انضم لنا</a>
        </div>
      </header>

      <main>
        <Hero />
        <WhyDifferent />
        <YouthAgenda />
        <CommunityHub />
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/80 text-sm">© {new Date().getFullYear()} حملة حامد بوندو — بورسعيد</p>
          <p className="text-white/60 text-sm">ابن العربي، صوت الشباب، بديل النزاهة</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
