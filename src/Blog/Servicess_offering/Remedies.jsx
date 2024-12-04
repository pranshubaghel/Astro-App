import React from 'react';
import { AppBar, Typography, Box,Container } from '@mui/material';


function WealthAndFinancePage() {
    return (
        <div>
        <AppBar position="static" sx={{ backgroundColor: '#8B0000' }}>
            </AppBar>
            <Box
                sx={{
                    backgroundImage: 'url(https://www.astroved.com/priest-services/wp-content/uploads/sites/4/2017/12/WEALTH-FINANCE.jpg)', // Replace with actual image path
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '300px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                }}
            >

            </Box>

            
            <Container sx={{ padding: '40px 0' }}>
                <Typography variant="h5" gutterBottom>
                    Wealth & Finance
                </Typography>
                <Typography variant="body1">
                    Your wealth & financial condition play a crucial role in determining your social status.
                    Everyone would love to have a successful business with good returns and a prospective career
                    that pays well. However, you may not be able to get them due to your bad time or planetary
                    positions.

                    astro wealth attraction Homas (Fire Labs) can help enhance your monetary status by stabilizing your business or career. Invoking the blessings of the corresponding archetypes through sacred fire rituals can bring good fortune, abundance & material and spiritual prosperity. Connect with the positive energies emanating from the Homa before commencing any new business venture or while in search your perfect job. Our expert Vedic priests perform the Homa (Fire Lab) by chanting the appropriate sacred mantras to boost your wealth and financial condition.
                    Land in your right job or boost your business returns with  Gloumstarastro Wealth and Finance Fire labs:
                    
                </Typography>
            </Container>
        </div>
    );
}

export default WealthAndFinancePage;