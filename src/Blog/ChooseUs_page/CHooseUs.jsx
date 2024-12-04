import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import PeopleIcon from '@mui/icons-material/People';
import FireIcon from '@mui/icons-material/LocalFireDepartment'; // example for Poojas performed
import HeadsetIcon from '@mui/icons-material/HeadsetMic';
import WavesIcon from '@mui/icons-material/Waves'; // For lives touched, similar to a "wave" effect

const data = [
  {
    icon: <StarIcon style={{ fontSize: 40, color: '#9f2800' }} />,
    title: '#1',
    description: 'Vedic Remedies & Astrological Insights Provider',
  },
  {
    icon: <PeopleIcon style={{ fontSize: 40, color: '#9f2800' }} />,
    title: '25+',
    description: 'Years of Expertise in Vedic Astrology',
  },
  {
    icon: <FireIcon style={{ fontSize: 40, color: '#9f2800' }} />,
    title: '100k+',
    description: 'Homas, Poojas & Remedies Performed',
  },
  {
    icon: <HeadsetIcon style={{ fontSize: 40, color: '#9f2800' }} />,
    title: '70k+',
    description: 'Expert Consultations',
  },
  {
    icon: <WavesIcon style={{ fontSize: 40, color: '#9f2800' }} />,
    title: '60k+',
    description: 'Lives Touched',
  },
];

const ChooseUs = () => {
  return (
    <Box sx={{ backgroundColor: '#F2EFDB', padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4" sx={{ marginBottom: '30px', color: '#9f2800' ,fontWeight:"600"}}>
        Why Choose Astro?
      </Typography>
      <Grid container spacing={4}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={2.4} key={index}>
            <Box display="flex" flexDirection="column" alignItems="center">
              {item.icon}
              <Typography variant="h6" sx={{ margin: '10px 0', color: '#9f2800' }}>
                {item.title}
              </Typography>
              <Typography variant="body1" sx={{ color: '#9f2800' }}>
                {item.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ChooseUs;