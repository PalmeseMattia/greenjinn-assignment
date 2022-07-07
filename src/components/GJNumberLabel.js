import React from 'react'

export default function GJNumberLabel({number, description}) {
  return (
    <div className='GJnumberlabel'>
        <h4>{number}</h4>
        <p style={{color:'orange'}}>{description}</p>
    </div>
  )
}
