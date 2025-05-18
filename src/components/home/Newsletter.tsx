import { useState } from 'react';
import Button from '../ui/Button';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this to your API
    console.log('Subscribing email:', email);
    setIsSubmitted(true);
    setEmail('');
    
    // Reset the success message after a few seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  
  return (
    <section className="section bg-honey-50 border-t border-honey-100">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-brown-800 mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-gray-600 mb-8">
            Stay updated with new honey varieties, seasonal offers, and honey recipes.
          </p>
          
          <div className="relative">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="input flex-1 border-honey-200 focus:ring-honey-500"
                required
              />
              <Button type="submit" variant="primary" className="whitespace-nowrap">
                Subscribe
              </Button>
            </form>
            
            {isSubmitted && (
              <div className="mt-4 p-3 bg-success-50 text-success-700 rounded-md">
                Thanks for subscribing! Check your email soon for honey tips and special offers.
              </div>
            )}
            
            <p className="mt-4 text-sm text-gray-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;