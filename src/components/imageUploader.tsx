"use client"
import axios from 'axios';
import React, { useState, useRef, ChangeEvent } from 'react';
import { getDescription } from '@/utils/predict';
import { animalAttribute } from '@/data/animal_description';

interface ImageUploaderProps {
  animalData: Array<{ name: string; prediction: number; } & animalAttribute>;
  updateAnimalData: React.Dispatch<React.SetStateAction<Array<{ name: string; prediction: number; } & animalAttribute>>>;
}

function ImageUploader({ animalData, updateAnimalData }: ImageUploaderProps): JSX.Element {
  const [fileName, setFileName] = useState<string>('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const uploadInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>): void => {
    const file: File | null = e.target.files ? e.target.files[0] : null;
    if (file) {
      setLoading(true); // Set loading state to true
      setFileName(file.name);

      const reader: FileReader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>): void => {
        if (event.target && event.target.result) {
          setImagePreview(event.target.result as string);
          setLoading(false); // Set loading state to false after image is processed
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClearImage = (): void => {
    setFileName('');
    updateAnimalData([]);
    setImagePreview(null);
    if (uploadInputRef.current) {
      uploadInputRef.current.value = ''; // Clear the file input value
    }
  };

  function dataURItoBlob(dataURI: string): Blob {
    // Convert base64/URLEncoded data component to raw binary data held in a string.
    const byteString = atob(dataURI.split(',')[1]);
  
    // Separate out the mime component.
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  
    // Write the bytes of the string to an ArrayBuffer.
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
  
    // Write the ArrayBuffer to a blob.
    return new Blob([ab], { type: mimeString });
  }

  const handlePredict = async (): Promise<void> => {
    try {
      if (imagePreview) {
        const blob = dataURItoBlob(imagePreview);
        const formData = new FormData();
        formData.append('file', blob);
    
        const response = await axios.post('https://api-animal-prediction.xcurv.cloud/predict', formData, {
          timeout: 60000 // Increase timeout to 60 seconds (in milliseconds)
        });
    
        console.log('Success:', response.data);
        const description = await getDescription(response.data);
        console.log('Description:', description);
        updateAnimalData(description);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <section className="container w-full mx-auto items-center">
      <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden items-center">
        <div className="px-4 py-6">
          <div
            id="image-preview"
            className={`max-w-sm p-6 mb-4 relative ${imagePreview ? '' : 'bg-gray-100 border-dashed border-2 border-gray-400'} rounded-lg items-center mx-auto text-center cursor-pointer`}
          >
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                <div className="spinner"></div> {/* Add your spinner or loading animation here */}
              </div>
            )}
            {imagePreview ? (
              <>
                <img src={imagePreview} className="max-h-48 rounded-lg mx-auto" alt="Image preview" />
              </>
            ) : (
              <>
                <input ref={uploadInputRef} id="upload" type="file" className="hidden" accept="image/jpeg" onChange={handleImageUpload} />
                <label htmlFor="upload" className="cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-gray-700 mx-auto mb-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                  </svg>
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload picture</h5>
                  <p className="font-normal text-sm text-gray-400 md:px-6">Choose photo size should be less than <b className="text-gray-600">2mb</b></p>
                  <p className="font-normal text-sm text-gray-400 md:px-6">and should be in <b className="text-gray-600">JPEG</b> format.</p>
                  <span id="filename" className="text-gray-500 bg-gray-200 z-50">{fileName}</span>
                </label>
              </>
            )}
          </div>
          <div className="flex items-center justify-center">
            <div className="flex">
              <div className='w-full'>
                <button
                  className="text-white bg-gray-500 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center mr-2 mb-2 cursor-pointer"
                  onClick={handleClearImage}
                >
                  Clear
                </button>
              </div>
              <div className='w-full'>
              <label className=" text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center mr-2 mb-2 cursor-pointer">
                <button className="text-center" onClick={handlePredict}>Upload</button>
              </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageUploader;
