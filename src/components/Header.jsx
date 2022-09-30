import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { logout, selectUser } from '../features/userSlice';
import { auth } from './Firestore/firebase';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  const logoutOfApp = () => {
    dispatch((logout()))
    auth.signOut()
  }

  return (
    <>
    <div className="header">
    <div className="header_left">
     <img src="https://www.pinclipart.com/picdir/middle/97-971470_linkedin-linkedin-social-media-icons-clipart.png"
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
      <HeaderOption avatar={true} title="me" onClick={logoutOfApp}/>    
    </div>

    </div>
    </>
    )
}

export default Header