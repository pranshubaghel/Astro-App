
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Button, MenuItem, FormControl, InputLabel, Select, Typography, Box } from '@mui/material';
import axios from 'axios';

const SelectLocation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { cityName, dateOfBirth, timeOfBirth } = location.state || {};
    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');

    useEffect(() => {
        // Fetch locations based on the city name when the component mounts
        const fetchLocations = async () => {
            try {
                const response = await axios.get('https://gloumastro.com:5000/birthChart/locations', {
                    params: { cityName }
                });

                if (response.data && typeof response.data === 'object') {
                    const flattenedLocations = Object.entries(response.data).flatMap(([name, cities]) =>
                        cities.map(city => ({
                            name,
                            country: city.country,
                            latitude: city.latitude,
                            longitude: city.longitude
                        }))
                    );
                    setLocations(flattenedLocations);
                } else {
                    setLocations([]);
                    console.error('Invalid data format received:', response.data);
                }
            } catch (error) {
                console.error('Failed to fetch locations:', error);
                setLocations([]);
            }
        };

        if (cityName) {
            fetchLocations();
        }
    }, [cityName]);

    const handleSelectLocation = () => {
        if (!selectedLocation) {
            alert('Please select a location.');
            return;
        }

        // Navigate to the next page and pass the selected location and other data
        navigate('/kundali-data', {
            state: {
                dateOfBirth,
                timeOfBirth,
                selectedLocation
            }
        });
    };

    return (
        <Container sx={{ backgroundColor: "", }}>
            <Typography variant="h4" gutterBottom sx={{ textAlign: "" }}>
                Select Location
            </Typography>
            <Box mt={4}>
                <FormControl sx={{ width: "35%" }}>
                    <InputLabel>Select Location</InputLabel>
                    <Select
                        value={selectedLocation ? selectedLocation.name : ''}
                        onChange={(e) => {
                            const location = locations.find(loc => loc.name === e.target.value);
                            setSelectedLocation(location);
                        }}
                    >
                        {locations.map((location) => (
                            <MenuItem key={location.name} value={location.name}>
                                {location.name} ({location.country})
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl><br></br>
                <Button variant="contained" color="secondary" onClick={handleSelectLocation} sx={{ margin: '5px' }}>
                    Next
                </Button>
            </Box>
        </Container>
    );
};

export default SelectLocation;
