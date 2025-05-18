import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Button from '../ui/Button';
import home from './mielhome.jpg';






const Hero = () => {
  return (
    <section className="relative bg-honey-500 overflow-hidden">
      <div className="honeycomb-bg absolute inset-0"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-20 lg:py-32">
        <div className="relative z-10 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <h1 className="text-white font-bold mb-6 animate-fade-in">
              Pure. Natural.<br />100% Algerian Honey
            </h1>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto md:mx-0 animate-slide-up">
              Discover the true taste of premium honey sourced from the pristine mountains and forests of Algeria. Delivered to your doorstep across all 58 wilayas.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Link to="/products" className="flex items-center justify-center text-white">
                  Shop Now
                  <ChevronRight size={18} className="ml-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white/10"
              >
                <Link to="/about" className="flex items-center justify-center text-white">
                  Discover Our Honey
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 p-6">
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl animate-float">
              <img 
               src={home}
               alt="Premium Algerian Honey" 
              className="w-full h-full object-cover"
               />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl animate-float" style={{animationDelay: '1s'}}>
                <div className="flex items-center">
                  <div className="bg-success-500 p-2 rounded text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-brown-800 font-medium">Payment on Delivery</p>
                    <p className="text-sm text-gray-600">All 58 Wilayas</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-lg shadow-xl animate-float" style={{animationDelay: '1.5s'}}>
                <div className="flex items-center">
                  <div className="bg-honey-300 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-honey-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-brown-800 font-medium">100% Pure</p>
                    <p className="text-xs text-gray-600">No Additives</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;