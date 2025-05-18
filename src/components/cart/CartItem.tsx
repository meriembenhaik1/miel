import { Trash2 } from 'lucide-react';
import { Product } from '../../types/product';
import { useCart } from '../../context/CartContext';
import QuantitySelector from '../product/QuantitySelector';
import { Link } from 'react-router-dom';

interface CartItemProps {
  product: Product;
  quantity: number;
}

const CartItem = ({ product, quantity }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();
  
  const handleQuantityChange = (newQuantity: number) => {
    updateQuantity(product.id, newQuantity);
  };
  
  const handleRemove = () => {
    removeFromCart(product.id);
  };
  
  return (
    <div className="flex flex-col sm:flex-row items-center py-6 border-b border-cream-200">
      {/* Product Image */}
      <div className="w-24 h-24 flex-shrink-0 mr-6 mb-4 sm:mb-0">
        <Link to={`/products/${product.id}`}>
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-cover rounded-md shadow-sm"
          />
        </Link>
      </div>
      
      {/* Product Details */}
      <div className="flex-grow">
        <Link to={`/products/${product.id}`} className="text-lg font-medium text-brown-800 hover:text-honey-600 transition-colors">
          {product.name}
        </Link>
        <div className="text-sm text-gray-500 mb-2">
          {product.weight} • {product.origin}
        </div>
      </div>
      
      {/* Quantity and Price */}
      <div className="flex items-center mt-4 sm:mt-0">
        <QuantitySelector
          value={quantity}
          onChange={handleQuantityChange}
          max={product.stock}
        />
        
        <div className="mx-6 text-center min-w-[80px]">
          <div className="font-semibold text-lg">
            {product.price * quantity} DA
          </div>
          {quantity > 1 && (
            <div className="text-xs text-gray-500">
              {product.price} DA each
            </div>
          )}
        </div>
        
        <button 
          onClick={handleRemove}
          className="p-2 text-gray-400 hover:text-error-500 transition-colors"
          aria-label="Remove item"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;