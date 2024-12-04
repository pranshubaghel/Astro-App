import React, { useState } from 'react';
import { Box, Typography, Button, TextField, FormControl, InputLabel, Select, MenuItem, CardContent, CardMedia, Grid, Card } from '@mui/material';


function BirthdaySpecial() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '',
    mobileNo: '',
    city: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.mobileNo) newErrors.mobileNo = 'Mobile no is required';
    if (!formData.city) newErrors.city = 'City is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form Data:', formData);
    }
  };

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

  const gloumstar = { color: 'hotpink', fontSize: '1rem', marginRight: '0.5rem' };

  const starData = [
    {
      title: 'Nakshatra (Birth Star) Tree Pooja at Thiruvadhigai (Panruti) Powerspot',
      description: 'According to Vedic astrology, specific trees are mentioned for each birth star and propitiating the appropriate Nakshatra tree for your Birth Star can help you gain positive blessings & progress in life.',
      benefits: [
        'Brings job opportunities',
        'Enhances family prosperity',
        'Protects against enemies & curses',
        'Helps bestow a happy union with your partner'
      ],
      imageUrl: 'https://www.astroved.com/us/wp-content/uploads/2023/06/Nakshatra-Tree-Pooja-at-Thiruvadhigai.jpg'
    },
    {
      title: 'Obstacle Removing Coconut Smashing',
      description: 'Coconut smashing to Ganesha is a powerful ritual that can smash through obstacles in your life.',
      benefits: [
        'Removes impediments to progress',
        'Enhances relationships',
        'Clears path to success'
      ],
      imageUrl: 'https://www.astroved.com/us/wp-content/uploads/2023/06/Obstacle-Removing-Coconut-Smashing.jpg'
    },
    {
      title: 'Food Feeding',
      description: 'Anna Dhanam or food donation is considered the highest form of donation and can get you closer to the Divine.',
      benefits: [
        'Attracts positive blessings',
        'Grants success in endeavors',
        'Confers peace & harmony',
      ],
      imageUrl: 'https://www.astroved.com/us/wp-content/uploads/2023/06/Food-Feeding.jpg'
    },
    {
      title: 'Special Birthday Ritual Product- Navagraha Incense Sticks',
      description: 'These unique incense sticks are made of special herbs specific for each planet in Navagraha (9 planets). Burning these Navagraha incense sticks can help you access the Divine energy of the 9 planets and fill your aura with their positive energies.',
      imageUrl: 'https://www.astroved.com/us/wp-content/uploads/2023/06/Special-Birthday-Ritual-Product.jpg'
      // No benefits field here
    },
    {
      title: 'Personalized Varsha Phal Report',
      description: 'The personalized 2022 Varsha Phal report is prepared by our Vedic astrology experts and offers insights on what you can expect in the upcoming year, possible challenges, and remedies you can perform to improve key areas of your life- wealth, relationships, career, and overall wellbeing.',
      imageUrl: 'https://www.astroved.com/us/wp-content/uploads/2023/06/Personalized-Varsha-Phal-Report.jpg'
      // No benefits field here
    }
  ];

  const star = { color: 'hotpink', fontSize: '1rem', marginRight: '0.5rem' };

  const topThree = starData.slice(0, 3);
  const remainingCards = starData.slice(3);
  const poojas = [
    {
      title: 'Archana (Pooja) to Dhanvantri',
      benefits: [
        'Protects against illnesses & chronic pain',
        'Safeguards against untimely demise',
        'Relieves physical suffering',
        'Improves longevity & vitality'
      ],
      imageUrl: 'https://www.astroved.com/us/wp-content/uploads/2023/06/Archana-to-Dhanvantri.jpg'
    },
    {
      title: 'Abishekam (Hydration Ceremony) to Dhanvantri',
      benefits: [
        'Removes impurities & negativities',
        'Eliminates blocks to progress in life',
        'Gives good health, prosperity & happiness',
        'Eradicates physical & mental stress'
      ],
      imageUrl: 'https://www.astroved.com/us/wp-content/uploads/2023/06/Abishekam-to-Dhanvantri.jpg'
    },
  ];

  const starStyle = { color: 'hotpink', fontSize: '1rem', marginRight: '0.5rem' };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          // minHeight: '70vh',
          padding: '2rem',
          backgroundImage: 'url(https://pittsburghquarterly.com/wp-content/uploads/articles/2024-05-22-2-e1716392714136-1024x586.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Box
          sx={{
            padding: '2rem',
            borderRadius: '1rem',
            maxWidth: '600px',
            textAlign: {
              xs: 'left',  
              sm: 'center', 
            },
            display: 'flex',
            flexDirection: 'column',
            alignItems: {
              xs: 'flex-start', 
              sm: 'center'      
            },
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'orange' }}>
             ASTRO SPECIAL BIRTHDAY RITUALS PACKAGES
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ color: 'yellow' }}>
            12 Power Rituals to Remove Obstacles, Rejuvenate, & Realize Success This Birth Year
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'yellow' }}>
            Celebrate Your Special Day With the Blessings & Protection of Powerful Divine Archetypes
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            VIEW SPECIAL BIRTHDAY RITUALS PACKAGES
          </Button>
        </Box>

      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '2rem',
          textAlign: 'center'
        }}
      >
        <Typography variant="h5" sx={{ color: 'red', fontWeight: 'bold', marginBottom: 2 }}>
          New to ASTRO?
        </Typography>
        <Typography variant="subtitle1" sx={{ color: 'black', marginBottom: 2 }}>
          Join Now to Receive Great Offers & Make Your Birthday Special!
        </Typography>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column', // Stack vertically for extra-small screens
              sm: 'row'    // Align horizontally for small screens and up
            },
            alignItems: 'center', // Center items horizontally
            justifyContent: 'center',
            gap: {
              xs: 1,  // Smaller gap for extra-small screens
              sm: 2   // Larger gap for small screens and up
            },
            marginBottom: 2,
            width: '100%',
            maxWidth: 800
          }}
          noValidate
          autoComplete="off"
        >
          <Box sx={{ flex: 1, maxWidth: 400 }}>
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              error={Boolean(errors.name)}
              helperText={errors.name}
              sx={{ marginBottom: 2 }}
            />
          </Box>
          <Box sx={{ flex: 1, maxWidth: 400 }}>
            <TextField
              label="Mail Id"
              name="email"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
              sx={{ marginBottom: 2 }}
            />
          </Box>
          <Box sx={{ flex: 1, maxWidth: 400, marginBottom: 2 }}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Code</InputLabel>
              <Select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                label="Code"
              >
                <MenuItem value="+1">+1 (USA)</MenuItem>
                <MenuItem value="+91">+91 (India)</MenuItem>
                <MenuItem value="+44">+44 (UK)</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ flex: 1, maxWidth: 400 }}>
            <TextField
              label="Mobile Number"
              name="mobileNo"
              variant="outlined"
              fullWidth
              value={formData.mobileNo}
              onChange={handleChange}
              error={Boolean(errors.mobileNo)}
              helperText={errors.mobileNo}
              sx={{ marginBottom: 2 }}
            />
          </Box>
          <Box sx={{ flex: 1, maxWidth: 400 }}>
            <TextField
              label="City"
              name="city"
              variant="outlined"
              fullWidth
              value={formData.city}
              onChange={handleChange}
              error={Boolean(errors.city)}
              helperText={errors.city}
              sx={{ marginBottom: 2 }}
            />
          </Box>
        </Box>
        <Button
          variant="contained"
          color="primary"
          sx={{ backgroundColor: 'hotpink' }}
          onClick={handleSubmit}
        >
          SUBMIT
        </Button>
      </Box>
      <Box
        sx={{
          textAlign: 'center',
          marginTop: '0rem'
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'goldenrod', marginBottom: 1 }}>
          Birthday Special Offer
        </Typography>
        <Typography variant="h6" sx={{ color: 'black' }}>
          Up to <span style={{ color: 'red', fontWeight: 'bold' }}>40% OFF</span> Birthday Ceremonies Package
        </Typography>
      </Box>
      <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', marginBottom: 2, textAlign: 'center', marginTop: '1rem' }}>
        OVERVIEW
      </Typography>
      <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', marginBottom: 2, textAlign: 'center' }}>
        Invoke Potent Divine Blessings on Your Birthday
      </Typography>
      <Typography
        variant="body1"
        component="div"
        sx={{
          marginBottom: 2,
          marginLeft: {
            xs: '1rem', // Adjust margin for small screens
            sm: '3rem' 
          },
          marginRight: {
            xs: '1rem',
            sm: '1rem'  
          },
        }}
      >
        You are special to us. We would like to honor and empower you on your Birthday, your personal power day meant exclusively for you. We have created an all-in-one package of powerful rituals as prescribed in ancient sacred texts to help you access the comprehensive blessings and life-transforming energy of Divine Archetypes to smash obstacles to success, empower your birth star energy within you, remove negative karma and boost your health, vitality and overall prosperity.
      </Typography>
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
                        <span style={star}>&#9733;</span>
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
      <Box sx={{ padding: '2rem', textAlign: 'center', bgcolor: 'hotpink' }}>
        {/* Top Three Cards */}
        <Grid container spacing={3} justifyContent="center">
          {topThree.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} >
              <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}> {/* Increased height */}
                <CardMedia
                  component="img"
                  height="200"
                  image={item.imageUrl}
                  alt={item.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  {item.benefits && item.benefits.length > 0 && (
                    <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: '0.5rem 0' }}>
                      {item.benefits.map((benefit, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', margin: '0.5rem 0' }}>
                          <span style={gloumstar}>&#9733;</span>
                          <Typography variant="body2" color="text.secondary">
                            {benefit}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Spacer */}
        <Box sx={{ margin: '2rem 0' }}>
          {/* Optional content or just a visual space */}
        </Box>

        {/* Remaining Cards */}
        <Grid container spacing={3} justifyContent="center">
          {remainingCards.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ display: 'flex', flexDirection: 'column', height: '400px' }}> {/* Increased height */}
                <CardMedia
                  component="img"
                  height="200"
                  image={item.imageUrl}
                  alt={item.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  {item.benefits && item.benefits.length > 0 && (
                    <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: '0.5rem 0' }}>
                      {item.benefits.map((benefit, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', margin: '0.5rem 0' }}>
                          <span style={starStyle}>&#9733;</span>
                          <Typography variant="body2" color="text.secondary">
                            {benefit}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ padding: '2rem', textAlign: 'center', bgcolor: '#FFD180', height: '85vh', }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', marginBottom: 2, color: 'black' }}>
          Special Poojas to Dhanvantri
        </Typography>
        <Typography variant="body1" component="div" sx={{ marginBottom: 4, color: 'black' }}>
          Dhanvantri is an incarnation of the protection archetype, Vishnu, and is regarded as the Lord of Ayurveda. Worshipping him can safeguard your wellbeing and bestow physical and mental health.
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
      {/* <Footer/> */}
    </>
  );
}

export default BirthdaySpecial;