import React from 'react'
import "../css/emailist.css";
import PeopleIcon from '@mui/icons-material/People';
import InboxIcon from '@mui/icons-material/Inbox';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

function EmailType() {
  return (
    <div className='email_type'>
      <div className='emailtype_options emailtype_options--active'>
        <InboxIcon></InboxIcon>
        <p>Primary</p>
      </div>

      <div className='emailtype_options'>
        <PeopleIcon></PeopleIcon>
        <p>Social</p>
      </div>

      <div className='emailtype_options'>
        <LocalOfferIcon></LocalOfferIcon>
        <p>Promotions</p>
      </div>


    </div>
  )
}

export default EmailType
