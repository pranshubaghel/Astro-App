


import React, { useState } from 'react';
import { Container, TextField, Button, Grid, Paper, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const KundaliForm = () => {
    const [cityName, setCityName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [timeOfBirth, setTimeOfBirth] = useState('');
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();

        navigate('/select-location', {
            state: {
                cityName,
                dateOfBirth,
                timeOfBirth
            }
        });
    };

    return (
        <Container
            sx={{ 
                backgroundColor: "#FFD180", 
                display: 'flex', 
                justifyContent: 'center',
                width:{lg:"33%",sm:"100%",md:"100%",xs:"100%"},
                padding:"2rem"
            }}
        >
            <Box 
                sx={{ 
                    backgroundColor: "#ffffff", 
                    padding: { xs: "1.5rem", sm: "2rem", md: "2rem", lg: "rem" }, 
                    // height:{lg:"63vh",sm:"42vh",md:"35vh"},
                    width: { xs: '90%', sm: '100%', md: '95%', }, 
                    display: "flex", 
                    flexDirection: "column", 
                    // marginTop:"1rem",
                }}
            >
                <Typography 
                    variant="h4" 
                    gutterBottom 
                    sx={{ textAlign: "center",fontSize: { xs: "1.5rem", md: "2rem" } ,width:"100%"}}
                >
                    Kundali / Birth Chart
                </Typography>
                <form onSubmit={handleFormSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                          
                            <TextField
                                label="City Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={cityName}
                                onChange={(e) => setCityName(e.target.value)}
                                required
                            />
                        </Grid>

                        <Grid item xs={12}>
                           
                            <TextField
                                label="Date of Birth"
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                                margin="normal"
                                value={dateOfBirth}
                                onChange={(e) => setDateOfBirth(e.target.value)}
                                required
                            />
                        </Grid>

                        <Grid item xs={12}>
                           
                            <TextField
                                label="Time of Birth"
                                type="time"
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                                margin="normal"
                                value={timeOfBirth}
                                onChange={(e) => setTimeOfBirth(e.target.value)}
                                required
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button 
                                type="submit" 
                                variant="contained" 
                                color="primary" 
                                fullWidth 
                                sx={{ 
                                    backgroundColor: "#FF6F00", 
                                    marginTop: "1rem", 
                                    padding: '0.75rem',
                                    fontSize: { xs: "0.875rem", sm: "1rem" }
                                }}
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    )}
export default KundaliForm;
