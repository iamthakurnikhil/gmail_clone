import React from 'react'
import "../css/emailist.css";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';


function EmailBody({name,subject,body,time}) {
  return (
    <div className='emailbody'>
        <div className='emailbody_left'>

            <CheckBoxOutlineBlankIcon></CheckBoxOutlineBlankIcon>
            <StarBorderIcon></StarBorderIcon>
            <LabelOutlinedIcon></LabelOutlinedIcon>

            <h4>{name}</h4>
        </div>

        <div className='emailbody_middle'>
            <div className='emailbody_middle_msg'>
                <p><b>{subject}</b>{body}</p>
            </div>
        </div>

        <div className='emailbody_right'>
            <p>{time}</p>
        </div>
      
    </div>
  )
}

export default EmailBody
