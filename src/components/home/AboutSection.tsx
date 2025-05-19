import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import his from './his.jpg';

const AboutSection = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
  src={his} 
  alt="Beekeeper in Algeria" 
  className="w-full h-auto lg:h-[500px] object-cover"
/>
              </div>
              <div className="absolute -bottom-8 -right-8 md:bottom-auto md:-top-8 md:-right-8 p-6 bg-honey-500 rounded-lg shadow-lg max-w-[250px] hidden md:block">
                <p className="text-white font-playfair text-lg italic">
                  "Our family has been producing honey for three generations, preserving the traditional methods that make Algerian honey so special."
                </p>
                <p className="text-white mt-4 font-semibold">— Youcef, Founder</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-brown-800 mb-6">The Youcef Miel Story</h2>
            <p className="text-gray-700 mb-4">
              Born in the mountains of Algeria, Youcef grew up watching his grandfather tend to beehives using methods passed down through generations. What started as a family tradition has grown into a mission to share the finest Algerian honey with the world.
            </p>
            <p className="text-gray-700 mb-6">
              At Youcef Miel, we partner with small-scale beekeepers across Algeria who follow traditional, sustainable practices. From the Atlas Mountains to the forests of Kabylie and the coastal orchards, we source only the purest, most distinctive honey varieties.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-cream-100 p-6 rounded-lg">
                <h4 className="text-honey-700 font-semibold mb-2">Our Mission</h4>
                <p className="text-gray-700">
                  To preserve traditional Algerian beekeeping while bringing the unique flavors and benefits of our honey to every home.
                </p>
              </div>
              <div className="bg-cream-100 p-6 rounded-lg">
                <h4 className="text-honey-700 font-semibold mb-2">Our Promise</h4>
                <p className="text-gray-700">
                  100% pure, raw, and unprocessed honey with no additives, preservatives, or artificial ingredients.
                </p>
              </div>
            </div>
            
            <Button variant="primary" size="lg">
              <Link to="/about">Read Our Full Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;