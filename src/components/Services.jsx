import { Code, Monitor, Brush } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Website Design',
    desc: 'Elegant, responsive designs that reflect your brand and convert visitors into customers.'
  },
  {
    icon: Code,
    title: 'Web Development',
    desc: 'Modern tech stack, fast performance, SEO-friendly, and fully maintainable.'
  },
  {
    icon: Brush,
    title: 'Brand & UI Systems',
    desc: 'Consistent visuals, components, and guidelines to scale your digital presence.'
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-10 -translate-x-1/2 h-32 w-[70%] bg-gradient-to-r from-fuchsia-600/20 to-purple-600/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What we do</h2>
          <p className="mt-3 text-white/70">Full-service web design and development focused on clarity, speed, and measurable outcomes.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.08] hover:border-white/20">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600 grid place-items-center shadow-lg shadow-fuchsia-500/30">
                <Icon className="text-white" size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
