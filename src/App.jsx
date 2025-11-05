import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#07070a] text-white antialiased">
      {/* Global background: soft grid + magenta/purple glows + noise */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:22px_22px] opacity-[0.08]" />
        <div className="absolute -top-10 left-0 right-0 mx-auto h-[420px] w-[900px] max-w-[90%] rotate-0 rounded-[100%] bg-gradient-to-r from-fuchsia-600/25 via-violet-600/25 to-purple-600/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-[100%] bg-gradient-to-r from-purple-700/20 via-fuchsia-600/20 to-pink-600/20 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <Work />
      </main>
      <Footer />
    </div>
  );
}

export default App;
