import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../api';

const AddProduct = () => {
  const [product, setProduct] = useState({ name: '', price: '', description: '', imageUrl: '' });
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null); // Clear any previous errors

    // Basic validation: Ensure price is a positive number
    if (product.price <= 0) {
      setError("Price must be a positive number");
      return;
    }

    setLoading(true);
    addProduct(product)
      .then(() => navigate('/products'))
      .catch((err) => {
        console.error("Error adding product:", err);
        setError("Failed to add product. Please try again.");
      })
      .finally(() => setLoading(false));  // Always reset loading state
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={product.description}
            onChange={(e) => setProduct({ ...product, description: e.target.value })}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="url"
            className="form-control"
            value={product.imageUrl}
            onChange={(e) => setProduct({ ...product, imageUrl: e.target.value })}
            required
          />
        </div>
        
        {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}
        
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Adding...' : 'Add Product'}
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
