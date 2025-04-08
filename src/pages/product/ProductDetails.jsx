import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productdetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("Product not found");
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="details-image" />
      <div className="details-info">
        <h2 className="details-title">{product.name}</h2>
        <p className="details-price">${product.price}</p>
        <p className="details-description">{product.description}</p>
        <button className="add-to-cart-btn">Hire Me</button>
      </div>
    </div>
  );
};

export default ProductDetails;
