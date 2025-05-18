import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogPostById } from '../data/blog';
import { BlogPost } from '../types/product';
import { Calendar, Tag, ArrowLeft, Share2 } from 'lucide-react';

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  
  useEffect(() => {
    if (id) {
      const blogPost = getBlogPostById(id);
      setPost(blogPost || null);
      
      if (blogPost) {
        document.title = `${blogPost.title} | Youcef Miel Blog`;
      }
    }
  }, [id]);
  
  if (!post) {
    return (
      <div className="container py-8">
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-brown-800 mb-4">Article Not Found</h2>
          <p className="text-gray-600 mb-6">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/blog" className="text-honey-600 font-medium hover:text-honey-700">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }
  
  // Markdown-like content processing (very simple version for demo)
  const processContent = (content: string) => {
    // Process headings
    content = content.replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mb-4 mt-8 text-brown-800">$1</h1>');
    content = content.replace(/^## (.*$)/gm, '<h2 class="text-2xl font-semibold mb-3 mt-6 text-brown-800">$1</h2>');
    content = content.replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold mb-3 mt-5 text-brown-800">$1</h3>');
    
    // Process paragraphs and line breaks
    content = content.replace(/\n\n/g, '</p><p class="mb-4 text-gray-700 leading-relaxed">');
    
    // Process lists
    content = content.replace(/^\d+\. (.*$)/gm, '<li class="mb-2">$1</li>');
    content = content.replace(/^- (.*$)/gm, '<li class="mb-2">$1</li>');
    
    // Wrap in paragraph tags
    content = '<p class="mb-4 text-gray-700 leading-relaxed">' + content + '</p>';
    
    // Replace lists with proper HTML
    content = content.replace(/<\/li>\n<li/g, '</li><li');
    content = content.replace(/<li class="mb-2">/g, '<ul class="list-disc pl-6 mb-4"><li class="mb-2">');
    content = content.replace(/<\/li>\n\n/g, '</li></ul>\n\n');
    content = content.replace(/<\/li>(<\/p>)/g, '</li></ul>$1');
    
    return content;
  };
  
  return (
    <div className="container py-8">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center text-sm">
        <Link to="/blog" className="flex items-center text-gray-500 hover:text-honey-600 transition-colors">
          <ArrowLeft size={16} className="mr-1" />
          Back to Blog
        </Link>
      </div>
      
      {/* Blog Post */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Cover Image */}
        <div className="h-80 relative">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex items-center text-white/80 text-sm mb-3">
              <span className="flex items-center mr-4">
                <Calendar size={16} className="mr-1" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="flex items-center">
                <Tag size={16} className="mr-1" />
                {post.category}
              </span>
            </div>
            <h1 className="text-white text-3xl md:text-4xl font-bold">{post.title}</h1>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 md:p-10">
          <div className="flex items-center mb-8 pb-8 border-b border-gray-200">
            <div className="mr-4">
              <div className="w-12 h-12 bg-brown-200 rounded-full flex items-center justify-center text-brown-800 font-medium text-lg">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
            <div>
              <div className="font-medium text-brown-800">{post.author}</div>
              <div className="text-sm text-gray-500">Author</div>
            </div>
            <div className="ml-auto">
              <button className="flex items-center text-gray-500 hover:text-honey-600 transition-colors">
                <Share2 size={18} className="mr-1" />
                Share
              </button>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <div dangerouslySetInnerHTML={{ __html: processContent(post.content) }} />
          </div>
          
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="bg-cream-100 text-brown-700 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Share and Subscribe Section */}
      <div className="mt-10 bg-cream-50 rounded-lg p-8 shadow-md">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-brown-800 mb-4">
            Enjoyed this article?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Share it with your friends and subscribe to our newsletter for more insights about honey benefits and Algerian traditions.
          </p>
          <div className="flex justify-center space-x-4 mb-6">
            <button className="bg-[#3b5998] text-white p-3 rounded-full hover:bg-opacity-90 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="bg-[#1da1f2] text-white p-3 rounded-full hover:bg-opacity-90 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </button>
            <button className="bg-[#0e76a8] text-white p-3 rounded-full hover:bg-opacity-90 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19.7 3H4.3A1.3 1.3 0 003 4.3v15.4A1.3 1.3 0 004.3 21h15.4a1.3 1.3 0 001.3-1.3V4.3A1.3 1.3 0 0019.7 3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574a1.548 1.548 0 11-.002-3.096 1.548 1.548 0 01.002 3.096zm11.335 9.764H15.67v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.249h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="relative max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="input pr-32"
            />
            <button className="absolute right-2 top-2 bg-honey-500 hover:bg-honey-600 text-white px-4 py-1 rounded text-sm font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;