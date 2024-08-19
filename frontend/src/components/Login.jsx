
import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
  Typography,
} from '@mui/material';

export default function Login() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
      window.location.href = '/dashboard';
    }, 1000);
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(to bottom right, #4F3BA9, #9068BE)',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container
        sx={{
          p: 4,
          borderWidth: 1,
          borderRadius: '8px',
          boxShadow: 3,
          borderColor: 'white',
          textAlign: 'center',
          backgroundColor: 'white',
          width: "90%"
        }}
      >
        <Typography variant="h4" gutterBottom>
          Welcome Admin !!!
        </Typography>
        <form>
          <TextField
            label="Admin Email"
            variant="outlined"
            fullWidth
            margin="normal"
            defaultValue="admin@gmail.com"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            defaultValue="admin"
            InputProps={{
              readOnly: true,
            }}
          />
          <Button
            variant="contained"
            color="success"
            fullWidth
            sx={{ mt: 3 }}
            onClick={handleLogin}
          >
            Login
          </Button>
          {/* Dialog */}
          <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
            <DialogTitle>Welcome Admin !!!</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Redirecting to the dashboard page...
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setIsOpen(false)} color="primary">
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </form>
      </Container>
    </Box>
  );
};


