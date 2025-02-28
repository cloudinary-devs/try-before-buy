import { Cloudinary } from '@cloudinary/url-gen';

// Initialize Cloudinary instance
export const cloudinary = new Cloudinary({
  cloud: {
    cloudName: 'cld-demo-ugc'
  }
});

// Function to upload an image to Cloudinary
export const uploadImage = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'try-before-buy');

  try {
    const response = await fetch(`https://api.cloudinary.com/v1_1/cld-demo-ugc/image/upload`, {
      method: 'POST',
      body: formData
    });

    const data = await response.json();
    return data.public_id;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};
