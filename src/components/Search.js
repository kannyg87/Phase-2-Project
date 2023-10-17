import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import "../../src/pages/Home.css";

function Search({ products, setProducts }) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    const searchedItems = products.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(searchedItems);
  };

  return (
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
  );
}
export default Search;
