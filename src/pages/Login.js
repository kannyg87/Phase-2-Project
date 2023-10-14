import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';

export default function Login() {
  return (
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
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <CardMedia
          component="img"
          image="/images/barbie.jpeg"
          alt="Image Alt Text"
          height="140"
        />
        <CardContent>
          <TextField 
            fullWidth
            margin="normal"
            label="Username" 
            variant="outlined" 
          />
          <TextField 
            fullWidth
            margin="normal"
            label="Password" 
            type="password"
            variant="outlined" 
          />
          <Button 
            fullWidth
            variant="contained" 
            color="primary"
            sx={{ mt: 2 }}
          >
            Sign In
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

