
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import image1 from './Services Images/loyalty1.png'
import image2 from './Services Images/temple01.png';
import image3 from './Services Images/dhan.png';
import image4 from './Services Images/homa_pooja.png';
import image5 from  './Services Images/durgadevi1.png'
import image6 from  './Services Images/birthdayimage.png'
import image7 from  './Services Images/yearlong01.png'
import image8 from './Services Images/image5-removebg-preview.png'
const Services = () => {
    const serviceItems = [
        {
            title: 'Gloum Monthly Special Events',
            description: 'Connect with Divine Archetypes during Their Exclusive Powertimes',
            imgSrc: image2,
            bgColor: '#E5F3FD',
            route: '/monthly-special-events'
        },
        {
            title: 'Instant Poojas & Homas',
            description: 'Potent Vedic Rituals for Swift Divine Boons',
            imgSrc: image4,
            bgColor: '#FFFFC5',
            route: '/instant-poojas-homas'
        },
        {
            title: 'Remedies to attract Wealth & Prosperity',
            description: 'Vedic Remedies to Transform Your life',
            imgSrc: image3,
            bgColor: '#D0F0C0',
            route: '/wealth-prosperity'
        },
        {
            title: 'Yearlong Programs',
            description: 'Receive daily Blessings of the Divine All Year-Round',
            imgSrc: image7,
            bgColor: '#FFB6C1',
            route: '/yearlong-programs'
        }, {
            title: 'Monthly Homa by Donation',
            description: 'Muruga Fire Lab to Eradicate Internal & External Negativities & overcome Enemy Threats',
            imgSrc: image5,
            bgColor: '#ffefea',
            route: '/monthly-homa-donation' // Added route
        },
        {
            title: 'Special Birthday Packages',
            description: 'Invoke Powerful Archetypes for Yearlong Success for You & Your Family',
            imgSrc: image6,
            bgColor: '#EACAFF',
            route: '/special-birthday-packages' // Added route
        },
        {
            title: 'Nadi Astrology',
            description: 'Divine Science of Using Thumb Impressions To Unlock Secrets of the Future',
            imgSrc:image8,
            bgColor: '#D5FFFF',
            route: '/nadi-astrology' // Added route
        },
        {
            title: 'AstroVed Loyalty Program',
            description: 'Avail Exciting Discounts, Services & Cashback Offers on Loyalty Program',
            imgSrc: image1,
            bgColor: '#FFFFE0',
            route: '/loyalty-program' // Added route
        }
    ];

    return (
        <Box
            sx={{
                width: { lg: "100%", md: "100%", sm: "100%", xs: "100%" },
                margin: "auto",
                // padding: "1rem",
                boxSizing: 'border-box',
                height: { lg: "auto", md: "auto", sm: "auto", xs: "auto" }
            }}
        >
            <Typography
                sx={{
                    fontWeight: "600",
                    padding: "1rem",
                    textAlign: 'center',
                    fontSize:{lg:"2rem",md:"1.8rem",sm:"1.7rem",}
                }}
            >
                Astro Services Offerings & Resources
            </Typography>

            <Grid container spacing={2} sx={{width:{lg:"95%",sm:"100%",md:"100%",xs:"100%"},margin:"auto",textAlign:"center"}}>
                {serviceItems.map((item, index) => (
                    <Grid item xs={24} sm={6} md={3} key={index}>
                        <Link to={item.route} style={{ textDecoration: 'none' }}>
                            <Box
                                sx={{
                                    padding: "1rem",
                                    borderRadius: "11px",
                                    backgroundColor: item.bgColor,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '100%',
                                    boxSizing: 'border-box'
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: "600",
                                        marginBottom: "0.5rem",
                                        textAlign: 'center'
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "12px",
                                        fontWeight: "600",
                                        marginBottom: "1rem",
                                        textAlign: 'center'
                                    }}
                                >
                                    {item.description}
                                </Typography>
                                <img
                                    src={item.imgSrc}
                                    alt={item.title}
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        maxHeight: "10rem",
                                        objectFit: "contain"
                                    }}
                                />
                            </Box>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Services;
