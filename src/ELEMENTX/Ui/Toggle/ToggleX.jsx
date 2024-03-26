import React from 'react'
import '../../BUILD.css'


const ToggleX = ({text,theme , open}) => {

    console.log(open);

  return (
    <div className={`${open == true ? 'togxO': 'togx'} fontclD mega-trans sec-f bg-sec `}>
        {text}
    </div>
  )
}

export default ToggleX