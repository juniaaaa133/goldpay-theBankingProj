import React from 'react'
import HistoryTable from '../table/HistoryTable'
import { dummy_history_data } from '@/data'

const History = () => {
  return (
    
    <div className="hs-main bar">
        <div className="usr-title fontcl main-f">Transcation History</div>
        <HistoryTable data={dummy_history_data}/>
    </div>
  )
}

export default History