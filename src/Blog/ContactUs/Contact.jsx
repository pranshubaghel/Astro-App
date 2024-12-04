import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Container, Paper, Box, Link } from "@mui/material";
import { styled } from '@mui/system';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const StyledContainer = styled(Container)({
    backgroundColor: '#FFF3E0',
    marginTop: "10px",
    padding: '20px',
    minHeight: '95vh',
    borderRadius: "8px"
});

const StyledFormContainer = styled(Paper)({
    padding: '30px',

});

const ContactInfo = styled(Box)({
    backgroundColor: '#F5F5F5',
    padding: '20px',
    textAlign: 'left',
});

const SubmitButton = styled(Button)({
    marginTop: '15px',
    backgroundColor: '#1976d2',
    color: 'white',
});

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validate = () => {
        let tempErrors = {};
        tempErrors.firstName = formData.firstName ? "" : "First Name is required.";
        tempErrors.lastName = formData.lastName ? "" : "Last Name is required.";
        tempErrors.mobile = formData.mobile.length === 10 ? "" : "Mobile number should be 10 digits.";
        tempErrors.email = /\S+@\S+\.\S+/.test(formData.email) ? "" : "Email is not valid.";
        tempErrors.message = formData.message ? "" : "Message is required.";

        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert('Form submitted successfully!');
            // Reset form fields after successful submission
            setFormData({
                firstName: '',
                lastName: '',
                mobile: '',
                email: '',
                message: '',
            });
            setErrors({}); // Optionally reset errors too
        }
    };
    

    return (
        <Box sx={{ width:"100%"}}>
            <Typography sx={{ height: '7vh', width: "100%", backgroundColor: "#9f2800", color: 'white',fontSize:{lg:"1.5rem",md:"1.3rem",sm:"1.3rem",xs:"1.1rem"},display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"600" }}>
                Contact Us
            </Typography>

            <Grid container spacing={2}>
                {/* Form Section */}
                <Grid item xs={12} md={7}>
                    <StyledFormContainer elevation={3}>
                        <Typography variant="h6" gutterBottom>
                            Ask Your Any Questions
                        </Typography>
                        <form noValidate onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="firstName"  // Updated here
                                        label="First Name *"
                                        fullWidth
                                        variant="outlined"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        error={!!errors.firstName}
                                        helperText={errors.firstName}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="lastName"  // Updated here
                                        label="Last Name *"
                                        fullWidth
                                        variant="outlined"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        error={!!errors.lastName}
                                        helperText={errors.lastName}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="mobile"  // Updated here
                                        label="Mobile No. *"
                                        fullWidth
                                        variant="outlined"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        error={!!errors.mobile}
                                        helperText={errors.mobile}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="email"  // Updated here
                                        label="Email *"
                                        fullWidth
                                        variant="outlined"
                                        value={formData.email}
                                        onChange={handleChange}
                                        error={!!errors.email}
                                        helperText={errors.email}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name="message"  // Updated here
                                        label="Message *"
                                        fullWidth
                                        variant="outlined"
                                        multiline
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        error={!!errors.message}
                                        helperText={errors.message}
                                    />
                                </Grid>
                            </Grid>
                            <SubmitButton
                                type="submit"
                                sx={{ width: '10vw' }}
                                variant="contained"
                            >
                                Submit
                            </SubmitButton>
                        </form>
                    </StyledFormContainer>
                </Grid>

                {/* Contact Info Section */}
                <Grid item xs={12} md={5}>
                    <ContactInfo>
                        <Typography variant="h6" gutterBottom>
                            <LocationOnIcon sx={{ color: 'red' }} /> Address
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                        Best Astrologer  
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Phone Number: <Link href="tel:+917200033010" color="inherit">+44 79619278277</Link>
                        </Typography>
                        {/* <Typography variant="body2" color="primary" component="a" href="https://www.google.com/maps/dir/22.7195687,75.8577258/Sally+Beauty,+2261+Coventry+Rd,+Sheldon,+Birmingham+B26+3PD,+United+Kingdom/@29.2497444,-6.2756418,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x4870bbdbd2c5e70d:0x3cfb98035b9aad77!2m2!1d-1.7782905!2d52.4509818?entry=ttu&g_ep=EgoyMDI0MDkyNC4wIKXMDSoASAFQAw%3D%3D" gutterBottom>
                            Google Maps Link
                        </Typography> */}

                        <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
                            <PhoneIcon sx={{ color: 'red' }} /> Contact
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Phone: <Link href="tel:+917200044010" color="inherit">+44 7961927534</Link>
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            <EmailIcon sx={{ color: 'red' }} /> Email: <Link href="mailto:astro@gmail.com" color="inherit">support@astro.com</Link>
                        </Typography>
                    </ContactInfo>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Contact;