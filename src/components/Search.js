import React from "react";
import { TextField, Button } from "@mui/material";
import "../../src/pages/App.css";

function Search({ setSearchTerm }) {
  
  const [localSearchTerm, setLocalSearchTerm] = React.useState(""); 

  const handleSearchChange = (e) => {
    setLocalSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(localSearchTerm);
    setLocalSearchTerm("");
  };

  return (
    <form onSubmit={handleSearchSubmit} className="search-form">
      <TextField
        label="Search"
        variant="outlined"
        value={localSearchTerm}
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
