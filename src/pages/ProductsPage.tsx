import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { categories, products, getProductsByCategory } from '../data/products';
import { Category, Product } from '../types/product';
import ProductCard from '../components/ui/ProductCard';
import { Filter, Search, ChevronDown } from 'lucide-react';

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  
  // Update page title
  useEffect(() => {
    document.title = 'Shop | Youcef Miel';
  }, []);
  
  // Handle category filter from URL params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    
    if (categoryParam) {
      setActiveCategory(categoryParam);
      setDisplayedProducts(getProductsByCategory(categoryParam));
    } else {
      setActiveCategory('');
      setDisplayedProducts(products);
    }
  }, [searchParams]);
  
  // Handle search and filtering
  useEffect(() => {
    let filtered = activeCategory ? 
      getProductsByCategory(activeCategory) : 
      [...products];
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(term) || 
        product.description.toLowerCase().includes(term) ||
        product.shortDescription.toLowerCase().includes(term)
      );
    }
    
    setDisplayedProducts(filtered);
  }, [searchTerm, activeCategory]);
  
  const handleCategoryClick = (categoryId: string) => {
    if (activeCategory === categoryId) {
      // If clicking the active category, clear the filter
      setActiveCategory('');
    } else {
      setActiveCategory(categoryId);
    }
    
    // Close mobile filters after selection on mobile
    setIsMobileFiltersOpen(false);
  };
  
  return (
    <div className="container py-8">
      <div className="text-center mb-8">
        <h1 className="text-brown-800 mb-4">Shop Our Honey Collection</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Discover our range of pure, raw Algerian honey, each with unique flavors and health benefits.
          From mountain highlands to forest valleys, we bring you nature's finest golden treasure.
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile filter toggle */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
            className="flex items-center justify-between w-full px-4 py-3 bg-white shadow-sm rounded-md text-brown-800"
          >
            <div className="flex items-center">
              <Filter size={18} className="mr-2" />
              <span>Filters</span>
            </div>
            <ChevronDown size={18} className={`transition-transform ${isMobileFiltersOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
        
        {/* Sidebar - Filters */}
        <div className={`
          lg:w-1/4 bg-white p-6 rounded-lg shadow-sm transition-all
          ${isMobileFiltersOpen ? 'max-h-[1000px]' : 'max-h-0 lg:max-h-[1000px]'}
          lg:block overflow-hidden
        `}>
          <h3 className="text-lg font-semibold mb-4 text-brown-800">Categories</h3>
          
          <div className="space-y-2">
            <button
              onClick={() => handleCategoryClick('')}
              className={`py-2 px-3 rounded-md w-full text-left transition ${
                activeCategory === '' 
                  ? 'bg-honey-100 text-honey-700 font-medium' 
                  : 'hover:bg-cream-100'
              }`}
            >
              All Honey
            </button>
            
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`py-2 px-3 rounded-md w-full text-left transition ${
                  activeCategory === category.id 
                    ? 'bg-honey-100 text-honey-700 font-medium' 
                    : 'hover:bg-cream-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4 text-brown-800">Search</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input pr-10"
              />
              <Search size={18} className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
        
        {/* Main content - Products */}
        <div className="lg:w-3/4">
          {/* Top info bar */}
          <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex justify-between items-center">
            <p className="text-gray-600">
              Showing <span className="font-medium">{displayedProducts.length}</span> products
            </p>
            
            <div className="flex items-center">
              <span className="mr-2 text-sm text-gray-600">Sort by:</span>
              <select className="input py-1 px-2 text-sm">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Top Rated</option>
              </select>
            </div>
          </div>
          
          {/* Products grid */}
          {displayedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <h3 className="text-lg font-medium text-brown-800 mb-2">No products found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;