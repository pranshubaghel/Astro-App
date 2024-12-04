import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const KundaliData = () => {
    const location = useLocation();
    const { dateOfBirth, timeOfBirth, selectedLocation } = location.state;
    const [birthChartData, setBirthChartData] = useState(null);
    const [ashtakvargaData, setAshtakvargaData] = useState(null);
    const [planetDetails, setPlanetDetails] = useState(null);
    const [showContent, setShowContent] = useState('');
    const [ashtakvargaFetched, setAshtakvargaFetched] = useState(false); // New state variable
   
    
    useEffect(() => {
        if (!selectedLocation) return;

        const fetchData = async () => {
            try {
                const birthChartResponse = await axios.get('https://gloumastro.com:5000/birthChart/birthchart', {
                    params: {
                        dob: dateOfBirth,
                        tob: timeOfBirth,
                        lat: selectedLocation.latitude,
                        lon: selectedLocation.longitude
                    }
                });
                setBirthChartData(birthChartResponse.data);
                
                const planetDetailsResponse = await axios.get('https://gloumastro.com:5000/birthChart/planetDetails', {
                    params: {
                        dob: dateOfBirth,
                        tob: timeOfBirth,
                        lat: selectedLocation.latitude,
                        lon: selectedLocation.longitude
                    }
                });
                setPlanetDetails(planetDetailsResponse.data.response);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        fetchData();
    }, [dateOfBirth, timeOfBirth, selectedLocation]);

    const handleFetchAshtakvarga = async () => {
        try {
            const response = await axios.get('https://gloumastro.com:5000/birthChart/ashtakvarga', {
                params: {
                    dob: dateOfBirth,
                    tob: timeOfBirth,
                    lat: selectedLocation.latitude,
                    lon: selectedLocation.longitude
                }
            });
            setAshtakvargaData(response.data);
            setShowContent('ashtakvarga');
            setAshtakvargaFetched(true); // Set the state to true after fetching data
        } catch (error) {
            console.error('Failed to fetch Ashtakvarga chart:', error);
        }
    };

    const formatAshtakvargaData = (data) => {
        if (!data || !data.response) return null;

        const { ashtakvarga_order, ashtakvarga_points, ashtakvarga_total } = data.response;

        const headers = ashtakvarga_order;
        const rows = [
            'Ar', 'Ta', 'Ge', 'Ca', 'Le', 'Vi', 'Li', 'Sc', 'Sa', 'Ca', 'Aq', 'Pi'
        ];

        return rows.map((row, rowIndex) => ({
            zodiacSign: row,
            ...Object.fromEntries(headers.map((header, colIndex) => [header, ashtakvarga_points[colIndex][rowIndex]])),
            total: ashtakvarga_total[rowIndex]
        }));
    };

    return (
        <Container>
            <Box mt={4}> 
                <Typography variant="h6">Birth Chart</Typography>
                {birthChartData ? (
                    <Box component="div" dangerouslySetInnerHTML={{ __html: birthChartData }} />
                ) : (
                    <Typography>Loading birth chart...</Typography>
                )}
            </Box>

            <Box mt={4}>
                <Typography variant="h6">Planet Details</Typography>
                {planetDetails ? (
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Rashi</TableCell>
                                    <TableCell>Nakshatra</TableCell>
                                    <TableCell>Nakshatra Pada</TableCell>
                                    <TableCell>Lord Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Object.keys(planetDetails)
                                    .filter(key => key >= 1 && key <= 9)
                                    .map(key => (
                                        <TableRow key={key}>
                                            <TableCell>{planetDetails[key].name}</TableCell>
                                            <TableCell>{planetDetails[key].zodiac}</TableCell>
                                            <TableCell>{planetDetails[key].nakshatra}</TableCell>
                                            <TableCell>{planetDetails[key].nakshatra_pada}</TableCell>
                                            <TableCell>{planetDetails[key].lord_status}</TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                ) : (
                    <Typography>Loading planet details...</Typography>
                )}
            </Box>
            <Box>
            {!ashtakvargaFetched && ( // Conditionally render the button
                <Button variant="contained" color="secondary" onClick={handleFetchAshtakvarga} sx={{ marginTop: '20px' }}>
                    Fetch Ashtakvarga Chart
                </Button>
            )}

            </Box>
          
            {showContent === 'ashtakvarga' && ashtakvargaData && (
                <Box mt={4}>
                    <Typography variant="h6">Ashtakvarga Chart</Typography>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Zodiac Sign</TableCell>
                                    {ashtakvargaData.response.ashtakvarga_order.map((header, index) => (
                                        <TableCell key={index}>{header}</TableCell>
                                    ))}
                                    <TableCell>Total</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {formatAshtakvargaData(ashtakvargaData).map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{row.zodiacSign}</TableCell>
                                        {ashtakvargaData.response.ashtakvarga_order.map((header, colIndex) => (
                                            <TableCell key={colIndex}>{row[header]}</TableCell>
                                        ))}
                                        <TableCell>{row.total}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            )}
        </Container>
    );
};

export default KundaliData;
