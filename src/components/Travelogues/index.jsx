import React from 'react'
import './Travelogues.css'
const Travelogues = () => {
    return (
        <div className='Travelogues_main_div'>
            <h1 className='Travelogues_h1'>Fuel your daydreams</h1>
            <p className='Travelogues_p'>Stoke your wanderlust with some dreamy photo chronicles of road trip adventures.</p>
            <div className='Travelogues_button_div'>
                <button className='Travelogues_button text-center'>Explore Travelogues</button>
            </div>
            <div className='Travelogues_bg_img_div'>
                <div className='left_nested_div'>
                    <p className='nested_p'>Featured Travelogues</p>
                    <p className='nested_sec_p'>An Olympic experience in Washington</p>
                    <p className='nested_third_p'>Discover the epic waterfalls, moody weather, and lush forests of coastal Washington.</p>
                    <a href="" className='nested_a'>Read more</a>
                </div>

            </div>
        </div>
    )
}

export default Travelogues

// Travelogues