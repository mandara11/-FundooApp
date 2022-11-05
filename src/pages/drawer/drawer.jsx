import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {connect} from 'react-redux';


const drawerWidth = 240;

const openedMixin = (theme) => ({
    marginTop: 65,
    boxShadow: '0.1px 0.1px 0.1px #e0e0e0;',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    marginTop: 70,
    borderRight: '0px solid white',
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        margin: 0,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);



function Drawer1(props) {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const selectingOption = (choice) => {
        props.listenToDrawer(choice)
        console.log(choice)
        props.dispatch({
            type:`${choice}`
        })
    }


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <Drawer variant="permanent" open={props.toggle1}>
                <List sx={{ position: 'relative', left: '10px', display: 'flex', flexDirection: 'column' }}>
                    <ListItem onClick={() => selectingOption('Notes')} disablePadding sx={{
                        display: 'flex',
                        flexcDirection: 'row', justifyContent: 'space-between', "&:hover": { backgroundColor: "#feefc3", borderRadius: "0px 25px 25px 0px" }
                    }}>
                        <ListItemIcon
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                border: '0px solid red',
                                alignItems: 'center'
                            }}>
                            <LightbulbOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary='Notes' sx={{}} />
                    </ListItem>
                    <ListItem onClick={() => selectingOption('Reminders')} disablePadding sx={{
                        display: 'flex', flexDirection: "row", justifyContent: 'space-between',
                        "&:hover": { backgroundColor: "#feefc3", borderRadius: "0px 30px 30px 0px" }
                    }}>
                        <ListItemIcon
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                border: '0px solid red',
                                alignItems: 'center'
                            }}>
                            <NotificationsNoneOutlinedIcon />

                        </ListItemIcon>
                        <ListItemText primary='Reminders' />
                    </ListItem>
                    <ListItem onClick={() => selectingOption('Edit')} disablePadding sx={{
                        display: 'flex',
                        flexcDirection: 'row', justifyContent: 'space-between', "&:hover": { backgroundColor: "#feefc3", borderRadius: "0px 25px 25px 0px" }
                    }}>
                        <ListItemIcon
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                border: '0px solid red',
                                alignItems: 'center'
                            }}>
                            <ModeEditOutlineOutlinedIcon />

                        </ListItemIcon>
                        <ListItemText primary='Edit Label' />
                    </ListItem>
                    <ListItem onClick={() => selectingOption('Archive')} disablePadding sx={{
                        display: 'flex',
                        flexcDirection: 'row', justifyContent: 'space-between', "&:hover": { backgroundColor: "#feefc3", borderRadius: "0px 25px 25px 0px" }
                    }}>
                        <ListItemIcon
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                border: '0px solid red',
                                alignItems: 'center'
                            }}>
                            <ArchiveOutlinedIcon />

                        </ListItemIcon>
                        <ListItemText primary='Archive' />
                    </ListItem>
                    <ListItem onClick={() => selectingOption('Trash')} disablePadding sx={{
                        display: 'flex',
                        flexcDirection: 'row', justifyContent: 'space-between', "&:hover": { backgroundColor: "#feefc3", borderRadius: "0px 25px 25px 0px" }
                    }}>
                        <ListItemIcon
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                border: '0px solid red',
                                alignItems: 'center'
                            }}>
                            <DeleteOutlineOutlinedIcon />

                        </ListItemIcon>
                        <ListItemText primary='Trash' />
                    </ListItem>
                </List>

            </Drawer>

        </Box>
    );
}

export default connect()(Drawer1)
