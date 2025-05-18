import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

const QuantitySelector = ({ 
  value, 
  onChange, 
  min = 1, 
  max = 99
}: QuantitySelectorProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    if (isNaN(newValue)) {
      onChange(min);
    } else {
      onChange(Math.max(min, Math.min(max, newValue)));
    }
  };
  
  const decrease = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };
  
  const increase = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };
  
  return (
    <div className="flex items-center">
      <button
        type="button"
        onClick={decrease}
        disabled={value <= min}
        className="w-10 h-10 flex items-center justify-center bg-cream-100 hover:bg-cream-200 text-brown-800 rounded-l-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <Minus size={16} />
      </button>
      
      <input
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        className="w-14 h-10 border-y border-gray-200 text-center text-brown-800 focus:outline-none"
      />
      
      <button
        type="button"
        onClick={increase}
        disabled={value >= max}
        className="w-10 h-10 flex items-center justify-center bg-cream-100 hover:bg-cream-200 text-brown-800 rounded-r-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <Plus size={16} />
      </button>
    </div>
  );
};

export default QuantitySelector;