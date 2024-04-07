import React, { useEffect, useState } from 'react'
import Cta from '../cta/Cta'
import Table from '../table/UserTable'
import { FaUserPlus } from "react-icons/fa";
import Link from 'next/link';
import { dummy_users } from '@/data';

const HomePage = () => {

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
//Fetched filtered api data instead of dummy data;
let filtered_data = dummy_users
.sort((a,b) => b.id - a.id)
.filter((data,index: number) =>(
  index < 6 
))
setTableData(filtered_data);
}

useEffect(()=>{
FetchData();
},[])


  return (
    <div className='hm-main bar'>
      <div className="cta-ctn">
        <div className="cta-w">
        <Cta text='Withdraw' url='/withdraw' />
        </div>
        <div className="cta-w">
        <Cta text='Deposit' url='/deposit' />
        </div>
        <div className="cta-w">
        <Cta text='Transfer' url='/' />
        </div>

      </div>
      <div className="hm-tb-ctn">
        <div className="hm-tb-title main-f fontcl"> New Users</div>
        <div className="hm-tb-add-usr main-f bg-sec mega-trans">
<FaUserPlus className='text-[14px] fontcl '/>
<Link className='hm-tb-add-txt fontcl' href='/create-user' >Add</Link>
        </div>
        <Table h='300px' data={tableData}/>
      </div>
    </div>
  )
}

export default HomePage