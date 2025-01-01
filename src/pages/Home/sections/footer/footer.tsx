import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '15px',
                backgroundColor: '#f8f8f8',
                borderTop: '1px solid #e7e7e7',
                marginTop: 'auto',
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <IconButton href="https://pt-br.facebook.com/juno.cristian/" target="_blank" aria-label="Facebook">
                    <Facebook />
                </IconButton>
                <IconButton href="https://www.instagram.com/junocristian/" target="_blank" aria-label="Instagram">
                    <Instagram />
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/juno-cristian/" target="_blank" aria-label="LinkedIn">
                    <LinkedIn />
                </IconButton>
            </Box>
            <Typography variant="body2" color="textPrimary">
                CooT Agradece pela visita !
            </Typography>
        </Box>
    );
};

export default Footer;