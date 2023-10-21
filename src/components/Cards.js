import React from "react";
import { Card, Grid } from "@mui/material";
import "../pages/App.css";

function Cards({ product }) {
  return (
    <Grid item xs={12} sm={6} md={4} key={product.id}>
      <Card className="card" key={product.id}>
        <img
          src={product.image_link}
          alt={product.name}
          width="100%"
          height="auto"
        />
        <h2>{product.name}</h2>
        <p>{`$${product.price}`}</p>
      </Card>
    </Grid>
  );
}
export default Cards;
