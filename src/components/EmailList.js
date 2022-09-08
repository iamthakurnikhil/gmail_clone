import React from 'react'
import EmailListSetting from './EmailListSetting';
import "../css/emailist.css";
import EmailType from './EmailType';
import EmailBody from './EmailBody';


function EmailList() {
  return (
    <div className='emailist'>
      <EmailListSetting></EmailListSetting>
      <EmailType></EmailType>


      <EmailBody name='Nikhil Thakur' subject='Subject' body = 'This is Message Body.This is Message Body.This is Message Body.This is Message Body.This is Message Body.This is Message Body.' time='02:30pm'></EmailBody>
    </div>
  )
}

export default EmailList
