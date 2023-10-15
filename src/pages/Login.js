import React, { useState } from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

import users from "../data";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const user = users.find(
      (u) =>
        u.name.toLowerCase() === formData.username.toLowerCase() &&
        u.password === formData.password
    );

    if (user) {
      navigate("/home");
    } else {
      alert("Invalid Credentials");
    }
  }

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        bgcolor="#c5a6b4c2"
      >
        <Card
          sx={{
            width: 350,
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            image="/images/makeup.jpg"
            alt="Image Alt Text"
            height="140"
          />
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                name="username"
                fullWidth
                margin="normal"
                label="Username"
                value={formData.username}
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                name="password"
                fullWidth
                margin="normal"
                label="Password"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
              <Button
                fullWidth
                variant="contained"
                color="success"
                sx={{ mt: 2 }}
                type="submit"
              >
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
