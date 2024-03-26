import Link from 'next/link'
import React from 'react'

const HistoryTable = ({data} : {
    data : {
        id : number,
        balance : number,
        from_account : string,
        to_account : string,
        date : string,
    }[]
}) => {
  return (
    <div className="tb-main bg-sec" style={{height : '450px'}} >
        <div className="tb-prnt tb-ab">
          <div className="tbh-his fontcl main-f bg-ter">Amount</div>
          <div className="tbh-his fontcl main-f bg-ter">From</div>
          <div className="tbh-his fontcl main-f bg-ter">To</div>
          <div className="tbh-his fontcl main-f bg-ter">Date</div>
 
        </div>
      {
        data.map((table , index : number) => (
          <Link key={index} href='/' className="trans tb-prnt ">
          <div className="tbd-his fontcl3 main-f ">{table.balance}</div>
          <div className="tbd-his fontcl3 main-f ">{table.from_account}</div>
          <div className="tbd-his fontcl3 main-f ">{table.to_account}</div>
          <div className="tbd-his fontcl3 main-f ">{table.date}</div>
        </Link>
        ))
      }
       </div>
         )
}

export default HistoryTable