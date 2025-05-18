import { Leaf, ShieldCheck, Award, Heart } from 'lucide-react';

const benefits = [
  {
    id: 1,
    title: '100% Pure & Natural',
    description: 'Unprocessed honey with all natural enzymes and nutrients intact.',
    icon: <Leaf className="h-6 w-6 text-honey-500" />
  },
  {
    id: 2,
    title: 'Quality Guaranteed',
    description: 'Each batch is tested to ensure purity, quality, and authenticity.',
    icon: <ShieldCheck className="h-6 w-6 text-honey-500" />
  },
  {
    id: 3,
    title: 'Award-Winning Taste',
    description: 'Our honey varieties have won multiple awards for exceptional flavor.',
    icon: <Award className="h-6 w-6 text-honey-500" />
  },
  {
    id: 4,
    title: 'Health Benefits',
    description: 'Rich in antioxidants, enzymes, and natural therapeutic properties.',
    icon: <Heart className="h-6 w-6 text-honey-500" />
  }
];

const BenefitsSection = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="section-title">
          <h2 className="text-brown-800">Why Choose Our Honey</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            At Youcef Miel, we're committed to bringing you the finest Algerian honey with all its natural goodness.
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="bg-cream-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
              <div className="bg-cream-100 inline-flex items-center justify-center p-3 rounded-full mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brown-800">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;