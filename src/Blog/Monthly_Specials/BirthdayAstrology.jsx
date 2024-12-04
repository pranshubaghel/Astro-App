// import React, { useState } from 'react';
// import { Box, Typography, Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
// import SpecialPooja from './SpecialPooja';
// import BhirthdayServices from './BhirthdayServices';
// import BhirthStar from './BirthStar';

// function BirthdayAstrology() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     countryCode: '',
//     mobileNo: '',
//     city: ''
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = 'Name is required';
//     if (!formData.email) newErrors.email = 'Email is required';
//     if (!formData.mobileNo) newErrors.mobileNo = 'Mobile no is required';
//     if (!formData.city) newErrors.city = 'City is required';

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       console.log('Form Data:', formData);
//     }
//   };

//   return (
//     <>
//       <Box
//         sx={{
//           display: 'flex',
//           justifyContent: 'flex-start',
//           alignItems: 'center',
//           minHeight: '70vh',
//           padding: '2rem',
//           backgroundImage: 'url(https://pittsburghquarterly.com/wp-content/uploads/articles/2024-05-22-2-e1716392714136-1024x586.png)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         <Box
//   sx={{
//     padding: '2rem',
//     borderRadius: '1rem',
//     maxWidth: '600px',
//     textAlign: {
//       xs: 'left',  // Align text to the left for extra-small screens
//       sm: 'center', // Center text for small screens and up
//     },
//     display: 'flex',
//     flexDirection: 'column', // Ensure content is stacked vertically
//     alignItems: {
//       xs: 'flex-start',  // Align items to the start for extra-small screens
//       sm: 'center'      // Center items for small screens and up
//     },
//   }}
// >
//   <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'orange' }}>
//     GLOUMASTRO SPECIAL BIRTHDAY RITUALS PACKAGES
//   </Typography>
//   <Typography variant="h6" gutterBottom sx={{ color: 'yellow' }}>
//     12 Power Rituals to Remove Obstacles, Rejuvenate, & Realize Success This Birth Year
//   </Typography>
//   <Typography variant="body1" paragraph sx={{ color: 'yellow' }}>
//     Celebrate Your Special Day With the Blessings & Protection of Powerful Divine Archetypes
//   </Typography>
//   <Button
//     variant="contained"
//     color="primary"
//     sx={{ mt: 2 }}
//   >
//     VIEW SPECIAL BIRTHDAY RITUALS PACKAGES
//   </Button>
// </Box>

//       </Box>
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           padding: '2rem',
//           textAlign: 'center'
//         }}
//       >
//         <Typography variant="h5" sx={{ color: 'red', fontWeight: 'bold', marginBottom: 2 }}>
//           New to GLOUMSASTRO?
//         </Typography>
//         <Typography variant="subtitle1" sx={{ color: 'black', marginBottom: 2 }}>
//           Join Now to Receive Great Offers & Make Your Birthday Special!
//         </Typography>
//         <Box
//           component="form"
//           sx={{
//             display: 'flex',
//             flexDirection: {
//               xs: 'column', // Stack vertically for extra-small screens
//               sm: 'row'    // Align horizontally for small screens and up
//             },
//             alignItems: 'center', // Center items horizontally
//             justifyContent: 'center',
//             gap: {
//               xs: 1,  // Smaller gap for extra-small screens
//               sm: 2   // Larger gap for small screens and up
//             },
//             marginBottom: 2,
//             width: '100%',
//             maxWidth: 800
//           }}
//           noValidate
//           autoComplete="off"
//         >
//           <Box sx={{ flex: 1, maxWidth: 400 }}>
//             <TextField
//               label="Name"
//               name="name"
//               variant="outlined"
//               fullWidth
//               value={formData.name}
//               onChange={handleChange}
//               error={Boolean(errors.name)}
//               helperText={errors.name}
//               sx={{ marginBottom: 2 }}
//             />
//           </Box>
//           <Box sx={{ flex: 1, maxWidth: 400 }}>
//             <TextField
//               label="Mail Id"
//               name="email"
//               variant="outlined"
//               fullWidth
//               value={formData.email}
//               onChange={handleChange}
//               error={Boolean(errors.email)}
//               helperText={errors.email}
//               sx={{ marginBottom: 2 }}
//             />
//           </Box>
//           <Box sx={{ flex: 1, maxWidth: 400,marginBottom: 2  }}>
//   <FormControl variant="outlined" fullWidth>
//     <InputLabel>Code</InputLabel>
//     <Select
//       name="countryCode"
//       value={formData.countryCode}
//       onChange={handleChange}
//       label="Code"
//     >
//       <MenuItem value="+1">+1 (USA)</MenuItem>
//       <MenuItem value="+91">+91 (India)</MenuItem>
//       <MenuItem value="+44">+44 (UK)</MenuItem>
//     </Select>
//   </FormControl>
// </Box>

//           <Box sx={{ flex: 1, maxWidth: 400 }}>
//             <TextField
//               label="Mobile Number"
//               name="mobileNo"
//               variant="outlined"
//               fullWidth
//               value={formData.mobileNo}
//               onChange={handleChange}
//               error={Boolean(errors.mobileNo)}
//               helperText={errors.mobileNo}
//               sx={{ marginBottom: 2 }}
//             />
//           </Box>
//           <Box sx={{ flex: 1, maxWidth: 400 }}>
//             <TextField
//               label="City"
//               name="city"
//               variant="outlined"
//               fullWidth
//               value={formData.city}
//               onChange={handleChange}
//               error={Boolean(errors.city)}
//               helperText={errors.city}
//               sx={{ marginBottom: 2 }}
//             />
//           </Box>
//         </Box>
//         <Button
//           variant="contained"
//           color="primary"
//           sx={{ backgroundColor: 'hotpink' }}
//           onClick={handleSubmit}
//         >
//           SUBMIT
//         </Button>
//       </Box>
//       <Box
//         sx={{
//           textAlign: 'center',
//           marginTop: '0rem'
//         }}
//       >
//         <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'goldenrod', marginBottom: 1 }}>
//           Birthday Special Offer
//         </Typography>
//         <Typography variant="h6" sx={{ color: 'black' }}>
//           Up to <span style={{ color: 'red', fontWeight: 'bold' }}>40% OFF</span> Birthday Ceremonies Package
//         </Typography>
//       </Box>
//       <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', marginBottom: 2, textAlign: 'center', marginTop: '1rem' }}>
//         OVERVIEW
//       </Typography>
//       <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', marginBottom: 2, textAlign: 'center' }}>
//         Invoke Potent Divine Blessings on Your Birthday
//       </Typography>
//       <Typography
//         variant="body1"
//         component="div"
//         sx={{
//           marginBottom: 2,
//           marginLeft: {
//             xs: '1rem', // Adjust margin for small screens
//             sm: '3rem'  // Larger margin for larger screens
//           },
//           marginRight: {
//             xs: '1rem', // Adjust margin for small screens
//             sm: '1rem'  // Consistent margin for larger screens
//           },
//         }}
//       >
//         You are special to us. We would like to honor and empower you on your Birthday, your personal power day meant exclusively for you. We have created an all-in-one package of powerful rituals as prescribed in ancient sacred texts to help you access the comprehensive blessings and life-transforming energy of Divine Archetypes to smash obstacles to success, empower your birth star energy within you, remove negative karma and boost your health, vitality and overall prosperity.
//       </Typography>
//       <Box>
//       <BirthdayServices/>
//       <SpecialPooja/>
//       <BhirthStar/>
//       </Box>
//     </>
//   );
// }

// export default BirthdayAstrology;