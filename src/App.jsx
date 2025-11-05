import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      {/* Global background accents */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute top-[-10%] left-[-10%] h-72 w-72 rounded-full bg-fuchsia-700/20 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] h-72 w-72 rounded-full bg-purple-700/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.08),transparent_40%),radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.08),transparent_40%)]" />
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
