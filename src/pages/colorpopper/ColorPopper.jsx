import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { create } from '@mui/material/styles/createTransitions';
import { changeColorNote } from '../../services/dataService';

export default function ColorPopper(props) {

    const colors = ["#2ECC71", "#AF7AC5", "#F1948A", "#A3E4D7", "#F5B7B1", "#F5B041", "#DC7633", "#F1C40F", "#AAB7B8", "#F1948A", "#2ECC71", "#F5B041"]
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const selectColor=(colour)=>{
    //   props.listenToColor(colour)
      if(props.action==="create"){
        props.listenToColor(colour)  
      } else if(props.action==="update"){
        let updateColor={
            noteIdList:[props.id],color:colour
        }
        changeColorNote(updateColor)
        .then((response)=>{
            console.log(response)
            props.listenToColorUpdate()
        })
        .catch((error)=>{
            console.log(error)
        })
        console.log(colour,"updating color")
      }
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <div>
            {/* <button aria-describedby={id} type="button" onClick={handleClick}>
        Toggle Popper
      </button> */}
            <ColorLensOutlinedIcon onClick={handleClick} fontSize="x-small" color="action" />
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper',display:"flex",flexDirection:"row"}}>
                    {
                        colors.map((color)=>(
                            <div style={{height:25,width:25,backgroundColor:color,borderRadius:50,marginRight:5}} onClick={()=>selectColor(color)}></div>
                        ))
                    }
                </Box>
            </Popper>
        </div>
    );
}
