import { UserType } from '@/types'
import Link from 'next/link'
import React from 'react'

const Table = ({data,h} : {
  data : UserType[] ,
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
          <Link key={index} href={`/user-management/${table.id}`} className="trans tb-prnt ">
          <div className="tbd fontcl3 main-f ">{table.name}</div>
          <div className="tbd fontcl3 main-f ">{table.phone}</div>
          <div className="tbd fontcl3 main-f ">{table.account_no}</div>
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