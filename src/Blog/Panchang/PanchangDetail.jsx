import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Grid, Paper } from '@mui/material';

const PanchangDetail = () => {
  const location = useLocation();
  const panchangData = location.state?.panchangData;

  if (!panchangData) {
    return (
      <Box padding="20px" marginTop="20px">
        <Typography>No Panchang data available. Please check again.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: "#FFD180", height: "130vh", width: "100%", paddingTop: "1rem" }}>
      <Box marginTop="20px" sx={{ width: "90%", margin: "auto", alignItems: "center", backgroundColor: "#ffffff", borderRadius: "5px" }}>
        <Paper elevation={3} style={{ padding: '20px', marginTop: "1rem", boxShadow: "6px 4px 6px rgba(0, 0, 0, 0.5)" }}>
          <Typography variant="h6" gutterBottom>
            Panchang for Today
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} sx={{ display: "flex", gap: "1rem" }}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Day:</Typography>
              <Typography variant="body2">{panchangData.day?.name || 'N/A'}</Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: 'bold', color: "#b92204" }}>
                Tithi:
                <span style={{ color: "black", fontWeight: '500' }}>{panchangData.tithi?.name || 'N/A'}</span>
              </Typography>
              <Typography variant="body2">Paksha: {panchangData.tithi?.type || 'N/A'}</Typography>
              <Typography variant="body2">Start: {panchangData.tithi?.start || 'N/A'}</Typography>
              <Typography variant="body2">End: {panchangData.tithi?.end || 'N/A'}</Typography>
              <Typography variant="body2">Meaning: {panchangData.tithi?.meaning || 'N/A'}</Typography>
              <Typography variant="body2">Special: {panchangData.tithi?.special || 'N/A'}</Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Nakshatra:</Typography>
              <Typography variant="body2">{panchangData.nakshatra?.name || 'N/A'}</Typography>
              <Typography variant="body2">Lord: {panchangData.nakshatra?.lord || 'N/A'}</Typography>
              <Typography variant="body2">Start: {panchangData.nakshatra?.start || 'N/A'}</Typography>
              <Typography variant="body2">End: {panchangData.nakshatra?.end || 'N/A'}</Typography>
              <Typography variant="body2">Meaning: {panchangData.nakshatra?.meaning || 'N/A'}</Typography>
              <Typography variant="body2">Special: {panchangData.nakshatra?.special || 'N/A'}</Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Karana:</Typography>
              <Typography variant="body2">{panchangData.karana?.name || 'N/A'}</Typography>
              <Typography variant="body2">Type: {panchangData.karana?.type || 'N/A'}</Typography>
              <Typography variant="body2">Start: {panchangData.karana?.start || 'N/A'}</Typography>
              <Typography variant="body2">End: {panchangData.karana?.end || 'N/A'}</Typography>
              <Typography variant="body2">Special: {panchangData.karana?.special || 'N/A'}</Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Yoga:</Typography>
              <Typography variant="body2">{panchangData.yoga?.name || 'N/A'}</Typography>
              <Typography variant="body2">Meaning: {panchangData.yoga?.meaning || 'N/A'}</Typography>
              <Typography variant="body2">Special: {panchangData.yoga?.special || 'N/A'}</Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Rasi:</Typography>
              <Typography variant="body2">{panchangData.rasi?.name || 'N/A'}</Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Ayanamsa:</Typography>
              <Typography variant="body2">{panchangData.ayanamsa?.name || 'N/A'}</Typography>
              
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
};

export default PanchangDetail;