import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Button from '../components/ui/Button';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Update page title
  useEffect(() => {
    document.title = 'Contact Us | Youcef Miel';
  }, []);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset submission status after a few seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brown-800 py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container text-center">
          <h1 className="text-white mb-6">Contact Us</h1>
          <p className="text-cream-100 text-lg max-w-3xl mx-auto">
            We'd love to hear from you! Reach out with questions about our honey, 
            delivery options, or anything else you'd like to know.
          </p>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-cream-50 p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-brown-800 mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-honey-100 rounded-full p-3 mr-4">
                      <MapPin className="text-honey-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-brown-800 mb-1">Our Location</h3>
                      <p className="text-gray-600">
                        123 Honey Street, Algiers<br />
                        Algeria
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-honey-100 rounded-full p-3 mr-4">
                      <Phone className="text-honey-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-brown-800 mb-1">Phone Number</h3>
                      <p className="text-gray-600">
                        +213 555 123 456<br />
                        +213 555 789 012
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-honey-100 rounded-full p-3 mr-4">
                      <Mail className="text-honey-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-brown-800 mb-1">Email Address</h3>
                      <p className="text-gray-600">
                        info@youcefmiel.com<br />
                        support@youcefmiel.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-honey-100 rounded-full p-3 mr-4">
                      <Clock className="text-honey-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-brown-800 mb-1">Working Hours</h3>
                      <p className="text-gray-600">
                        Sunday - Thursday: 9AM - 6PM<br />
                        Friday - Saturday: 10AM - 4PM
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-cream-200">
                  <h3 className="font-medium text-brown-800 mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-honey-100 hover:bg-honey-200 p-3 rounded-full transition-colors">
                      <svg className="w-5 h-5 text-honey-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="bg-honey-100 hover:bg-honey-200 p-3 rounded-full transition-colors">
                      <svg className="w-5 h-5 text-honey-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="bg-honey-100 hover:bg-honey-200 p-3 rounded-full transition-colors">
                      <svg className="w-5 h-5 text-honey-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-brown-800 mb-6">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <div className="bg-success-50 text-success-700 p-4 rounded-md mb-6">
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="font-medium">Message Sent Successfully!</span>
                    </div>
                    <p>Thank you for contacting us. We'll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          className="input"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          className="input"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleInputChange}
                        className="input"
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="input"
                        required
                      ></textarea>
                    </div>
                    
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={isSubmitting}
                      icon={<Send size={18} />}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="section bg-cream-50 pt-0">
        <div className="container">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* This would be a Google Maps iframe in a real implementation */}
            <div className="w-full h-[400px] bg-gray-300 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-honey-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-brown-800 mb-2">Our Location</h3>
                <p className="text-gray-600">123 Honey Street, Algiers, Algeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-title">
            <h2 className="text-brown-800">Frequently Asked Questions</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our honey and services.
            </p>
          </div>
          
          <div className="mt-12 max-w-3xl mx-auto space-y-6">
            <div className="bg-cream-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-brown-800 mb-2">
                How do I know your honey is 100% pure?
              </h3>
              <p className="text-gray-600">
                All our honey undergoes rigorous quality testing to ensure purity. We never add additives, 
                preservatives, or artificial sweeteners. Each batch can be traced back to its source.
              </p>
            </div>
            
            <div className="bg-cream-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-brown-800 mb-2">
                How long does delivery take?
              </h3>
              <p className="text-gray-600">
                Standard delivery across Algeria takes 2-5 business days depending on your location. 
                For major cities like Algiers, Oran, and Constantine, delivery is typically within 2-3 days.
              </p>
            </div>
            
            <div className="bg-cream-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-brown-800 mb-2">
                Do you offer cash on delivery?
              </h3>
              <p className="text-gray-600">
                Yes, we offer cash on delivery across all 58 wilayas in Algeria. You can inspect your 
                honey when it arrives and pay only when you're satisfied with your purchase.
              </p>
            </div>
            
            <div className="bg-cream-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-brown-800 mb-2">
                How should I store my honey?
              </h3>
              <p className="text-gray-600">
                Store your honey at room temperature in a dry place, away from direct sunlight. 
                There's no need to refrigerate it—honey has natural preservatives that give it an incredibly long shelf life.
              </p>
            </div>
            
            <div className="bg-cream-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-brown-800 mb-2">
                My honey has crystallized. Is it still good?
              </h3>
              <p className="text-gray-600">
                Yes! Crystallization is a natural process that doesn't affect the quality or flavor of honey. 
                It's actually a sign of pure, raw honey. To liquify, simply place the jar in warm (not hot) water.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;