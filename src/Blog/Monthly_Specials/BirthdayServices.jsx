import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid, Button } from '@mui/material';

const rituals = [
  {
    title: 'Individual Ayush Homa (Fire Lab for Longevity & Good Health)',
    description: 'Ayush Fire Lab is a sacred ritual dedicated to Ayur Devata, the archetype of longevity and good health.',
    benefits: [
      'Restores physical & mental health',
      'Alleviates mental trauma',
      'Boosts vitality and energy'
    ],
    imageUrl: 'https://www.astroved.com/us/wp-content/uploads/2023/06/Individual-Ayush-Homa.jpg'
  },
  {
    title: '2-Priest Rudra Homa (Fire Lab for Wish-Fulfillment, Good Relationships & Protection)',
    description: 'Rudra is the fierce archetype of Shiva who can eliminate dark forces, cleanse your aura of fear and uncertainty, and grant success in your endeavors.',
    benefits: [
      'Mitigates negative planetaryinfluences',
      'Enhances relationships',
      'Provides protection'
    ],
    imageUrl: 'https://www.astroved.com/us/wp-content/uploads/2023/06/3-Priest-Rudra-Homa-1.jpg'
  },
  {
    title: 'Individual Navagraha Homa (9 Planets Blessing Fire Lab)',
    description: 'The 9-planets are the agents of your karma and can influence your life in profound ways.',
    benefits: [
      'Helps reduce planetary affliction',
      'Bestows longevity',
      'Revitalizes health',
      'Grants wealth & happiness'
    ],
    imageUrl: 'https://www.astroved.com/us/wp-content/uploads/2023/06/Individual-Navagraha-Homa.jpg'
  },
  {
    title: 'Archana (Pooja) to Birth Star Lingam at Powerspot',
    description: 'At this unique Powerspot, there are 27 Shiva Lingams dedicated to the 27 Nakshatras (birth stars) of Vedic Astrology. A Special Birth Star Pooja will be done to the Shiva Lingam that corresponds to your birth star.',
    benefits: [
      'Strengthens connection to your birth star',
      'Empowers positive blessings of your birth star',
      'Furthers peace & harmony'
    ],
    imageUrl: 'https://www.astroved.com/us/wp-content/uploads/2023/06/Archana-to-Birth-Star-Lingam.jpg'
  }
];

const starStyle = { color: 'hotpink', fontSize: '1rem', marginRight: '0.5rem' };

const BirthdayServices = () => {
  return (
    <Box sx={{ padding: '2rem', textAlign: 'center', bgcolor: 'hotpink' }}>
      <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', marginBottom: 2, textAlign: 'center', color: 'yellow' }}>
         ASTRO SPECIAL BIRTHDAY SERVICES
      </Typography>
      <Typography variant="body1" component="div" sx={{ marginBottom: 4, color: 'white' }}>
        According to sacred texts, Powerspot beliefs, and traditional practices, performing the below rituals can bestow abundant blessings.
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ height: '100%' }}>
        {rituals.map((ritual, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={ritual.imageUrl}
                alt={ritual.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {ritual.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {ritual.description}
                </Typography>
                <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: '0.5rem 0' }}>
                  {ritual.benefits.map((benefit, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', margin: '0.5rem 0' }}>
                      <span style={starStyle}>&#9733;</span>
                      <Typography variant="body2" color="text.secondary">
                        {benefit}
                      </Typography>
                    </li>
                  ))}
                </ul>
                {ritual.title === 'Archana (Pooja) to Birth Star Lingam at Powerspot' && (
                  <Button 
                    variant="contained" 
                    sx={{ 
                      marginTop: '2rem', 
                      backgroundColor: 'hotpink', 
                      color: 'white', 
                      '&:hover': {
                        backgroundColor: '#e91e63' // Optionally adjust hover color
                      }
                    }}
                    href="#"
                  >
                    Birth Star Finder
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BirthdayServices