import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#CFDFEF',
        padding: { xs: '20px 0', md: '40px 0' },
        color: "white",
        width: "100%",
        marginTop: '2rem'
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 3, md: 6 }}
          justifyContent="center"
        >
          {/* KNOW US Section */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: "#4E4B51",
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              KNOW US
            </Typography>
            {['About', 'Board Of Advisors', 'R&D Institute', 'Careers', 'FAQs', 'Partner Sites', 'Priest Services'].map((text) => (
              <Link
                href="#"
                underline="none"
                color="grey"
                sx={{
                  display: 'block',
                  marginBottom: '8px',
                  textAlign: { xs: 'center', md: 'left' } 
                }}
                key={text}
              >
                {text}
              </Link>
            ))}
          </Grid>

          {/* GLOUMS Section */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: "#4E4B51",
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              ASTRO
            </Typography>
            {['Download App', 'Coupon Partners', 'Love & Marriage', 'Family', 'Business & Career', 'Wealth & Finance', 'Education', 'Health & Beauty', 'Arts & Sports'].map((text) => (
              <Link
                href="#"
                underline="none"
                color="grey"
                sx={{
                  display: 'block',
                  marginBottom: '8px',
                  textAlign: { xs: 'center', md: 'left' }
                }}
                key={text}
              >
                {text}
              </Link>
            ))}
          </Grid>

          {/* LEGAL Section */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: "#4E4B51",
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              LEGAL
            </Typography>
            {['Disclaimer', 'Privacy Policy', 'Return & Refund Policy', 'Security Policy', 'Shipment Policy', 'Terms and Conditions'].map((text) => (
              <Link
                href="#"
                underline="none"
                color="grey"
                sx={{
                  display: 'block',
                  marginBottom: '8px',
                  textAlign: { xs: 'center', md: 'left' }
                }}
                key={text}
              >
                {text}
              </Link>
            ))}
          </Grid>

          {/* SUPPORT Section */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: "#4E4B51",
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              SUPPORT
            </Typography>
            <Link
              href="mailto:support@astroved.com"
              underline="none"
              color="grey"
              sx={{
                display: 'block',
                marginBottom: '8px',
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              support@astro.com
            </Link>
            {['Offline Payment', 'Contact Us', 'Feedback', 'Site Map'].map((text) => (
              <Link
                href="#"
                underline="none"
                color="grey"
                sx={{
                  display: 'block',
                  marginBottom: '8px',
                  textAlign: { xs: 'center', md: 'left' }
                }}
                key={text}
              >
                {text}
              </Link>
            ))}
          </Grid>

          {/* CONNECT Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                marginLeft: { xs: '0', md: '7rem' },
                color: "#4E4B51",
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              CONNECT
            </Typography>
            <Typography
              variant="body2"
              color="grey"
              sx={{
                lineHeight: '1.8',
                marginLeft: { xs: '0', md: '7rem' },
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              Customer Care <br />
              9084758555 <br />

              Whatsapp <br />
            4488683934
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>

  );
}

export default Footer;
