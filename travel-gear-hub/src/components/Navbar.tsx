import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { ShoppingCart, AccountCircle } from '@mui/icons-material';

const Navbar = () => {
  return (
    <AppBar position="static" color='primary'>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Travel Gear Hub
        </Typography>
        <Box>
          <Button color="inherit" startIcon={<AccountCircle />}>
            Login
          </Button>
          <Button color="inherit" startIcon={<ShoppingCart />}>
            Cart (0)
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;