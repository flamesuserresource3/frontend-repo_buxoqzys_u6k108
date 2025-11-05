import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Revamp',
    desc: 'A lightning-fast storefront built with modern tooling to boost conversion rates.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
    url: '#',
  },
  {
    title: 'SaaS Landing Page',
    desc: 'Conversion-focused hero, crisp UI, and marketing site with analytics baked in.',
    image:
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1600&auto=format&fit=crop',
    url: '#',
  },
  {
    title: 'Portfolio Platform',
    desc: 'A modular portfolio builder with accessible components and CMS integration.',
    image:
      'https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=1600&auto=format&fit=crop',
    url: '#',
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected work</h2>
            <p className="mt-3 text-white/70 max-w-2xl">A snapshot of recent projects. We tailor each website to the brand and business goals.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
            Start a project
            <ExternalLink size={16} />
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.url} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">{p.title}</h3>
                  <ExternalLink size={18} className="text-white/70 group-hover:text-white" />
                </div>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
