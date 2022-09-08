import { Reorder } from '@mui/icons-material'
import { IconButton,Avatar} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import "../css/header.css"
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { deepOrange } from '@mui/material/colors';



function Header() {
  return (
    <div className='header'>
        <div className='header_left'>
            <IconButton>
                <Reorder></Reorder>
            </IconButton>
            <img src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png' alt='logo'></img>
        </div>

        <div className='header_middle'>
            <div className='search_mail'>
                <IconButton>
                    <SearchIcon></SearchIcon>
                </IconButton>
                <input type='text' placeholder = 'Search Mail'/>
                <IconButton>
                    <ExpandMoreIcon></ExpandMoreIcon>
                </IconButton>
            </div>
        </div>

        <div className='header_right'>
            <IconButton>
                <HelpOutlineIcon></HelpOutlineIcon>
            </IconButton>

            <IconButton>
                <SettingsIcon></SettingsIcon>
            </IconButton>

            <IconButton>
                <AppsIcon></AppsIcon>
            </IconButton>

            <Avatar 
              sx={{ bgcolor: deepOrange[500] }}
              alt="Nikhil Thakur"
            src="images/avatar.jpg"></Avatar>

        </div>
      
    </div>
  )
}

export default Header
