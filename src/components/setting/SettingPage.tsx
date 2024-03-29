import Link from 'next/link'
import React from 'react'

const SettingPage = () => {
  return (
    <div className='st-main'>
        <div className="st-ctn bg-sec">
    <div className="st-title fontcl main-f">Setting (beta)</div>
    <div className="st-desc fontcl3 main-f">Change Username</div>
<div className="st-inp-ctn">
<input type="text" className="inp" />
</div>
<div className="st-btn-parent">
<div className="st-btn-ctn">
    <button className="btn1 main-f fontcl mega-trans bcu">Confirm</button>
</div>
<Link href='/' className="st-btn-ctn">
    <button className="btn2 main-f fontcl mega-trans bcu">Discard</button>
</Link>
</div>
        </div>
        
    </div>
  )
}

export default SettingPage