import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent, Button, TextField } from '@mui/material';

function NadiAstrologyPage() {
  return (
    <Box sx={{ padding: '40px' }}>
      
     
      <Typography variant="h4" gutterBottom>
        Nadi Astrology
      </Typography>
      <Typography variant="body1" paragraph>
        Nadi Astrology is a rare, divine technology that uses your thumb impression to identify your Nadi leaf that holds the secrets to your future.Gloum astro gives you an exclusive opportunity to rewrite your destiny through three types of Nadi Astrology collections—Shiva Sukshama Nadi, Thuliya Nadi, and Agastya Nadi. Understand the Divine link between your past karma and current life with this super science to course-correct your destiny and provide a solution to life problems.
      </Typography>
      <Button variant="contained" color="warning" sx={{ marginBottom: '40px' }}>
        Explore Nadi Collection
      </Button>

    
      <Grid container spacing={2}>

        <Grid item xs={12} sm={4}>
          <Card>
            <CardMedia
              component="img"
              height="400"
              image="https://www.astroved.com/nadi/wp-content/uploads/2022/08/av-siva-sukshama-nadi-astroloy.jpg" 
              alt="Shiva Sukshama Nadi Astrology"
            />
            <CardContent>
              <Typography variant="h6">
                Shiva Sukshama Nadi Astrology
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Resolve Life Problems and Avoid Pitfalls
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Second Card */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardMedia
              component="img"
              height="400"
              image="https://www.astroved.com/nadi/wp-content/uploads/2022/08/av-thuliya-nadi-astrology.jpg" 
              alt="Thuliya Nadi Astrology"
            />
            <CardContent>
              <Typography variant="h6">
                Thuliya Nadi Astrology
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Course Correct Your Life Now and in Future
              </Typography>
            </CardContent>
          </Card>
        </Grid>


        <Grid item xs={12} sm={4}>
          <Card>
            <CardMedia
              component="img"
              height="400"
              image="https://www.astroved.com/nadi/wp-content/uploads/2022/08/av-agastya-nadi-astrology.jpg"
              alt="Agastya Nadi Astrology"
            />
            <CardContent>
              <Typography variant="h6">
                Agastya Nadi Astrology
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Divine and Accurate Guidance to Redefine Your Life
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

     
      <Box sx={{ marginTop: '40px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <Typography variant="h6" gutterBottom>
          Interested in Finding Your Nadi Leaf?
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <TextField fullWidth label="Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField fullWidth label="Mobile Number" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField fullWidth label="Email ID" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField fullWidth label="Location" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="warning" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>

    </Box>
  );
}

export default NadiAstrologyPage;