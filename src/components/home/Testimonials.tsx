const testimonials = [
  {
    id: 1,
    name: 'Amina B.',
    location: 'Algiers',
    quote: 'The Sidr Mountain Honey is exceptional - nothing like the commercial honey I\'ve had before. You can truly taste the difference!',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    name: 'Karim M.',
    location: 'Oran',
    quote: 'I appreciate the fast delivery and the option to pay on delivery. The honey arrived well-packaged and tastes amazing.',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    name: 'Leila T.',
    location: 'Constantine',
    quote: 'My family has been using Youcef Miel honey for our traditional recipes. The Lavender Honey pairs perfectly with homemade baklava!',
    image: 'https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const Testimonials = () => {
  return (
    <section className="section bg-brown-800 text-white relative overflow-hidden">
      <div className="honeycomb-bg absolute inset-0 opacity-5"></div>
      
      <div className="container relative z-10">
        <div className="section-title">
          <h2 className="text-white">What Our Customers Say</h2>
          <p className="mt-4 text-cream-100 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have experienced the pure taste of authentic Algerian honey.
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-brown-700 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-cream-50">{testimonial.name}</h4>
                  <p className="text-cream-200 text-sm">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -top-4 -left-2 text-4xl text-honey-500 opacity-50">"</div>
                <p className="relative z-10 pl-4 italic text-cream-100">
                  {testimonial.quote}
                </p>
                <div className="absolute -bottom-4 -right-2 text-4xl text-honey-500 opacity-50">"</div>
              </div>
              
              <div className="mt-6 flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-honey-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;