import React from 'react';
import { PaintColor } from '../types';

interface ColorSwatchProps {
  color: PaintColor;
  isSelected: boolean;
  onClick: (id: string) => void;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ color, isSelected, onClick }) => {
  return (
    <div 
      className={`flex flex-col items-center cursor-pointer transition-transform ${isSelected ? 'scale-110' : 'hover:scale-105'}`}
      onClick={() => onClick(color.id)}
    >
      <div 
        className={`h-16 w-16 rounded-full mb-2 border-4 ${isSelected ? 'border-indigo-600' : 'border-transparent'}`}
        style={{ backgroundColor: color.hexCode }}
      />
      <p className="text-sm font-medium text-gray-800">{color.name}</p>
      <p className="text-sm font-bold text-indigo-600">${color.price.toFixed(2)}</p>
    </div>
  );
};

export default ColorSwatch;