import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

const Top: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          <img src="./logo_mofonline.png" alt="Logo Mofonline" />
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <Typography variant="body1" component={Link} to="/home" sx={{ margin: '0 1rem', textDecoration: 'none', color: 'inherit' }}>
            Home
          </Typography>
          <Typography variant="body1" component={Link} to="/jogos" sx={{ margin: '0 1rem', textDecoration: 'none', color: 'inherit' }}>
            Jogos
          </Typography>
          <Typography variant="body1" component={Link} to="/torneio" sx={{ margin: '0 1rem', textDecoration: 'none', color: 'inherit' }}>
            Torneio
          </Typography>
          <Typography variant="body1" component={Link} to="/rank" sx={{ margin: '0 1rem', textDecoration: 'none', color: 'inherit' }}>
            Rank
          </Typography>
          <Typography variant="body1" component={Link} to="/profile" sx={{ margin: '0 1rem', textDecoration: 'none', color: 'inherit' }}>
            Profile
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Top;