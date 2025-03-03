import { CLOUDINARY_CONFIG } from '../config/cloudinary'

// Function to upload an image to Cloudinary
export const uploadImage = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_CONFIG.uploadPreset);

  try {
    const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.cloudName}/image/upload`, {
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
