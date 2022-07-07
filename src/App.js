import React, {useState} from 'react'
import './App.css'
import AverageTicker from './components/AverageTicker'
import BitStampTradingValue from './components/BitStampTradingValue'
import ButtonsArea from './components/ButtonsArea'

export default function App() {
  const [currencyPair, setCurrencyPair] = useState('btcusd')

  return (
      <div className='main--container'>
        <AverageTicker/>
        <ButtonsArea handleClick={setCurrencyPair}/>
        <BitStampTradingValue currency={currencyPair}/>
      </div>
  )
}
