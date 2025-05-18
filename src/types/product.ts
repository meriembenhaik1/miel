export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  weight: string;
  origin: string;
  stock: number;
  featured: boolean;
  benefits: string[];
  tags: string[];
  rating: number;
  reviewCount: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
}