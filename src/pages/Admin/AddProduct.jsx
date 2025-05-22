import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Select} from 'antd';
import AdminMenu from '../../components/Layout/AdminMenu';
const { Option } = Select;


export default function AddProduct() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [shipping, setShipping] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

 

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("https://backend-psi-woad.vercel.app/all-categories");
      if (data?.success) {
        setCategories(data?.allcategories);
      }
      // console.log("all cats", data)
    } catch (error) {
      console.log(error);
      // toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Object.keys(form).forEach((key) => formData.append(key, form[key]));
    // if (image) {
    //   formData.append('photo', image);
    // }

    const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("photo", image);
      productData.append("category", category);
    try {
      const res = await axios.post('https://backend-psi-woad.vercel.app/create-product', productData);
      if (res.data.success) {
        alert('Product Created Successfully');
        setImage(null);
        setPreview(null);
      } else {
        alert(res.data.message || 'Failed to create product');
      }
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      alert(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-row'>
      {/* menu  */}
      <div className='w-[25%]'>
         <AdminMenu />
      </div>
      <div className="min-h-screen bg-gray-100 pt-[88px] flex items-center justify-center p-6 w-[75%]">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Add New Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            
            <Select
                bordered={false}
                placeholder="Select a category"
                size="large"
                showSearch
                className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
              
                onChange={(value) => {
                  setCategory(value);
                }}
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="flex items-center space-x-2">
          <div className="w-full">
          <label className="text-sm font-medium text-gray-700">Requires Shipping?</label>
          
                <Select
                  bordered={false}
                  placeholder="Select Shipping "
                  size="large"
                  showSearch
                  className="form-select w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200"
                  onChange={(value) => {
                    setShipping(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
          </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Product Image</label>
            <input
              type="file"
              onChange={handleImageChange}
              className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
              required
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-4 h-32 w-32 object-cover rounded-md border border-gray-300"
              />
            )}
          </div>
          <button
            type="submit"
            className={`w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 focus:ring focus:ring-blue-200 ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}
