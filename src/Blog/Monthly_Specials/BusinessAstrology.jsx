import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography, MenuItem, Select, FormControl, InputLabel, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const BusinessAstrology = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNo: '',
    city: '',
    countryCode: '+1',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    mobileNo: '',
    city: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = { name: '', email: '', mobileNo: '', city: '' };
    let isValid = true;

    if (!formData.name) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is not valid';
      isValid = false;
    }
    if (!formData.mobileNo) {
      tempErrors.mobileNo = 'Mobile number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.mobileNo)) {
      tempErrors.mobileNo = 'Mobile number should be 10 digits';
      isValid = false;
    }
    if (!formData.city) {
      tempErrors.city = 'City is required';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log('Form data submitted:', formData);
    }
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Container
        maxWidth="false"
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzGH6jBxrrmh8S8-f2xaEf15GIJsYT8xeHJg&s)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: 0,
        }}
      >
        <Grid container spacing={2} sx={{ width: '100%', maxWidth: 1200, flexDirection: { xs: 'column-reverse', md: 'row' }, marginTop: 2, }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ color: 'white', textAlign: 'left', padding: 4 }}>
              <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', color: '#F05023' }}>
                 Astro Boost Your
                Business Astrology Program
              </Typography>
              <Typography variant="h5" component="h2" sx={{ marginTop: 2, color: 'black' }}>
                Potent Vedic Remedies to Resolve Business Hurdles & Boost Success in Your Ventures
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ backgroundColor: 'white', borderRadius: 2, boxShadow: 3, padding: 3, margin: 'auto', maxWidth: { xs: '100%', md: 400 } }}>
              <Typography variant="h5" component="h3" sx={{ marginBottom: 2, textAlign: 'center' }}>
                Enter Your Details
              </Typography>
              <TextField
                label="Your Name"
                name="name"
                fullWidth
                variant="outlined"
                margin="normal"
                value={formData.name}
                onChange={handleChange}
                error={Boolean(errors.name)}
                helperText={errors.name}
              />
              <TextField
                label="Email"
                name="email"
                fullWidth
                variant="outlined"
                margin="normal"
                value={formData.email}
                onChange={handleChange}
                error={Boolean(errors.email)}
                helperText={errors.email}
              />
              <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                <FormControl fullWidth variant="outlined" margin="normal" sx={{ flex: 1, marginRight: 1 }}>
                  <InputLabel>Country Code</InputLabel>
                  <Select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    label="Country Code"
                  >
                    <MenuItem value="+1">+1 (USA)</MenuItem>
                    <MenuItem value="+91">+91 (India)</MenuItem>
                    <MenuItem value="+44">+44 (UK)</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  label="Mobile Number"
                  name="mobileNo"
                  placeholder="Mobile Number"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  value={formData.mobileNo}
                  onChange={handleChange}
                  error={Boolean(errors.mobileNo)}
                  helperText={errors.mobileNo}
                  sx={{ flex: 2, marginLeft: 1 }}
                />
              </Box>
              <TextField
                label="City"
                name="city"
                fullWidth
                variant="outlined"
                margin="normal"
                value={formData.city}
                onChange={handleChange}
                error={Boolean(errors.city)}
                helperText={errors.city}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 2, backgroundColor: '#F05023' }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          width: {lg:'95%',md:"90%",sm:"90%",xs:"90%"},
          backgroundColor: 'white',
          color: 'black',
          padding: "10px",
          margin: '0 auto',
        }}
      >
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', marginBottom: 2, textAlign: 'center' }}>
          OVERVIEW
        </Typography>
        <Typography variant="body1" component="div" sx={{ marginBottom: 2 }}>
          Our Business Astrology Program is specifically tailored to address the challenges and problems that occur in the realm of professional opportunities and businesses. Whether facing obstacles in your career path or encountering setbacks in your business ventures, these Vedic remedies can help you overcome hurdles and pave the way for growth.
        </Typography>
        <Typography variant="body1" component="div" sx={{ marginBottom: 2 }}>
          These remedial rituals, selected by our Astrology experts, are targeted to help rectify the root cause of losses, bad luck, and bad time karma, enhance business prosperity, and create a path to success and abundance. They include offering prayers and invoking benefic blessings for Prosperity and Victory from Archetypes, Ancestors, and Navagraha (9 Planets) by performing sacred rituals at specific times.
        </Typography>
        <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', marginBottom: 2, textAlign: 'center' }}>
          OVERVIEW OF ASTRO BOOST YOUR BUSINESS ASTROLOGY PROGRAM SERVICES
        </Typography>
        <Typography variant="body1" component="div" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
          Personalized Astrology Consultation to Analyze Your Business Aspects
        </Typography>
        <Typography variant="body1" component="div" sx={{ marginBottom: 2 }}>
          Before exploring the remedies, it is vital to analyze your business’s birth chart. Like individuals, businesses have unique astrological imprints that influence their ongoing success or stagnation. Consulting with our experienced astrologer can give you a dynamic overview of the influence of planetary positions, identify promising and challenging aspects related to your business and partnerships, and chart out solutions to combat obstacles to progress.
        </Typography>
        <Typography variant="body1" component="div" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
          Fire Lab to Strengthen Your Planets & Improve Business Partnerships
        </Typography>
        <Typography variant="body1" component="div" sx={{ marginBottom: 2 }}>
          According to the astrology text Brihat Parisara Hora Shastra, the position of the planets play a significant role in determining the quality of your life in terms of your finances, health, career, and relationships.
        </Typography>
        <Typography variant="body1" component="div" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
          Sacred Offerings to Solve Business & Finance-Related Issues
        </Typography>
        <Typography variant="body1" component="div" sx={{ marginBottom: 2 }}>
          Certain powerful sacred offerings can dissolve the impacts of financial problems and negativity, clearing the way for growth. These include specific remedies that are suggested based on your business birth chart analysis.
        </Typography>
      </Box>
    </>
  );
};

export default BusinessAstrology;