import React from 'react'
import { Box, Typography } from '@mui/material'
import Image1 from './Maa_Baglamukhi.jpeg'
import Image2 from './astro_blog_image1.jpg'
import Image3 from './doorga image.jpg'
import { NavLink } from 'react-router-dom'
const Blog = () => {
    return (
        <>
            <Box sx={{ height: "100vh", width:{lg: "90%"}, margin: "0 auto", display: "flex", flexDirection:{lg:"row",md:"column",sm:"column",xs:"column"},justifyContent: "space-between", paddingTop: "1rem",gap:"10px" }}>
                <NavLink to={'/baglamukhi'} style={{ textDecoration: 'none', display: 'block', width: {lg:'80%'}, }}>
                    <Box sx={{ height: {lg:"20rem",md:"auto",sm:"auto"}, width: {lg:"90%"}, margin: "0 auto",}}>
                        <img src={Image1} style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }} />
                        <Typography sx={{ backgroundColor: "#FFD180", textAlign: "center", padding: "10px", borderRadius: "5px" }}>Baglamukhi Devi: The Goddess of Power</Typography>
                    </Box>
                </NavLink>

                <NavLink to={'/astro_blog'} style={{ textDecoration: 'none', display: 'block', width: {lg:'80%'},  }}>
                    <Box sx={{height: {lg:"20rem"}, width: {lg:"90%"}, margin: "0 auto",}}>
                        <img src={Image2} style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }} />
                        <Typography sx={{ backgroundColor: "#FFD180", textAlign: "center",  padding: "10px", borderRadius: "5px" }}>Astrology and Its Influence on Human Life</Typography>

                    </Box>
                </NavLink>

                <NavLink to={'/durga_pooja'} style={{ textDecoration: 'none', display: 'block', width: {lg:'80%',} }}>
                    <Box sx={{ height: {lg:"20rem"}, width: {lg:"90%"}, border: "px solid red", margin: "0 auto" }}>
                        <img src={Image3} style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }} />
                        <Typography sx={{ backgroundColor: "#FFD180", textAlign: "center",  padding: "10px", borderRadius: "5px" }}>The Divine Significance of Durga Puja in Astrology
                        </Typography>

                    </Box>
                </NavLink>
            </Box>

        </>
    )
}

export default Blog