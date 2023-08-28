import React from 'react';
import { Typography, Container,  Divider } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material'; // Importa los iconos



function Footer() {

  return (
    <footer className='footer'>
      <Container maxWidth="sm">
        <Typography variant="body1">
          © {new Date().getFullYear()} Mi Aplicación. Todos los derechos reservados.
        </Typography>
        <Divider />
        <div >
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
      </Container>
    </footer>
  );
}

export default Footer;


  
  
  
  