import React, { useState, useEffect } from "react";
import BasicTabs from "../components/NavBar";
import { Grid } from "@mui/material";
import "./App.css";
import Cards from "../components/Cards";
import Search from "../components/Search";
import AddProductForm from "../components/AddProductForm";

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handleNewProductAdded = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const searchedItems = products.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <BasicTabs />
      <h1>Hello!</h1>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <AddProductForm onProductAdded={handleNewProductAdded} />
      <Grid container spacing={1} className="cards-container">
        {searchedItems.map((product) => (
          <Cards product={product} key={product.id} />
        ))}
      </Grid>
    </div>
  );
}

export default App;
