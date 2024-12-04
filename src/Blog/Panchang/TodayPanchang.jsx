import React, { useState, useEffect } from 'react';
import { Grid, Typography, Paper, Box, TextField, Button } from '@mui/material';
import axios from 'axios';

const TodayPanchang = () => {
  const [panchangData, setPanchangData] = useState(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [city, setCity] = useState('Delhi');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Initialize date and time
    const now = new Date();
    const formattedDate = `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`;
    const formattedTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    setDate(formattedDate);
    setTime(formattedTime);
    
    // Fetch initial panchang data
    fetchPanchang(formattedDate, formattedTime, city);
  }, []);

  const fetchPanchang = async (date, time, city) => {
    setLoading(true);
    try {
      const response = await axios.get(
        'localhost:5000/panchang/panchang/panchang/panchang',
        {
          params: {
            date,
            time,
            cityName: city
          }
        }
      );
      console.log('API Response:', response.data); // Debugging line
      if (response.data.success) {
        setPanchangData(response.data.data.response);
      } else {
        console.error('API Error:', response.data);
      }
    } catch (error) {
      console.error('Error fetching panchang data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDateChange = (event) => {
    setDate(event.target.value.trim());
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value.trim());
  };

  const handleCityChange = (event) => {
    setCity(event.target.value.trim());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchPanchang(date, time, city);
  };

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (!panchangData) {
    return (
      <Box padding="20px" marginTop="20px">
        <Typography>Data not available. Please submit the form.</Typography>
      </Box>
    );
  }

  return (
    <Box padding="20px" marginTop="20px">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Panchang Details
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" alignItems="center" marginBottom="20px">
            <TextField
              label="Date (dd/mm/yyyy)"
              type="text"
              value={date}
              onChange={handleDateChange}
              margin="normal"
              required
            />
            <TextField
              label="Time (hh:mm)"
              type="text"
              value={time}
              onChange={handleTimeChange}
              margin="normal"
              required
            />
            <TextField
              label="City"
              type="text"
              value={city}
              onChange={handleCityChange}
              margin="normal"
              required
            />
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
              Fetch Panchang
            </Button>
          </Box>
        </form>
      </Paper>

      <Box marginTop="20px">
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h6" align="center" gutterBottom>
            Panchang Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Day</Typography>
              <Typography variant="body2">{panchangData.day?.name || 'N/A'}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Tithi</Typography>
              <Typography variant="body2">{panchangData.tithi?.name || 'N/A'}</Typography>
              <Typography variant="body2">Type: {panchangData.tithi?.type || 'N/A'}</Typography>
              <Typography variant="body2">Start: {panchangData.tithi?.start || 'N/A'}</Typography>
              <Typography variant="body2">End: {panchangData.tithi?.end || 'N/A'}</Typography>
              <Typography variant="body2">Meaning: {panchangData.tithi?.meaning || 'N/A'}</Typography>
              <Typography variant="body2">Special: {panchangData.tithi?.special || 'N/A'}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Nakshatra</Typography>
              <Typography variant="body2">{panchangData.nakshatra?.name || 'N/A'}</Typography>
              <Typography variant="body2">Lord: {panchangData.nakshatra?.lord || 'N/A'}</Typography>
              <Typography variant="body2">Start: {panchangData.nakshatra?.start || 'N/A'}</Typography>
              <Typography variant="body2">End: {panchangData.nakshatra?.end || 'N/A'}</Typography>
              <Typography variant="body2">Meaning: {panchangData.nakshatra?.meaning || 'N/A'}</Typography>
              <Typography variant="body2">Special: {panchangData.nakshatra?.special || 'N/A'}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Karana</Typography>
              <Typography variant="body2">{panchangData.karana?.name || 'N/A'}</Typography>
              <Typography variant="body2">Type: {panchangData.karana?.type || 'N/A'}</Typography>
              <Typography variant="body2">Start: {panchangData.karana?.start || 'N/A'}</Typography>
              <Typography variant="body2">End: {panchangData.karana?.end || 'N/A'}</Typography>
              <Typography variant="body2">Special: {panchangData.karana?.special || 'N/A'}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Yoga</Typography>
              <Typography variant="body2">{panchangData.yoga?.name || 'N/A'}</Typography>
              <Typography variant="body2">Meaning: {panchangData.yoga?.meaning || 'N/A'}</Typography>
              <Typography variant="body2">Special: {panchangData.yoga?.special || 'N/A'}</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
};

export default TodayPanchang;
