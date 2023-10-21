import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

const Home = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#c5a6b4c2"
    >
      <div className="home-container">
        <div className="app-header">
          <h1>My Makeup App</h1>
          <p>
            Welcome to the ultimate makeup experience. Discover, try, and share
            your favorite looks!
          </p>
        </div>

        <div className="login-button-container">
          <Link to="/login" className="login-button">
            Login
          </Link>
        </div>

        <style>
          {`
            .home-container {
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 50px;
              font-family: Arial, sans-serif;
            }

            .app-header h1 {
              font-size: 36px;
              color: #FF69B4; /* Pinkish color */
              margin-bottom: 15px;
            }

            .app-header p {
              font-size: 18px;
              color: #555;
              text-align: center;
              margin-bottom: 30px;
            }

            .login-button-container {
              margin-top: 20px;
            }

            .login-button {
              display: inline-block;
              padding: 10px 20px;
              font-size: 18px;
              background-color: #FF69B4;
              color: white;
              text-decoration: none;
              border-radius: 4px;
              transition: background-color 0.3s;
            }

            .login-button:hover {
              background-color: #FF4081; /* Slightly darker pink on hover */
            }
          `}
        </style>
      </div>
    </Box>
  );
};

export default Home;
