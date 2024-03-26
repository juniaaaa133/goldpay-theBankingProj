'use client'
import React from 'react'
import ButtonC from '@/ELEMENTX/Ui/Buttons/ButtonC'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const LoginPage = () => {

let route = useRouter();

let AuthGate = () => {
    sessionStorage.setItem('auth','1');
    route.push('/')
}

  return (
    <div className='ln-main bg-main'>
        <div className="ln-title-ctn">
            <div className="ln-desc fontcl3 sec-f ">
                We serve anyone , anywhere , anytime.
            </div>
            <div className="ln-head fontcl2 sec-f text-[40px]">Goldpay</div>
            <div className="ln-mini fontcl sec-f text-[40px]">Banking Service App</div>
        </div>
        <div className="ln-ctn">
            <div className="ln-img-ctn">
                <div className="ln-img-ctn1">
                    <img src="https://i.pinimg.com/564x/6a/ba/76/6aba76a10ba36eedecb99a1fe1b803fe.jpg" alt="" className="ln-img pic" />
                    <img src="https://i.pinimg.com/564x/3a/66/4d/3a664d14e04258c619eeca87e5140af3.jpg" alt="" className="ln-img pic" />
                </div>
                <div className="ln-img-ctn2">
                <img src="https://i.pinimg.com/564x/74/88/9e/74889e24b1ca966ca20ee5bbe5c62d47.jpg" alt="" className="ln-img pic" />
                    <img src="https://i.pinimg.com/564x/c6/35/4c/c6354c8f91fbd5bc95da8f4240607da4.jpg" alt="" className="ln-img pic" />
            
                </div>

            </div>
            <div className="ln-form-ctn">
                <div className="ln-form bg-sec">
<div className="inp-ctn">
<input type="email" placeholder='Email Address' className="inp main-f w-[80%] text-[14px] font-[600]" />
</div>
<div className="inp-ctn">
<input type="password" placeholder='Password' className="inp main-f w-[80%] text-[14px] font-[600]" />
</div>
<div onClick={AuthGate} className="ln-btn-ctn ">
<button className="btn1 bcu trans">Login</button>
</div>
<div className="ln-sign-ctn">
<div className="ln-sign fontcl main-f ">Not have an account ?</div>
<Link href='/sign-up' className='fontcl2  main-f'>Register</Link>
</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage