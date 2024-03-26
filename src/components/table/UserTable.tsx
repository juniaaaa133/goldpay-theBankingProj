import Link from 'next/link'
import React from 'react'

const Table = ({data,h} : {
  data : {
    id : number,
  name : string,
  phone_number : string,
  account_number : string,
  state : string, 
  township: string,
  role : string,
  }[] ,
  h : string,
}) => {

  return (
       <div className="tb-main bg-sec" style={{
        height : h
       }}>
        <div className="tb-prnt tb-ab">
          <div className="tbh fontcl main-f bg-ter">Name</div>
          <div className="tbh fontcl main-f bg-ter">Phone Number</div>
          <div className="tbh fontcl main-f bg-ter">Account Number</div>
          <div className="tbh fontcl main-f bg-ter">State</div>
          <div className="tbh fontcl main-f bg-ter">Township</div>
          <div className="tbh fontcl main-f bg-ter">Role</div>
        </div>
      {
        data.map((table , index : number) => (
          <Link key={index} href='/' className="trans tb-prnt ">
          <div className="tbd fontcl3 main-f ">{table.name}</div>
          <div className="tbd fontcl3 main-f ">{table.phone_number}</div>
          <div className="tbd fontcl3 main-f ">{table.account_number}</div>
          <div className="tbd fontcl3 main-f ">{table.state}</div>
          <div className="tbd fontcl3 main-f ">{table.township}</div>
          <div className="tbd fontcl3 main-f ">{table.role}</div>
        </Link>
        ))
      }
       </div>
  )
}

export default Table