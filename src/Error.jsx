import React from 'react'
import home from './assets/images/Home.png'
import { Link } from 'react-router-dom'
import { BsTools } from 'react-icons/bs'
import { BsFillArrowLeftSquareFill } from 'react-icons/bs'

const Error = () => {
  return (
    <>
    <div className='errorLink_container'>
    <Link className='linkStyle' to='/'><div className="error_link"><BsFillArrowLeftSquareFill className='error_link_icon'/><span>Back Home</span></div></Link>
    </div>
    <div className='loading_container'>
        <span className='loading_text' >PAGE NOT FOUND</span>
        <BsTools className='hourGlass'/>
    </div>
    </>
  )
}

export default Error