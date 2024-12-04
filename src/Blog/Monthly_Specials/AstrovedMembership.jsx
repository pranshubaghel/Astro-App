import React from 'react'
import { Box, Typography, Button } from '@mui/material'
const AstrovedMembership = () => {
    return (
        <>

            <Box
                sx={{
                    height: { xs: '32rem', sm: 'auto', md: 'auto', lg: '21rem' },
                    width: '100%',
                    backgroundColor: '#60c8dc',
                    paddingTop: { xs: '1rem', sm: '1.5rem', }
                }}
            >
                <Box
                    sx={{
                        height: { xs: '32rem', sm: '30rem', md: '22rem', lg: '18rem' },
                        width: { xs: '90%', sm: '75%', md: '80%', lg: '78%' },
                        margin: 'auto',
                        display: 'flex',
                        flexDirection: { xs: 'column-reverse', md: 'row' },
                        alignItems: 'center',
                        justifyContent: { xs: 'center', md: 'space-between' },
                        gap: { xs: 'rem', sm: '1.5rem', md: '2rem' }
                    }}
                >
                    <Box
                        sx={{
                            height: { xs: '17rem', sm: '30rem', md: '22rem', lg: '18rem' },
                            width: { xs: '100%', md: '48%' },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',

                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.8rem', lg: '2rem' },
                                fontWeight: 600,
                                color: '#005466',
                                textAlign: { xs: 'center', md: 'left' }
                            }}
                        >
                            ENHANCED ASTRO LOYALTY PROGRAM
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: '1.2rem', sm: '1.4rem' },
                                color: '#ffffff',
                                textAlign: { xs: 'center', md: 'left' }
                            }}
                        >
                            New! Cashback Offers, Membership Discounts, Birthstar Poojas
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                                width: { xs: '100%', md: '35%' },
                                color: '#005466',
                                textAlign: { xs: 'center', md: 'left' } // Center align text on small devices
                            }}
                        >
                            You Care for Astro
                            We Care for You!
                        </Typography>
                        <button
                            style={{
                                height: '3rem',
                                width: '100%',
                                // maxWidth: '300px',
                                marginTop: '0.5rem',
                                color: '#ffffff',
                                backgroundColor: '#005466',
                                fontWeight: '600',
                                borderRadius: '6px',
                                border: 'none',
                                cursor: 'pointer',
                                textAlign: 'center',
                                padding: '0 1rem'
                            }}
                        >
                            VIEW  ASTRO LOYALTY PROGRAM
                        </button>
                    </Box>

                    <Box
                        sx={{
                            width: { xs: '100%', md: '44%', sm: "80%" },
                            height: { md: '18rem', xs: "15rem", sm: "40rem" },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden' 
                        }}
                    >
                        <img
                            src='https://www.astroved.com/us/wp-content/uploads/2023/06/av-membership-lp.jpg'
                            alt='AstroVed Membership'
                            style={{
                                height: { xs: 'auto', md: '18rem', xs: "15rem", sm: "25rem" },
                                width: '75%',
                                objectFit: 'cover',
                                objectPosition: 'center',
                                display: 'block',
                                border: 'none'
                            }}
                        />
                    </Box>

                </Box>

            </Box>

            {/* -------------------------------OVERVIEW-------------------- */}

           
            <Box
                sx={{
                    height: { xs: 'auto', sm: 'auto', md: '18rem' },
                    width: '100%',
                    padding: { xs: '1rem', sm: '1.5rem', md: '2rem' },
                    boxSizing: 'border-box',
                }}
            >
                <Typography
                    sx={{
                        fontSize: { xs: '1.4rem', sm: '1.5rem', md: '1.7rem' },
                        fontWeight: 600,
                        color: '#212529',
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '1rem', // Adjusted margin for better spacing on smaller devices
                        borderBottom: '1px solid grey',
                        paddingBottom: '0.5rem', // Adjusted padding for better spacing on smaller devices
                    }}
                >
                    OVERVIEW
                </Typography>

                <Typography
                    sx={{
                        fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.4rem' },
                        fontWeight: 600,
                        color: '#212529',
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '1rem',
                    }}
                >
                    Enhanced  Astro Loyalty Program: More Benefits Than Cost
                </Typography>

                <Typography
                    sx={{
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                        fontWeight: 300,
                        color: '#005466',

                        justifyContent: 'center',
                        width: { xs: '90%', sm: '85%', md: '80%' },
                        margin: 'auto',
                        marginTop: '1rem',

                        
                    }}
                >
                    We have enhanced our   Astro Loyalty Program to provide more benefits for you- cashback offers, and complimentary services, as well as sharing the blessings of Gloum Astro Vedic technology services with your loved ones, discount coupon value equivalent to membership fees amount, and complimentary astrology readings.
                </Typography>
            </Box>

            <Box sx={{ height: { xs: "100vh",sm:"auto", md:"auto",lg: "83vh" }, background: "#005466" }}>

                <Typography
                    sx={{
                        fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem', lg: '1.8rem' }, // Responsive font sizes
                        fontWeight: 600,
                        color: '#FFCC00',
                        display: 'flex',
                        justifyContent: 'center',
                        padding: { xs: '1rem', sm: '1.2rem', md: '1.5rem', lg: '2rem' }, // Responsive padding
                        borderBottom: '1px solid white',
                        textAlign: 'center', // Center align text for all screen sizes
                    }}
                >
                    New and Enhanced Loyalty Program Features
                </Typography>

                <Box
                    sx={{
                        height: { xs: 'auto', sm: '60vh', lg: '60vh' },
                        width: { xs: '90%', sm: '80%', lg: '50%' },
                        margin: 'auto',
                        display: 'flex',
                        flexDirection: { xs: 'column', lg: 'row' },
                        justifyContent: 'space-between',
                        marginTop: { xs: '1rem', sm: '2rem' },
                        gap: { xs: '1rem', lg: '0' } // Gap between the boxes on small screens
                    }}
                >
                    <Box
                        sx={{
                            height: { xs: 'auto', sm: 'auto', lg: '60vh' },
                            width: { xs: '100%', sm: '100%', lg: '48%' },
                            borderRadius: '1rem',
                            background: 'white',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <img
                            src='https://www.astroved.com/us/wp-content/uploads/2023/06/Exclusive-Cashback-Offers.jpg'
                            alt='Exclusive Cashback Offers'
                            style={{
                                height:{lg: '50%',sm:"25%"}, // Adjusted to fit the Box
                                width: '100%',
                                borderTopLeftRadius: '1rem',
                                borderTopRightRadius: '1rem',
                                objectFit: 'cover'
                            }}
                        />
                        <Box sx={{ width: '90%', margin: 'auto', padding: { xs: 'rem', sm: '1.5rem' ,} }}>
                            <Typography sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, fontWeight: 550, marginTop: '', opacity: 0.7 }}>
                                Exclusive Cashback Offers
                            </Typography>
                            <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem' }, marginTop: '1rem', color: '#606060', opacity: 0.7 }}>
                                Based on your Membership level, except for products, for all orders, you will receive up to 12% cashback to your account
                            </Typography>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            height: { xs: 'auto', sm: 'auto', lg: '60vh' },
                            width: { xs: '100%', sm: '100%', lg: '48%' },
                            borderRadius: '1rem',
                            background: 'white',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <img
                            src='https://www.astroved.com/us/wp-content/uploads/2023/06/Birth-Star-Pooja-New.jpg'
                            alt='Birth Star Pooja'
                            style={{
                                height:{lg: '50%',sm:"25%"}, // Adjusted to fit the Box
                                width: '100%',
                                borderTopLeftRadius: '1rem',
                                borderTopRightRadius: '1rem',
                                objectFit: 'cover'
                            }}
                        />
                        <Box sx={{ width: '90%', margin: 'auto', padding: { xs: '1rem', sm: '1.5rem' } }}>
                            <Typography sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, fontWeight: 550, marginTop: '1rem', opacity: 0.7 }}>
                                Birth Star Pooja
                            </Typography>
                            <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem' }, marginTop: '1rem', color: '#606060', opacity: 0.7 }}>
                                Based on your Membership level, you will have a special Pooja performed on the day of your birth star to help you harness your birth star’s positive energies to progress in life
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ height: { xs: "auto", lg: "160vh" }, width: "100%", background: "#62CCDF" }}>
                <Typography sx={{
                    fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.8rem', lg: '1.8rem' }, // Responsive font sizes
                    fontWeight: 500,
                    color: '#005466',
                    display: "flex",
                    justifyContent: "center",
                    padding: { xs: '1.5rem', sm: '2rem' }
                }}>
                    Benefits of  Astro Loyalty Program
                </Typography>

                <Box sx={{
                    height: { xs: 'auto', sm: '60vh', lg: '70vh' },
                    width: { xs: '90%', sm: '85%', lg: '75%' },
                    margin: 'auto',
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    gap: { xs: '1rem', sm: '2rem' }, // Added gap for spacing between items on small screens
                }}>
                    <Box sx={{ height: { xs: 'auto', sm: 'auto', lg: '70vh' }, width: { xs: '100%', sm: '48%', lg: '31%' }, borderRadius: '1rem', background: 'white' }}>
                        <img src='https://www.astroved.com/us/wp-content/uploads/2023/06/One-time-Premier-Discount-Coupon-New.jpg' style={{ height: '50%', width: '100%', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem', objectFit: 'cover' }} />
                        <Box sx={{ width: '90%', margin: 'auto', padding: { xs: '1rem', sm: '1.5rem', height:"auto"} }}>
                            <Typography sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, fontWeight: 550, marginTop: '1rem', opacity: 0.7 }}>
                                One-time Premier Discount Coupon
                            </Typography>
                            <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem' }, marginTop: '1rem', color: '#606060', opacity: 0.7 }}>
                                Each Membership level includes a discount coupon in the amount of your membership fee that you can use on select services or readings
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ height: { xs: 'auto', sm: 'auto', lg: '70vh' }, width: { xs: '100%', sm: '48%', lg: '31%' }, borderRadius: '1rem', background: 'white' }}>
                        <img src='https://www.astroved.com/us/wp-content/uploads/2023/06/Add-Your-Loved-Ones-to-Your-Services.jpg' style={{ height: '50%', width: '100%', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem', objectFit: 'cover' }} />
                        <Box sx={{ width: '90%', margin: 'auto', padding: { xs: '1rem', sm: '1.5rem' } }}>
                            <Typography sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, fontWeight: 550, marginTop: '1rem', opacity: 0.7 }}>
                                Add Your Loved Ones to Your Services
                            </Typography>
                            <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem' }, marginTop: '1rem', color: '#606060', opacity: 0.7 }}>
                                You can add up to 3 family members/friends to rituals you register for with Gloum Astro
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ height: { xs: 'auto', sm: 'auto', lg: '70vh' }, width: { xs: '100%', sm: '48%', lg: '31%' }, borderRadius: '1rem', background: 'white' }}>
                        <img src='https://www.astroved.com/us/wp-content/uploads/2023/06/Free-Astrology-Services-New.jpg' style={{ height: '50%', width: '100%', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem', objectFit: 'cover' }} />
                        <Box sx={{ width: '90%', margin: 'auto', padding: { xs: '1rem', sm: '1.5rem' } }}>
                            <Typography sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, fontWeight: 550, marginTop: '1rem', opacity: 0.7 }}>
                                Free Astrology Services
                            </Typography>
                            <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem' }, marginTop: '1rem', color: '#606060', opacity: 0.7 }}>
                                Free Instant Insight (ask any question and receive an answer within 5 minutes) or Live Astrology Consultations from our astrologers based on the Membership level you choose
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{
                    height: { xs: 'auto', sm: '60vh', lg: '60vh' },
                    width: { xs: '100%', sm: '90%', lg: '50%' },
                    margin: 'auto',
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    justifyContent: 'space-between',
                    gap: { xs: '1rem', lg: '2rem' },
                    marginTop: { xs: '2rem', sm: '2rem' }
                }}>
                    <Box sx={{ height: { xs: 'auto', sm: 'auto', lg: '66vh' }, width: { xs: '90%', sm: '100%', lg: '48%' }, borderRadius: '1rem', background: 'white',margin:"auto" }}>
                        <img src='https://www.astroved.com/us/wp-content/uploads/2023/06/Access-to-Karma-Diffusing-Remedies.jpg' style={{ height: '50%', width: '100%', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem', objectFit: 'cover' }} />
                        <Box sx={{ width: '90%', margin: 'auto', padding: { xs: '1rem', sm: '1.5rem' } }}>
                            <Typography sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, fontWeight: 550, marginTop: '1rem', opacity: 0.7 }}>
                                Access to Karma-Diffusing Remedies
                            </Typography>
                            <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem' }, marginTop: '1rem', color: '#606060', opacity: 0.7 }}>
                                Receive karma-diffusing Poojas performed on the 13th Moon (Pradosham), a powertime optimal for clearing bad karma
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ height: { xs: 'auto', sm: 'auto', lg: '66vh' }, width: { xs: '90%', sm: '100%', lg: '48%' }, borderRadius: '1rem', background: 'white',margin:"auto" }}>
                        <img src='https://www.astroved.com/us/wp-content/uploads/2023/06/Daily-Updates-New.jpg' style={{ height: '50%', width: '100%', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem', objectFit: 'cover' }} />
                        <Box sx={{ width: '90%', margin: 'auto', padding: { xs: '1rem', sm: '1.5rem' } }}>
                            <Typography sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, fontWeight: 550, marginTop: '1rem', opacity: 0.7 }}>
                                Daily Updates
                            </Typography>
                            <Typography sx={{ fontSize: { xs: '0.9rem', sm: '1rem' }, marginTop: '1rem', color: '#606060', opacity: 0.8 }}>
                                As our valued member, you can receive daily updates and special offers on our monthly special events
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default AstrovedMembership