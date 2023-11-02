import React from "react";
import { TextField, Button } from "@mui/material";
import "../../src/pages/App.css";

function Search({ searchTerm, setSearchTerm }) {
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(searchTerm);
    setSearchTerm("");
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
