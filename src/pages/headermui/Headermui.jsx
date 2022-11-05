import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { makeStyles } from '@mui/styles';
import { connect } from 'react-redux';



const useStyle = makeStyles({
    headerMain: {        
        width: '4%',        
    },
    headerText: {
        width: '10%',
    },
})

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'rgba(0,0,0,.05)',
    //   backgroundColor: alpha(theme.palette.common.white, 0.15),
    //   '&:hover': {
    //     backgroundColor: alpha(theme.palette.common.white, 0.25),
    //   },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#5f6368',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'default',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '40vw',
        },
    },
}));

function Headermui(props) {
    const classes = useStyle()

    const openMenu=()=>{
        props.listenToHeader1()
      }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    {/* <Badge badgeContent={4} color="error"> */}
                    <RefreshIcon color='action' />
                    {/* </Badge> */}
                </IconButton>
                <p>List view</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    // aria-label="show 17 new notifications"
                    color="inherit"
                >

                    <SettingsOutlinedIcon color='action' />

                </IconButton>
                <p>Settings</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    // aria-label="account of current user"
                    // aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AppsSharpIcon color='action' />
                </IconButton>
                <p>Apps</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <img src='https://lh3.googleusercontent.com/ogw/AOh-ky3Yl8hpP_q1VgZ-9S_bTUDZ09bribXt8q_9Ug-ogA=s32-c-mo'
                        style={{ borderRadius: 50 }} />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: 'white' }}>
                <Toolbar>
                    <IconButton
                        onClick={openMenu}
                        size="medium"
                        edge="start"
                        color="default"
                        aria-label="open drawer"
                        sx={{ mr: 1 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box className={classes.headerMain} sx={{ display: { xs: 8, sm: 12 }, border: '0px solid blue' }}>
                        <img src='https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png' width={40} /></Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        color="#5f6368"
                        // sx={{ display: { xs: 'none', sm: 'block' } }}
                        className={classes.headerText}
                    >
                        {/* Keep */}{props.label}
                    </Typography>
                    <Box sx={{ width: '5%', display: { xs: 'none', sm: 'none', md: 'block' } }} />
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }} sx={{ display: { xs: 'none', sm: 'flex', md: 'block', lg: 'block' } }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1,border: '0px solid black', display: { xs: 'none', sm: 'none' } }} />
                    <Box sx={{ width: '25%', display: { xs: 'none', sm: 'block' } }} />
                    <Box sx={{ border: '0px solid black', width: '20%', display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }, justifyContent: 'space-evenly' }}>
                        <IconButton size="large"  color="default">
                            {/* <Badge badgeContent={4} color="error"> */}
                            <RefreshIcon />
                            {/* </Badge> */}
                        </IconButton>
                        <IconButton
                            size="medium"
                            color="default"
                        >
                            {/* <Badge badgeContent={17} color="error"> */}
                            <ViewAgendaOutlinedIcon color="action" />
                            {/* </Badge> */}
                        </IconButton>
                        <IconButton
                            size="medium"
                            color="default"
                        >
                            <SettingsOutlinedIcon />
                        </IconButton>
                        <IconButton
                            size="medium"
                            color="default"
                        >

                        </IconButton>
                        <IconButton
                            size="medium"
                            color="default"
                        >
                            <AppsSharpIcon />
                        </IconButton>
                        <IconButton
                            size="medium"
                            color="default"
                        >
                           <AccountCircleIcon color="action" />
                            
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="default"
                        >
                            <MoreIcon color='action' />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}

const mapStateToProps=(state)=>{
    return {
      label:state.drawerReducer.label 
    }
}

export default connect(mapStateToProps)(Headermui) 

