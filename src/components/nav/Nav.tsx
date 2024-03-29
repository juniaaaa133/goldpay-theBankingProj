'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";

const Nav = () => {

let [hasOpend, setHasOpened] = useState(false);

  return (
<>
<div className='nv-main bg-sec'>
<div className="nv-ctn">
<div className="nv-menu-ctn">
<CiMenuFries onClick={()=>setHasOpened(true)} className='bcu main-f nv-icn fontcl text-[20px]'/>
<div className="nv-logo fontcl2 main-f">Goldpay</div>
    </div>    
<div className="nv-name main-f fontcl main-f">Rein Ogga Myo</div>
</div>
    </div>
    <div className={`nv-bg mega-trans bg-sec ${hasOpend == true ? 'nv-on' : 'nv-off'}`}>
    <div className="nv-bg-ctn">
<CiMenuFries onClick={()=>setHasOpened(false)} className='bcu main-f nv-icn fontcl text-[20px]'/>
<div className="nv-logo main-f fontcl2 ">Goldpay</div>
    </div>   
    <div className="nv-a-ctn">
        <Link onClick={()=>setHasOpened(false)} className='nv-a fontcl trans main-f ' href='/'>Home</Link>
        <Link onClick={()=>setHasOpened(false)} className='nv-a fontcl trans main-f ' href='/transfer'>Transfer</Link>
        <Link onClick={()=>setHasOpened(false)} className='nv-a fontcl trans main-f ' href='/user-management'>User Management</Link>
        <Link onClick={()=>setHasOpened(false)} className='nv-a fontcl trans main-f ' href='/transcation-history'>History</Link>
        <Link onClick={()=>setHasOpened(false)} className='nv-a fontcl trans main-f ' href='/setting'>Setting</Link>

    </div>
    </div>
    <div onClick={()=>setHasOpened(false)} className={`nv-layer trans ${hasOpend == true ? 'nvl-on': 'nvl-off'}`}></div>
</>
  )
}

export default Nav