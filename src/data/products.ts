import { Product, Category } from '../types/product';
import mielafricain from './mielafricain.jpg';
import miel from './2.jpg';


export const categories: Category[] = [
  {
    id: 'mountain-honey',
    name: 'Mountain Honey',
    description: 'Honey sourced from the pristine Algerian mountains, known for its rich flavor and medicinal properties.',
    image: mielafricain
  },
  {
    id: 'forest-honey',
    name: 'Forest Honey',
    description: 'Collected from the forests of Algeria, this honey has a distinctive taste and dark amber color.',
    image: 'https://images.pexels.com/photos/4110226/pexels-photo-4110226.jpeg'
  },
  {
    id: 'citrus-honey',
    name: 'Citrus Honey',
    description: 'Bright and aromatic honey collected from citrus blossoms across Algeria.',
    image: 'https://images.pexels.com/photos/5908226/pexels-photo-5908226.jpeg'
  },
  {
    id: 'specialty-honey',
    name: 'Specialty Honey',
    description: 'Rare and unique varieties with distinctive properties and flavors.',
    image: 'https://images.pexels.com/photos/8751955/pexels-photo-8751955.jpeg'
  }
];

export const products: Product[] = [
  {
    id: 'sidr-mountain-honey-500g',
    name: 'Sidr Mountain Honey',
    shortDescription: 'Premium honey from Sidr trees in the Atlas Mountains',
    description: 'Our Sidr Mountain Honey is sourced from the remote Atlas Mountains of Algeria, where Sidr trees bloom in pristine environments. This premium honey is known for its rich, caramel-like flavor with subtle notes of vanilla. It has been treasured for centuries for its exceptional taste and medicinal properties. Each jar contains pure, unprocessed honey with all natural enzymes and antioxidants intact.',
    price: 4000,
    originalPrice: 4800,
    images: [
      mielafricain,
      miel
    ],
    category: 'mountain-honey',
    weight: '1kg',
    origin: 'Atlas Mountains, Algeria',
    stock: 25,
    featured: true,
    benefits: [
      'Rich in antioxidants',
      'Natural antibacterial properties',
      'Helps with digestive health',
      'Boosts immunity'
    ],
    tags: ['sidr', 'mountain', 'premium', 'medicinal'],
    rating: 4.9,
    reviewCount: 124
  },
  {
    id: 'eucalyptus-forest-honey-350g',
    name: 'Eucalyptus Forest Honey',
    shortDescription: 'Aromatic honey from eucalyptus forests of northern Algeria',
    description: 'Harvested from eucalyptus forests in northern Algeria, this distinctive honey has a bold, robust flavor with a hint of menthol. Our eucalyptus honey is darker in color and particularly known for its respiratory benefits. We carefully harvest this honey at peak season to ensure maximum flavor and medicinal properties are preserved. Enjoy its unique taste while supporting sustainable beekeeping practices.',
    price: 1800,
    images: [
      'https://images.pexels.com/photos/6969809/pexels-photo-6969809.jpeg',
      'https://images.pexels.com/photos/6956400/pexels-photo-6956400.jpeg'
    ],
    category: 'forest-honey',
    weight: '350g',
    origin: 'Northern Forests, Algeria',
    stock: 42,
    featured: true,
    benefits: [
      'Supports respiratory health',
      'Soothes sore throats',
      'Natural expectorant',
      'Anti-inflammatory properties'
    ],
    tags: ['eucalyptus', 'forest', 'therapeutic', 'respiratory'],
    rating: 4.7,
    reviewCount: 86
  },
  {
    id: 'orange-blossom-honey-250g',
    name: 'Orange Blossom Honey',
    shortDescription: 'Delicate citrus-infused honey from Algerian orchards',
    description: 'Our Orange Blossom Honey comes from the sun-drenched citrus orchards of coastal Algeria. This light-colored honey has a delicate flavor profile with distinct citrus notes and a fresh, flowery aroma. Its smooth texture and mild sweetness make it perfect for tea, yogurt, or enjoyed straight from the spoon. Each batch is carefully tested to ensure the highest quality and purity.',
    price: 1500,
    images: [
      'https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg',
      'https://images.pexels.com/photos/5908238/pexels-photo-5908238.jpeg'
    ],
    category: 'citrus-honey',
    weight: '250g',
    origin: 'Coastal Regions, Algeria',
    stock: 38,
    featured: false,
    benefits: [
      'Rich in vitamin C',
      'Calming properties',
      'Helps with insomnia',
      'Natural energy booster'
    ],
    tags: ['orange', 'citrus', 'light', 'aromatic'],
    rating: 4.6,
    reviewCount: 64
  },
  {
    id: 'lavender-mountain-honey-500g',
    name: 'Lavender Mountain Honey',
    shortDescription: 'Fragrant honey from lavender fields of the Algerian highlands',
    description: 'Harvested from the lavender-rich highlands of Algeria, this honey is prized for its distinctive floral aroma and delicate taste. The bees collect nectar exclusively from wild lavender blooms, resulting in a honey with subtle herb notes and a smooth finish. Our Lavender Mountain Honey is medium-amber in color and crystallizes slowly, preserving its luxurious texture and therapeutic properties.',
    price: 2200,
    images: [
      'https://images.pexels.com/photos/15212598/pexels-photo-15212598.jpeg',
      'https://images.pexels.com/photos/8129903/pexels-photo-8129903.jpeg'
    ],
    category: 'mountain-honey',
    weight: '500g',
    origin: 'Highlands, Algeria',
    stock: 30,
    featured: true,
    benefits: [
      'Promotes relaxation',
      'Helps with sleep quality',
      'Antioxidant properties',
      'Soothes skin irritations'
    ],
    tags: ['lavender', 'floral', 'aromatic', 'therapeutic'],
    rating: 4.8,
    reviewCount: 92
  },
  {
    id: 'black-forest-honey-250g',
    name: 'Black Forest Honey',
    shortDescription: 'Rich, dark honey from the dense forests of eastern Algeria',
    description: 'Our Black Forest Honey is a rare specialty collected from the dense forests of eastern Algeria. This dark, full-bodied honey has a complex flavor profile with notes of molasses, malt, and pine. Its distinctive robust taste makes it a favorite among honey connoisseurs. High in minerals and with a lower glycemic index than lighter honeys, it\'s as nutritious as it is delicious.',
    price: 1900,
    images: [
      'https://images.pexels.com/photos/12325016/pexels-photo-12325016.jpeg',
      'https://images.pexels.com/photos/7262456/pexels-photo-7262456.jpeg'
    ],
    category: 'forest-honey',
    weight: '250g',
    origin: 'Eastern Forests, Algeria',
    stock: 15,
    featured: false,
    benefits: [
      'High mineral content',
      'Lower glycemic index',
      'Rich in iron',
      'Supports liver function'
    ],
    tags: ['black forest', 'dark', 'robust', 'rare'],
    rating: 4.9,
    reviewCount: 47
  },
  {
    id: 'acacia-honey-500g',
    name: 'Acacia Honey',
    shortDescription: 'Light, delicate honey with a mild flavor',
    description: 'Our Acacia Honey is prized for its exceptional clarity and pure, delicate taste. Sourced from acacia trees blooming in the Algerian countryside, this honey is one of the lightest in color and sweetest in flavor. It remains liquid for longer than most honeys due to its high fructose content. Perfect for those who prefer a milder honey taste, it\'s ideal for drizzling over desserts, mixing into tea, or using in recipes where a subtle honey flavor is desired.',
    price: 1700,
    images: [
      'https://images.pexels.com/photos/6957241/pexels-photo-6957241.jpeg',
      'https://images.pexels.com/photos/6956401/pexels-photo-6956401.jpeg'
    ],
    category: 'specialty-honey',
    weight: '500g',
    origin: 'Central Algeria',
    stock: 28,
    featured: true,
    benefits: [
      'Gentle on the digestive system',
      'Low allergenic potential',
      'Soothing for the throat',
      'Natural prebiotic'
    ],
    tags: ['acacia', 'light', 'mild', 'clear'],
    rating: 4.7,
    reviewCount: 79
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};