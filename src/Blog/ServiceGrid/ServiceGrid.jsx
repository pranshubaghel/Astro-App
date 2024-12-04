import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Custom styles
const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: '#7E57C2', // Adjust the background color as needed
        padding: theme.spacing(4, 0),
    },
    itemBox: {
        backgroundColor: '#3949AB',
        padding: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        color: '#fff',
    },
    icon: {
        fontSize: 40,
        marginBottom: theme.spacing(1),
        opacity: 0.6, // Adjust opacity if needed
    },
    text: {
        backgroundColor: '#3949AB',
        padding: theme.spacing(0.5, 1),
        borderRadius: 4,
    },
}));

const services = [
    { title: 'Remedial Services', icon: '🌸' }, // Replace with the actual icon you want
    { title: 'Astrological Guidance', icon: '🔮' },
    { title: 'Assured Privacy', icon: '🔒' },
    { title: 'Vedic Solutions', icon: '📜' },
];

const ServiceGrid = () => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Grid container spacing={3} justifyContent="center">
                {services.map((service, index) => (
                    <Grid item key={index} xs={6} sm={3}>
                        <Box className={classes.itemBox}>
                            <span className={classes.icon}>{service.icon}</span>
                            <Typography variant="subtitle1" className={classes.text}>
                                {service.title}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ServiceGrid;
