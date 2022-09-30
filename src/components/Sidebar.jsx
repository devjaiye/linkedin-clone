import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import './Sidebar.css'
import {selectUser} from '../features/userSlice'

const Sidebar = () => {
    const user = useSelector(selectUser)

    const recentItem = (topics) =>(
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topics}</p>
        </div>
    )


  return (
    <div className='sidebar'>
        <div className="sidebar_top">
            <img 
            src="https://www.pngmagic.com/product_images/simple-background-images-for-websites.jpg" alt="" />
 
            <Avatar src={user.photoUrl} className='sidebar_avatar'>
                {/* if no profile pic, display first letter of email */}
                {user.email[0]}
            </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div className="sidebar_stats">
            {/* create 2 stack containers */}
            <div className="sidebar_stat">
                <p>Who viewed you</p>
                <p className="sidebar_statNumber">2,150</p>
            </div>
            <div className="sidebar_stat">
                <p>View on post</p>
                <p className="sidebar_statNumber">802</p>
            </div>
        </div>

        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem("business")}
            {recentItem("programming")}
            {recentItem("recruiter")}
            {recentItem("softwaredevelopment")}
            {recentItem("reactjs")}

            
        </div>
    </div>
  )
}

export default Sidebar