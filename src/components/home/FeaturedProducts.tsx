import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getFeaturedProducts } from '../../data/products';
import { Product } from '../../types/product';
import ProductCard from '../ui/ProductCard';
import Button from '../ui/Button';

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    // Fetch featured products
    const featuredProducts = getFeaturedProducts();
    setProducts(featuredProducts);
  }, []);
  
  return (
    <section className="section bg-cream-50">
      <div className="container">
        <div className="section-title">
          <h2 className="text-brown-800">Our Premium Honey Selection</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover our carefully selected range of pure Algerian honey, 
            each with its unique flavor profile and health benefits.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} featured />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            <Link to="/products" className="flex items-center">
              View All Products
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;