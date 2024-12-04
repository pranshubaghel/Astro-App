import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Image1 from './image6.jpg'
import Image2 from './image9.jpg';
import Image3 from './image10.jpg';
import Image4 from './image4.jpg';

const imageData = [
    {
        src: Image1,
        title: "The Buddha",
        description: "He was born in Lumbini, in what is now Nepal, to royal parents of the Shakya clan, but renounced his home life to live as a wandering ascetic."
    },
    {
        src: Image2,
        title: "Mahadev, also known as Shiva",
        description: "Shiva is the name of a prominent Hindu god who is considered to be the supreme god in the Shaivism tradition. He is one of the three gods in the Hindu trimurti, along with Brahma and Vishnu."
    },
    {
        src: Image3,
        title: "Lord Ganesha",
        description: "Ganesha is a Hindu god with the head of an elephant who is known for removing obstacles and bringing good fortune"
    },
    {
        src: Image4,
        title: "Lord Ram",
        description: "Ram is a popular Hindu god and the seventh incarnation of Vishnu, the god who protects dharma."
    }
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imageData.length);
        }, 5000); 

        return () => clearInterval(interval); 
    }, []);

    const currentImage = imageData[currentIndex];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + imageData.length) % imageData.length);
    };

    return (
        <Box sx={{ height: "80vh", width: { lg: "100%", md: "99%", sm: "99%", xs: "99%" }, display: "flex", position: "relative", backgroundColor: "#FFD180", flexDirection: { lg: "row", md: "column", sm: "column", xs: "column" },}}>
            {/* Left Box for Image */}

            <Box
                sx={{
                    height: "100%",
                    width: { lg: "50%", md: "100%", sm: "100%", xs: "100%" },
                    overflow: 'hidden',
                    position: "relative",
                }}
            >
                <img
                    src={currentImage.src}
                    alt={currentImage.title}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "initial",
                        position: "absolute",
                        top: 0,
                        left: 0
                    }}
                />
            </Box>

            {/* Right Box for Content */}
            <Box sx={{ height: "93.5%", width: { lg: "50%", sm: "auto", md: "auto", xs: "auto" }, padding: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: "center",color:"#9f2800" }}>
                <Typography sx={{ fontWeight: "600", fontStyle: "revert-layer", fontSize:"2rem", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>{currentImage.title}</Typography>
                <Typography sx={{ mt: 1,  width: "95%",fontSize:"1.3rem" }}>{currentImage.description}</Typography>
            </Box>

            {/* Navigation Icons */}
            <Box sx={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <ArrowBackIosNewIcon onClick={handlePrev} sx={{ cursor: 'pointer', color: 'black' }} />
                <ArrowForwardIosIcon onClick={handleNext} sx={{ cursor: 'pointer', color: 'black' }} />
            </Box>
        </Box>
    );
};

export default Hero;
