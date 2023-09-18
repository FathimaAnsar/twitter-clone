import React from 'react'
import './SidebarOption.css'

// passing props, passing a component like Icon needs to start with capital letter
// classnames start with simple letters
function SidebarOption({active, text, Icon}) {
  return (
    <div className={`sidebarOption ${active
    && 'sidebarOption--active'}`}>
        <Icon/>
     <h2>{text} </h2>
    </div>
  )
}

export default SidebarOption
