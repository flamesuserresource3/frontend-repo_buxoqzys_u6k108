import { Code, Monitor, Brush, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Monitor,
    title: 'Website Design',
    desc: 'Elegant, responsive designs that reflect your brand and convert visitors into customers.'
  },
  {
    icon: Code,
    title: 'Web Development',
    desc: 'Modern stack, outstanding performance, SEO-ready, and built to scale.'
  },
  {
    icon: Brush,
    title: 'Brand & UI Systems',
    desc: 'Cohesive design languages, components, and guidelines for product teams.'
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-10 -translate-x-1/2 h-32 w-[75%] bg-gradient-to-r from-fuchsia-600/20 to-purple-600/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What we do</h2>
          <p className="mt-3 text-white/70">Full-service design and development focused on clarity, speed, and measurable outcomes.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true, amount: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm"
            >
              <div className="absolute inset-px rounded-[14px] bg-gradient-to-br from-fuchsia-500/10 to-purple-600/10" />
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600 grid place-items-center shadow-[0_10px_40px_rgba(236,72,153,0.35)]">
                  <Icon className="text-white" size={20} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-xs text-fuchsia-300/90">
                  <CheckCircle size={14} /> Premium quality
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
