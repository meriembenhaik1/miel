import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { useEffect } from 'react';

const NotFoundPage = () => {
  // Update page title
  useEffect(() => {
    document.title = 'Page Not Found | Youcef Miel';
  }, []);
  
  return (
    <div className="container py-20">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <span className="text-honey-500 text-8xl font-playfair font-bold">404</span>
        </div>
        <h1 className="text-3xl font-semibold text-brown-800 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button variant="primary" size="lg">
          <Link to="/">Return to Homepage</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;