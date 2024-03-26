import Link from 'next/link'
import React from 'react'
import { FaUserPlus } from 'react-icons/fa'
import Table from '../table/UserTable'
import { dummy_table_data } from '@/data'

const UserPage = () => {
  return (
    <div className='usr-main bar'>
        <div className="usr-title fontcl main-f">User Management</div>
        <div className="hm-tb-add-usr main-f bg-sec mega-trans">
<FaUserPlus className='text-[14px] fontcl '/>
<Link className='hm-tb-add-txt fontcl' href='/' >Add</Link>
        </div>
        <Table  h='400px' data={dummy_table_data}/>
    </div>
  )
}

export default UserPage