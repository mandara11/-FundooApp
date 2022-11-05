import React, { useState } from 'react'
import "../takenote2/TakeNote2.css"
import InputBase from '@mui/material/InputBase';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import Stack from '@mui/material/Stack';
import { addNotes } from '../../services/dataService';
import ColorPopper from '../colorpopper/ColorPopper';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    container2: {
        width: '100vw',
        height: '30vh',
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative',
        bottom:'20px',
    },
    note2: {
        width: '40%',
        height: '65%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        position: 'relative',
        border: '1px solid #cecdcd',
        borderRadius: '8px',
        rowGap: '6px',
        position: 'relative',
        top: '0px',
        left:'50px',
    },
    noteicon: {
        height: '70%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        border: '0px solid red',
    },
    title1: {
        height: '100%',
        width: '50%',
        border: '0px solid black',
        display: 'flex',
        flexDirection: 'column',
    },
    text2: {
        height: '33.3%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        position: 'relative',
        left: '10px',
        top: '15px',
        rowGap: '15px',
        outline: 'none',
    },
    input2: {
        border: 'none',
        fontSize: '15px',
        position: 'relative',
        bottom: '5px',
    },
    pin: {
        height: '100%',
        width: '50%',
        border: '0px solid black',
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'relative',
        top: '10px',
        right: '10px',
    },

})

function TakeNote2(props) {
    const classes = useStyle()

    const [input, setInput] = useState({ title: "", description: "", isArchived: false, color: "", isDeleted: false })


    const addTitle = (event) => {
        setInput(prevState => ({
            ...prevState,
            title: event.target.value
        }))
    }
    const addDescription = (event) => {
        setInput(prevState => ({
            ...prevState,
            description: event.target.value
        }))
    }
    const addLabel = () => {
        props.listenToNote2()
        addNotes(input).then((response) => {
            console.log(response)
        })
            .catch((error) => {
                console.log(error)
            })
    }
    const addArchieve = () => {
        setInput(prevState => ({
            ...prevState,
            isArchived: true
        }))
        console.log("add Archieve")
    }

    const listenToColor = (colour) => {
        setInput(prevState => ({
            ...prevState,
            color: colour
        }))
    }
    // const normalDelete = () => {
    //     setInput(prevState => ({
    //         ...prevState,
    //         isDeleted: true
    //     }))
    //     console.log("deleted succ")
    // }

    return (
        <Box className={classes.container2}>
            <Paper elevation={3} className={classes.note2} style={{ backgroundColor: input.color }}>
                <Box className={classes.noteicon}>
                    <div className={classes.title1}>
                        {/* <div onChange={addTitle} className='t'>Title</div>
                        <div onChange={addDescription} className='t'>Title</div> */}
                        <Box className={classes.text2}>
                            <InputBase type='textbox' onChange={addTitle} className="input2" id="title" name="title" placeholder="title.." required />
                            <InputBase onChange={addDescription} className={classes.input2} type="text" id="title" name="title" placeholder="Take a note..." required />
                        </Box>
                    </div>
                    <div className={classes.pin}>
                        <PushPinOutlinedIcon fontSize="medium" color="action" />
                    </div>
                </Box>

                <Box className="icons2">
                    <Stack spacing={4} direction="row">
                        <AddAlertOutlinedIcon fontSize="x-small" color="action" />
                        <PersonAddAlt1OutlinedIcon fontSize="x-small" color="action" />
                        {/* <ColorLensOutlinedIcon fontSize="x-small" color="action" /> */}
                        <ColorPopper listenToColor={listenToColor} action="create" />
                        {/* <ImageOutlinedIcon fontSize="x-small" color="action" /> */}
                        <ImageOutlinedIcon
                            // onClick={normalDelete} 
                            fontSize="x-small" color="action" />
                        <ArchiveOutlinedIcon onClick={addArchieve} fontSize="x-small" color="action" />
                        <MoreVertOutlinedIcon fontSize="x-small" color="action" />
                        <UndoOutlinedIcon opacity="0.7" fontSize="x-small" color="action" />
                        <RedoOutlinedIcon opacity="0.7" fontSize="x-small" color="action" />

                    </Stack>
                    <button onClick={addLabel} ClassName={classes.btn} variant="Close" style={{ textTransform: 'capitalize', color: "black", opacity: "0.9" }}>Close</button>

                </Box>
            </Paper>

        </Box>
    )
}

export default TakeNote2

