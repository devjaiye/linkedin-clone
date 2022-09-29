import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
  return (
    <>
    <div className="header">
    <div className="header_left">
     <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/linkedin_logo_icon_170234.png" 
     alt="LinkeIn logo" />

     <div className="header_search">
      <SearchIcon/>
      <input type="text" placeholder='Search...'/>
     </div>
    </div>

    <div className="header_right">
      <HeaderOption Icon={HomeIcon} title="Home"/>
      <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
      <HeaderOption Icon={WorkIcon} title='Jobs'/>
      <HeaderOption Icon={MessageIcon} title='Messaging'/>
      <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
      <HeaderOption avatar = "https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png" title="Dayo Jaiye"/>    
    </div>

    </div>
    </>
    )
}

export default Header