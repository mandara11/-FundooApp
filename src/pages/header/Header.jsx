import React from 'react'
import "../header/Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';
import {connect} from 'react-redux';


function Header(props) {

  const openMenu=()=>{
    props.listenToHeader1()
  }
  return (
    <div className='container4'>
      <div className="first">
        <MenuIcon onClick={openMenu} color="action" />
        <img className='googlekeep' src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" />
        <div className='keep'>{props.label}</div>
      </div>
      <div className="second">
        <div className='searchicon'><SearchIcon fontSize="medium" color="action" sx={{ "&:hover": { backgroundColor: "#dcdde0", padding: "1px", borderRadius: "50%" } }} /></div>
        <div className='inputbase'><InputBase placeholder="Search" /></div>
      </div>
      <div className="third">
        <Stack spacing={3.2} direction="row">
          <RefreshIcon color="action" />
          <ViewAgendaOutlinedIcon color="action" />
          <SettingsOutlinedIcon color="action" />
        </Stack>
      </div>
      <div className="fourth">
        <Stack spacing={2.5} direction="row">
          <AppsOutlinedIcon color="action" />
          <AccountCircleIcon color="action" />
        </Stack>
      </div>

    </div >
  )
}
const mapStateToProps=(state)=>{
    return {
      label:state.drawerReducer.label 
    }
}

export default connect(mapStateToProps)(Header) 
