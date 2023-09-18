import React from 'react'
import './SidebarOption.css'

// passing props, passing a component like Icon needs to start with capital letter
// classnames start with simple letters
function SidebarOption({text, Icon}) {
  return (
    <div className='sidebarOption'>
      im an option
    </div>
  )
}

export default SidebarOption
