import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { BlogPost } from '../types/product';
import { ArrowRight, Search } from 'lucide-react';

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  // Update page title
  useEffect(() => {
    document.title = 'Blog | les fruits de la nature';
  }, []);
  
  // Initial load of all blog posts
  useEffect(() => {
    setPosts(blogPosts);
  }, []);
  
  // Handle search and filtering
  useEffect(() => {
    let filtered = [...blogPosts];
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(term) || 
        post.excerpt.toLowerCase().includes(term) ||
        post.content.toLowerCase().includes(term)
      );
    }
    
    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    
    setPosts(filtered);
  }, [searchTerm, selectedCategory]);
  
  // Get unique categories
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  return (
    <div className="container py-8">
      <div className="text-center mb-12">
        <h1 className="text-brown-800 mb-4">Our Honey Blog</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Discover the wonderful world of honey, from health benefits and recipes to 
          beekeeping tips and the rich tradition of Algerian honey production.
        </p>
      </div>
      
      {/* Search and Filter */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input pr-10"
              />
              <Search size={18} className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="input"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {/* Blog Posts */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <Link to={`/blog/${post.id}`} className="block">
                <img 
                  src={post.coverImage} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-xs font-medium text-honey-600 bg-honey-100 py-1 px-2 rounded">
                      {post.category}
                    </span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-brown-800 hover:text-honey-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-honey-600 font-medium">
                    Read more
                    <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-medium text-brown-800 mb-2">No articles found</h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your search or filter to find what you're looking for.
          </p>
          <button 
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('');
            }}
            className="text-honey-600 font-medium hover:text-honey-700"
          >
            Clear all filters
          </button>
        </div>
      )}
      
      {/* Subscribe Section */}
      <div className="mt-16 bg-honey-50 rounded-lg p-8 shadow-md">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-brown-800 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-6">
            Stay updated with our latest articles, honey tips, and special offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="input flex-1 border-honey-200 focus:ring-honey-500"
            />
            <button className="btn btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;