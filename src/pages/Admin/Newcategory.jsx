import React, { useState } from 'react';
import axios from 'axios';
import AdminMenu from '../../components/Layout/AdminMenu'
export default function NewCategory() {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null); // For displaying the image preview

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file); // Set the file in the state

    // Generate a preview URL
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl); // Set the preview URL
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    if (image) {
      formData.append('photo', image); // Ensure the file is appended
    }

    try {
      const res = await axios.post('https://backend-psi-woad.vercel.app/create-category', formData);
      if (res.data.success) {
        alert('Category Created');
        setName(''); // Reset form
        setImage(null);
        setPreview(null);
      } else {
        alert(res.data.message || 'Failed to create category');
      }
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      alert(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className='flex flex-row'>
      <div className='w-[25%]'>
        <AdminMenu />
      </div>
      <div className='w-[75%] mt-10 '>
      {/* <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="file"
        onChange={handleImageChange} // Handle file input change
        required
      />
      {preview && <img src={preview} alt="Preview" style={{ width: '100px', height: '100px', marginTop: '10px' }} />}
      <button type="submit">Submit</button>
    </form> */}

<form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-semibold text-center mb-6">Upload Category Details</h2>
  
  {/* Name Input */}
  <div className="mb-4">
    <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Name</label>
    <input
      id="name"
      type="text"
      placeholder="Enter your name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  
  {/* File Input */}
  <div className="mb-4">
    <label htmlFor="image" className="block text-gray-700 text-sm font-medium mb-2">Upload Image</label>
    <input
      id="image"
      type="file"
      onChange={handleImageChange}
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Image Preview */}
  {preview && (
    <div className="mb-4">
      <img src={preview} alt="Preview" className="w-24 h-24 object-cover mx-auto" />
    </div>
  )}
  
  {/* Submit Button */}
  <div className="mt-6">
    <button
      type="submit"
      className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Submit
    </button>
  </div>
</form>

      </div>
    </div>
  );
}
