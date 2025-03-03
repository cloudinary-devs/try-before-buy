import React, { useEffect, useState } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { generativeRecolor } from '@cloudinary/url-gen/actions/effect';
import { limitFit } from '@cloudinary/url-gen/actions/resize';
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
  const [isLoading, setIsLoading] = useState(false);
  const [cldImage, setCldImage] = useState<any>(null);

  // Initialize Cloudinary with the correct cloud name
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'cld-demo-ugc'
    }
  });

  useEffect(() => {
    if (!imagePublicId) return;
    setIsLoading(true);
    
    let myImage = cld.image(imagePublicId).setDeliveryType('upload');
    
    if (selectedColor) {
      myImage.effect(
        generativeRecolor("wall", selectedColor.hexCode.substring(1)).detectMultiple()
      );
    }
    
    // Apply size limit after recoloring
    myImage.resize(limitFit().width(736).height(500));
    
    // Optimize format and quality
    myImage.format('auto').quality('auto');
    
    setCldImage(myImage);
    
    myImage.toURL(); // Ensure Cloudinary processes the transformation
    
    const imgCheck = new Image();
    imgCheck.src = myImage.toURL();
    imgCheck.onload = () => setIsLoading(false);
  }, [imagePublicId, selectedColor]);

  if (!imagePublicId) {
    return (
      <div className="bg-gray-100 rounded-lg flex items-center justify-center h-96">
        <p className="text-gray-500 text-lg">Upload an image to see preview</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
      <div className="relative flex justify-center items-center" style={{ maxWidth: '736px', maxHeight: '500px', margin: '0 auto' }}>
        {cldImage && <AdvancedImage cldImg={cldImage} className={`max-w-full max-h-full ${isLoading ? 'opacity-50' : 'opacity-100 transition-opacity duration-300'}`} />}
        {isLoading && (
          <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-indigo-600"></div>
          </div>
        )}
        <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
          <Heart className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800">{selectedColor ? selectedColor.name : "Original Color"}</h3>
            <p className="text-gray-600">Premium Interior Wall Paint</p>
          </div>
          {selectedColor && <p className="text-2xl font-bold text-indigo-600">${selectedColor.price.toFixed(2)}</p>}
        </div>
        
        {selectedColor && (
          <div className="flex space-x-2 mb-4">
            <div className="h-6 w-6 rounded-full border border-gray-300" style={{ backgroundColor: selectedColor.hexCode }}></div>
            <span className="text-sm text-gray-600">Color: {selectedColor.name}</span>
          </div>
        )}
        
        <div className="flex space-x-4">
          <button 
            onClick={onAddToCart}
            className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition flex items-center justify-center"
            disabled={!selectedColor}
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
