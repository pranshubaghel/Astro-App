import React, { useState, useRef } from 'react';
import { Box, Typography, Button, CircularProgress } from '@mui/material';
import axios from 'axios';

function Horoscopes() {
    const [selectedSign, setSelectedSign] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [horoscopeData, setHoroscopeData] = useState(null);
    const [loading, setLoading] = useState(false);

    const resultRef = useRef(null);

    const categories = ['Daily', 'Weekly', 'Monthly', 'Yearly'];
    const icons = [
        { src: "https://www.astrosage.com/images/sign/aries.png", alt: "Aries", name: "Aries", element: "Fire" },
        { src: "https://www.astrosage.com/images/sign/taurus.png", alt: "Taurus", name: "Taurus", element: "Earth" },
        { src: "https://www.astrosage.com/images/sign/gemini.png", alt: "Gemini", name: "Gemini", element: "Air" },
        { src: "https://www.astrosage.com/images/sign/cancer.png", alt: "Cancer", name: "Cancer", element: "Water" },
        { src: "https://www.astrosage.com/images/sign/leo.png", alt: "Leo", name: "Leo", element: "Fire" },
        { src: "https://www.astrosage.com/images/sign/virgo.png", alt: "Virgo", name: "Virgo", element: "Earth" },
        { src: "https://www.astrosage.com/images/sign/libra.png", alt: "Libra", name: "Libra", element: "Air" },
        { src: "https://www.astrosage.com/images/sign/scorpio.png", alt: "Scorpio", name: "Scorpio", element: "Water" },
        { src: "https://www.astrosage.com/images/sign/sagittarius.png", alt: "Sagittarius", name: "Sagittarius", element: "Fire" },
        { src: "https://www.astrosage.com/images/sign/capricorn.png", alt: "Capricorn", name: "Capricorn", element: "Earth" },
        { src: "https://www.astrosage.com/images/sign/aquarius.png", alt: "Aquarius", name: "Aquarius", element: "Air" },
        { src: "https://www.astrosage.com/images/sign/pisces.png", alt: "Pisces", name: "Pisces", element: "Water" },
    ];

    const fetchHoroscope = async (sign, category = 'Daily') => {
        if (!category || !sign) return;

        setLoading(true);
        setHoroscopeData(null);

        try {
            const url = `https://gloum.onrender.com/horoscope/${category.toLowerCase()}/${sign.toLowerCase()}`;
            const response = await axios.get(url);

            if (response.data) {
                setHoroscopeData(response.data);
                setTimeout(() => {
                    if (resultRef.current) {
                        resultRef.current.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            } else {
                setHoroscopeData('No horoscope data available for this selection.');
            }
        } catch (error) {
            console.error("Error fetching horoscope:", error);
            setHoroscopeData('Error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const handleSignSelect = (sign) => {
        setSelectedSign(sign);
        setSelectedCategory('');
        setHoroscopeData(null);
    };

    const handleCategorySelect = (category) => {
        if (!selectedSign) {
            return; // Do nothing if no sign is selected
        }
        setSelectedCategory(category);
        fetchHoroscope(selectedSign, category);
    };

    return (
        <Box sx={{
            border: '1px solid orange',
            padding: 2,
            width: '100%',
            height: '100%',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor:"#FDF0D5",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white'
        }}>
            <Typography variant="h4" sx={{ marginBottom: 2, color: 'black', fontWeight: "bold", fontStyle: 'italic', textShadow: '4px 4px 6px rgba(0, 0, 0, 0.6)', }}>Horoscope</Typography>

            {/* Zodiac Sign Selection */}
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(60px, 1fr))',
                gap: 2,
                paddingBottom: 1,
                width: '100%',
                justifyContent: 'center',
            }}>
                {icons.map((icon) => (
                    <Box
                        key={icon.alt}
                        sx={{
                            position: 'relative',
                            width: 50,
                            height: 50,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            border: selectedSign === icon.name ? '2px solid orange' : 'none',
                            borderRadius: '50%',
                            padding: '5px',
                            '&:hover .tooltip': {
                                visibility: 'visible',
                                opacity: 1,
                            }
                        }}
                        onClick={() => handleSignSelect(icon.name)}
                    >
                        <img src={icon.src} alt={icon.alt} style={{ width: 50, height: 50 }} />
                        <Box
                            className="tooltip"
                            sx={{
                                position: 'absolute',
                                bottom: '100%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                backgroundColor: '#9f2800',
                                color: 'white',
                                padding: '2px 4px',
                                borderRadius: '4px',
                                visibility: 'hidden',
                                opacity: 0,
                                transition: 'visibility 0s, opacity 0.2s ease-in-out',
                                whiteSpace: 'nowrap',
                                textAlign: 'center',
                            }}
                        >
                            {`${icon.name} - ${icon.element}`}
                        </Box>
                    </Box>
                ))}
            </Box>

            {/* Category Selection */}
            {selectedSign && (
                <Box sx={{
                    marginTop: 2,
                    marginBottom: 2,
                    textAlign: 'center',
                    width: '100%',
                }}>
                       {selectedCategory === '' && (
                        <Typography sx={{ color: '#9f2800',fontWeight:"600", marginTop: 2 ,fontSize:"2rem"}}>
                            Please select a category
                        </Typography>
                    )}
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        width: '100%',
                        marginTop: 2
                    }}>
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={selectedCategory === category ? 'contained' : 'outlined'}
                                onClick={() => handleCategorySelect(category)}
                                sx={{
                                    color: 'white',
                                    backgroundColor: selectedCategory === category ? 'red' : '#9f2800',
                                    '&:hover': {
                                        backgroundColor: selectedCategory === category ? 'darkred' : 'red'
                                    }
                                }}
                            >
                                {category}
                            </Button>
                        ))}
                    </Box>
                </Box>
            )}

            {/* Loader and Horoscope Data */}
            {loading && (selectedCategory === 'Monthly' || selectedCategory === 'Weekly' || selectedCategory === 'Yearly') ? (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 2 }}>
                    <CircularProgress />
                    <Typography variant="body2" sx={{ marginTop: 1 ,color:"black"}}>Fetching your horoscope...</Typography>
                </Box>
            ) : (
                horoscopeData && (
                    <Box id="horoscope-result" ref={resultRef} sx={{ width: '100%', textAlign: 'center', marginTop: 2 }}>
                        <Typography variant="h5" sx={{ color: 'white', backgroundColor: 'red' }}>{selectedSign} {selectedCategory} Horoscope</Typography>
                        <Typography variant="h6" sx={{ marginTop: 2, color: 'black' }} dangerouslySetInnerHTML={{ __html: horoscopeData }}>
                            {/* Content will be injected here */}
                        </Typography>
                    </Box>
                )
            )}
        </Box>
    );
}

export default Horoscopes;
