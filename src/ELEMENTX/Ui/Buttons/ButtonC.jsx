import React from 'react'
import '../../BUILD.css'

const ButtonC = ({text,choose}) => {
  return (
choose == 'light' ? 
<button className='trans bc-ctn-white bcu main-f text-[14px] font-[600]'>{text.toUpperCase()} </button>
                    :
<button className='trans bc-ctn bcu main-f text-[14px] font-[600]'>{text.toUpperCase()} </button>
    )
}

export default ButtonC