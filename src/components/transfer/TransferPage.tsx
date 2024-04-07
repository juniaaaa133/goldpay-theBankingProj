'use client'
import ButtonC from '@/ELEMENTX/Ui/Buttons/ButtonC'
import React, { ChangeEvent, useRef, useState } from 'react'
import { FaRegUser } from "react-icons/fa";
import Empty from '../emptyUI/Empty';
import { dummy_fast_amount, dummy_users } from '@/data';
import { FiPlus } from "react-icons/fi";
import ToggleX from '@/ELEMENTX/Ui/Toggle/ToggleX';
import { UserType } from '@/types';

const TransferPage = () => {

    let [hasError,setHasError] = useState<string>('');
    let [isDone,setIsDone] = useState(false);
    let [isEmpty,setIsEmpty]  = useState(true);

    let amountInput = useRef<HTMLInputElement>(null);
    
    //Payee
    let [isSelectedPayee,setIsSelectedPayee] = useState(false);
    let [searchedUsers,setSearchedUsers] = useState<UserType[]>()
    let [payee,setpayee] = useState<UserType>();

    //Payor
    let [SearchedPayees,setSearchedPayees] = useState<UserType[]>()
    let [payor,setPayor] = useState<UserType>();
    
    
    let FindUsers = (e : ChangeEvent<HTMLInputElement>,isPayee : boolean) => {
    let searchedWords = e.currentTarget.value;
    if(isPayee == false){
    if(searchedWords == ''){
        setSearchedUsers([])
      }else {
        let filteredUser = dummy_users.filter((data) => (
          data.phone.includes(searchedWords)
        ))
        setSearchedUsers(filteredUser);
      }
    }else {
    if(searchedWords !== ''){
      let filteredUser = dummy_users.filter((data) => (
        data.phone.includes(searchedWords) 
      ))
      setSearchedPayees(filteredUser);
      }else {
        setSearchedPayees([])
      }
}
    }
    
    let ChooseAccount = (id : number,isPayee : boolean) => {
if(isPayee == false){
    setIsEmpty(false);
    let filteredUser = dummy_users.filter((data) => (
      data.id == id
    ))[0];
    setPayor(filteredUser);
}else{
    let filteredUser = dummy_users.filter((data) => (
      data.id == id
    ))[0];
    setpayee(filteredUser);
    setSearchedPayees([])
    setIsSelectedPayee(true);
}
    }
  
    
let GetAmountTemplate = (value: number) => {
  if(amountInput.current){
   amountInput.current.value = `${value}`;
  }
}

let SubmitAction = () => {
if(payor && payee && amountInput.current !== null && payor.id !== payee.id){
  if(payor.amount >= parseInt(amountInput.current.value) ){
    payee.amount = payee.amount +  parseInt(amountInput.current.value)
    payor.amount = payor.amount -  parseInt(amountInput.current.value)
    setHasError('')
    setIsDone(true);
    setTimeout(() => {
      setIsDone(false)
    }, 3000);
  }else {
    setHasError('invalid_balance')
    return;
  }

}else{
  setHasError('invalid_person')
  return;
}

}


  return (
  <>
    <div className='tr-main'>
         <div className="tr-srh-ctn">
            <div className="tr-label-ctn main-f ">
                <div className="tr-title fontcl">Choose Payor</div>
                <div className="tr-label fontcl3">To make payment</div>
            </div>
            <div className="tr-srh">
<div className="srh-ctn">
<input onChange={(e)=>FindUsers(e,false)} type="text" placeholder='Search with phone number' className="inp fontcl text-[14px] main-f" />
</div>
            </div>
            <div className="tr-result-ctn bg-sec">
              {
                searchedUsers?.length == 0 ? <></>
                :
              searchedUsers?.map((user,index) => (
                <div key={index} onClick={()=>ChooseAccount(user.id,false)} className="tr-result bcu trans">
                <FaRegUser className='tr-usr-icn p-[6px] rounded-full bg-red-500'/>
                <div className="tr-info-ctn ">
                  <div className="tr-name text-[14px] main-f fontcl">{user?.name}</div>
                  <div className="tr-ph text-[12px] main-f fontcl fontcl3">{user?.phone}</div>
                </div>
              </div>
              ))
              }
          
          
            </div>
        </div>
        <div className="tr-popup-ctn bg-sec">
         {
          isEmpty == true ? 
          <Empty />
          :
          <div className="dp-pops">
         <div className="dp-pop-title ">
            <div className="dp-pop-name fontcl main-f bg-main">{payor?.name}</div>
            <div className="dp-pop-amt fontcl3 main-f ">
            Current Amount - {payor?.amount} Ks
            </div>
          </div>
          <div className="tr-pop-payeer-ctn">
          <div className="tr-label-ctn main-f ">
                <div className="tr-title fontcl">Choose Payee</div>
                <div className="tr-label fontcl3">To receive payment</div>
            </div>
            <div className={`${isSelectedPayee == true ? 'tr-payee' : 'hidden'} `}>
            <div className="tr-payee-info-ctn">
            <FaRegUser className='tr-usr-icn p-[6px] rounded-full'/>
<div className="tr-info-ctn ">
                  <div className="tr-name text-[14px] main-f fontcl">{payee?.name}</div>
                  <div className="tr-ph text-[12px] main-f fontcl fontcl3">{payee?.phone}</div>
                  <div className="tr-ph text-[12px] main-f fontcl fontcl3">{payee?.amount}Ks</div>
                </div>
            </div>
            <FiPlus onClick={()=>setIsSelectedPayee(false)} className='fontcl main-f cancel bcu'/>
            </div>

           <div className={`${isSelectedPayee == true ? 'hidden' : 'tr-srh'}`}>
<div className="srh-ctn">
<input onChange={(e)=>FindUsers(e,true)} type="text" placeholder='Search with phone number' className="inp fontcl text-[14px] main-f" />
</div>
            </div>
            <div className={`${isSelectedPayee == true ? 'hidden' : 'tr-result-ctn bg-sec'}`}>
              {
                SearchedPayees?.length == 0 ? <></>
                :
              SearchedPayees?.map((user,index) => (
                <div key={index} onClick={()=>ChooseAccount(user.id,true)} className="tr-result bcu trans">
                <FaRegUser className='tr-usr-icn p-[6px] rounded-full bg-red-500'/>
                <div className="tr-info-ctn ">
                  <div className="tr-name text-[14px] main-f fontcl">{user?.name}</div>
                  <div className="tr-ph text-[12px] main-f fontcl fontcl3">{user?.phone}</div>
                </div>
              </div>
              ))
              }

            </div> 
          </div>
          <div className="dp-pop-form-ctn">
<div className="dp-pop-inp-ctn">
<input ref={amountInput} type="text" className="inp fontcl main-f " />
</div>
<div className="dp-btn-ctn">
<button onClick={SubmitAction} className="dp-btn btn1 trans bcu fontcl main-f text-[14px]">Transfer</button>

</div>
          </div>
          <div className={`${hasError == 'invalid_balance' ? 'tr-title' : 'hidden'}`}  style={{fontSize : '15px',color: '#ff8787', marginTop: '-50px'}}>Please fill valid amount.</div>
          <div className={`${hasError == 'invalid_person' ? 'tr-title' : 'hidden'}`}  style={{fontSize : '15px',color: '#ff8787', marginTop: '-50px'}}>Cannot transfer to the same person.</div>
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
            <ToggleX text={'Succeed!'} open={isDone} />
  </>
  )
}

export default TransferPage