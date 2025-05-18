import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, products } from '../data/products';
import { ShoppingCart, TruckIcon, Shield, Check, ArrowLeft } from 'lucide-react';
import ProductGallery from '../components/product/ProductGallery';
import QuantitySelector from '../components/product/QuantitySelector';
import Button from '../components/ui/Button';
import ProductCard from '../components/ui/ProductCard';
import { useCart } from '../context/CartContext';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(id ? getProductById(id) : null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);
  
  // If product not found, navigate to products page
  useEffect(() => {
    if (!product && id) {
      navigate('/products');
    }
  }, [product, id, navigate]);
  
  // Update page title
  useEffect(() => {
    if (product) {
      document.title = `${product.name} | Youcef Miel`;
    }
  }, [product]);
  
  // Get related products from the same category
  useEffect(() => {
    if (product) {
      const related = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 3);
      setRelatedProducts(related);
    }
  }, [product]);
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };
  
  if (!product) {
    return null; // Will redirect in the useEffect
  }
  
  return (
    <div className="container py-8">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center text-sm">
        <button onClick={() => navigate(-1)} className="flex items-center text-gray-500 hover:text-honey-600 transition-colors">
          <ArrowLeft size={16} className="mr-1" />
          Back
        </button>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-500">Products</span>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-brown-700 font-medium">{product.name}</span>
      </div>
      
      {/* Product Details */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product Images */}
          <div>
            <ProductGallery images={product.images} name={product.name} />
          </div>
          
          {/* Product Info */}
          <div>
            <div className="mb-2 text-sm font-medium text-honey-600">
              {product.category === 'mountain-honey' ? 'Mountain Honey' : 
              product.category === 'forest-honey' ? 'Forest Honey' : 
              product.category === 'citrus-honey' ? 'Citrus Honey' : 'Specialty Honey'}
            </div>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-brown-800 mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-center mb-6">
              <div className="flex mr-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
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
              <div className="text-sm text-gray-600">
                {product.rating} ({product.reviewCount} reviews)
              </div>
            </div>
            
            <div className="mb-6">
              {product.originalPrice ? (
                <div className="flex items-center">
                  <span className="font-semibold text-2xl mr-3">
                    {product.price} DA
                  </span>
                  <span className="text-gray-500 line-through text-lg">
                    {product.originalPrice} DA
                  </span>
                  <span className="ml-3 bg-error-500 text-white text-sm font-medium py-1 px-2 rounded-md">
                    Sale
                  </span>
                </div>
              ) : (
                <span className="font-semibold text-2xl">
                  {product.price} DA
                </span>
              )}
            </div>
            
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                {product.description}
              </p>
              
              <div className="mb-4">
                <span className="font-medium text-brown-800 mr-2">Weight:</span>
                <span className="text-gray-600">{product.weight}</span>
              </div>
              
              <div className="mb-4">
                <span className="font-medium text-brown-800 mr-2">Origin:</span>
                <span className="text-gray-600">{product.origin}</span>
              </div>
              
              {product.benefits && product.benefits.length > 0 && (
                <div className="mb-4">
                  <span className="font-medium text-brown-800 block mb-2">Benefits:</span>
                  <ul className="list-none space-y-1">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={16} className="text-honey-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <div className="border-t border-b border-gray-200 py-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <span className="text-gray-700 mr-4">Quantity:</span>
                  <QuantitySelector
                    value={quantity}
                    onChange={setQuantity}
                    max={product.stock}
                  />
                </div>
                <div className="text-gray-600 text-sm">
                  {product.stock} available
                </div>
              </div>
              
              <Button 
                variant="primary" 
                size="lg" 
                fullWidth
                onClick={handleAddToCart}
                icon={<ShoppingCart size={20} />}
              >
                Add to Cart
              </Button>
            </div>
            
            {/* Trust signals */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <TruckIcon size={20} className="text-honey-500 mr-2" />
                <div>
                  <div className="text-sm font-medium text-brown-800">Delivery Across Algeria</div>
                  <div className="text-xs text-gray-500">All 58 Wilayas</div>
                </div>
              </div>
              <div className="flex items-center">
                <Shield size={20} className="text-honey-500 mr-2" />
                <div>
                  <div className="text-sm font-medium text-brown-800">Pay On Delivery</div>
                  <div className="text-xs text-gray-500">Secure Payment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-brown-800 mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;