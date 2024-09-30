import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShowProduct = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null); // To handle errors

  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/');
      console.log(response.data); // Check the data received
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to fetch products.'); // Set error message
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>Show all products</h1>
      {error && <p>{error}</p>} {/* Display error if it exists */}
      {product.map(({ image, name, price, description, category }, index) => (
        <div key={index}>
          <img src={image} alt={name || "Product Image"} />
          <p>{`name : ${name}`}</p>
          <p>{`price : ${price}`}</p>
          <p>{`description : ${description}`}</p>
          <p>{`category : ${category}`}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowProduct;
