import React from 'react'
import FirstSlider from '../FirstSlider'
import SecondSlider from '../SecondSlider'
import ThirdSlider from '../ThirdSlider'
import './Section.css'

const Section = () => {
  return (
    <div className='container'>
      <h1 className='text-center h1'>Find your drive</h1>
      <h1 className='text-center second_h1'>Explore the world's largest car sharing marketplace</h1>
      < FirstSlider />
      < SecondSlider />
      < ThirdSlider />
    </div>

  )
}

export default Section
