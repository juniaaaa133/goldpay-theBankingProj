'use cilent'
import { dummy_users } from '@/data';
import { UserType } from '@/types'
import React, { useEffect, useState } from 'react'

const UserDetailPage = ({id} : {
    id : string,
}) => {

let [userData,setUserData] = useState<UserType>();


let FetchData = () => {
    //fetched api data instead of dummy data;
    let filteredData = dummy_users.filter((data) => (
        data.id === parseInt(id)
    ))[0];
    setUserData(filteredData);
}

useEffect(()=>{
    FetchData();
},[])

  return (
userData == undefined ?
<></>
:
<div className="ud-main bg-sec">
<div className="ud-parent main-f">
    <div className="ud-label fontcl3">Name</div>
<div className="ud-inp">
<input type="text" className="inp fontcl main-f" defaultValue={userData.name}/>

</div>
</div>
<div className="ud-parent main-f">
    <div className="ud-label fontcl3">Email Address</div>
<div className="ud-inp">
<input type="text" className="inp fontcl main-f" defaultValue={userData.email}/>

</div>
</div>
<div className="ud-parent main-f">
    <div className="ud-label fontcl3">Phone Number</div>
<div className="ud-inp">
<input type="text" className="inp fontcl main-f" defaultValue={userData.phone}/>

</div>
</div>
<div className="ud-parent main-f">
    <div className="ud-label fontcl3">Total Balance</div>
<div className="ud-inp">
<input type="text" className="inp fontcl main-f" defaultValue={userData.amount}/>

</div>
</div>
<div className="ud-parent main-f">
    <div className="ud-label fontcl3">State</div>
<div className="ud-inp">
<input type="text" className="inp fontcl main-f" defaultValue={userData.state}/>

</div>
</div>
<div className="ud-parent main-f">
    <div className="ud-label fontcl3">Township</div>
<div className="ud-inp">
<input type="text" className="inp fontcl main-f" defaultValue={userData.township}/>

</div>
</div>
<div className="ud-btn-ctn">
    <button className="btn1 bcu trans main-f text-[14px] fontcl">Update</button>
</div>
</div>
    
  )
}

export default UserDetailPage