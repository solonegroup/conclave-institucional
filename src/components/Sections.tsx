import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import heroVideoWebm from '../assets/videos/hero-buildings-loop.webm';
import heroVideoMp4 from '../assets/videos/hero-buildings-loop.mp4';
import heroVideoMobile from '../assets/videos/hero-buildings-loop-mobile.mp4';
import heroPoster from '../assets/images/hero-buildings-poster.jpg';
import { useLanguage } from '../i18n/LanguageContext';
import { LANGUAGES } from '../i18n/translations';

function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGUAGES.find((l) => l.code === lang)!;

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative text-[10px] md:text-[11px]">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.nav.language}
        className="flex items-center gap-2 border border-ivory/20 hover:border-gold/60 px-4 py-2 text-gold cursor-pointer transition-colors duration-500"
      >
        <span lang={current.htmlLang}>
          <span className="md:hidden">{current.short}</span>
          <span className="hidden md:inline">{current.name}</span>
        </span>
        <ChevronDown size={12} className={`transition-transform duration-500 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t.nav.language}
          className="absolute right-0 top-full mt-2 min-w-full bg-black border border-ivory/20 z-30"
        >
          {LANGUAGES.map((l) => (
            <li key={l.code} role="option" aria-selected={lang === l.code}>
              <button
                type="button"
                lang={l.htmlLang}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className={`w-full text-left whitespace-nowrap px-4 py-2.5 cursor-pointer transition-colors duration-500 hover:text-gold hover:bg-graphite ${lang === l.code ? 'text-gold' : 'text-ivory/60'}`}
              >
                <span className="md:hidden inline-block w-14 text-gold/70">{l.short}</span>
                {l.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Hero() {
  const { t } = useLanguage();
  const [reduceMotion, setReduceMotion] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches
  );
  const [videoFailed, setVideoFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const showVideo = !reduceMotion && !videoFailed;

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobileQuery = window.matchMedia('(max-width: 767px)');
    const onMotion = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    const onMobile = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    motionQuery.addEventListener('change', onMotion);
    mobileQuery.addEventListener('change', onMobile);
    return () => {
      motionQuery.removeEventListener('change', onMotion);
      mobileQuery.removeEventListener('change', onMobile);
    };
  }, []);

  useEffect(() => {
    // Autoplay pode ser bloqueado; nesse caso o poster segue visível.
    videoRef.current?.play().catch(() => {});
  }, [showVideo, isMobile]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background video (loop) with static image as fallback/poster */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 overflow-hidden opacity-40"
        style={{
          backgroundImage: `url(${heroPoster})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%) contrast(120%)'
        }}
      >
        {showVideo && (
          <video
            key={isMobile ? 'mobile' : 'desktop'}
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            poster={heroPoster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            tabIndex={-1}
          >
            {/* Erros de carregamento disparam no <source>; só o último da lista indica falha total. */}
            {isMobile ? (
              <source src={heroVideoMobile} type="video/mp4" onError={() => setVideoFailed(true)} />
            ) : (
              <>
                <source src={heroVideoWebm} type='video/webm; codecs="vp9"' />
                <source src={heroVideoMp4} type="video/mp4" onError={() => setVideoFailed(true)} />
              </>
            )}
          </video>
        )}
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-black/80 to-black" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-emerald/20 via-transparent to-transparent" />

      {/* Navigation */}
      <nav className="absolute top-0 w-full z-20 px-6 md:px-8 pt-16 md:py-10 pb-10 flex justify-between items-center text-xs tracking-[0.2em] uppercase text-ivory/70">
        <div className="hidden md:flex gap-12">
          <a href="#essence" className="hover:text-gold transition-colors duration-500">{t.nav.about}</a>
          <a href="#process" className="hover:text-gold transition-colors duration-500">{t.nav.process}</a>
        </div>
        
        <div className="flex-1 flex flex-col items-center gap-3 md:gap-2">
           <img src="/logo.png" alt="Conclave" className="h-20 md:h-10 w-auto md:opacity-90 object-contain" />
           <span className="font-serif text-gold text-sm md:text-xs tracking-[0.4em] md:tracking-[0.35em] uppercase whitespace-nowrap">Conclave Business</span>
        </div>

        <div className="hidden md:flex gap-12">
          <a href="#units" className="hover:text-emerald-light transition-colors duration-500">{t.nav.units}</a>
          <a href="#contact" className="hover:text-emerald-light transition-colors duration-500">{t.nav.contact}</a>
        </div>
        <div className="absolute top-5 right-5 md:static md:ml-12">
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-7xl font-serif text-gold leading-tight mb-8 whitespace-pre-line"
        >
          {t.hero.title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="text-sm md:text-base font-sans text-ivory/80 max-w-2xl mx-auto font-light tracking-wide leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>
      </div>
    </section>
  );
}

export function Essence() {
  const { t } = useLanguage();
  return (
    <section id="essence" className="relative py-32 md:py-48 px-6 bg-graphite flex items-center justify-center overflow-hidden">
      {/* Watermark Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.15]">
        <img src="/logo.png" alt={t.essence.watermarkAlt} className="w-[80%] max-w-2xl object-contain" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[10px] md:text-xs font-sans text-gold/70 tracking-[0.2em] uppercase mb-12 md:mb-16"
        >
          {t.essence.eyebrow}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl md:text-3xl lg:text-[2.5rem] font-serif text-gold leading-relaxed lg:leading-[1.6] max-w-3xl mx-auto"
        >
          {t.essence.text}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.6 }}
        >
          <div className="w-8 h-[1px] bg-gradient-to-r from-gold/40 via-emerald-light/60 to-gold/40 mx-auto mt-16" />
        </motion.div>
      </div>
    </section>
  );
}

const units = [
  {
    id: "imob",
    title: "Conclave Imob",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "trading",
    title: "Conclave Trading",
    image: "https://images.unsplash.com/photo-1611270418597-a6c77f4b7271?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "capital",
    title: "Conclave Capital",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "energy",
    title: "Conclave Energy",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000&auto=format&fit=crop"
  }
];

export function Units() {
  const { t } = useLanguage();
  return (
    <section id="units" className="bg-black">
      <div className="py-24 md:py-32 text-center bg-graphite/50">
        <h2 className="font-serif text-2xl md:text-3xl text-gold">{t.units.heading}</h2>
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-ivory/40 mt-4">{t.units.subheading}</p>
      </div>

      <div className="flex flex-col">
        {units.map((unit, idx) => (
          <motion.div 
            key={unit.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5 }}
            className="relative h-[50vh] md:h-[60vh] min-h-[400px] flex items-center group overflow-hidden border-l-2 border-transparent hover:border-emerald-light transition-colors duration-700"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 z-0 transition-transform duration-[20s] group-hover:scale-105"
              style={{
                backgroundImage: `url(${unit.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'grayscale(80%) brightness(0.25) contrast(1.2)'
              }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
            
            <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
              <div className="max-w-xl">
                <motion.h3 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="font-serif text-3xl md:text-5xl text-gold mb-6"
                >
                  {unit.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="font-sans text-sm md:text-base text-ivory/80 font-light leading-relaxed"
                >
                  {t.units.items[unit.id as keyof typeof t.units.items]}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


export function Principles() {
  const { t } = useLanguage();
  return (
    <section className="py-32 md:py-48 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12"
        >
          {t.principles.map((p, idx) => (
            <div key={idx} className="flex flex-col border-t border-ivory/10 hover:border-emerald-light pt-8 transition-colors duration-500">
              <h4 className="font-serif text-lg md:text-xl text-gold mb-4">{p.title}</h4>
              <p className="font-sans text-sm text-ivory/60 font-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="pt-32 pb-16 md:pt-48 md:pb-20 px-6 bg-graphite border-t border-emerald/40 flex flex-col items-center justify-center text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-3xl mb-32 md:mb-48"
      >
        <p className="font-serif text-xl md:text-3xl text-ivory leading-snug md:leading-relaxed mb-16">
          {t.footer.closing}
        </p>

        <a 
          href="mailto:contact@conclave.com" 
          className="inline-block border border-gold/40 text-gold font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase px-10 py-5 hover:bg-gold hover:text-black transition-all duration-500"
        >
          {t.footer.cta}
        </a>
      </motion.div>

      <div className="w-full max-w-7xl border-t border-ivory/10 pt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-left mb-16">
        <div>
          <span className="block font-sans text-[10px] text-gold/70 tracking-[0.2em] uppercase mb-4">
            {t.footer.legalName}
          </span>
          <p className="font-sans text-xs text-ivory/40 leading-relaxed">
            Conclave Business Imobiliária Consultoria & International Trade Ltda
          </p>
          <p className="font-sans text-[10px] text-ivory/30 tracking-[0.05em] mt-2">
            CNPJ 52.170.121/0001-85
          </p>
        </div>

        <div>
          <span className="block font-sans text-[10px] text-gold/70 tracking-[0.2em] uppercase mb-4">
            {t.footer.address}
          </span>
          <p className="font-sans text-xs text-ivory/40 leading-relaxed">
            R. Ary Barroso, 70 — Sala 1515, Torre 01<br />
            Papicu, Fortaleza — CE<br />
            CEP 60.175-705
          </p>
        </div>

        <div>
          <span className="block font-sans text-[10px] text-gold/70 tracking-[0.2em] uppercase mb-4">
            {t.footer.contact}
          </span>
          <p className="font-sans text-xs text-ivory/40 leading-relaxed">
            <a href="tel:+5585999883486" className="hover:text-gold transition-colors duration-300">
              (85) 9988-3486
            </a><br />
            <a href="mailto:isaacbezerradecarvalho@gmail.com" className="hover:text-gold transition-colors duration-300">
              isaacbezerradecarvalho@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="w-full max-w-7xl border-t border-ivory/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="font-sans text-[10px] text-ivory/30 tracking-[0.1em] uppercase">
          CONCLAVE © {new Date().getFullYear()}
        </span>
        <div className="flex gap-8 font-sans text-[10px] text-ivory/30 tracking-[0.1em] uppercase">
          <a href="#" className="hover:text-gold transition-colors duration-300">{t.footer.privacy}</a>
          <a href="#" className="hover:text-gold transition-colors duration-300">{t.footer.confidentiality}</a>
        </div>
      </div>
    </section>
  );
}
