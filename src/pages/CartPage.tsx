import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/cart/CartItem';
import Button from '../components/ui/Button';

const CartPage = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  
  // Update page title
  useEffect(() => {
    document.title = 'Shopping Cart | Youcef Miel';
  }, []);
  
  if (cartItems.length === 0) {
    return (
      <div className="container py-8">
        <h1 className="text-3xl font-semibold text-brown-800 mb-8">Your Cart</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="mb-6 flex justify-center">
            <ShoppingCart size={64} className="text-gray-300" />
          </div>
          <h2 className="text-2xl font-semibold text-brown-800 mb-3">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">
            Looks like you haven't added any honey to your cart yet.
          </p>
          <Button variant="primary" size="lg">
            <Link to="/products">Start Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-semibold text-brown-800 mb-8">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="border-b border-gray-200 pb-3 mb-3 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-brown-800">
                Items ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
              </h2>
              <button 
                onClick={clearCart}
                className="text-sm text-gray-500 hover:text-error-500 transition-colors"
              >
                Clear Cart
              </button>
            </div>
            
            <div>
              {cartItems.map((item) => (
                <CartItem 
                  key={item.product.id} 
                  product={item.product} 
                  quantity={item.quantity} 
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-32">
            <h2 className="text-xl font-semibold text-brown-800 mb-6">Order Summary</h2>
            
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
            
            <Button 
              variant="primary" 
              size="lg" 
              fullWidth
              className="mb-4"
            >
              <Link to="/checkout" className="w-full flex items-center justify-center">
                Proceed to Checkout
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" fullWidth>
              <Link to="/products" className="w-full flex items-center justify-center">
                Continue Shopping
              </Link>
            </Button>
            
            <div className="mt-6 p-4 bg-cream-100 rounded-md">
              <h4 className="font-medium text-brown-800 mb-2 flex items-center">
                <TruckIcon size={16} className="mr-2 text-honey-500" />
                Delivery Information
              </h4>
              <p className="text-sm text-gray-600">
                We deliver to all 58 wilayas in Algeria with payment on delivery option.
                Standard delivery takes 2-5 business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TruckIcon = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10 17h4V5H2v12h3"></path>
    <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5"></path>
    <path d="M14 17h1"></path>
    <circle cx="7.5" cy="17.5" r="2.5"></circle>
    <circle cx="17.5" cy="17.5" r="2.5"></circle>
  </svg>
);

export default CartPage;