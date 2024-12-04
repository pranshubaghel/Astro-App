import React from 'react';
import { Box, Button, Grid, Typography, Icon } from '@mui/material';
import { NavLink } from 'react-router-dom';


function MonthlyHamaDonation() {
    return (

        <Box sx={{
            backgroundColor: "#16325B",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '40px',
            color: '#fff'
        }}>
            <Grid container spacing={2} alignItems="center">
                {/* Left Section with Text */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h3" sx={{ fontWeight: 'bold' }}>MONTHLY HOMA BY DONATION</Typography>
                    <Typography variant="h5" >Uma Maheshwara Fire Lab For Harmonious Relationships & Happy Unions</Typography>
                    <Typography variant="subtitle1" color="yellow"> Technology to Remove Conflict & Obstacles to Successful Unions</Typography>

                    <NavLink to='/contact_us' style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="primary" sx={{ marginTop: '20px' }}>JOIN NOW</Button>
                    </NavLink>
                </Grid>

                {/* Right Section with Image */}
                <Grid item xs={12} md={6} sx={{ textAlign: 'right' }}>
                    <img src="https://phplexus.astroved.com/wp-content/uploads/2024/09/Uma-Maheshwara-Homa-Donation-1.jpg" alt="Homa Image" style={{ maxWidth: '100%', height: 'auto' }} />
                </Grid>
            </Grid>

            {/* Overview Section */}
            <Box sx={{ padding: '20px 0', backgroundColor: '#f8f8f8', color: "black" }}>
                <Typography variant="h4" align="center">OVERVIEW</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <Typography variant="h6" sx={{ marginLeft: "1rem" }}>Astro, Gift for You – Experience Divine Blessings</Typography>
                        <Typography sx={{ marginLeft: "1rem" }}>The divine technology of Homas (Fire Labs) is known to bring grace and power into your life. Are you missing this divine technology due to financial constraints? That will not be a barrier any longer. We care about your wellbeing and do not want you to miss out, so once a month, there is a special Homa (Fire Lab).

                            To honor the symbolic divine exchange, you can participate in the Homa each month by donating the amount you can contribute.

                      “You can reverse the karma that has not yet attacked you, that has not yet started to hurt you, and for that, you need tools.”

                            astro is making it super easy for you to participate. Our best wishes for you to enjoy and prosper in your life.</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <iframe width="100%" height="200" src="your_video_link" title="YouTube video" />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default MonthlyHamaDonation;