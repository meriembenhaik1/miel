import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brown-800 text-cream-50 pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div>
            <div className="mb-6">
              <Logo className="h-12 w-auto" dark />
            </div>
            <p className="mb-6">
              Youcef Miel brings you premium Algerian honey, sourced from pristine mountains and 
              forests. Our commitment to quality and purity has made us Algeria's trusted honey brand.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61576628909912" className="bg-brown-700 hover:bg-honey-600 transition-colors p-2 rounded-full">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/les_fruits_de_la_nature/" className="bg-brown-700 hover:bg-honey-600 transition-colors p-2 rounded-full">
                <Instagram size={20} />
              </a>
          
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-xl mb-6 text-honey-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-honey-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-honey-400 transition-colors">Shop</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-honey-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-honey-400 transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-honey-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="font-semibold text-xl mb-6 text-honey-400">Our Honey</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products?category=mountain-honey" className="hover:text-honey-400 transition-colors">
                  Mountain Honey
                </Link>
              </li>
              <li>
                <Link to="/products?category=forest-honey" className="hover:text-honey-400 transition-colors">
                  Forest Honey
                </Link>
              </li>
              <li>
                <Link to="/products?category=citrus-honey" className="hover:text-honey-400 transition-colors">
                  Citrus Honey
                </Link>
              </li>
              <li>
                <Link to="/products?category=specialty-honey" className="hover:text-honey-400 transition-colors">
                  Specialty Honey
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-honey-400 transition-colors">
                  Gift Sets
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-xl mb-6 text-honey-400">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-honey-400" />
                <span>Online</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-honey-400" />
                <span>0698 71 54 96</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-honey-400" />
                <span>lfdcontact25@gmail.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <h5 className="font-medium mb-2 text-honey-400">Delivery:</h5>
              <p>We deliver to all 58 wilayas in Algeria with payment on delivery option</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-6 border-t border-brown-700 text-center md:flex md:justify-between md:items-center">
          <p>&copy; {currentYear} Les fruits de la nature. All rights reserved. Created by <a href="https://edg-informatique--kohl.vercel.app/?fbclid=PAZXh0bgNhZW0CMTEAAaeFuFYxwcg5jDRCAcqFx0AyDldVCOxr-LH59WgQSTzJ8vXGozrfLj3iWushig_aem_HgKiwghONRmbZy2W7xUguQ"> Edg informatique </a></p>
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center md:justify-end gap-4">
            <Link to="/privacy-policy" className="hover:text-honey-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-honey-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/shipping-policy" className="hover:text-honey-400 transition-colors">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;