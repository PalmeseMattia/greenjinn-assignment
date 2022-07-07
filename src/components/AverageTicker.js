import React, { useState, useEffect } from 'react'
import GJNumberLabel from './GJNumberLabel'
import axios from 'axios'

const LINKS = [
    'https://www.bitstamp.net/api/v2/ticker/btcusd',
    'https://api.coinbase.com/v2/exchange-rates?currency=BTC',
    'https://api-pub.bitfinex.com/v2/tickers?symbols=tBTCUSD'
]
export default function AverageTicker() {
    const [bitstamp, setBitStamp] = useState([])
    const [coinbase, setCoinBase] = useState([])
    const [bitfinex, setBitfinex] = useState([])

    function fetchData(link,setter,jsonkey){
        axios.get(link)
         .then (response => response.data)
         .then(data => setter(data[jsonkey]))
    }


    useEffect(() => {
        fetchData(LINKS[0], setBitStamp,'last');
        fetchData(LINKS[1], setCoinBase, '')
        fetchData(LINKS[2], setBitfinex, 0)
    }, []);

    console.log(coinbase)
    
    return (
        
        <div className='averageticker'>
            <GJNumberLabel number={bitstamp} description='bitstamp'/>
            {}
            <GJNumberLabel number={bitfinex[1]} description='bitfinex'/>
        </div>
  )
}
