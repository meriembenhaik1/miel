import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../../types/product';
import { useCart } from '../../context/CartContext';
import Button from './Button';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

const ProductCard = ({ product, featured = false }: ProductCardProps) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };
  
  return (
    <div className={`product-card group transition-all duration-300 ${featured ? 'bg-white' : ''}`}>
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {product.originalPrice && (
            <div className="absolute top-4 left-4 bg-error-500 text-white text-sm font-medium py-1 px-2 rounded-md">
              Sale
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button 
              variant="primary" 
              size="sm" 
              onClick={handleAddToCart}
              className="w-full"
              icon={<ShoppingCart size={16} />}
            >
              Add to Cart
            </Button>
          </div>
        </div>
        <div className="p-4">
          <div className="mb-1 text-sm font-medium text-honey-600">
            {product.category === 'mountain-honey' ? 'Mountain Honey' : 
             product.category === 'forest-honey' ? 'Forest Honey' : 
             product.category === 'citrus-honey' ? 'Citrus Honey' : 'Specialty Honey'}
          </div>
          <h3 className="text-lg font-semibold mb-2 text-brown-800 group-hover:text-honey-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-2 line-clamp-2">
            {product.shortDescription}
          </p>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center">
              {product.originalPrice ? (
                <div className="flex items-center">
                  <span className="font-semibold text-lg mr-2">
                    {product.price} DA
                  </span>
                  <span className="text-gray-500 line-through text-sm">
                    {product.originalPrice} DA
                  </span>
                </div>
              ) : (
                <span className="font-semibold text-lg">
                  {product.price} DA
                </span>
              )}
            </div>
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? 'text-honey-500' : 'text-gray-300'
                    }`}
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
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;