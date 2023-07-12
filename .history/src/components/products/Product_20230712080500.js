import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
  });
  const { id } = useParams();
  const navigate = useNavigate(); // Updated line
  useEffect(() => {
    loadProducts();
  }, []);
  const loadProducts = async () => {
    const res = await axios.get(`http://localhost:3000/products/${id}`);
    setProduct(res.data);
  };
  const onCancel = () => {
    navigate("/manage-product");
  };

  return (
    <div className="container py-4">
      {/* <Link className="btn btn-primary" to="/manage-product">
        Back to Home
      </Link>
      <h1 className="display-4">Product Id: {id}</h1> */}
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">ID: {id}</li>
        <li className="list-group-item">Name: {product.name}</li>
        <li className="list-group-item">Price: {product.price}</li>
      </ul>
      <Link className="btn btn-outline-primary mr-3" to={`/products/update/${product.id}`}>
        Edit
      </Link>

      <button type="button" className="btn btn-danger btn-block" onClick={onCancel}>
        Cancel
      </button>
    </div>
  );
};

export default Product;
