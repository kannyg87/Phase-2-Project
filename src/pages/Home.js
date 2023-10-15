import React, { useState, useEffect } from "react";
import BasicTabs from "../components/NavBar";
import { TextField, Button } from "@mui/material";
import "./Home.css";

import Cards from "../components/Cards";

function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  console.log(products);

  // Handle change in the search bar
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle search submit - logic to filter/search cards can be implemented here
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    // Implement search logic here...
  };

  return (
    <div className="home-container">
      <BasicTabs />

      <h1>Hello, Home!</h1>

      <form onSubmit={handleSearchSubmit} className="search-form">
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="success"
          style={{ padding: "7px", margin: "5px" }}
        >
          Search
        </Button>
      </form>
      {products.map((product) => (
        <Cards product={product} key={product.id} />
      ))}
    </div>
  );
}

export default Home;
