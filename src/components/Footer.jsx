import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-20 pb-10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 right-0 bottom-0 h-40 bg-gradient-to-t from-purple-700/20 to-transparent blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white">Let’s build something remarkable</h3>
            <p className="mt-3 text-white/70 max-w-xl">Tell us about your goals and timeline. We’ll come back with a tailored plan, a timeline, and a transparent estimate.</p>

            <div className="mt-6 grid gap-3">
              <a href="mailto:hello@24digital.studio" className="inline-flex items-center gap-3 text-white/90 hover:text-white">
                <Mail size={18} className="text-fuchsia-400" /> hello@24digital.studio
              </a>
              <a href="tel:+10000000000" className="inline-flex items-center gap-3 text-white/90 hover:text-white">
                <Phone size={18} className="text-fuchsia-400" /> +1 (000) 000-0000
              </a>
              <p className="inline-flex items-center gap-3 text-white/60">
                <MapPin size={18} className="text-fuchsia-400" /> Remote • Worldwide
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <form className="grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/70 mb-1">Name</label>
                  <input type="text" className="w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-1">Email</label>
                  <input type="email" className="w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="you@company.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Project Details</label>
                <textarea rows={4} className="w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Tell us about your project, goals, and timeline" />
              </div>
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-fuchsia-500 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 hover:opacity-95 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} 24Digital. All rights reserved.</p>
          <p className="text-white/50 text-sm">Made with passion for design and performance.</p>
        </div>
      </div>
    </footer>
  );
}
