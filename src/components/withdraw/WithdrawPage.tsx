'use client'
import ButtonC from '@/ELEMENTX/Ui/Buttons/ButtonC'
import React, { ChangeEvent, useRef, useState } from 'react'
import { FaRegUser } from "react-icons/fa";
import Empty from '../emptyUI/Empty';
import { dummy_fast_amount, dummy_users } from '@/data';
import ToggleX from '@/ELEMENTX/Ui/Toggle/ToggleX';
import { UserType } from '@/types';

const WithdrawPage = () => {

let [hasError,setHasError] = useState<string>('');
let [isDone,setIsDone] = useState(false);
let amountInput = useRef<HTMLInputElement>(null);
let [isEmpty,setIsEmpty]  = useState(true);
let [user,setUser] = useState<UserType>();

let [searchedUsers,setSearchedUsers] = useState<UserType[]>()

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
  if(user.amount >= parseInt(amountInput.current.value)){
    user.amount = user.amount -  parseInt(amountInput.current.value)
    setIsDone(true);
    setHasError('');
  setTimeout(() => {
    setIsDone(false)
  }, 3000);
  }else {
    setHasError('invalid_balance')
    return;
  }
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
<input ref={amountInput} placeholder='$$$mmk' type="text" className="inp fontcl main-f " />
</div>
<div className="dp-btn-ctn">
<button onClick={SubmitAction} className="dp-btn btn1 trans bcu fontcl main-f text-[14px]">Withdraw</button>

</div>
          </div>
          <div className={`${hasError == 'invalid_balance' ? 'tr-title' : 'hidden'}`}  style={{fontSize : '15px',color: '#ff8787', marginTop: '-50px'}}>Please fill valid amount.</div>
          <div className="dp-pop-amt-ctn">
          {
  dummy_fast_amount.map((data,index :number) => (
    <div key={index} onClick={()=>GetAmountTemplate(data.amount)} className="dp-pop-amts fontcl main-f bg-ter mega-trans bcu">{data.amount}</div>

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

export default WithdrawPage