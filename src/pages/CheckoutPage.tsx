import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  wilaya: string;
  notes: string;
  paymentMethod: 'cash-on-delivery';
}

const CheckoutPage = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  
  // Form state
  const [formState, setFormState] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    wilaya: '',
    notes: '',
    paymentMethod: 'cash-on-delivery'
  });
  
  // Update page title
  useEffect(() => {
    document.title = 'Checkout | Youcef Miel';
  }, []);
  
  // Redirect to cart if cart is empty
  useEffect(() => {
    if (cartItems.length === 0 && !orderComplete) {
      navigate('/cart');
    }
  }, [cartItems, navigate, orderComplete]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      // Generate order number
      const randomOrderNumber = 'YM' + Math.floor(10000 + Math.random() * 90000).toString();
      setOrderNumber(randomOrderNumber);
      setOrderComplete(true);
      clearCart();
      setIsSubmitting(false);
    }, 2000);
  };
  
  if (orderComplete) {
    return (
      <div className="container py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-success-50 text-success-500 rounded-full mb-4">
              <Check size={32} />
            </div>
            <h1 className="text-2xl font-semibold text-brown-800 mb-2">Order Confirmed!</h1>
            <p className="text-gray-600">
              Thank you for your order. We've received your request and will process it right away.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-md p-4 mb-6">
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium text-brown-800">Order Number:</span>
              <span className="text-honey-600 font-semibold">{orderNumber}</span>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Order Total:</span>
                <span className="font-medium">{cartTotal} DA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Payment Method:</span>
                <span className="font-medium">Cash on Delivery</span>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="font-semibold text-brown-800 mb-3">What's Next?</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="bg-honey-100 text-honey-600 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                <span className="text-gray-600">You'll receive an email confirmation with your order details</span>
              </li>
              <li className="flex items-start">
                <span className="bg-honey-100 text-honey-600 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                <span className="text-gray-600">Our team will prepare your order for shipping</span>
              </li>
              <li className="flex items-start">
                <span className="bg-honey-100 text-honey-600 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                <span className="text-gray-600">You'll receive a call to confirm delivery time</span>
              </li>
              <li className="flex items-start">
                <span className="bg-honey-100 text-honey-600 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
                <span className="text-gray-600">Pay when your honey arrives at your doorstep!</span>
              </li>
            </ul>
          </div>
          
          <div className="text-center">
            <Button variant="primary" size="lg">
              <Link to="/">Return to Homepage</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container py-8">
      <div className="mb-6 flex items-center">
        <Link to="/cart" className="flex items-center text-gray-500 hover:text-honey-600 transition-colors">
          <ArrowLeft size={16} className="mr-1" />
          Back to Cart
        </Link>
      </div>
      
      <h1 className="text-3xl font-semibold text-brown-800 mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <form onSubmit={handleSubmit}>
              <h2 className="text-xl font-semibold text-brown-800 mb-6">Delivery Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formState.firstName}
                    onChange={handleInputChange}
                    className="input"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formState.lastName}
                    onChange={handleInputChange}
                    className="input"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
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
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleInputChange}
                    className="input"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formState.address}
                  onChange={handleInputChange}
                  className="input"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formState.city}
                    onChange={handleInputChange}
                    className="input"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="wilaya" className="block text-sm font-medium text-gray-700 mb-1">
                    Wilaya *
                  </label>
                  <select
                    id="wilaya"
                    name="wilaya"
                    value={formState.wilaya}
                    onChange={handleInputChange}
                    className="input"
                    required
                  >
                    <option value="">Select Wilaya</option>
                    <option value="Adrar">Adrar</option>
                    <option value="Chlef">Chlef</option>
                    <option value="Laghouat">Laghouat</option>
                    <option value="Alger">Alger</option>
                    <option value="Oran">Oran</option>
                    <option value="Constantine">Constantine</option>
                    {/* This would be expanded with all 58 wilayas in a real implementation */}
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                  Order Notes (Optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formState.notes}
                  onChange={handleInputChange}
                  className="input h-24"
                  placeholder="Special instructions for delivery or order"
                ></textarea>
              </div>
              
              <h2 className="text-xl font-semibold text-brown-800 mb-6 pt-4 border-t border-gray-200">
                Payment Method
              </h2>
              
              <div className="mb-8">
                <div className="bg-cream-50 p-4 rounded-md border border-honey-200">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="cash-on-delivery"
                      name="paymentMethod"
                      value="cash-on-delivery"
                      checked={formState.paymentMethod === 'cash-on-delivery'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <label htmlFor="cash-on-delivery" className="font-medium text-brown-800">
                      Cash on Delivery
                    </label>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 ml-6">
                    Pay with cash when your order is delivered to your doorstep.
                  </p>
                </div>
              </div>
              
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing...' : 'Place Order'}
              </Button>
            </form>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-32">
            <h2 className="text-xl font-semibold text-brown-800 mb-6">Order Summary</h2>
            
            <div className="max-h-[300px] overflow-y-auto mb-6">
              {cartItems.map((item) => (
                <div key={item.product.id} className="flex items-center py-3 border-b border-gray-100">
                  <div className="w-16 h-16 rounded overflow-hidden mr-4">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-sm font-medium text-brown-800">{item.product.name}</h4>
                    <div className="text-xs text-gray-500">{item.quantity} × {item.product.price} DA</div>
                  </div>
                  <div className="font-medium text-right">
                    {item.product.price * item.quantity} DA
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">{cartTotal} DA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">Calculated at checkout</span>
              </div>
              <div className="border-t border-gray-200 pt-4 flex justify-between">
                <span className="text-lg font-semibold text-brown-800">Total</span>
                <span className="text-lg font-semibold text-brown-800">{cartTotal} DA</span>
              </div>
            </div>
            
            <div className="p-4 bg-cream-100 rounded-md">
              <h4 className="font-medium text-brown-800 mb-2">Secure Shopping</h4>
              <p className="text-sm text-gray-600">
                We protect your payment information using encryption to provide bank-level security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;