// import React, { useState } from 'react';
// import { Box, Button, Container, TextField, Typography, MenuItem, Select, FormControl, InputLabel, Grid ,List,ListItem,} from '@mui/material';
// const FamilyAstrology = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobileNo: '',
//     city: '',
//     countryCode: '+1',
//   });

//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//     mobileNo: '',
//     city: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validate = () => {
//     let tempErrors = { name: '', email: '', mobileNo: '', city: '' };
//     let isValid = true;

//     if (!formData.name) {
//       tempErrors.name = 'Name is required';
//       isValid = false;
//     }
//     if (!formData.email) {
//       tempErrors.email = 'Email is required';
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       tempErrors.email = 'Email is not valid';
//       isValid = false;
//     }
//     if (!formData.mobileNo) {
//       tempErrors.mobileNo = 'Mobile number is required';
//       isValid = false;
//     } else if (!/^\d{10}$/.test(formData.mobileNo)) {
//       tempErrors.mobileNo = 'Mobile number should be 10 digits';
//       isValid = false;
//     }
//     if (!formData.city) {
//       tempErrors.city = 'City is required';
//       isValid = false;
//     }

//     setErrors(tempErrors);
//     return isValid;
//   };

//   const handleSubmit = () => {
//     if (validate()) {
//       console.log('Form data submitted:', formData);
//     }
//   };

//   return (
//     <>
//       <Container
//         maxWidth="false"
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           minHeight: '100vh',
//           backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTMe4sMyGJ39JE935G0eNYhh6_TuLSZqBW5g&s)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           padding: 0,
//         }}
//       >
//         <Grid container spacing={2} sx={{ flex: 1, flexDirection: { xs: 'column', md: 'row' } }}>
//           <Grid item xs={12} md={6}>
//             <Box sx={{ backgroundColor: 'white', borderRadius: 2, boxShadow: 3, padding: 4 }}>
//               <Typography variant="h5" component="h3" sx={{ marginBottom: 2, textAlign: 'center' }}>
//                 Enter Your Details
//               </Typography>
//               <TextField
//                 label="Your Name"
//                 name="name"
//                 fullWidth
//                 variant="outlined"
//                 margin="normal"
//                 value={formData.name}
//                 onChange={handleChange}
//                 error={Boolean(errors.name)}
//                 helperText={errors.name}
//               />
//               <TextField
//                 label="Email"
//                 name="email"
//                 fullWidth
//                 variant="outlined"
//                 margin="normal"
//                 value={formData.email}
//                 onChange={handleChange}
//                 error={Boolean(errors.email)}
//                 helperText={errors.email}
//               />
//               <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', marginBottom: 2 }}>
//                 <FormControl fullWidth variant="outlined" margin="normal">
//                   <InputLabel>Country Code</InputLabel>
//                   <Select
//                     name="countryCode"
//                     value={formData.countryCode}
//                     onChange={handleChange}
//                     label="Country Code"
//                   >
//                     <MenuItem value="+1">+1 (USA)</MenuItem>
//                     <MenuItem value="+91">+91 (India)</MenuItem>
//                     <MenuItem value="+44">+44 (UK)</MenuItem>

//                   </Select>
//                 </FormControl>
//                 <TextField
//                   label="Mobile Number"
//                   name="mobileNo"
//                   placeholder="Mobile Number"
//                   fullWidth
//                   variant="outlined"
//                   margin="normal"
//                   value={formData.mobileNo}
//                   onChange={handleChange}
//                   error={Boolean(errors.mobileNo)}
//                   helperText={errors.mobileNo}
//                   sx={{ marginLeft: { xs: 0, sm: 2 }, marginTop: { xs: 2, sm: 0 } }}
//                 />
//               </Box>
//               <TextField
//                 label="City"
//                 name="city"
//                 fullWidth
//                 variant="outlined"
//                 margin="normal"
//                 value={formData.city}
//                 onChange={handleChange}
//                 error={Boolean(errors.city)}
//                 helperText={errors.city}
//               />
//               <Button
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//                 sx={{ marginTop: 2, backgroundColor: '#F05023' }}
//                 onClick={handleSubmit}
//               >
//                 Submit
//               </Button>
//             </Box>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Box sx={{ color: 'white', textAlign: 'left', padding: 4, display: { xs: 'none', md: 'block' } }}>
//               <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', color: '#F05023' }}>
//                 GLOUM CONNECT FAMILY WELL-BEING PROGRAM
//               </Typography>
//               <Typography variant="h5" component="h2" sx={{ marginTop: 2, color: 'white' }}>
//                 Invoke Divine Archetypes for Personal and Family Welfare, Protection & Growth
//               </Typography>
//               <Typography variant="h6" component="p" sx={{ marginTop: 2, color: '#F05023' }}>
//                 365-Day Spiritual & Vedic Technology for Total Well-Being
//               </Typography>
//             </Box>
//             <Box sx={{ color: 'white', textAlign: 'center', padding: 4, display: { xs: 'block', md: 'none' } }}>
//               <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', color: '#F05023' }}>
//                 GLOUM CONNECT FAMILY WELL-BEING PROGRAM
//               </Typography>
//               <Typography variant="h5" component="h2" sx={{ marginTop: 2, color: 'white' }}>
//                 Invoke Divine Archetypes for Personal and Family Welfare, Protection & Growth
//               </Typography>
//               <Typography variant="h6" component="p" sx={{ marginTop: 2, color: '#F05023' }}>
//                 365-Day Spiritual & Vedic Technology for Total Well-Being
//               </Typography>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//       <Box>
//         <Box
//           sx={{
//             padding: 4,
//             backgroundColor: '#f5f5f5',
//             borderRadius: 2,
//             boxShadow: 2,
//             textAlign: 'center',
//           }}
//         >
//           <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
//             OVERVIEW
//           </Typography>
//           <Typography variant="h6" component="h3" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
//             365-Day Family Program for Total Well-Being
//           </Typography>
//           <Typography variant="body1" component="p" sx={{ marginBottom: 2 }}>
//             The well-being of our family is at the heart of everything we do in life. As a member of the Gloum Connect family, we care for the well-being of you and your loved ones. Gloum Connect is introducing a new Family Well-Being Program that uses comprehensive Vedic rituals and Powerspot remedies to support your overall well-being and that of your family members.
//           </Typography>
//           <Typography variant="body1" component="p">
//             This Program, inclusive of powerful Daily Poojas, Monthly Fire Labs, Supporting Powerspot Poojas, Sacred Hymns Chanting with Birth Chart Pooja, and Personalized Astrology Consultations, is targeted to bring happiness, success, prosperity, and protection to you and your family throughout the year.
//           </Typography>
//         </Box>
//       </Box>
//       <Box>
//         <Box
//           sx={{
//             padding: 4,
//             backgroundColor: '#f5f5f5',
//             borderRadius: 2,
//             boxShadow: 2,
//             marginTop: 4,
//           }}
//         >
//           <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', marginBottom: 2, textAlign: 'center' }}>
//             How Our Family Well-Being Program Can Help Strengthen Your Family
//           </Typography>
//           <Typography variant="body1" component="p" sx={{ marginBottom: 2 }}>
//             Our 12 Months Program offers a wide range of carefully curated services to various Archetypes throughout the year to cater to your family’s unique needs and usher in growth, well-being, happiness, and unity. They include:
//           </Typography>
//           <List>
//             <ListItem>
//               <ListItemIcon>
//                 <StarIcon sx={{ color: 'yellow' }} />
//               </ListItemIcon>
//               <ListItemText
//                 primary="Personalized Astrological Consultation"
//                 secondary="This one-on-one session with our experienced Astrologer can help you seek guidance on your family’s problems/concerns by interpreting their planetary positions, identifying possible remedies to course-correct your present situation, and mitigating the influence of your past life karma on your and your loved ones’ future."
//               />
//             </ListItem>
//             <ListItem>
//               <ListItemIcon>
//                 <StarIcon sx={{ color: 'yellow' }} /> {/* Yellow icon */}
//               </ListItemIcon>
//               <ListItemText
//                 primary="30-Days Poojas at 30 Powerspots For Family Well-Being"
//                 secondary="These exclusive vortices which radiate with Divine energy, have been carefully selected by our experts to perform sacred rituals to invoke the abundant blessings of Relationship Archetypes to remove hardships affecting your peace and harmony and promote a strong familial bond."
//               />
//             </ListItem>
//             <ListItem>
//               <ListItemIcon>
//                 <StarIcon sx={{ color: 'yellow' }} /> {/* Yellow icon */}
//               </ListItemIcon>
//               <ListItemText
//                 primary="365-Days Navagraha Pooja"
//                 secondary="Navagraha are executioners of your karma, bestowed with the power to execute the destiny of all living beings. Propitiating them can help your family enjoy the fruits of good karma, mitigate the adverse karmic issues associated with the planets, offset the planets’ challenging effects, and bring in focused empowerment to strengthen key areas of your life—wealth, health, prosperity, career/business progress, progeny, and happy relationships."
//               />
//             </ListItem>
//             <ListItem>
//               <ListItemIcon>
//                 <StarIcon sx={{ color: 'yellow' }} /> {/* Yellow icon */}
//               </ListItemIcon>
//               <ListItemText
//                 primary="365-Days Lakshmi Varahi Pooja"
//                 secondary="Varahi represents the Swift Boon-Bestowing Divine Feminine Energy and is an aspect of Goddess Lakshmi, Supreme Goddess of Wealth, Fortune, and Abundance. Invoking these Goddesses with daily rituals can help your family deeply connect with their abundance-bestowing powers for material progress and to alleviate debt, misfortune, and suffering."
//               />
//             </ListItem>
//             <ListItem>
//               <ListItemIcon>
//                 <StarIcon sx={{ color: 'yellow' }} />
//               </ListItemIcon>
//               <ListItemText
//                 primary="Monthly Grand Ayush Homa (Fire Lab for Health & Vitality)"
//                 secondary="Invoking the blessings of Ayur Devata, Archetype of Life Force Energy, can empower you and your family with the strength and vitality to handle your material and spiritual responsibilities and boost your ability to overcome obstacles and succeed in your endeavors."
//               />
//             </ListItem>
//             <ListItem>
//               <ListItemIcon>
//                 <StarIcon sx={{ color: 'yellow' }} />
//               </ListItemIcon>
//               <ListItemText
//                 primary="Specialized Copper Birth Chart Pooja"
//                 secondary="A Birth Chart is the unique karmic map of an individual, which indicates the position of the planets at the time of birth as a result of past life deeds. Energizing your family members’ birth chart with sacred mantras and a Pooja, an act of spiritual empowerment, can help channel Divine benediction and bestow life-transforming blessings."
//               />
//             </ListItem>
//           </List>
//         </Box>
//       </Box>


//     </>
//   );
// };

// export default FamilyAstrology; 