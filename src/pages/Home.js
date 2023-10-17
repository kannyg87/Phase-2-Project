import React, { useState, useEffect } from "react";
import BasicTabs from "../components/NavBar";
import { TextField, Button } from "@mui/material";
import { Grid } from "@mui/material";
import "./Home.css";

import Cards from "../components/Cards";
import MakeupDetails from "./MakeupDetails";

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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    const searchedItems = products.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(searchedItems)
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
      <Grid container spacing={1} className="cards-container">
        {products.map((product) => (
          <Cards product={product} key={product.id} />
        ))}
      </Grid>
    </div>
  );
}

export default Home;
