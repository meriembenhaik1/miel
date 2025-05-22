import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  wilaya: string;
  notes: string;
  paymentMethod: 'cash-on-delivery';
}

const CheckoutPage = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [submitError, setSubmitError] = useState('');
  
  // URL de votre Google Apps Script
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwDIlxuE66yKPL9MNs9CslkN4OWHfYKOJ06QTlx0Wswu_pJYLy3h-v0ungTTaB91u7z/exec';
  
  // Form state
  const [formState, setFormState] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    wilaya: '',
    notes: '',
    paymentMethod: 'cash-on-delivery'
  });
  
  // Update page title
  useEffect(() => {
    document.title = 'Checkout | Youcef Miel';
  }, []);
  
  // Redirect to cart if cart is empty
  useEffect(() => {
    if (cartItems.length === 0 && !orderComplete) {
      navigate('/cart');
    }
  }, [cartItems, navigate, orderComplete]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const submitOrderToGoogleSheet = async (orderData: any) => {
    try {
      // Créer les données au format URL-encoded (comme attendu par votre script)
      const params = new URLSearchParams();
      
      // Ajouter toutes les données de la commande
      params.append('orderNumber', orderData.orderNumber);
      params.append('firstName', orderData.customerInfo.firstName);
      params.append('lastName', orderData.customerInfo.lastName);
      params.append('email', orderData.customerInfo.email);
      params.append('phone', orderData.customerInfo.phone);
      params.append('address', orderData.customerInfo.address);
      params.append('city', orderData.customerInfo.city);
      params.append('wilaya', orderData.customerInfo.wilaya);
      params.append('notes', orderData.customerInfo.notes || '');
      params.append('paymentMethod', orderData.customerInfo.paymentMethod);
      params.append('orderTotal', orderData.orderTotal.toString());
      params.append('status', orderData.status);
      
      // Ajouter les articles sous forme de texte lisible
      const itemsText = orderData.items.map((item: any) => 
        `${item.productName} (x${item.quantity}) - ${item.totalPrice} DA`
      ).join('; ');
      params.append('items', itemsText);
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString()
      });
      
      // Vérifier si la requête a réussi
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
      
      const result = await response.text();
      console.log('Réponse du serveur:', result);
      
      return true;
    } catch (error) {
      console.error('Erreur lors de l\'envoi vers Google Sheet:', error);
      throw error;
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Générer le numéro de commande
      const randomOrderNumber = 'YM' + Math.floor(10000 + Math.random() * 90000).toString();
      
      // Préparer les données de commande pour Google Sheet
      const orderData = {
        orderNumber: randomOrderNumber,
        timestamp: new Date().toLocaleString('fr-FR', { 
          timeZone: 'Africa/Algiers',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit'
        }),
        customerInfo: {
          firstName: formState.firstName,
          lastName: formState.lastName,
          email: formState.email,
          phone: formState.phone,
          address: formState.address,
          city: formState.city,
          wilaya: formState.wilaya,
          notes: formState.notes,
          paymentMethod: formState.paymentMethod
        },
        items: cartItems.map(item => ({
          productId: item.product.id,
          productName: item.product.name,
          quantity: item.quantity,
          unitPrice: item.product.price,
          totalPrice: item.product.price * item.quantity
        })),
        orderTotal: cartTotal,
        status: 'En attente'
      };
      
      // Envoyer les données vers Google Sheet
      await submitOrderToGoogleSheet(orderData);
      
      // Si tout s'est bien passé
      setOrderNumber(randomOrderNumber);
      setOrderComplete(true);
      clearCart();
      
    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
      setSubmitError('Une erreur s\'est produite lors de l\'envoi de votre commande. Veuillez vérifier votre connexion internet et réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (orderComplete) {
    return (
      <div className="container py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-success-50 text-success-500 rounded-full mb-4">
              <Check size={32} />
            </div>
            <h1 className="text-2xl font-semibold text-brown-800 mb-2">Commande Confirmée!</h1>
            <p className="text-gray-600">
              Merci pour votre commande. Nous avons reçu votre demande et nous la traiterons immédiatement.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-md p-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Mode de paiement:</span>
                <span className="font-medium">Paiement à la livraison</span>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="font-semibold text-brown-800 mb-3">Étapes suivantes :</h3>
            <ul className="space-y-2">
              
              <li className="flex items-start">
                <span className="bg-honey-100 text-honey-600 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                <span className="text-gray-600">Notre équipe préparera votre commande pour l'expédition</span>
              </li>
              <li className="flex items-start">
                <span className="bg-honey-100 text-honey-600 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                <span className="text-gray-600">Vous recevrez un appel pour confirmer l'heure de livraison</span>
              </li>
              <li className="flex items-start">
                <span className="bg-honey-100 text-honey-600 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                <span className="text-gray-600">Payez quand votre miel arrive à votre porte!</span>
              </li>
            </ul>
          </div>
          
          <div className="text-center">
            <Button variant="primary" size="lg">
              <Link to="/">Retour à l'accueil</Link>
            </Button>
          </div>
        </div>
  
    );
  }
  
  return (
    <div className="container py-8">
      <div className="mb-6 flex items-center">
        <Link to="/cart" className="flex items-center text-gray-500 hover:text-honey-600 transition-colors">
          <ArrowLeft size={16} className="mr-1" />
          Retour au panier
        </Link>
      </div>
      
      <h1 className="text-3xl font-semibold text-brown-800 mb-8">Commande</h1>
      
      {submitError && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-600">{submitError}</p>
        </div>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <form onSubmit={handleSubmit}>
              <h2 className="text-xl font-semibold text-brown-800 mb-6">Informations de livraison</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formState.firstName}
                    onChange={handleInputChange}
                    className="input"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formState.lastName}
                    onChange={handleInputChange}
                    className="input"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    className="input"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Numéro de téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleInputChange}
                    className="input"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Adresse *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formState.address}
                  onChange={handleInputChange}
                  className="input"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    Ville *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formState.city}
                    onChange={handleInputChange}
                    className="input"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="wilaya" className="block text-sm font-medium text-gray-700 mb-1">
                    Wilaya *
                  </label>
                  <select
                    id="wilaya"
                    name="wilaya"
                    value={formState.wilaya}
                    onChange={handleInputChange}
                    className="input"
                    required
                  >
                    <option value="">Sélectionner Wilaya</option>
                    <option value="Adrar">Adrar</option>
                    <option value="Chlef">Chlef</option>
                    <option value="Laghouat">Laghouat</option>
                    <option value="Alger">Alger</option>
                    <option value="Oran">Oran</option>
                    <option value="Constantine">Constantine</option>
                    {/* Vous pouvez étendre cette liste avec les 58 wilayas */}
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                  Notes de commande (Optionnel)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formState.notes}
                  onChange={handleInputChange}
                  className="input h-24"
                  placeholder="Instructions spéciales pour la livraison ou la commande"
                ></textarea>
              </div>
              
              <h2 className="text-xl font-semibold text-brown-800 mb-6 pt-4 border-t border-gray-200">
                Mode de paiement
              </h2>
              
              <div className="mb-8">
                <div className="bg-cream-50 p-4 rounded-md border border-honey-200">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="cash-on-delivery"
                      name="paymentMethod"
                      value="cash-on-delivery"
                      checked={formState.paymentMethod === 'cash-on-delivery'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <label htmlFor="cash-on-delivery" className="font-medium text-brown-800">
                      Paiement à la livraison
                    </label>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 ml-6">
                    Payez en espèces à la livraison de votre commande.
                  </p>
                </div>
              </div>
              
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Traitement en cours...' : 'Passer la commande'}
              </Button>
            </form>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-32">
            <h2 className="text-xl font-semibold text-brown-800 mb-6">Résumé de la commande</h2>
            
            <div className="max-h-[300px] overflow-y-auto mb-6">
              {cartItems.map((item) => (
                <div key={item.product.id} className="flex items-center py-3 border-b border-gray-100">
                  <div className="w-16 h-16 rounded overflow-hidden mr-4">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-sm font-medium text-brown-800">{item.product.name}</h4>
                    <div className="text-xs text-gray-500">{item.quantity} × {item.product.price} DA</div>
                  </div>
                  <div className="font-medium text-right">
                    {item.product.price * item.quantity} DA
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Sous-total</span>
                <span className="font-medium">{cartTotal} DA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Livraison</span>
                <span className="font-medium">Calculé à la commande</span>
              </div>
              <div className="border-t border-gray-200 pt-4 flex justify-between">
                <span className="text-lg font-semibold text-brown-800">Total</span>
                <span className="text-lg font-semibold text-brown-800">{cartTotal} DA</span>
              </div>
            </div>
            
            <div className="p-4 bg-cream-100 rounded-md">
              <h4 className="font-medium text-brown-800 mb-2">Achat sécurisé</h4>
              <p className="text-sm text-gray-600">
                Nous protégeons vos informations de paiement en utilisant un cryptage pour fournir une sécurité de niveau bancaire.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;