import React from 'react'
import { Box, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Relationship2 from './Relationship2';
const Relationship = () => {
    return (
        <>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-between",
                    backgroundColor: '#ffc94a',
                    padding: { xs: ".5rem", sm: "2rem" }
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        alignItems: "center",
                        textAlign: { xs: "center", sm: "left" },
                        margin: "auto",
                        width: { xs: "100%", sm: "70%", lg: "85%" },
                        height: { xl: "18rem", sm: "100%" },
                        // border: "1px solid blue"
                    }}
                >
                    <Box
                        sx={{
                            width: { xs: "100%", sm: "70%", lg: "80%" },
                            padding: { xs: "0 1rem", sm: "0 2rem" },
                            // border: "1px solid red"
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: "600",
                                color: "#E02B20",
                                marginBottom: "1rem",
                                fontSize: { xs: "1.5rem", sm: "2rem" } // Adjust font size for smaller screens
                            }}
                        >
                            Sun in 7th House- Relationship Remedial Program
                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "500",
                                fontSize: { xs: "1rem", sm: "1.25rem" }, // Adjust font size for smaller screens
                                marginBottom: "0.5rem",
                                width: "90%",
                                padding: { xl: "0rem", xs: "1rem", sm: "2rem" },
                            }}
                        >
                            Potent Vedic Remedies to Boost the Positive Aspects of Your Sun &
                            Set Right Your Relationships
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "500",
                                fontSize: { xs: "1rem", sm: "1.25rem" }, // Adjust font size for smaller screens
                            }}
                        >

                        </Typography>
                    </Box>
                    <img
                        src='https://www.astroved.com/us/wp-content/uploads/2024/05/Relationship-Program.jpg'
                        alt="Relationship Program"
                        style={{ width: '', height: 'auto', maxWidth: '100%' }}
                    />
                </Box>
            </Box>
            {/* ------------------------------------------ OVERVIEW---------------------------------- */}

            <Box
                sx={{
                    // border: "3px solid blue",
                    height: { xl: "70vh", sm: "" },
                    padding: { xs: "1rem", sm: "2rem" }, // Add padding for different screen sizes
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        display: "flex",
                        justifyContent: { lg: "center" },
                        fontWeight: "550",
                        // borderBottom: "1px solid grey",
                        fontSize: { xs: "1.5rem", sm: "2rem" }, // Responsive font size
                    }}
                >
                    OVERVIEW
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" }, // Stack vertically on small screens
                        justifyContent: "space-between",
                        // border: "2px solid green",
                        width: { xs: "100%", sm: "70%", lg: "83%" }, // Full width on small screens
                        margin: "auto",
                        height: { xl: "65vh", sm: "90vh" }, // Adjust height for small screens
                        // padding: { xs: "0", sm: "1rem" }, // Padding adjustment
                    }}
                >

                    <Box
                        sx={{
                            // border: "2px solid red",
                            width: { xs: "100%", sm: "70%", lg: "95%" }, // Full width on small screens
                            // padding: { xs: "1rem", sm: "2rem" }, // Padding adjustment
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                fontWeight: "700",
                                width: "100%",
                                marginBottom: "1rem",
                                fontSize: { xs: "1.2rem", sm: "1.5rem" }, // Responsive font size
                            }}
                        >
                            7th House: Indicates Your Personal & Professional Relationships & Business Partnerships
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontWeight: "100",
                                width: "100%",
                                marginBottom: "1rem",
                                fontSize: { xs: "0.9rem", sm: "1rem" }, // Responsive font size
                            }}
                        >
                            The 7th House, known in Vedic Astrology as ‘Kalatra Bhava’ (House Representing Your Significant Other), represents the House of Relationships and Partnerships and is governed by Love Planet Venus. It is the opposite of Lagna, the Self and represents your ability to attract the opposite sex. The Seventh House also indicates business, negotiations, achievement in business ventures or progress in professional goals.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontWeight: "100",
                                width: "100%",
                                marginBottom: "1rem",
                                fontSize: { xs: "0.9rem", sm: "1rem" }, // Responsive font size
                            }}
                        >
                            Success in the above areas of life depends on nurturing relationships through open communication, cooperation, compromise, and commitment, and this is influenced by the combination of your planets on your 7th House.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontWeight: "100",
                                width: "100%",
                                fontSize: { xs: "0.9rem", sm: "1rem" }, // Responsive font size
                            }}
                        >
                            Invoking the powerful blessings and reinforcing the positive aspects of Relationship-Influencing Planets, the Sun and his Overlord Shiva, along with Mars and Venus, through sacred relationship remedial rituals can help remove hurdles to creating long-lasting relationships, strengthen interpersonal and familial bonds and ensure success in your business partnerships.
                        </Typography>
                    </Box>
                    {/* ---------------------Enter Your Details--------------------- */}
                    <Box
                        sx={{
                            height: { xl: "60vh", xs: "48vh", sm: "vh" },
                            width: { xs: "full", sm: "100%", lg: "70%" },
                            marginLeft: "0.5rem",
                            display: "flex",
                            alignItems: "center",
                            borderRadius: "10px",
                            justifyContent: "space-between",
                            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)"

                        }}
                    >
                        <Box>
                            {/* Content of the form */}
                            <Typography sx={{
                                marginBottom: { lg: "3rem", xs: "1rem" },
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontWeight: "700"
                            }}>Enter Your Details</Typography>

                            <Box
                                sx={{
                                    textAlign: "center",
                                    fontSize: { xs: "0.9rem", sm: "1rem" },
                                    marginLeft: { lg: "1rem", sm: "0rem" },
                                    marginRight: { lg: "1rem", sm: "0rem" },
                                    justifyContent: "space-between",
                                }}
                            >


                                <TextField
                                    label="Name"
                                    variant="outlined"
                                    sx={{ marginBottom: "1rem", width: { lg: "100%", xs: "95%" } }}
                                />

                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    sx={{ marginBottom: "1rem", width: { lg: "100%", xs: "95%" } }}
                                />
                                <TextField
                                    label="Mobile Number"
                                    variant="outlined"
                                    sx={{ marginBottom: "1rem", width: { lg: "100%", xs: "95%" } }}
                                />
                                <TextField
                                    label="City"
                                    variant="outlined"

                                    sx={{ marginBottom: "1rem", width: { lg: "100%", xs: "95%" } }}
                                />


                                <Button variant="contained" sx={{ backgroundColor: "#f78d06 " }}>Submit</Button>
                            </Box>
                        </Box>

                    </Box>
                </Box>
            </Box>

            {/* ------------------------------------Significance of the Sun in 7th House--------------------- */}
            <Box sx={{ height: "auto", width: "100%", }}>
                <Typography
                    variant="body1"
                    sx={{
                        display: "flex",
                        justifyContent: { lg: "center" },
                        fontWeight: "550",
                        fontSize: { xl: "1.5rem", xs: "1rem", sm: "1.5rem" }, // Responsive font size
                        padding: { xs: "0.9rem", sm: "0rem" },
                        marginBottom: "1rem"
                    }}
                >
                    Significance of the Sun in 7th House
                </Typography>

                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: { xs: "90%", sm: "", lg: "80%" },
                    margin: "auto",
                    height: { xl: "3rem" },
                    marginBottom: "1rem"
                }}>
                    < StarIcon sx={{ color: "red", fontSize: "1rem", marginRight: { lg: "4px", sm: "0px" } }} />
                    <Typography variant='body1' sx={{ border: "0px solid red" }}>
                        Significance of the Sun in 7th House
                        Sun is not comfortable in the 7th House as it is the House of Venus, which is the enemy of Sun. Sun in this place is good for your career but not very good for relationships
                    </Typography>

                </Box>

                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: { xs: "90%", sm: "", lg: "77%" },
                    // margin: "auto",
                    marginLeft: { lg: "9.2rem", xs: "1rem" },
                    height: { xl: "2rem" },
                }}>
                    < StarIcon sx={{ color: "red", fontSize: "1rem", marginRight: { lg: "4px", sm: "0px" } }} />
                    <Typography variant='body1' sx={{ border: "0px solid red" }}>
                        Relationships may be based on a hidden desire for fame and status or used to support achieving certain goals, so this placement taints Venus’s true essence
                    </Typography>

                </Box>

                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: { xs: "90%", sm: "", lg: "80%" },
                    // margin: "auto",
                    marginLeft: { lg: "9.2rem", xs: "1rem" },
                    height: { xl: "3rem" },
                    marginBottom: "1rem"
                }}>
                    < StarIcon sx={{ color: "red", fontSize: "1rem", marginRight: { lg: "4px", sm: "0px" } }} />
                    <Typography variant='body1' sx={{ border: "0px solid red" }}>
                        Sun is debilitated in the 7th House (corresponds to Libra in the natural zodiac) and afflicts it. People with the Sun positioned here may find it very difficult to deal with conflicts and do not like compromises as they have a dominating personality.
                    </Typography>

                </Box>

                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: { xs: "90%", sm: "", lg: "59.5%" },
                    marginLeft: { lg: "9.2rem", xs: "1rem" },
                    height: { xl: "2rem" },
                }}>
                    < StarIcon sx={{ color: "red", fontSize: "1rem", marginRight: { lg: "4px", sm: "0px" } }} />
                    <Typography variant='body1'>
                        It may cause health issues for the partner, affect your relationship with your father, or you may live away from your father.
                    </Typography>

                </Box>

                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: { xs: "90%", sm: "", lg: "80%" },
                    marginLeft: { lg: "9.2rem", xs: "1rem" },
                    height: { xl: "3rem" },
                    marginBottom: "1rem"
                }}>
                    < StarIcon sx={{ color: "red", fontSize: "1rem", marginRight: { lg: "4px", sm: "0px" } }} />
                    <Typography variant='body1' >
                        Propitiating Shiva, the Overlord of the Sun, can invoke his benefic blessings to enhance the positive aspects of your Sun, instill leadership qualities, and resolve conflicts in an amicable manner.
                    </Typography>

                </Box>
            </Box>
            {/* ------------------------------------Key Areas Impacted by Sun in 7th House------------------- */}
            <Box sx={{ height: { lg: "10rem", xs: "15rem" }, width: "100%", }}>
                <Typography
                    variant="body1"
                    sx={{
                        display: "flex",
                        justifyContent: { lg: "center" },
                        fontWeight: "550",
                        fontSize: { xl: "1.5rem", xs: "1rem", sm: "1.5rem" },
                        padding: { xs: "0.9rem", sm: "0rem" },
                        marginBottom: "1rem"
                    }}
                >
                    Key Areas Impacted by Sun in 7th House
                </Typography>

                <Box sx={{ height: { lg: "2rem" }, width: { lg: "98%", xs: "95%" }, display: { lg: "flex" }, justifyContent: "center", marginLeft: { lg:"1rem",xs: "1rem" } }}>
                    <Box sx={{ height: "1px solid red ", width: { lg: "42%" }, display: "flex" }}>
                        < StarIcon sx={{ color: "red", fontSize: "1rem", marginRight: { lg: "4px", sm: "0px" } }} />
                        <Typography>
                            Quality of your love life
                        </Typography>
                    </Box>
                    <Box sx={{ height: "2px solid red ", width: { lg: "40%" }, display: "flex" }}>
                        < StarIcon sx={{ color: "red", fontSize: "1rem", marginRight: { lg: "4px", sm: "0px" } }} />
                        <Typography>
                            Attitude towards life
                        </Typography>
                    </Box>

                </Box>

                <Box sx={{ height: { lg: "2rem" }, width: { lg: "98%", xs: "95%" }, display: { lg: "flex" }, justifyContent: "center", marginLeft: "1rem" }}>
                    <Box sx={{ height: "1px solid red ", width: { lg: "42%" }, display: "flex" }}>
                        < StarIcon sx={{ color: "red", fontSize: "1rem", marginRight: { lg: "4px", sm: "0px" } }} />
                        <Typography>
                            Stability in your profession or business
                        </Typography>
                    </Box>
                    <Box sx={{ height: "2px solid red ", width: { lg: "40%" }, display: "flex" }}>
                        < StarIcon sx={{ color: "red", fontSize: "1rem", marginRight: { lg: "4px", sm: "1rem" } }} />
                        <Typography>
                            Social standing & leadership qualities
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ height: "2px solid red ", width: { lg: "41%" }, display: "flex", marginLeft: { lg: "9.3rem", xs: "1rem" }}}>
                    < StarIcon sx={{ color: "red", fontSize: "1rem", marginRight: { lg: "4px", sm: "0px" } }} />
                    <Typography>
                        Health, vitality & physique
                    </Typography>
                </Box>
            </Box>

            <Relationship2 />

        </>
    )
}

export default Relationship