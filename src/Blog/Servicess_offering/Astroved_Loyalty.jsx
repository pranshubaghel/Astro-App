import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid,Button} from '@mui/material';

const poojas = [
    {
      title: 'Exclusive Cashback Offers',
      benefits: [
        'Protects against illnesses & chronic pain',
        'Safeguards against untimely demise',
        'Relieves physical suffering',
        'Improves longevity & vitality'
      ],
      imageUrl: 'https://www.astroved.com/us/wp-content/uploads/2023/06/Exclusive-Cashback-Offers-300x180.jpg'
    },
    {
      title: 'Birth Star Pooja',
      benefits: [
        'Removes impurities & negativities',
        'Eliminates blocks to progress in life',
        'Gives good health, prosperity & happiness',
        'Eradicates physical & mental stress'
      ],
      imageUrl: 'https://www.astroved.com/us/wp-content/uploads/2023/06/Birth-Star-Pooja-New-300x180.jpg'
    },
  ];
  
  const starStyle = { color: 'hotpink', fontSize: '1rem', marginRight: '0.5rem' };

  
function LoyaltyProgram() {
  return (
    <Box>
      {/* Blue Background Section */}
      <Box sx={{ backgroundColor: '#2e98c5', padding: '40px 0', textAlign: 'center' }}>
        <Typography variant="h4" sx={{ color: '#fff', fontWeight: 'bold' }}>
          ENHANCED  ASTRO PROGRAM
        </Typography>
        <Typography variant="h6" sx={{ color: '#fff', marginTop: '10px' }}>
          New! Cashback Offers, Membership Discounts, Birth Star Poojas
        </Typography>
        <Typography sx={{ color: '#fff', marginTop: '10px' }}>
          You Care for ASTRO <br /> We Care for You!
        </Typography>

        {/* Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#1b4060',
            marginTop: '20px',
            padding: '10px 30px',
            color: '#fff',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#14304a',
            },
          }}
        >
          VIEW  ASTRO LOYALTY PROGRAM
        </Button>

        {/* Image Section */}
        <Box sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
          <CardMedia
            component="img"
            alt="Gloumstarastro cards"
            image="https://www.astroved.com/us/wp-content/uploads/2023/06/av-membership-lp.jpg" // Replace with actual image path
            sx={{ width: '300px', height: 'auto' }}
          />
        </Box>
      </Box>

      {/* Overview Section */}
      <Box sx={{ padding: '40px 20px', textAlign: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
          OVERVIEW
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: '20px' ,fontWeight: 'bold'}}>
        Enhanced Astro Loyalty Program: More Benefits Than Cost
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '800px', margin: '0 auto' }}>
          We have enhanced our GLOUM ASTRO Loyalty Program to provide more benefits for you: cashback offers, and complimentary
          services, as well as sharing the blessings of  Astro Vedic technology services with your loved ones, discount coupon
          value equivalent to membership fees amount, and complimentary astrology readings.
        </Typography>
      </Box>
      <Box sx={{ padding: '2rem', textAlign: 'center', bgcolor: '#005466', minHeight: '80vh' }}>
      <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', marginBottom: 2, color: 'yellow' }}>
      New and Enhanced Loyalty Program Features
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {poojas.map((pooja, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardMedia
                component="img"
                height="200"
                image={pooja.imageUrl}
                alt={pooja.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography gutterBottom variant="h5" component="div">
                  {pooja.title}
                </Typography>
                <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: '0.5rem 0', flex: 1 }}>
                  {pooja.benefits.map((benefit, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', margin: '0.5rem 0' }}>
                      <span style={starStyle}>&#9733;</span>
                      <Typography variant="body2" color="text.secondary">
                        {benefit}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

   
    </Box>

    
  );
}

export default LoyaltyProgram;