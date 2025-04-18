
import { Link } from 'react-scroll';
import { ArrowDownCircle, Code2, Database, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-100 to-gray-200">
      {/* Professional geometric pattern background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/[0.07] to-slate-900/[0.07] pattern-grid-lg" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,rgba(36,0,83,0.05),transparent)]" />
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden">
        <Terminal className="absolute top-1/4 left-1/4 text-slate-400/20 h-20 w-20 animate-float" />
        <Code2 className="absolute top-1/3 right-1/4 text-slate-400/20 h-16 w-16 animate-float-delayed" />
        <Database className="absolute bottom-1/4 left-1/3 text-slate-400/20 h-24 w-24 animate-float" />
      </div>

      <div className="container mx-auto px-6 py-32 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 animate-fade-in">
          Sameer S Mansur
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in animation-delay-200">
          Computer Science Engineer
        </p>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in animation-delay-200">
          A Passionate and Dedicated Graduate Ready to Make an Impact in the Industry
        </p>
        <Link
          to="contact"
          smooth={true}
          className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-slate-700 to-slate-900 text-white rounded-full hover:scale-105 transition-transform duration-300 cursor-pointer animate-fade-in animation-delay-400 shadow-lg"
        >
          Get In Touch
          <ArrowDownCircle className="ml-2" size={20} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
