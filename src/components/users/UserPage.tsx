'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaUserPlus } from 'react-icons/fa'
import Table from '../table/UserTable'
import { dummy_users } from '@/data'

const UserPage = () => {

  let [tableData,setTableData] = useState<{
    id: number ,
    name : string,
    phone : string,
    amount : number,
    account_no : string,
    state : string,
    township: string,
    role : string,
    }[]>([]);
  
  //Fetch api data in real time;
  let FetchData = () => {
  //Fetched api data instead of dummy data;
  setTableData(dummy_users);
  }
  
  useEffect(()=>{
  FetchData();
  },[])

  return (
    <div className='usr-main bar'>
        <div className="usr-title fontcl main-f">User Management</div>
        <div className="hm-tb-add-usr main-f bg-sec mega-trans">
<FaUserPlus className='text-[14px] fontcl '/>
<Link className='hm-tb-add-txt fontcl' href='/' >Add</Link>
        </div>
        <Table  h='400px' data={tableData}/>
    </div>
  )
}

export default UserPage