import { useState } from 'react';

interface ProductGalleryProps {
  images: string[];
  name: string;
}

const ProductGallery = ({ images, name }: ProductGalleryProps) => {
  const [mainImage, setMainImage] = useState(images[0]);
  
  return (
    <div className="product-gallery">
      <div className="mb-4 rounded-lg overflow-hidden bg-white shadow-md">
        <img 
          src={mainImage} 
          alt={name} 
          className="w-full h-auto object-cover aspect-square md:aspect-[4/3]"
        />
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`cursor-pointer rounded-md overflow-hidden border-2 transition-all ${
              mainImage === image ? 'border-honey-500 shadow-md' : 'border-transparent hover:border-honey-300'
            }`}
            onClick={() => setMainImage(image)}
          >
            <img 
              src={image} 
              alt={`${name} - view ${index + 1}`} 
              className="w-full h-full object-cover aspect-square"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;