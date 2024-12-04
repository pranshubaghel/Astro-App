import React, { useState, useEffect } from 'react';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Panchang = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [city, setCity] = useState('Delhi');
    const [loading, setLoading] = useState(false);
    const [panchangData, setPanchangData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const now = new Date();
        const formattedDate = `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`;
        const formattedTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
        setDate(formattedDate);
        setTime(formattedTime);
    }, []);

    const fetchPanchang = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                'https://gloumastro.com:5000/panchang/panchang',
                {
                    params: { date, time, cityName: city }
                }
            );
            console.log('API Response:', response.data);

            if (response.data.success) {
                setPanchangData(response.data.data.response);
                navigate('/panchang-details', { state: { panchangData: response.data.data.response } });
            } else {
                console.error('API Error:', response.data);
            }
        } catch (error) {
            console.error('Error fetching panchang data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchPanchang();
    };

    return (
        <Container 
        sx={{ backgroundColor: "#FFD180", padding: "2rem", width: {lg:"33%",sm:"100%",md:"100%",xs:"100%"},}}
        >
            <Box 
                sx={{ 
                    backgroundColor: "#ffffff", 
                    borderRadius: "5px", 
                    // height:{lg:"25.5rem",md:"40vh",sm:"40vh"},
                    padding: "2rem", 
                    // width: {lg:"88%",xs:"75%",md:"92%",sm:"90%"}
                }}
            >
                <Typography align="center" sx={{fontSize:"2rem"}} >
                  Today  Panchang
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Date (dd/mm/yyyy)"
                                type="text"
                                value={date}
                                onChange={(e) => setDate(e.target.value.trim())}
                                margin="normal"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Time (hh:mm)"
                                type="text"
                                value={time}
                                onChange={(e) => setTime(e.target.value.trim())}
                                margin="normal"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="City"
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value.trim())}
                                margin="normal"
                                fullWidth
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
                                    backgroundColor: "#FF6F00",marginTop:"1.2rem",
                                    padding: { xs: "0.5rem", sm: "1rem" }, // Responsive padding
                                }}
                            >
                            Today Panchang
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
};

export default Panchang;
