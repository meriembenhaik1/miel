import { useState } from 'react';

// This is a simplified representation - in a real implementation, you'd use a proper SVG map
const AlgerianMap = () => {
  const [hoveredWilaya, setHoveredWilaya] = useState('');
  
  // This is a list of just a few wilayas as examples
  const sampleWilayas = [
    { id: 'algiers', name: 'Algiers', x: 45, y: 40 },
    { id: 'oran', name: 'Oran', x: 20, y: 38 },
    { id: 'constantine', name: 'Constantine', x: 60, y: 35 },
    { id: 'annaba', name: 'Annaba', x: 70, y: 30 },
    { id: 'tlemcen', name: 'Tlemcen', x: 10, y: 45 },
    { id: 'béjaïa', name: 'Béjaïa', x: 53, y: 32 },
    { id: 'batna', name: 'Batna', x: 55, y: 50 },
    { id: 'biskra', name: 'Biskra', x: 50, y: 60 },
    { id: 'tindouf', name: 'Tindouf', x: 10, y: 80 },
    { id: 'tamanrasset', name: 'Tamanrasset', x: 55, y: 85 },
  ];
  
  return (
    <section className="section bg-cream-100">
      <div className="container">
        <div className="section-title">
          <h2 className="text-brown-800">We Deliver Across All 58 Wilayas</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Enjoy our premium honey no matter where you are in Algeria. 
            We offer convenient payment on delivery across the entire country.
          </p>
        </div>
        
        <div className="mt-12 mx-auto max-w-4xl relative">
          {/* Map outline container */}
          <div className="relative aspect-[6/5] border-4 border-honey-500 rounded-xl bg-cream-50 overflow-hidden shadow-xl">
            {/* This would be replaced with a proper SVG map in production */}
            <div className="absolute inset-0 honeycomb-bg opacity-20"></div>
            
            {/* Sample points for a few wilayas */}
            {sampleWilayas.map((wilaya) => (
              <div 
                key={wilaya.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ 
                  left: `${wilaya.x}%`, 
                  top: `${wilaya.y}%` 
                }}
                onMouseEnter={() => setHoveredWilaya(wilaya.id)}
                onMouseLeave={() => setHoveredWilaya('')}
              >
                <div className={`
                  w-3 h-3 rounded-full bg-honey-500 
                  transition-all duration-300
                  ${hoveredWilaya === wilaya.id ? 'w-4 h-4 bg-honey-600' : ''}
                  hover:bg-honey-600 hover:w-4 hover:h-4
                `}></div>
                
                {/* City name */}
                <div className={`
                  absolute text-xs text-brown-800 font-medium whitespace-nowrap
                  transition-all duration-300
                  ${hoveredWilaya === wilaya.id ? 'opacity-100' : 'opacity-70'}
                `} 
                  style={{ 
                    top: '100%', 
                    left: '50%', 
                    transform: 'translateX(-50%)',
                    marginTop: '4px'
                  }}
                >
                  {wilaya.name}
                </div>
              </div>
            ))}
            
            {/* Algeria Label */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h3 className="text-brown-700 font-playfair opacity-20 text-4xl md:text-6xl lg:text-7xl">
                Algeria
              </h3>
            </div>
          </div>
          
          {/* Delivery Info Cards */}
          <div className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-lg max-w-[200px] hidden md:block">
            <div className="text-brown-800 font-semibold mb-1">Fast Delivery</div>
            <p className="text-sm text-gray-600">
              2-5 days nationwide, with real-time tracking
            </p>
          </div>
          
          <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg max-w-[200px] hidden md:block">
            <div className="text-brown-800 font-semibold mb-1">Payment on Delivery</div>
            <p className="text-sm text-gray-600">
              Pay when you receive your honey, across all 58 wilayas
            </p>
          </div>
        </div>
        
        {/* Mobile info cards */}
        <div className="mt-8 grid grid-cols-1 md:hidden gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="text-brown-800 font-semibold mb-1">Fast Delivery</div>
            <p className="text-sm text-gray-600">
              2-5 days nationwide, with real-time tracking
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="text-brown-800 font-semibold mb-1">Payment on Delivery</div>
            <p className="text-sm text-gray-600">
              Pay when you receive your honey, across all 58 wilayas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlgerianMap;