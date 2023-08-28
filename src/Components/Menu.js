import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



function NavigationBar() {
  return (
    <AppBar position="fixed"  style={{ backgroundColor: 'rgba(0, 0, 0)', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', height: '60px', alignItems: 'center' } }>
        <Typography variant="h6">
        🫶🫶🫶🫶🫶🫶
        </Typography>
        <Button color="inherit">Inicio</Button>
        <Button color="inherit">Acerca de</Button>
        <Button color="inherit">Servicios</Button>
        <Button color="inherit">Contacto</Button>
    </AppBar>
  );
}

export default NavigationBar;






