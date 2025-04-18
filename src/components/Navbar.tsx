import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "about", label: "About" },
    { href: "education", label: "Education" },
    { href: "skills", label: "Skills" },
    { href: "projects", label: "Projects" },
    { href: "domain", label: "Domain" },
    { href: "cv", label: "Resume" },
    { href: "contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="home" smooth={true} className="text-2xl font-bold cursor-pointer">
            S<span className="text-primary">M</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                smooth={true}
                spy={true}
                offset={-70}
                className="text-gray-600 hover:text-primary cursor-pointer transition-colors duration-300"
                activeClass="text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                smooth={true}
                spy={true}
                offset={-70}
                className="block py-2 text-gray-600 hover:text-primary cursor-pointer transition-colors duration-300"
                activeClass="text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
