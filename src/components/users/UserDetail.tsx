import React from 'react'

const UserDetailPage = () => {
  return (
    <div className="ud-main bg-sec">
        <div className="ud-parent main-f">
            <div className="ud-label fontcl3">Name</div>
    <div className="ud-inp">
    <input type="text" className="inp fontcl main-f" defaultValue='Rein Ogga Myo'/>

    </div>
        </div>
        <div className="ud-parent main-f">
            <div className="ud-label fontcl3">Email Address</div>
    <div className="ud-inp">
    <input type="text" className="inp fontcl main-f" defaultValue='xopeofhopeness2004@gmail.com'/>

    </div>
        </div>
        <div className="ud-parent main-f">
            <div className="ud-label fontcl3">Phone Number</div>
    <div className="ud-inp">
    <input type="text" className="inp fontcl main-f" defaultValue='09794302034'/>

    </div>
        </div>
        <div className="ud-parent main-f">
            <div className="ud-label fontcl3">Total Balance</div>
    <div className="ud-inp">
    <input type="text" className="inp fontcl main-f" defaultValue='20000Ks'/>

    </div>
        </div>
        <div className="ud-parent main-f">
            <div className="ud-label fontcl3">State</div>
    <div className="ud-inp">
    <input type="text" className="inp fontcl main-f" defaultValue='Yangon'/>

    </div>
        </div>
        <div className="ud-parent main-f">
            <div className="ud-label fontcl3">Township</div>
    <div className="ud-inp">
    <input type="text" className="inp fontcl main-f" defaultValue='South Okkalapa'/>

    </div>
        </div>
        <div className="ud-btn-ctn">
            <button className="btn1 bcu trans main-f text-[14px] fontcl">Update</button>
        </div>
    </div>
    
  )
}

export default UserDetailPage