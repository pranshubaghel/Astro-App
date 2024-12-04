import React, { useState } from 'react';
import axios from 'axios';
import { Container, Grid, TextField, Button, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function KundaliMatching() {
    const [boyDetails, setBoyDetails] = useState({
        boy_dob: '',
        boy_tob: '',
        boy_pob: '',
        boy_name: ''
    });

    const [girlDetails, setGirlDetails] = useState({
        girl_dob: '',
        girl_tob: '',
        girl_pob: '',
        girl_name: ''
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleBoyChange = (e) => {
        const { name, value } = e.target;
        setBoyDetails({ ...boyDetails, [name]: value });
    };

    const handleGirlChange = (e) => {
        const { name, value } = e.target;
        setGirlDetails({ ...girlDetails, [name]: value });
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formattedBoyDetails = {
            ...boyDetails,
            boy_dob: formatDate(boyDetails.boy_dob),
        };
        const formattedGirlDetails = {
            ...girlDetails,
            girl_dob: formatDate(girlDetails.girl_dob),
        };

        try {
            const params = new URLSearchParams({
                ...formattedBoyDetails,
                ...formattedGirlDetails,
            });

            console.log('Request Params:', params.toString());

            const response = await axios.get(`https://gloumastro.com:5000/kundali/matching?${params.toString()}`);
            console.log('Response Data Aman:', response.data);

            setError('');
            navigate('/matching-data', { state: { result: response.data } });
        } catch (error) {
            console.error('Error fetching matching details:', error);
            setError('Failed to fetch the matching details.');
        }
    };

    return (
        <Container sx={{ backgroundColor: "#FFD180", padding: "2rem", width: {lg:"33%",sm:"100%",md:"100%",xs:"100%"},}}>
            <Paper
                elevation={4}
                sx={{
                    padding: { xs: '1rem', sm: '2rem', md: '2.5rem' }, // Responsive padding
                    // backgroundColor: "#FAF9F6",
                }}
            >
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{ textAlign: "center", fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem" } }}
                >
                    Kundali Matching
                </Typography>

                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Boy's Name"
                                name="boy_name"
                                value={boyDetails.boy_name}
                                onChange={handleBoyChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Boy's DOB"
                                type="date"
                                name="boy_dob"
                                value={boyDetails.boy_dob}
                                onChange={handleBoyChange}
                                required
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                name="boy_tob"
                                type="time"
                                value={boyDetails.boy_tob}
                                onChange={handleBoyChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Boy's Birth Place"
                                name="boy_pob"
                                value={boyDetails.boy_pob}
                                onChange={handleBoyChange}
                                required
                            />
                        </Grid>

                        {/* Girl's Details */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Girl's Name"
                                name="girl_name"
                                value={girlDetails.girl_name}
                                onChange={handleGirlChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Girl's DOB"
                                type="date"
                                name="girl_dob"
                                value={girlDetails.girl_dob}
                                onChange={handleGirlChange}
                                required
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                name="girl_tob"
                                type="time"
                                value={girlDetails.girl_tob}
                                onChange={handleGirlChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Girl's POB"
                                name="girl_pob"
                                value={girlDetails.girl_pob}
                                onChange={handleGirlChange}
                                required
                            />
                        </Grid>

                        {/* Submit Button */}
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{
                                    backgroundColor: "#FF6F00",
                                    padding: { xs: "0.5rem", sm: "1rem" }, // Responsive padding
                                }}
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>

                {error && (
                    <Typography
                        variant="body1"
                        color="error"
                        sx={{ marginTop: '1rem', fontSize: { xs: "0.875rem", sm: "1rem" } }}
                    >
                        {error}
                    </Typography>
                )}
            </Paper>
        </Container>
    );
}

export default KundaliMatching;
