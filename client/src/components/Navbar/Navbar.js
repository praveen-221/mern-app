import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TelegramIcon from '@mui/icons-material/Telegram';
import { IconButton } from '@mui/material';
import "./Navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
      <IconButton size='medium'>
        <AccountCircleIcon fontSize='large' className='navbar-icon' />
      </IconButton>
      <img className='navbar-logo' src='https://cdn1.iconfinder.com/data/icons/social-media-hexagon-1/1024/tinder-hex-1024.png' alt='tinder-logo'/>
      <IconButton size='medium'>
        <TelegramIcon fontSize='large' className='navbar-icon' />
      </IconButton>
    </div>
  )
}

export default Navbar