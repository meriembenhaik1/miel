import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getRecentBlogPosts } from '../../data/blog';
import { BlogPost } from '../../types/product';
import { useState, useEffect } from 'react';
import Button from '../ui/Button';

const FeaturedBlogs = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  
  useEffect(() => {
    // Get recent blog posts
    const recentPosts = getRecentBlogPosts(3);
    setBlogs(recentPosts);
  }, []);
  
  return (
    <section className="section bg-cream-50">
      <div className="container">
        <div className="section-title">
          <h2 className="text-brown-800">Latest from Our Blog</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover the benefits of honey, traditional recipes, and the art of beekeeping.
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <Link to={`/blog/${blog.id}`} className="block">
                <img 
                  src={blog.coverImage} 
                  alt={blog.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-xs font-medium text-honey-600 bg-honey-100 py-1 px-2 rounded">
                      {blog.category}
                    </span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-sm text-gray-500">
                      {new Date(blog.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-brown-800 hover:text-honey-600 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.excerpt}
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
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            <Link to="/blog" className="flex items-center">
              View All Articles
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;