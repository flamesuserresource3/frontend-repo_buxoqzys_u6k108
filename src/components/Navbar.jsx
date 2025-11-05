import { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-3 flex h-14 items-center justify-between rounded-xl border border-white/10 bg-black/40 px-3 sm:px-4 backdrop-blur supports-[backdrop-filter]:bg-black/30">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-fuchsia-500 to-purple-600 grid place-items-center shadow-[0_8px_30px_rgba(236,72,153,0.35)]">
              <Rocket size={18} className="text-white" />
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">24Digital</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-fuchsia-500 via-pink-500 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-[0_10px_40px_rgba(236,72,153,0.35)] hover:brightness-110 transition"
            >
              Start a Project
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/10 text-white"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="mt-2 space-y-2 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-fuchsia-500 via-pink-500 to-purple-600 text-center"
              >
                Start a Project
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
