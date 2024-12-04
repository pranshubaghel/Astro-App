import React from 'react';
import { Box, Grid, Card, CardContent, Button, Typography, Tabs, Tab, Avatar } from '@mui/material';
import { NavLink } from 'react-router-dom';

// Example array of Poojas
const poojas = [
  {
    id: 1,
    image: 'https://www.astroved.com/Images/Instantpoojaimg/9-Planet-archana.jpg', // Replace with actual image
    title: '9 Planet Pooja',
  },
  {
    id: 2,
    image: 'https://www.astroved.com/Images/Instantpoojaimg/Ashtalakshmi-archana.jpg', // Replace with actual image
    title: 'Ashtalakshmi Pooja',
  },
  {
    id: 3,
    image: 'https://www.astroved.com/Images/Instantpoojaimg/Birthstar-archana.jpg', // Replace with actual image
    title: 'Birth Star Pooja',
  },
  {
    id: 4,
    image: 'https://www.astroved.com/Images/Instantpoojaimg/Dhanvanthari-archana.jpg', // Replace with actual image
    title: 'Dhanvanthari Pooja',
  },
  {
    id: 5,
    image: 'https://www.astroved.com/Images/Instantpoojaimg/Durga-archana.jpg', // Replace with actual image
    title: 'Durga Pooja',
  },
  {
    id: 6,
    image: 'https://www.astroved.com/Images/Instantpoojaimg/Ganesha-Anjenaya-archana.jpg', // Replace with actual image
    title: 'Ganesh Anjenaya  Pooja',
  },
  {
    id: 7,
    image: 'https://www.astroved.com/Images/Instantpoojaimg/Ganesha-archana.jpg', // Replace with actual image
    title: 'Ganesha Pooja',
  },
  {
    id: 8,
    image: 'https://www.astroved.com/Images/Instantpoojaimg/Hanuman-archana.jpg', // Replace with actual image
    title: 'Hanuman Pooja',
  },
  // Add more poojas as needed
];

// Example categories
const categories = [
  { label: 'All', icon: 'path-to-all-icon' },
  { label: 'Health', icon: 'path-to-health-icon' },
  { label: 'Success', icon: 'path-to-success-icon' },
  { label: 'Education', icon: 'path-to-education-icon' },
  { label: 'Relationship', icon: 'path-to-relationship-icon' },
  { label: 'Wealth', icon: 'path-to-wealth-icon' },
];

function InstantPoojas() {
  const [selectedCategory, setSelectedCategory] = React.useState(0);

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  return (
    <Box sx={{ padding: '20px' }}>
      {/* Categories Section */}
      <Tabs
        value={selectedCategory}
        onChange={handleCategoryChange}
        aria-label="Categories Tabs"
        centered
        sx={{ marginBottom: '20px' }}
      >
        {categories.map((category, index) => (
          <Tab
            key={index}
            label={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Avatar alt={category.label} src={category.icon} sx={{ width: 24, height: 24 }} />
                {category.label}
              </Box>
            }
          />
        ))}
      </Tabs>

      {/* Grid of Poojas */}
      <Grid container spacing={3}>
        {poojas.map((pooja) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={pooja.id}>
            <Card sx={{ textAlign: 'center' }}>
              <img
                src={pooja.image}
                alt={pooja.title}
                style={{ width: '100%', borderRadius: '8px' }}
              />
              <CardContent>
                <Typography variant="h6">{pooja.title}</Typography>
                <NavLink to='/contact_us' style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="primary" sx={{ marginTop: '20px' }}>JOIN NOW</Button>
                    </NavLink>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default InstantPoojas;