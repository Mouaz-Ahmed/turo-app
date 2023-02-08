import React from 'react'
import './Header.css'
import turoLogo from '../../images/Turo-Symbol.png'
import { AiOutlineMenu } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
const FirstHeader = () => {
  return (
    <div className='App-header'>
      <div className='first_header'>
        <p>Turo is open for business in Australia! Tap to explore cars.</p>
      </div>

      <div className='second_header'>
        <img src={turoLogo} className='turo-logo'></img>
          <button className='button'>Become a host</button>
        <div>
          < AiOutlineMenu className='header_icons' />
          < BsPersonCircle className='header_icons' />
        </div>
      </div>
    </div>
  )
}

export default FirstHeader
