import React from 'react';
import { Link } from 'react-router-dom';
import SecondNav from './Navigation/SecondNav';
import FirstNav from './Navigation/FirstNav';
import Review from './Review/Review';
import Services from './Servicess_offering/Services';
import HeroSection from './Hero-Section/Hero';
import Footer from './Footer/Footer';
import FreeAstro from './Free_Astro/FreeAstro';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import KundaliForm from './KundaliBirthChart/KundaliBirth';
import KundaliMatching from './KundaliMatching/KundaliMatching';
import Panchang from './Panchang/Panchang';
import ChooseUs from './ChooseUs_page/CHooseUs';
import GloumAbout from './GloumAbout/GloumAbout';
const LandingPage = () => {
    const navigate = useNavigate();

    const handleHoroscopeClick = () => {
        navigate('/horoscope');
    };

    return (
        <>
            <FirstNav />
            <SecondNav />
            <HeroSection />
            <Typography sx={{ textAlign: "center", padding: "1rem", fontSize: "1.2rem", fontWeight: "600", backgroundColor: "#9f2800", color: "#ffffff" }}>  GLOUM ASTRO SERVICES & CONSULTANT</Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: { lg: "row", xs: "column", backgroundColor: "#FFD180" }, width: "100%", }}>

                <KundaliForm />
                <KundaliMatching />
                <Panchang />
            </Box>

            <Services />
            <FreeAstro />
            <ChooseUs />

            <Review />
            <GloumAbout />
            <Footer />

        </>
    );
};

export default LandingPage;
