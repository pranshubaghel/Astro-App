import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Typography, Box } from '@mui/material';
import axios from 'axios';

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        setError('');
        setSuccess('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        // Clear any previous error or success messages
        setError('');
        setSuccess('');

        try {
            const response = await axios.post('https://gloum.onrender.com/auth/register', {
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                password: formData.password,
            });

            if (response.status === 201 || response.data.success) {
                setSuccess(response.data.message || 'Registration successful!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                });
            } else {
                setError(response.data.error || 'An error occurred during registration. Please try again.');
            }
        } catch (error) {
            if (error.response) {
                setError(error.response.data.error || 'An error occurred during registration. Please try again.');
            } else {
                setError('An error occurred. Please check your network connection and try again.');
            }
        }
    };

    return (
        <Container maxWidth="sm">
            <Box
                sx={{ height: { lg: '85vh', xs: '70vh' }, width: { lg: '100%', xs: '100%' }, justifyContent: 'center', textAlign: 'center', alignItems: 'center', backgroundColor: '#F6E199', borderRadius: '5px', paddingTop: '2px' }}
            >
                <Box component="form" onSubmit={handleSubmit} sx={{ backgroundColor: '#ffffff', margin: '2rem', padding: '1rem', borderRadius: '5px' }}>
                    <Typography component="h1" variant="h5" sx={{ fontWeight: '800',padding:"2rem" }}>
                        WELCOME TO ASTRO
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="family-name"
                                name="lastName"
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                id="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                    {error && (
                        <Typography color="error" sx={{ mt: 2 }}>
                            {error}
                        </Typography>
                    )}
                    {success && (
                        <Typography color="primary" sx={{ mt: 2 }}>
                            {success}
                        </Typography>
                    )}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, backgroundColor: '#F6E199', fontSize: '1.4rem', fontWeight: '600' }}
                    >
                        Sign Up
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default SignUp;