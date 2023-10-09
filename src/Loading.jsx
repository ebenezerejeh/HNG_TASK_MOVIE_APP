import React from 'react'
import {BsHourglassSplit} from 'react-icons/bs'

const Loading = () => {
  return (
    <div className='loading_container'>
        <span className='loading_text'>LOADING...</span>
        <BsHourglassSplit className='hourGlass'/>
    </div>
  )
}

export default Loading