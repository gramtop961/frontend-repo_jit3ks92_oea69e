import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full min-h-[80vh] overflow-hidden bg-black text-white">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        src="https://cdn.coverr.co/videos/coverr-strolling-through-the-streets-6240/1080p.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-label="فيديو للمرشح حامد بوندو في حي العربي"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        <span className="inline-block rounded-full bg-emerald-500/20 text-emerald-200 px-4 py-1 text-sm mb-6 border border-emerald-400/30">
          ابن العربي، صوت الشباب، بديل النزاهة
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          صوت منكم... ومستقبل لكم
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-white/90">
          حملة انتخابية واثقة، أصيلة، وحاسمة من قلب حي "العربي" لبناء سياسة نظيفة وخدمة حقيقية لأهالينا في بورسعيد.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a href="#youth-agenda" className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition">
            برنامجنا للشباب
          </a>
          <a href="#why-different" className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition border border-white/20">
            لماذا نختلف
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />
    </section>
  );
};

export default Hero;
