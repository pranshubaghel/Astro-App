import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Paper, InputBase, Divider, Select, MenuItem, Menu, Hidden, useMediaQuery, useTheme } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import Logo from './astro.jpg'
import { NavLink } from 'react-router-dom';
function FirstNav() {
    const [language, setLanguage] = useState('EN');
    const [anchorEl, setAnchorEl] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleSearchSubmit = (e) => {
        e.preventDefault();

        if (searchQuery.trim()) {
            console.log(`Searching for: ${searchQuery}`);

        }
    };

    return (
        <AppBar
            position="static"
            sx={{
                height: 85,
                bgcolor: "white",
                boxSizing: 'border-box',
                overflow: 'hidden'
            }}>
            <Toolbar sx={{ justifyContent: 'space-between', minHeight: 80, alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src={Logo}
                        alt="Logo"
                        style={{ height: isMobile ? 60 : 80, marginRight: 10, marginTop: "0.2rem" }}
                    />
                </div>

                <Hidden smDown>
                    <Paper
                        component="form"
                        onSubmit={handleSearchSubmit}
                        sx={{
                            p: '2px 4px',
                            display: 'flex',
                            alignItems: 'center',
                            width: 400,
                            height: 50,
                            mx: 2,
                            flexShrink: 0,
                            boxSizing: 'border-box',
                            transition: 'none',
                            bgcolor: "darkorange"
                        }}
                    >
                        <InputBase
                            sx={{
                                ml: 1,
                                flex: 1,

                                height: '100%',
                                p: 0,
                            }}
                            placeholder="Search For Astrological Events"
                            inputProps={{ 'aria-label': 'Search For Astrological Events' }}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            color='white'
                        />
                        <IconButton
                            type="submit"
                            sx={{ p: '10px' }}
                            aria-label="search"
                        >
                            <SearchIcon />
                        </IconButton>
                        <Divider sx={{ height: 32, m: 0.5 }} orientation="vertical" />
                    </Paper>
                </Hidden>

                <div style={{ display: 'flex', alignItems: 'center', minWidth: 200, justifyContent: 'space-between' }}>
                    <Select
                        value={language}
                        onChange={handleLanguageChange}
                        sx={{
                            color: '#d8894e',
                            bgcolor: 'transparent',
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: 'none',
                            },
                            '&:hover': { bgcolor: '#d8894e',color:"#ffffff" },
                            ml: 1,
                            minWidth: 70,
                            height: 40,
                        }}
                        MenuProps={{
                            PaperProps: {
                                sx: {
                                    bgcolor: 'white',
                                    '& .MuiMenuItem-root': {
                                        color: 'black',
                                    },
                                    '& .MuiMenuItem-root:hover': {
                                        bgcolor: 'darkred',
                                    },
                                },
                            },
                        }}
                    >
                        <MenuItem value="EN">EN</MenuItem>
                        <MenuItem value="HI">HI</MenuItem>
                        <MenuItem value="TA">TA</MenuItem>
                    </Select>

                    <IconButton color="inherit" sx={{ display: 'flex', alignItems: 'center', ml: 1, height: 40 }}>
                        <ShoppingCartIcon sx={{color:"#d8894e"}} />
                    </IconButton>
                    <IconButton color="inherit" onClick={handleMenuOpen} sx={{ display: 'flex', alignItems: 'center', ml: 1, height: 40 }}>
                        <AccountCircleIcon sx={{color:"#d8894e"}} />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleMenuClose}
                        PaperProps={{
                            sx: {
                                bgcolor: 'white',
                                '& .MuiMenuItem-root': {
                                    color: 'black',
                                    // Remove this line to prevent background color change on hover
                                    // '&:hover': { bgcolor: 'darkred' }, 
                                },
                            },
                        }}
                    >
                        <NavLink to={'/login'}>
                            <MenuItem onClick={handleMenuClose}>Login</MenuItem>
                        </NavLink>
                        <NavLink to={'/signup'}>
                            <MenuItem onClick={handleMenuClose}>SignUp</MenuItem>
                        </NavLink>
                    </Menu>

                </div>
            </Toolbar>
        </AppBar>
    );
}

export default FirstNav;