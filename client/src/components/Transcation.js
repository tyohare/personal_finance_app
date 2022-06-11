import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Transcation = ({ transactions }) => {

    const { deleteTranscation } = useContext(GlobalContext)
    const sign = transactions.amount < 0 ? '-' : '+';
  return (
<li className={transactions.amount < 0 ? 'minus' : 'plus'}>
        {transactions.text} <span>{sign}${Math.abs(transactions.amount)}</span>
        <button onClick={() => deleteTranscation(transactions.id)} className="delete-btn" >x</button>
      </li>
  )
}

export default Transcation