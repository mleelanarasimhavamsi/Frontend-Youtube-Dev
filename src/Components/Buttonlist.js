import React from 'react'
import Button from './Button'

const list=["All","News","Apis","Live","Sports","Google","Watched","RecentlyUploded","Software","Technology","Subjects"]

const Buttonlist = () => {

  return (
    <div>
      <ul className='flex'>
      {
        list.map((each)=>(
          <li><Button name={each}/></li>
        ))
      }
      </ul>
    </div>
  )
}

export default Buttonlist