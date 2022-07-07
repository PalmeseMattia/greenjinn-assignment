import React, { useEffect, useState } from 'react'
import GJNumberLabel from './GJNumberLabel';

export default function BitStampTradingValue({ currency}) {
    const link = 'https://www.bitstamp.net/api/v2/ticker/'
    const [value, setValue] = useState({})
    
    async function fetchData(endpoint){
      fetch(`${endpoint}${currency}`)
      .then(response => response.json())
      .then(data => setValue(data))
    }
  
    useEffect(() => {
      fetchData(link)
    },[currency])

    return (

      <div className='bitstamptradingvalue'>
        {Object.keys(value).map(val => 
          <GJNumberLabel number={value[val]} description={val}/>
        )}
      </div>
  )
}
