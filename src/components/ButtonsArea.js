import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';


export default function ButtonArea({ handleClick }) {
  const endpoint = 'https://www.bitstamp.net/api/v2/trading-pairs-info/'
  const [tradingPairs, setTradingPairs] = useState([])

  useEffect(() => {
    async function fetchData(){
        const response = await fetch(endpoint)
        const json = await response.json();
        setTradingPairs(json)
    }
    fetchData();
  }, []);

  return (
    <div className='buttonsarea'>
      {tradingPairs.map(pair => 
        <Button key={pair.url_symbol} 
                variant='dark'
                className="buttonsarea--button"
                onClick={() => handleClick(pair.url_symbol)}>
        {pair.url_symbol}</Button>
      )}
    </div>
  )
}
