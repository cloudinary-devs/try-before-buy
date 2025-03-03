import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageUploader from './components/ImageUploader';
import ColorSwatch from './components/ColorSwatch';
import ColoredRoomPreview from './components/ColoredRoomPreview';
import { paintColors } from './data/paintColors';
import { uploadImage } from './utils/cloudinaryUtils';

function App() {
  const [selectedColorId, setSelectedColorId] = useState<string | null>(null);
  const [imagePublicId, setImagePublicId] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const selectedColor = selectedColorId 
    ? paintColors.find(color => color.id === selectedColorId) || null 
    : null;

  const handleColorSelect = (colorId: string) => {
    setSelectedColorId(colorId);
  };

  const handleImageUpload = async (file: File) => {
    try {
      setIsUploading(true);
      const publicId = await uploadImage(file);
      setImagePublicId(publicId);
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column - Image Upload and Color Selection */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Upload Your Room</h2>
            <ImageUploader onImageUpload={handleImageUpload} isLoading={isUploading} />
            
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Select a Paint Color</h2>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {paintColors.map(color => (
                  <ColorSwatch 
                    key={color.id}
                    color={color}
                    isSelected={color.id === selectedColorId}
                    onClick={handleColorSelect}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Preview */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Preview</h2>
            <ColoredRoomPreview 
              imagePublicId={imagePublicId}
              selectedColor={selectedColor}
              onAddToCart={() => console.log("Added to cart")}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
