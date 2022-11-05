import React from 'react'
import "../takenote1/TakeNote1.css"
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import Stack from '@mui/material/Stack';
import InputBase from '@mui/material/InputBase';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const useStyle=makeStyles({
   container1: {
    width: '100vw',
    height: '10vh',
    border: '0px solid blue',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    bottom:'30px'
   },
   note1: {
    width: '40%',
    height: '70%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    left:'40px',
    border: '1px solid #cecdcd',
    borderRadius: '8px',
   },
   text: {
    position: 'relative',
    left: '19px',
    outline: 'none',
   },
   icons: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    left: '190px',
   }

})
function TakeNote1(props) {
  const classes=useStyle()

  const openNote2=()=>
  {
     props.listenToNote1()
  }
  return (
    <Box className={classes.container1}>
      <Paper  elevation={3} className={classes.note1} onClick={openNote2}>
       <Box className={classes.text}>
       <InputBase className='input1' type="text" id="title" name="title" placeholder="Take a note..." required/>
       </Box>
       <div className={classes.icons}>
       <Stack spacing={4} direction="row">
       <CheckBoxOutlinedIcon color="action" />
       <BrushOutlinedIcon color="action" />
       <ImageOutlinedIcon color="action"/>
       </Stack>
       </div>
      </Paper>
    </Box>
  )
}

export default TakeNote1
