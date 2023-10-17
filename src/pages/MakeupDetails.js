import React from "react";
import "./Product.css";
import { useParams } from "react-router-dom";
import BasicTabs from "../components/NavBar";

function MakeupDetails({ product }) {
  console.log(product)
  const params = useParams();
  console.log(params.id);

  const productDetalis = product.find((p) => p.id === params.id);
  if (!productDetalis) {
    return <p>Product not found</p>;
  }

  return (
    <>
      <BasicTabs />
      <div className="product-detail">
        <img
          src={productDetalis.image_link}
          alt={productDetalis.name}
          className="product-image"
        />
        <h1 className="product-name">{productDetalis.name}</h1>
        <p className="product-brand">{productDetalis.brand}</p>
        <p className="product-description">{productDetalis.description}</p>

        <p className="product-price">
          {productDetalis.price_sign}
          {productDetalis.price} {productDetalis.currency}
        </p>

        <a
          href={productDetalis.product_link}
          target="_blank"
          rel="noopener noreferrer"
          className="product-link"
        >
          Buy Now
        </a>

        <a
          href={productDetalis.website_link}
          target="_blank"
          rel="noopener noreferrer"
          className="website-link"
        >
          Visit Website
        </a>

        {productDetalis.rating && (
          <p className="product-rating">Rating: {productDetalis.rating}</p>
        )}

        <p className="product-category">Category: {productDetalis.category}</p>
        <p className="product-type">Type: {productDetalis.product_type}</p>

        <ul className="tag-list">
          {productDetalis.tag_list.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MakeupDetails;
