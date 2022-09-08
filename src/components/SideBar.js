import React from 'react'
import {Button} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import "../css/sidebar.css"
import InboxIcon from '@mui/icons-material/Inbox';
import SideBarOptions from './SideBarOptions';
import StarRateIcon from '@mui/icons-material/StarRate';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import LabelIcon from '@mui/icons-material/Label';
import DeleteIcon from '@mui/icons-material/Delete';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import {useDispatch } from "react-redux"; 
import {openSendMessage} from "../features/mailSlice";


function SideBar() {

    const dispatch = useDispatch();
  return (
    <div className='sidebar'>
      <Button startIcon={<AddIcon/>} className='compose_btn' onClick={() => dispatch(openSendMessage())}>Compose</Button>

      <SideBarOptions Icon={InboxIcon} title='Inbox' number='224' isactive={true}></SideBarOptions>

      <SideBarOptions Icon={StarRateIcon} title='Starred' number='224'></SideBarOptions>

      <SideBarOptions Icon={WatchLaterIcon} title='Snoozed' number='224'></SideBarOptions>

      <SideBarOptions Icon={LabelImportantIcon} title='Important' number='224'></SideBarOptions>

      <SideBarOptions Icon={SendIcon} title='Sent' number='224'></SideBarOptions>

      <SideBarOptions Icon={DraftsIcon} title='Drafts' number='224'></SideBarOptions>

      <SideBarOptions Icon={LabelIcon} title='Category' number='224'></SideBarOptions>

      <SideBarOptions Icon={DeleteIcon} title='[Map]/Trash' number='224'></SideBarOptions>

      <SideBarOptions Icon={FindInPageIcon} title='Documents' number='224'></SideBarOptions>

      <SideBarOptions Icon={ExpandMoreIcon} title='More' number='224'></SideBarOptions>

      <hr/>

        <h3 className='sidebaroptions_heading'>Meet</h3>

        <SideBarOptions Icon={VideocamIcon} title='New Meeting' number='224'></SideBarOptions>

        <SideBarOptions Icon={KeyboardIcon} title='Join a Meeting' number='224'></SideBarOptions>

    </div>
    
  )
}

export default SideBar
