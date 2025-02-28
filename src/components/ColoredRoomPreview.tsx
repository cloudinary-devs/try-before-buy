import React, { useEffect } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { generativeRecolor } from '@cloudinary/url-gen/actions/effect';
import { ShoppingCart, Heart } from 'lucide-react';
import { PaintColor } from '../types';

interface ColoredRoomPreviewProps {
  imagePublicId: string | null;
  selectedColor: PaintColor | null;
  onAddToCart: () => void;
}

const ColoredRoomPreview: React.FC<ColoredRoomPreviewProps> = ({ 
  imagePublicId, 
  selectedColor,
  onAddToCart
}) => {
  // Initialize Cloudinary with the correct cloud name
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'cld-demo-ugc' // Using the provided cloud name
    }
  });

  if (!imagePublicId) {
    return (
      <div className="bg-gray-100 rounded-lg flex items-center justify-center h-96">
        <p className="text-gray-500 text-lg">Upload an image to see preview</p>
      </div>
    );
  }

  // Create a Cloudinary image
  const myImage = cld.image(imagePublicId).setDeliveryType('upload');
  
  // Apply recolor effect only if a color is selected
  if (selectedColor) {
    myImage.effect(
      generativeRecolor("wall", selectedColor.hexCode.substring(1)).detectMultiple()
    );
  }

  // Debugging: Log the final image URL
  useEffect(() => {
    console.log("Generated Cloudinary Image URL:", myImage.toURL());
  }, [imagePublicId, selectedColor]);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <AdvancedImage cldImg={myImage} className="w-full h-auto" />
        <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
          <Heart className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      
      <div className="p-4">
        {selectedColor && (
          <>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{selectedColor.name}</h3>
                <p className="text-gray-600">Premium Interior Wall Paint</p>
              </div>
              <p className="text-2xl font-bold text-indigo-600">${selectedColor.price.toFixed(2)}</p>
            </div>
            
            <div className="flex space-x-2 mb-4">
              <div className="h-6 w-6 rounded-full border border-gray-300" style={{ backgroundColor: selectedColor.hexCode }}></div>
              <span className="text-sm text-gray-600">Color: {selectedColor.name}</span>
            </div>
          </>
        )}
        
        <div className="flex space-x-4">
          <button 
            onClick={onAddToCart}
            className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition flex items-center justify-center"
            disabled={!selectedColor} // Disable if no color selected
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart
          </button>
          <button className="flex-1 border border-indigo-600 text-indigo-600 py-2 px-4 rounded-md hover:bg-indigo-50 transition">
            Save for Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColoredRoomPreview;
