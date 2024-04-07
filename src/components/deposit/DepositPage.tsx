'use client'
import ButtonC from '@/ELEMENTX/Ui/Buttons/ButtonC'
import React, { ChangeEvent, useRef, useState } from 'react'
import { FaRegUser } from "react-icons/fa";
import Empty from '../emptyUI/Empty';
import { dummy_fast_amount, dummy_users } from '@/data';
import ToggleX from '@/ELEMENTX/Ui/Toggle/ToggleX';

const DepositPage = () => {

let [isDone,setIsDone] = useState(false);
let amountInput = useRef<HTMLInputElement>(null);
let [isEmpty,setIsEmpty]  = useState(true);
let [user,setUser] = useState<{
  id : number ,
  name : string,
  phone : string,
  amount : number,
  account_no : string,
}>();

let [searchedUsers,setSearchedUsers] = useState<{
  id : number ,
  name : string,
  phone : string,
  amount : number,
  account_no : string,
}[]>()

let FindUsers = (e : ChangeEvent<HTMLInputElement>) => {
 
let searchedWords = e.currentTarget.value;
if(searchedWords == ''){
  setSearchedUsers([])
}else {
  let filteredUser = dummy_users.filter((data) => (
    data.phone.includes(searchedWords) 
  ))
  setSearchedUsers(filteredUser);
}

}

let ChooseAccount = (id : number) => {
setIsEmpty(false);
let filteredUser = dummy_users.filter((data) => (
  data.id == id
))[0];
setUser(filteredUser);
}

let GetAmountTemplate = (value: number) => {
  if(amountInput.current){
     amountInput.current.value = `${value}`;
  }
}

let SubmitAction = () => {
if(user && amountInput.current !== null ){
user.amount = user.amount +  parseInt(amountInput.current.value)
setIsDone(true);
setTimeout(() => {
  setIsDone(false)
}, 3000);
}else{
  return;
}

}

  return (
<>
<div className='dp-main'>
        <div className="dp-srh-ctn">
            <div className="dp-srh">
<div className="srh-ctn">
<input onChange={(e)=>FindUsers(e)} type="text" placeholder='Search with phone number' className="inp fontcl text-[14px] main-f" />
</div>
            </div>
            <div className="dp-result-ctn bg-sec">
              {
                searchedUsers?.length == 0 ? <></>
                :
              searchedUsers?.map((user,index) => (
                <div key={index} onClick={()=>ChooseAccount(user.id)} className="dp-result bcu trans">
                <FaRegUser className='dp-usr-icn p-[6px] rounded-full bg-red-500'/>
                <div className="dp-info-ctn ">
                  <div className="dp-name text-[14px] main-f fontcl">{user?.name}</div>
                  <div className="dp-ph text-[12px] main-f fontcl fontcl3">{user?.phone}</div>
                </div>
              </div>
              ))
              }
          
            </div>
        </div>
        <div className="dp-popup-ctn bg-sec">
         {
          isEmpty == true ? 
          <Empty />
          :
          <div className="dp-pops">
         <div className="dp-pop-title ">
            <div className="dp-pop-name fontcl main-f bg-main">{user?.name}</div>
            <div className="dp-pop-amt fontcl3 main-f ">
            Current Amount - {user?.amount} Ks
            </div>
          </div>
          <div className="dp-pop-form-ctn">
<div className="dp-pop-inp-ctn">
<input ref={amountInput} type="text" className="inp fontcl main-f " />
</div>
<div className="dp-btn-ctn">
<button onClick={SubmitAction} className="dp-btn btn1 trans bcu fontcl main-f text-[14px]">Deposit</button>

</div>
          </div>
          <div className="dp-pop-amt-ctn">
{
  dummy_fast_amount.map((data,index :number) => (
    <div onClick={()=>GetAmountTemplate(data.amount)} key={index} className="dp-pop-amts fontcl main-f bg-ter mega-trans bcu">{data.amount}</div>

  ))
}
          </div>
         </div>
         }
        </div>
    </div>
    <ToggleX open={isDone} text='Succeed!'/>
</>
  )
}

export default DepositPage