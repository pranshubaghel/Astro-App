import React, { useState } from 'react';
import { Box, List, ListItem, Typography, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NavLink } from 'react-router-dom';
import Image1 from './image1.jpg'
import Image2 from './image2.jpg'
import Image3 from './image3.jpg'
import Image4 from './image4.jpg'
import Image5 from './image5.jpg'
import Image6 from './image6.jpg'
import Image7 from './image7.jpg'

const SecondNav = () => {

  const [open, setOpen] = useState(false);
  return (
    <>

      <Box sx={{ marginTop: "1rem" }}>
        <Box sx={{ display: { lg: "flex" }, width: "95%", margin: "auto", justifyContent: "space-between", }}
        >
          {/* Container Box with Hover Effect */}
          <Box
            sx={{
              position: 'relative',
              bgcolor: 'background.paper',
              padding: 2,
              borderRadius: 1,
              cursor: 'pointer',
              '&:hover .content': {
                opacity: 1,
                visibility: 'visible',
              },
              '&:hover .icon': {
                transform: 'rotate(180deg)',
                transition: 'transform 0.3s ease',
              },
            }}
          >
            <Box
              component="img"
              src={Image1}
              alt="AstroVed Speaks"
              sx={{
                height: { lg: "8rem", md: "auto", sm: "auto", xs: "auto" },
                width: "100%",
                borderRadius: "5px",
                objectFit: "cover",
              }}
            />
            <Typography component="div" sx={{
              mb: 0, width: "100%",
              display: 'flex',
              justifyContent: "space-between",
              alignItems: 'center',
              fontSize: { xs: '16px', sm: '14px', md: '14px', lg: '12px' },
              fontWeight: "600",
              cursor: 'pointer',
              color: 'text.primary',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: 'blue',
                '& .icon': {
                  color: 'blue',
                  transform: 'rotate(180deg)',
                },
              },
              // Space between text and icon
            }}>
               Astro Speaks
              <ExpandMoreIcon
                className="icon"
                sx={{
                  margin: "2px",
                  transition: 'transform 0.3s ease',
                  transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </Typography>

            {/* Content Box */}
            <Box
              className="content"
              sx={{
                position: 'absolute',
                top: '100%',
                left: 0,
                width: '100%',
                bgcolor: '#d8894e',
                border: '1px solid',
                borderColor: 'divider',
                opacity: open ? 1 : 0,
                visibility: open ? 'visible' : 'hidden',
                transition: 'opacity 0.2s ease, visibility 0.2s ease',
                zIndex: 1,
                color: "#ffffff"
              }}
            >
              <ul style={{ listStyleType: 'none', paddingLeft: "1rem", fontSize: '13px', fontWeight: '500' }}>
                <NavLink to='/horoscope' activeClassName="active" style={{ color: 'inherit', textDecoration: 'none' }}>
                  <li style={{ cursor: 'pointer', padding: '8px 0', color: 'inherit' }}>
                    Horoscope - Daily, Weekly & Monthly
                  </li>
                </NavLink>

                <li style={{ cursor: 'pointer', padding: '8px 0', color: 'inherit' }}>
                  Live Astrology Consultation
                </li>

             
              </ul>

            </Box>
          </Box>

          <Box
            sx={{
              position: 'relative',
              bgcolor: 'background.paper',
              padding: 2,
              borderRadius: 1,
              cursor: 'pointer',
              '&:hover .content': {
                opacity: 1,
                visibility: 'visible',
              },
              '&:hover .icon': {
                transform: 'rotate(180deg)',
                transition: 'transform 0.3s ease',
              },
            }}
          >
            <Box
              component="img"
              src={Image2}
              alt="AstroVed Speaks"
              sx={{
                height: { lg: "8rem", md: "auto", sm: "auto", xs: "auto" },
                width: "100%",
                borderRadius: "5px",
                objectFit: "cover",
              }}
            />
            <Typography component="div" sx={{
              mb: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              justifyContent: "space-between",
              fontWeight: "600",
              fontSize: { xs: '16px', sm: '14px', md: '14px', lg: '12px' },
              cursor: 'pointer',
              color: 'text.primary',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: 'blue',
                '& .icon': {
                  color: 'blue',
                  transform: 'rotate(180deg)',
                },
              },

            }}>
               Monthly Specials
              <ExpandMoreIcon
                className="icon"
                sx={{
                  margin: "2px",
                  transition: 'transform 0.3s ease',
                  transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </Typography>

            {/* Content Box */}
            <Box
              className="content"
              sx={{
                position: 'absolute',
                top: '100%',
                left: 0,
                width: '100%',
                bgcolor: '#d8894e',
                borderColor: 'divider',
                opacity: open ? 1 : 0,
                visibility: open ? 'visible' : 'hidden',
                transition: 'opacity 0.2s ease, visibility 0.2s ease',
                zIndex: 1,
                color: "#ffffff"
              }}
            >
              <ul style={{ listStyleType: 'none', paddingLeft: "1rem", fontSize: '13px', fontWeight: '500' }}>

                <li style={{ cursor: 'pointer', padding: '8px 0' }}>
                  <NavLink to="/business_astrology" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Business Astrology
                  </NavLink>
                </li>

                <li style={{ cursor: 'pointer', padding: '8px 0' }}>
                  <NavLink to="/astroVed_membership" style={{ color: 'inherit', textDecoration: 'none' }}>
                     Astro Membership
                  </NavLink>
                </li>
                <li style={{ cursor: 'pointer', padding: '8px 0' }}>
                  <NavLink to="/birthday_special_ritual" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Birthday Special Ritual
                  </NavLink>
                </li>
                <li style={{ cursor: 'pointer', padding: '8px 0', color: 'inherit' }}>
                  Monthly Powertimes
                </li>

              </ul>

            </Box>
          </Box>

          <Box
            sx={{
              position: 'relative',
              bgcolor: 'background.paper',
              padding: 2,
              borderRadius: 1,
              cursor: 'pointer',
              '&:hover .content': {
                opacity: 1,
                visibility: 'visible',
              },
              '&:hover .icon': {
                transform: 'rotate(180deg)',
                transition: 'transform 0.3s ease',
              },
            }}
          >
            <Box
              component="img"
              src={Image3}
              alt="AstroVed Speaks"
              sx={{
                height: { lg: "8rem", md: "auto", sm: "auto", xs: "auto" },
                width: "100%",
                borderRadius: "5px",
                objectFit: "cover",
              }}
            />
            <Typography component="div" sx={{
              mb: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: "space-between",
              fontWeight: "600",
              cursor: 'pointer',
              fontSize: { xs: '16px', sm: '14px', md: '14px', lg: '12px' },
              color: 'text.primary',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: 'blue',
                '& .icon': {
                  color: 'blue',
                  transform: 'rotate(180deg)',
                },
              },

            }}>
              Success Homas
              <ExpandMoreIcon
                className="icon"
                sx={{
                  margin: "2px",
                  transition: 'transform 0.3s ease',
                  transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </Typography>

            {/* Content Box */}
            <Box
              className="content"
              sx={{
                position: 'absolute',
                top: '100%',
                left: 0,
                width: '100%',
                bgcolor: '#d8894e',
                border: '1px solid',
                borderColor: 'divider',
                opacity: open ? 1 : 0,
                visibility: open ? 'visible' : 'hidden',
                transition: 'opacity 0.2s ease, visibility 0.2s ease',
                zIndex: 1, color: "#ffffff"
              }}
            >
              <ul style={{ listStyleType: 'none', paddingLeft: "1rem", fontSize: '13px', fontWeight: '500' }}>
                <li style={{ cursor: 'pointer', color: 'inherit', padding: '8px 0', '&:hover': { color: 'blue' } }}>
                  Homas
                </li>
                <li style={{ cursor: 'pointer', color: 'inherit', padding: '8px 0', '&:hover': { color: 'blue' } }}>
                  Grand Homas
                </li>
                <li style={{ cursor: 'pointer', color: 'inherit', padding: '8px 0', '&:hover': { color: 'blue' } }}>
                  Online Priest Services
                </li>

              </ul>

            </Box>
          </Box>

          <Box
            sx={{
              position: 'relative',
              bgcolor: 'background.paper',
              padding: 2,
              borderRadius: 1,
              cursor: 'pointer',
              '&:hover .content': {
                opacity: 1,
                visibility: 'visible',
              },
              '&:hover .icon': {
                transform: 'rotate(180deg)',
                transition: 'transform 0.3s ease',
              },

            }}
          >
            <Box
              component="img"
              src={Image4}
              alt="AstroVed Speaks"
              sx={{
                height: { lg: "8rem", md: "auto", sm: "auto", xs: "auto" },
                width: "100%",
                borderRadius: "5px",
                objectFit: "cover",
              }}
            />
            <Typography component="div" sx={{
              mb: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: "600",
              fontSize: { xs: '16px', sm: '14px', md: '14px', lg: '12px' },
              cursor: 'pointer',
              color: 'text.primary',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: 'blue',
                '& .icon': {
                  color: 'blue',
                  transform: 'rotate(180deg)',
                },
              },

            }}>
              Instant Poojas & Homas

            </Typography>

          </Box>


          <Box
            sx={{
              position: 'relative',
              bgcolor: '',
              padding: 2,
              borderRadius: 1,
              cursor: 'pointer',
              '&:hover .content': {
                opacity: 1,
                visibility: 'visible',
              },
              '&:hover .icon': {
                transform: 'rotate(180deg)',
                transition: 'transform 0.3s ease',
              },
            }}
          >
            <Box
              component="img"
              src={Image5}
              alt="AstroVed Speaks"
              sx={{
                height: { lg: "8rem", md: "auto", sm: "auto", xs: "auto" },
                width: "100%",
                borderRadius: "5px",
                objectFit: "cover",
              }}
            />
            <Typography component="div" sx={{
              mb: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: "space-between",
              fontWeight: "600",
              fontSize: { xs: '16px', sm: '14px', md: '14px', lg: '12px' },
              cursor: 'pointer',
              color: 'text.primary',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: 'blue',
                '& .icon': {
                  color: 'blue',
                  transform: 'rotate(180deg)'
                },
              },

              // Space between text and icon
            }}>
              Free Astrology
              <ExpandMoreIcon
                className="icon"
                sx={{
                  margin: "2px",
                  transition: 'transform 0.3s ease',
                  transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </Typography>

            {/* Content Box */}
            <Box
              className="content"
              sx={{
                position: 'absolute',
                top: '100%',
                left: 0,
                width: '100%',
                bgcolor: '#d8894e',
                borderColor: 'divider',
                opacity: open ? 1 : 0,
                visibility: open ? 'visible' : 'hidden',
                transition: 'opacity 0.2s ease, visibility 0.2s ease',
                zIndex: 1, color: "#ffffff"
              }}
            >
              <ul style={{ listStyleType: 'none', paddingLeft: "10px", fontSize: '13px', fontWeight: '500', width: { lg: '100%', sm: "100%", md: "100%", xs: "100%" } }}>
                <li style={{ cursor: 'pointer', color: 'inherit', padding: '8px 0' }}>
                  Free Horoscope Predictions
                </li>
                <li style={{ cursor: 'pointer', color: 'inherit', padding: '8px 0' }}>
                  Free Birth Chart Astrology Report
                </li>
                <li style={{ cursor: 'pointer', color: 'inherit', padding: '8px 0' }}>
                  Free Birth Star Astrology Report
                </li>

              </ul>

            </Box>
          </Box>

          <Box
            sx={{
              position: 'relative',
              bgcolor: 'background.paper',
              padding: 2,
              borderRadius: 1,
              cursor: 'pointer',
              '&:hover .content': {
                opacity: 1,
                visibility: 'visible',
              },
              '&:hover .icon': {
                transform: 'rotate(180deg)',
                transition: 'transform 0.3s ease',
              },
            }}
          >
            <Box
              component="img"
              src={Image6}
              alt="AstroVed Speaks"
              sx={{
                height: { lg: "8rem", md: "auto", sm: "auto", xs: "auto" },
                width: "100%",
                borderRadius: "5px",
                objectFit: "cover",
              }}
            />
            <Typography component="div" sx={{
              mb: 0,
              display: 'flex',
              alignItems: 'center',
              fontWeight: "600",
              justifyContent: "space-between",
              fontSize: { xs: '16px', sm: '14px', md: '14px', lg: '12px' },
              cursor: 'pointer',
              color: 'text.primary',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: 'blue',
                '& .icon': {
                  color: 'blue',
                  transform: 'rotate(180deg)',
                },
              },


            }}>
              Wealth Remedies
              <ExpandMoreIcon
                className="icon"
                sx={{
                  margin: "2px",
                  transition: 'transform 0.3s ease',
                  transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </Typography>

            {/* Content Box */}
            <Box
              className="content"
              sx={{
                position: 'absolute',
                top: '100%',
                left: 0,
                width: '100%',
                bgcolor: '#d8894e',
                borderColor: 'divider',
                opacity: open ? 1 : 0,
                visibility: open ? 'visible' : 'hidden',
                transition: 'opacity 0.2s ease, visibility 0.2s ease',
                zIndex: 1,
                color: "#ffffff"
              }}
            >
              <ul style={{ listStyleType: 'none', paddingLeft: "10px", fontSize: '13px', fontWeight: '500', width: '100%' }}>
                <li style={{ cursor: 'pointer', color: 'inherit', padding: '8px 0' }}>
                  Planetary Remedies
                </li>
                <li style={{ cursor: 'pointer', color: 'inherit', padding: '8px 0' }}>
                  Dosha Remedies
                </li>
                <li style={{ cursor: 'pointer', color: 'inherit', padding: '8px 0' }}>
                  Kerala Remedies
                </li>
                <li style={{ cursor: 'pointer', color: 'inherit', padding: '8px 0' }}>
                  Narayan Nagbali Puja
                </li>
              </ul>
            </Box>
          </Box>

          <Box
            sx={{
              position: 'relative',
              bgcolor: 'background.paper',
              padding: 2,
              borderRadius: 1,
              cursor: 'pointer',
              '&:hover .content': {
                opacity: 1,
                visibility: 'visible',
              },
              '&:hover .icon': {
                transform: 'rotate(180deg)',
                transition: 'transform 0.3s ease',
              },
            }}
          >
            <Box
              component="img"
              src={Image7}
              alt="AstroVed Speaks"
              sx={{
                height: { lg: "8rem", md: "auto", sm: "auto", xs: "auto" },
                width: "100%",
                borderRadius: "5px",
                objectFit: "cover",
              }}
            />
            <Typography component="div" sx={{
              mb: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              justifyContent: "space-between",
              fontWeight: "600",
              cursor: 'pointer',
              fontSize: { xs: '16px', sm: '14px', md: '14px', lg: '12px' },
              color: 'text.primary',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: 'blue',
                '& .icon': {
                  color: 'blue',
                  transform: 'rotate(180deg)',
                },
              },


            }}>
              Resources
              <ExpandMoreIcon
                className="icon"
                sx={{
                  margin: "2px",
                  transition: 'transform 0.3s ease',
                  transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </Typography>

            {/* Content Box */}
            <Box
              className="content"
              sx={{
                position: 'absolute',
                top: '100%',
                left: 0,
                width: '100%',
                bgcolor: '#d8894e',
                borderColor: 'divider',
                opacity: open ? 1 : 0,
                visibility: open ? 'visible' : 'hidden',
                transition: 'opacity 0.2s ease, visibility 0.2s ease',
                zIndex: 1, color: "#ffffff"
              }}
            >
              <ul style={{ listStyleType: 'none', paddingLeft: "10px", fontSize: '13px', fontWeight: '500', width: '100%' }}>
                <li>
                  <NavLink to={'/contact_us'} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <span style={{ cursor: 'pointer', color: 'text.primary', transition: 'color 0.3s', '&:hover': { color: 'blue' } }}>Contact Us</span>
                  </NavLink>
                </li>
                
                <NavLink to={'/blog'} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <li style={{ cursor: 'pointer', color: 'inherit', padding: '8px 0' }}>Blog</li>
                </NavLink>

                
              </ul>

            </Box>
          </Box>

        </Box >
      </Box>
    </>
  )
}

export default SecondNav