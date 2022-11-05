import React from 'react'
import "../takenote3/TakeNote3.css"
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import Stack from '@mui/material/Stack';
import ColorPopper from '../colorpopper/ColorPopper';
import { updateArchiveNote, updateDeleteNote, updateNote } from '../../services/dataService';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import InputBase from '@mui/material/InputBase';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';

const useStyle = makeStyles({
    note3: {
        width: '18vw',
        height: '20vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        position: 'relative',
        border: '1px solid #cecdcd',
        // borderRadius: '8px',
        boxShadow: '2px 2px 2px #e0e0e0',
        rowGap: '28px',
        position: 'relative',
        bottom:'20px',
        marginRight: '10px',
        marginTop: '10px',
    },
    title2: {
        height: '33.3%',
        display: 'flex',
        flexDirection: 'row',
        columnGap: '160px',
        position: 'relative',
        top: '10px',
        left: '10px',
        color: 'rgb(66, 65, 65)',
    },
    twotext: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: '12px',
    },
    icons3: {
        position: 'relative',
        top: '20px',
        left: '10px',
    },
    title4: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: '450px',
        position: 'relative',
        color: 'rgb(66, 65, 65)',
    },
    icons4: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        top: '35px',
        columnGap: '110px',
    },
    btn2: {
        position: 'relative',
        bottom: '10px',
        right: '20px',
    }
})

function TakeNote3(props) {
    const classes = useStyle()

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 530,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        borderRadius: 2,
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = React.useState(false);
    const [inputValue, setInputValue] = useState({ noteId: '', title: '', description: '' })
    const handleOpen = (noteDetails) => {
        console.log(noteDetails, "getting note details")
        setOpen(true)
        setInputValue({ noteId: noteDetails.id, title: noteDetails.title, description: noteDetails.description })
    };
    const handleClose = () => {
        setOpen(false);
    }

    const listenToColorUpdate = () => {
        props.getNote()
    }
    const updateArchive = (id) => {
        let archiveNote = {
            noteIdList: [id], isArchived: true
        }
        updateArchiveNote(archiveNote)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
        console.log(archiveNote, "updateArchive")
    }
    //console.log(props.note, "details...")
    const updateTitle = (event) => {
        setInputValue(prevState => ({
            ...prevState,
            title: event.target.value
        }))
    }
    const updateDescription = (event) => {
        setInputValue(prevState => ({
            ...prevState,
            description: event.target.value
        }))
    }
    //console.log(inputValue, "updated note")

    const saveNote3 = () => {
        updateNote(inputValue)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
        setOpen(false);
    }

    const updateDelete = (id) => {
        let deleteNote = {
            noteIdList: [id], isDeleted: true
        }
        updateDeleteNote(deleteNote)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
        console.log(deleteNote, "deleted succesfully")
    }


    return (
        <Box className={classes.container3}>
            <Paper className={classes.note3} style={{ backgroundColor: props.note.color }}>
                <Box className="title2">
                    <Box onClick={() => handleOpen(props.note)} className={classes.twotext}>
                        <Box style={{ display: "flex", flexDirection: "column" }}>{props.note.title} </Box>
                        <Box>{props.note.description}</Box>
                    </Box>
                    <PushPinOutlinedIcon fontSize="small" color="action" />
                </Box>
                <Box className={classes.icons3}>
                    <Stack spacing={3} direction="row">
                        <AddAlertOutlinedIcon fontSize="x-small" color="action" />
                        <PersonAddAlt1OutlinedIcon fontSize="x-small" color="action" />
                        {/* <ColorLensOutlinedIcon fontSize="x-small" color="action" /> */}
                        <ColorPopper id={props.note.id} listenToColorUpdate={listenToColorUpdate} action="update" />
                        <DeleteOutlineOutlinedIcon onClick={() => updateDelete(props.note.id)} fontSize="x-small" color="action" />
                        <ArchiveOutlinedIcon onClick={() => updateArchive(props.note.id)} fontSize="x-small" color="action" />
                        <MoreVertOutlinedIcon fontSize="x-small" color="action" />
                    </Stack>
                </Box>
            </Paper>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} style={{ backgroundColor: props.note.color }}>
                    <div className="title4">
                        <div className="twotext" style={{ display: "flex", flexDirection: "column",color:"black" }}>
                            <InputBase type='textbox' name='' onChange={updateTitle} placeholder='Title' defaultValue={inputValue.title} />
                            <InputBase type='textbox' name='' onChange={updateDescription} placeholder='Description' defaultValue={inputValue.description} />
                        </div>
                        <PushPinOutlinedIcon fontSize="medium" color="action" />
                    </div>
                    <div className={classes.icons4}>
                        <Stack spacing={4} direction="row">
                            <AddAlertOutlinedIcon fontSize="x-small" color="action" />
                            <PersonAddAlt1OutlinedIcon fontSize="x-small" color="action" />
                            <ColorPopper fontSize="x-small" color="action" />
                            <ImageOutlinedIcon fontSize="x-small" color="action" />
                            <ArchiveOutlinedIcon onClick={() => updateArchive(props.note.id)} fontSize="x-small" color="action" />
                            <MoreVertOutlinedIcon fontSize="x-small" color="action" />
                            <UndoOutlinedIcon opacity="0.7" fontSize="x-small" color="action" />
                            <RedoOutlinedIcon opacity="0.7" fontSize="x-small" color="action" />
                        </Stack>
                        <div><Button className={classes.btn2} style={{ textTransform: 'capitalize' }} onClick={saveNote3}>Close</Button></div>
                    </div>
                </Box>
            </Modal>
        </Box>
    )
}

export default TakeNote3
