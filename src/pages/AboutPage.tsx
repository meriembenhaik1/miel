import { useEffect } from 'react';
import { Award, Users, Leaf, TrendingUp } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  // Update page title
  useEffect(() => {
    document.title = 'About Us | Youcef Miel';
  }, []);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brown-800 py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container text-center">
          <h1 className="text-white mb-6">Our Story</h1>
          <p className="text-cream-100 text-lg max-w-3xl mx-auto">
            Youcef Miel is dedicated to preserving the tradition of Algerian honey production
            while bringing its exceptional quality to homes across the country.
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-brown-800 mb-6">From Tradition to Your Table</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2018 by Youcef Neffah, our company grew from a family tradition spanning three generations of beekeepers in the Atlas Mountains. What began as a personal passion has transformed into a mission to share the finest Algerian honey with the world.
              </p>
              <p className="text-gray-700 mb-6">
                When Youcef's grandfather first taught him about beekeeping as a child, he instilled not just techniques, but a deep respect for the bees, the environment, and the ancient traditions of honey harvesting that have been practiced in Algeria for centuries.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-brown-800 mb-3">Our Vision</h3>
                <p className="text-gray-700">
                  To become the leading purveyor of premium Algerian honey, recognized for exceptional quality, sustainable practices, and preserving traditional beekeeping methods while supporting local communities.
                </p>
              </div>
              
              <Button variant="primary">
                <Link to="/products">Discover Our Honey</Link>
              </Button>
            </div>
            
            <div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/6956589/pexels-photo-6956589.jpeg" 
                  alt="Traditional Honey Harvesting" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-cream-100 p-4 rounded-lg shadow-lg max-w-xs hidden md:block">
                  <p className="italic text-brown-800">
                    "Beekeeping is not just about honey production; it's about preserving our connection to nature and our heritage."
                  </p>
                  <p className="text-honey-600 mt-2 font-semibold">— Youcef Benali, Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="section bg-cream-50">
        <div className="container">
          <div className="section-title">
            <h2 className="text-brown-800">Our Values</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do, from how we harvest honey to how we serve our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-honey-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Award className="text-honey-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brown-800">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality, ensuring every jar of honey meets our rigorous standards for purity, flavor, and authenticity.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-honey-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Leaf className="text-honey-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brown-800">Sustainability</h3>
              <p className="text-gray-600">
                We practice and promote sustainable beekeeping methods that protect bee populations and preserve the natural environment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-honey-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Users className="text-honey-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brown-800">Community</h3>
              <p className="text-gray-600">
                We support local beekeepers and rural communities, ensuring fair compensation and helping preserve traditional knowledge.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-honey-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <TrendingUp className="text-honey-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brown-800">Innovation</h3>
              <p className="text-gray-600">
                While honoring tradition, we embrace innovation in testing, packaging, and distribution to improve quality and service.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Process */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-title">
            <h2 className="text-brown-800">From Hive to Home</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Discover our meticulous process that ensures every jar of Youcef Miel honey 
              maintains its exceptional quality and purity.
            </p>
          </div>
          
          <div className="mt-12 relative">
            {/* Process Timeline - Desktop */}
            <div className="hidden md:block">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-honey-200 transform -translate-y-1/2 z-0"></div>
              
              <div className="grid grid-cols-4 gap-6 relative z-10">
                {/* Step 1 */}
                <div className="text-center">
                  <div className="bg-honey-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-semibold">1</div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-3 text-brown-800">Ethical Sourcing</h3>
                    <p className="text-gray-600 text-sm">
                      We partner with small-scale beekeepers across Algeria who follow traditional, sustainable practices.
                    </p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="text-center">
                  <div className="bg-honey-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-semibold">2</div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-3 text-brown-800">Careful Harvesting</h3>
                    <p className="text-gray-600 text-sm">
                      Honey is harvested at peak season using traditional methods that preserve its natural properties.
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="text-center">
                  <div className="bg-honey-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-semibold">3</div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-3 text-brown-800">Quality Testing</h3>
                    <p className="text-gray-600 text-sm">
                      Each batch undergoes rigorous testing for purity, moisture content, and authenticity.
                    </p>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="text-center">
                  <div className="bg-honey-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-semibold">4</div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-3 text-brown-800">Nationwide Delivery</h3>
                    <p className="text-gray-600 text-sm">
                      We deliver our honey to all 58 wilayas in Algeria, with secure packaging and payment on delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Process Steps - Mobile */}
            <div className="md:hidden space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md relative">
                <div className="absolute -top-5 left-4 bg-honey-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold">1</div>
                <div className="pt-3">
                  <h3 className="text-lg font-semibold mb-2 text-brown-800">Ethical Sourcing</h3>
                  <p className="text-gray-600">
                    We partner with small-scale beekeepers across Algeria who follow traditional, sustainable practices.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md relative">
                <div className="absolute -top-5 left-4 bg-honey-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold">2</div>
                <div className="pt-3">
                  <h3 className="text-lg font-semibold mb-2 text-brown-800">Careful Harvesting</h3>
                  <p className="text-gray-600">
                    Honey is harvested at peak season using traditional methods that preserve its natural properties.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md relative">
                <div className="absolute -top-5 left-4 bg-honey-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold">3</div>
                <div className="pt-3">
                  <h3 className="text-lg font-semibold mb-2 text-brown-800">Quality Testing</h3>
                  <p className="text-gray-600">
                    Each batch undergoes rigorous testing for purity, moisture content, and authenticity.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md relative">
                <div className="absolute -top-5 left-4 bg-honey-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold">4</div>
                <div className="pt-3">
                  <h3 className="text-lg font-semibold mb-2 text-brown-800">Nationwide Delivery</h3>
                  <p className="text-gray-600">
                    We deliver our honey to all 58 wilayas in Algeria, with secure packaging and payment on delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="section bg-cream-50">
        <div className="container">
          <div className="section-title">
            <h2 className="text-brown-800">Meet Our Team</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              The passionate people behind Youcef Miel who work tirelessly to bring 
              you the finest honey Algeria has to offer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg" 
                alt="Youcef Benali - Founder" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-brown-800">Youcef Benali</h3>
                <p className="text-honey-600 mb-3">Founder & Master Beekeeper</p>
                <p className="text-gray-600">
                  A third-generation beekeeper with a passion for preserving Algeria's honey traditions while creating a sustainable business.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" 
                alt="Leila Hadad - Quality Control" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-brown-800">Leila Hadad</h3>
                <p className="text-honey-600 mb-3">Quality Control Specialist</p>
                <p className="text-gray-600">
                  With a background in food science, Leila ensures that every batch of honey meets our rigorous quality standards.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg" 
                alt="Mohammed Cherif - Operations Manager" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-brown-800">Mohammed Cherif</h3>
                <p className="text-honey-600 mb-3">Operations Manager</p>
                <p className="text-gray-600">
                  Mohammed oversees our distribution network, ensuring smooth delivery of our honey to all 58 wilayas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-honey-500 text-white">
        <div className="container text-center">
          <h2 className="text-white mb-6">Experience the Pure Taste of Algeria</h2>
          <p className="text-white/90 mb-8 max-w-3xl mx-auto text-lg">
            From our hives to your home, we bring you honey that captures the essence of Algeria's diverse landscapes and floral bounty.
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            className="bg-white text-honey-700 hover:bg-cream-100"
          >
            <Link to="/products">Shop Our Collection</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;