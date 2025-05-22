import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, MapPin, Phone, Search } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Logo from '../ui/Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4">
        {/* Top bar - Only visible on medium screens and up */}
        <div className={`hidden md:flex justify-between items-center text-sm mb-2 ${
          isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'
        } transition-all duration-300`}>
          <div className="flex items-center text-brown-700">
            <div className="flex items-center mr-6">
              <MapPin size={16} className="mr-1" />
              <span>Delivery Across All 58 Wilayas</span>
            </div>
            <div className="flex items-center">
              <Phone size={16} className="mr-1" />
              <span>0698 71 54 96</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/about" className="text-brown-700 hover:text-honey-600 transition-colors">About Us</Link>
            <Link to="/blog" className="text-brown-700 hover:text-honey-600 transition-colors">Blog</Link>
            
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Logo className={`transition-all duration-300 ${isScrolled ? 'h-10 w-auto' : 'h-14 w-auto'}`} />
          </Link>

          {/* Desktop Navigation - Hidden on small screens */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => 
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }>
              Home
            </NavLink>
            <NavLink to="/products" className={({ isActive }) => 
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }>
              Shop
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => 
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }>
              About
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) => 
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }>
              Blog
            </NavLink>
            <NavLink to="" className={({ isActive }) => 
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }>
      
            </NavLink>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:text-honey-600 transition-colors">
              <Search size={22} />
            </button>
            <Link to="/cart" className="p-2 hover:text-honey-600 transition-colors relative">
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-honey-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button - Only visible on small screens */}
            <button 
              className="p-2 md:hidden hover:text-honey-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Only visible when open on small screens */}
      <div className={`md:hidden bg-white overflow-hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'max-h-screen shadow-md' : 'max-h-0'
      }`}>
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <NavLink to="/" className={({ isActive }) => 
            `py-2 text-lg ${isActive ? 'text-honey-600 font-medium' : 'text-brown-800'}`
          }>
            Home
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => 
            `py-2 text-lg ${isActive ? 'text-honey-600 font-medium' : 'text-brown-800'}`
          }>
            Shop
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => 
            `py-2 text-lg ${isActive ? 'text-honey-600 font-medium' : 'text-brown-800'}`
          }>
            About
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => 
            `py-2 text-lg ${isActive ? 'text-honey-600 font-medium' : 'text-brown-800'}`
          }>
            Blog
          </NavLink>
          <NavLink to="" className={({ isActive }) => 
            `py-2 text-lg ${isActive ? 'text-honey-600 font-medium' : 'text-brown-800'}`
          }>
            
          </NavLink>
          <div className="pt-2 flex items-center text-brown-700">
            <div className="flex items-center mr-6">
              <MapPin size={16} className="mr-1" />
              <span>Delivery Across All 58 Wilayas</span>
            </div>
          </div>
          <div className="flex items-center text-brown-700">
            <Phone size={16} className="mr-1" />
            <span>+213 555 123 456</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;