import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

function AddProductForm({ onProductAdded }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("/images/barbie.jpeg");
  const [price, setPrice] = useState("");

  const handleAddProduct = () => {
    const newProduct = {
      name: name,
      image_link: image,
      price: parseFloat(price),
      category: "Lippie",
    };

    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        onProductAdded(data);
        setName("");
        setImage("");
        setPrice("");
      });
  };

  return (
    <div className="add-product-form">
      <TextField
        label="Product Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "7px", margin: "5px" }}
      />
      <TextField
        label="Image URL"
        variant="outlined"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        style={{ padding: "7px", margin: "5px" }}
      />
      <TextField
        label="Price"
        variant="outlined"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{ padding: "7px", margin: "5px" }}
      />
      <Button
        variant="contained"
        color="success"
        onClick={handleAddProduct}
        style={{ padding: "7px", margin: "6px" }}
      >
        Add Product
      </Button>
    </div>
  );
}

export default AddProductForm;
