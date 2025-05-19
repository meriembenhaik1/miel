import { Product, Category } from '../types/product';
import mielafricain from './mielafricain.jpg';
import miel from './2.jpg';
import miel3 from './3.jpg';
import miel4 from './4.jpg';
import fleur from './fleur1.jpg';
import orange from './orange.jpg';
import mo from './montage.jpg';
import eu from './eucal.jpg';





export const categories: Category[] = [
  {
    id: 'mountain-honey',
    name: 'Mountain Honey',
    description: 'Honey sourced from the pristine Algerian mountains.',
    image: mielafricain
  },
  {
    id: 'forest-honey',
    name: 'Forest Honey',
    description: 'Collected from the forests of Algeria.',
    image: miel3
  },
  {
    id: 'citrus-honey',
    name: 'Citrus Honey',
    description: 'Bright and aromatic honey from citrus blossoms.',
    image: miel4
  },
  {
    id: 'specialty-honey',
    name: 'Specialty Honey',
    description: 'Rare and unique varieties.',
    image: 'https://images.pexels.com/photos/8751955/pexels-photo-8751955.jpeg'
  }
];

export const products: Product[] = [
  {
    id: 'yansoune',
    name: 'Miel Yansoune',
    shortDescription: 'Miel naturel aux graines de nigelle',
    description: 'Un miel rare et puissant enrichi de graines de nigelle (yansoune), reconnu pour ses vertus thérapeutiques et son goût corsé.',
    price: 6000,
    images: [miel],
    category: 'specialty-honey',
    weight: '1kg',
    origin: 'Algérie',
    stock: 20,
    featured: true,
    benefits: ['Renforce l’immunité', 'Antioxydant naturel'],
    tags: ['yansoune', 'nigelle', 'fort'],
    rating: 4.8,
    reviewCount: 45
  },
  {
    id: 'el-djerdjir',
    name: 'Miel El Djerdjir',
    shortDescription: 'Miel extrait des fleurs de cresson (djerdjir)',
    description: 'Ce miel est issu des fleurs de cresson, reconnu pour son goût unique et ses bienfaits digestifs.',
    price: 4000,
    images: [miel3],
    category: 'forest-honey',
    weight: '1kg',
    origin: 'Nord-Est Algérie',
    stock: 30,
    featured: false,
    benefits: ['Stimule la digestion', 'Effet détox'],
    tags: ['djerdjir', 'cresson'],
    rating: 4.5,
    reviewCount: 34
  },
  {
    id: 'Miel aux oranges',
    name: 'Miel El Boto9al',
    shortDescription: 'Miel doux extrait des fleurs d’oranger',
    description: 'Un miel léger et parfumé provenant des fleurs d’oranger, parfait pour les infusions.',
    price: 3500,
    images: [orange],
    category: 'citrus-honey',
    weight: '1kg',
    origin: 'Côtes algériennes',
    stock: 25,
    featured: false,
    benefits: ['Apaise les nerfs', 'Favorise le sommeil'],
    tags: ['oranger', 'boto9al', 'relaxant'],
    rating: 4.6,
    reviewCount: 50
  },
  {
    id: 'el-sidr',
    name: 'Miel El Sidr',
    shortDescription: 'Miel premium extrait du jujubier (sidr)',
    description: 'Considéré comme un des meilleurs miels, le miel de sidr possède un goût riche et des vertus médicinales reconnues.',
    price: 5500,
    images: [mielafricain],
    category: 'mountain-honey',
    weight: '1kg',
    origin: 'Monts de l’Atlas, Algérie',
    stock: 15,
    featured: true,
    benefits: ['Antibactérien', 'Renforce le système immunitaire'],
    tags: ['sidr', 'premium', 'montagne'],
    rating: 4.9,
    reviewCount: 78
  },
  {
    id: 'el-kalytous',
    name: 'Miel eucalyptus',
    shortDescription: 'Miel aux notes puissantes d’eucalyptus',
    description: 'Issu des fleurs d’eucalyptus, ce miel est idéal pour les affections respiratoires.',
    price: 4500,
    images: [eu],
    category: 'forest-honey',
    weight: '1kg',
    origin: 'Forêts algériennes',
    stock: 22,
    featured: false,
    benefits: ['Apaise la gorge', 'Décongestionnant naturel'],
    tags: ['kalytous', 'eucalyptus'],
    rating: 4.7,
    reviewCount: 39
  },
  {
    id: 'el-djabali',
    name: 'Miel Djabali',
    shortDescription: 'Miel pur des montagnes',
    description: 'Récolté en altitude, ce miel est très apprécié pour son goût profond et sa pureté.',
    price: 4500,
    images: [mo],
    category: 'mountain-honey',
    weight: '1kg',
    origin: 'Hauts plateaux algériens',
    stock: 18,
    featured: false,
    benefits: ['Énergisant', 'Naturel et brut'],
    tags: ['djabali', 'montagne', 'puissant'],
    rating: 4.6,
    reviewCount: 41
  },
  {
    id: 'multifleur',
    name: 'Miel Multifleur',
    shortDescription: 'Miel récolté à partir de plusieurs fleurs',
    description: 'Un miel polyvalent issu de divers types de fleurs, avec un goût équilibré.',
    price: 4000,
    images: [fleur],
    category: 'specialty-honey',
    weight: '1kg',
    origin: 'Algérie',
    stock: 26,
    featured: false,
    benefits: ['Renforce l’organisme', 'Utilisation quotidienne'],
    tags: ['multifleur', 'classique'],
    rating: 4.4,
    reviewCount: 36
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
