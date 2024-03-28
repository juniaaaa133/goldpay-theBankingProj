import React from 'react'

const CreateUserPage = () => {
  return (
    <div className="ud-main bg-sec">
        <div className="ud-parent main-f">
            <div className="ud-label fontcl3">Name</div>
    <div className="ud-inp">
    <input type="text" className="inp fontcl main-f"/>

    </div>
        </div>
        <div className="ud-parent main-f">
            <div className="ud-label fontcl3">Email Address</div>
    <div className="ud-inp">
    <input type="text" className="inp fontcl main-f" />

    </div>
        </div>
        <div className="ud-parent main-f">
            <div className="ud-label fontcl3">Phone Number</div>
    <div className="ud-inp">
    <input type="text" className="inp fontcl main-f" />

    </div>
        </div>
        <div className="ud-parent main-f">
            <div className="ud-label fontcl3">Total Balance</div>
    <div className="ud-inp">
    <input type="text" className="inp fontcl main-f" />

    </div>
        </div>
        <div className="ud-parent main-f">
            <div className="ud-label fontcl3">State</div>
    <div className="ud-inp">
    <input type="text" className="inp fontcl main-f" />

    </div>
        </div>
        <div className="ud-parent main-f">
            <div className="ud-label fontcl3">Township</div>
    <div className="ud-inp">
    <input type="text" className="inp fontcl main-f" />

    </div>
        </div>
        <div className="ud-btn-ctn">
            <button className="btn1 bcu trans main-f text-[14px] fontcl">Create</button>
        </div>
    </div>  )
}

export default CreateUserPage