import Spline from '@splinetool/react-spline';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-28 overflow-hidden">
      {/* Ambient gradient beams that don't block Spline interactions */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-10 h-72 w-[90%] -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-600/25 via-pink-500/20 to-purple-600/25 blur-3xl" />
        <div className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.6 }}
          className="order-2 lg:order-1"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <CheckCircle size={14} className="text-fuchsia-400" />
            Websites that convert. Brands that stand out.
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-fuchsia-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">24Digital</span>
            <span className="text-white"> — Next‑level web experiences</span>
          </h1>
          <p className="mt-4 text-white/70 text-base sm:text-lg max-w-xl">
            We design and build high-performance sites for ambitious brands. Strategy, design, and development—crafted to drive measurable growth.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-fuchsia-500 via-pink-500 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_50px_rgba(236,72,153,0.35)] hover:brightness-110 transition"
            >
              Start Your Project
              <ArrowRight size={18} />
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              See Our Work
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
          className="order-1 lg:order-2 relative h-[440px] sm:h-[540px] lg:h-[660px] rounded-2xl overflow-hidden border border-white/10 bg-black/40"
        >
          <Spline
            scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
