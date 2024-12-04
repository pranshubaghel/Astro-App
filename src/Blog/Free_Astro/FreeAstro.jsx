import React from 'react';
import { Card, CardMedia, Grid, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Image1 from './dasa bhukti predictor.avif'
import Image2 from './modern-star-background.jpg'
import Image3 from './clock-face-glowing-midnight.avif'
import Image4 from './red-heart-paper-hand.jpg'
import Image5 from './time detector.jpg'
import Image6 from "./top-view-planner-calendar.jpg";

function FreeAstro() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/horoscope');
  };

  return (
    <>
      <Box sx={{ width:"100%",paddingBottom:"1rem"}}>
        <Box sx={{ width: "93%", margin: "auto",textAlign:"center" }}>
          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: "bold",padding:"1rem"}}>
            Astrology Tools & Reports
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            Utilize our wide variety of tools to gain personalized insights and make informed decisions on various aspects of your life.
          </Typography>

          <Grid container spacing={2} justifyContent="center" >
            <Grid item xs={12} sm={4}>
              <Card
                sx={{
                  position: 'relative',  // Ensure the content is positioned relative to the card
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                  }
                }}
              >
                <CardMedia
                  sx={{ height: 130 }}
                  image={Image1}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 1,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',  // Text color for visibility
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Optional background overlay for better contrast
                    padding: 2,
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="h6" component="div">
                    Dasa Bhukti Predictor
                  </Typography>
                </Box>
              </Card>
            </Grid>


            <Grid item xs={12} sm={4}>
              <Card
                sx={{
                  position: 'relative',  // Ensure the content is positioned relative to the card
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                  }
                }}
              >
                <CardMedia
                  sx={{ height: 130 }}
                  image={Image2}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 1,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',  // Text color for visibility
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Optional background overlay for better contrast
                    padding: 2,
                    textAlign: 'center',

                  }}
                >
                  <Typography variant="h6" component="div">
                    Birth Star Compatibility
                  </Typography>
                </Box>
              </Card>
            </Grid>


            <Grid item xs={12} sm={4}>
              <Card
                sx={{
                  // maxWidth: 345,
                  position: 'relative',  // Ensure the content is positioned relative to the card
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                  }
                }}
              >
                <CardMedia
                  sx={{ height: 130 }}
                  image={Image3}
                  title="Birth Chart Analyzer"
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 1,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',  // Text color for visibility
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Optional background overlay for better contrast
                    padding: 2,
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="h6" component="div">
                    Birth Chart Analyzer
                  </Typography>
                </Box>
              </Card>
            </Grid>


            <Grid item xs={12} sm={4}>
              <Card
                sx={{
                  position: 'relative',  // Ensure the content is positioned relative to the card
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                  }
                }}
              >
                <CardMedia
                  sx={{ height: 130 }}
                  image={Image4}
                  title="Birth Chart Analyzer"
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 1,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    padding: 2,
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="h6" component="div">
                    Match Making Love
                  </Typography>
                </Box>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Card
                sx={{
                  position: 'relative',  // Ensure the content is positioned relative to the card
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                  }
                }}
              >
                <CardMedia
                  sx={{ height: 130 }}
                  image={Image5}
                  title="Birth Chart Analyzer"
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 1,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',  // Text color for visibility
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Optional background overlay for better contrast
                    padding: 2,
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="h6" component="div">
                    Today's Auspicious Time Detector
                  </Typography>
                </Box>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Card
                sx={{
                  position: 'relative',  // Ensure the content is positioned relative to the card
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                  }
                }}
              >
                <CardMedia
                  sx={{ height: 130 }}
                  image={Image6}
                  title="Birth Chart Analyzer"
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 1,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',  // Text color for visibility
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Optional background overlay for better contrast
                    padding: 2,
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="h6" component="div">
                    Birth Chart Analyzer
                  </Typography>
                </Box>
              </Card>
            </Grid>

          </Grid>
        </Box>
      </Box>

    </>
  );
}

export default FreeAstro;
