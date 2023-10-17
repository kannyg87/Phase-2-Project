import React, { useState, useEffect } from "react";
import BasicTabs from "../components/NavBar";
import { Grid } from "@mui/material";
import "./Home.css";

import Cards from "../components/Cards";
import Search from "../components/Search";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="home-container">
      <BasicTabs />

      <h1>Hello, Home!</h1>
      <Search products={products} setProducts={setProducts} />

      <Grid container spacing={1} className="cards-container">
        {products.map((product) => (
          <Cards product={product} key={product.id} />
        ))}
      </Grid>
    </div>
  );
}

export default Home;
