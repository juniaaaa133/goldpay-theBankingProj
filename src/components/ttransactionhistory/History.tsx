import React, { useEffect, useState } from 'react'
import HistoryTable from '../table/HistoryTable'
import { dummy_history_data } from '@/data'
import { TransHistoryType } from '@/types'

const History = () => {

  let [historyData ,setHistoryData] = useState<TransHistoryType[]>()

  //fetch api in real time;
  let FetchData = () => {
    //fetched api data instead of dummy data;
    setHistoryData(dummy_history_data);
  }

  useEffect(()=>{
    FetchData();
  },[])

  return (
    
 historyData !== undefined ? 
 <div className="hs-main bar">
 <div className="usr-title fontcl main-f">Transcation History</div>
 <HistoryTable data={historyData}/>
</div>
: 
<></>
  )
}

export default History