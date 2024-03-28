import React from 'react'
import { ImFilesEmpty } from "react-icons/im";

const Empty = () => {
  return (
    <div className='emp-main bg-sec'>
        <ImFilesEmpty className='fontcl3 emp-icn'/>
        <div className="emp-title fontcl3 main-f">Select a person to take action.</div>
    </div>
  )
}

export default Empty