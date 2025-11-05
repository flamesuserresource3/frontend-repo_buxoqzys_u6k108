import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-commerce Revamp',
    desc: 'A lightning-fast storefront built to boost conversion rates.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
    url: '#',
  },
  {
    title: 'SaaS Landing Page',
    desc: 'Conversion-focused hero, crisp UI, and analytics baked in.',
    image:
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1600&auto=format&fit=crop',
    url: '#',
  },
  {
    title: 'Portfolio Platform',
    desc: 'A modular portfolio builder with accessible components.',
    image:
      'https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=1600&auto=format&fit=crop',
    url: '#',
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected work</h2>
            <p className="mt-3 text-white/70 max-w-2xl">A snapshot of recent projects. Each site is tailored to brand and business goals.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
            Start a project
            <ExternalLink size={16} />
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              viewport={{ once: true, amount: 0.4 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-sm"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">{p.title}</h3>
                  <ExternalLink size={18} className="text-white/70 group-hover:text-white" />
                </div>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
