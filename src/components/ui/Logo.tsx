import { Feather } from 'lucide-react';

interface LogoProps {
  className?: string;
  dark?: boolean;
}

const Logo = ({ className = 'h-12 w-auto', dark = false }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex items-center justify-center bg-honey-500 rounded-full p-2 mr-2">
        <Feather className="text-white" size={24} />
      </div>
      <div className={`font-playfair font-bold text-2xl ${dark ? 'text-white' : 'text-brown-800'}`}>
        Youcef Miel
      </div>
    </div>
  );
};

export default Logo;