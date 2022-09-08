import React from 'react'
import "../css/sidebaroptions.css"

function SideBarOptions({Icon,title,number,isactive}) {
  return (
<div className={`sidebaroptions ${isactive && 'sidebaroptions--active'}`}>
      <Icon></Icon>
      <h4>{title}</h4>
      <p>{number}</p>
    </div>
  )
}

export default SideBarOptions
