import React from 'react'
import './ThirdSlider.css'
import Slider from "react-slick";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div>
            < MdOutlineArrowForwardIos onClick={onClick} className={className} style={{ color: 'black', top: '-20', right: '43px' }} />
        </div>
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div>
            < MdOutlineArrowBackIosNew className={className} onClick={onClick} style={{ color: 'black', top: '-20', left: '89%' }} />
        </div>
    );
}
const ThirdSlider = () => {
    
    var settings = {
        infinite: true, 
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />

    }

  return (
   <div className='container-fluid first_slider_main_div'>
            <div className='container first_slider_second_main_div'>
                <h1 className='slider_h1'>Browse by destination</h1>
                <Slider {...settings}>
                    <div className='third_slider_img_div'>
                        <img className='third_slider_img' src='https://resources.turo.com/f/81934/240x240/87ab56dd05/illo_city_toronto-2x.png' />
                        <h3 className='text-center'>Toronto</h3>
                    </div>
                    <div className='third_slider_img_div'>
                        <img className='third_slider_img' src='https://resources.turo.com/f/81934/240x240/7825448638/illo_city_losangeles-2x.png' />
                        <h3 className='text-center'>Los Angeles</h3>
                    </div>
                    <div className='third_slider_img_div'>
                        <img className='third_slider_img' src='https://resources.turo.com/f/81934/240x240/bbe188de38/illo_city_honolulu-2x.png' />
                        <h3 className='text-center'>Honolulu</h3>
                    </div>
                    <div className='third_slider_img_div'>
                        <img className='third_slider_img' src='https://resources.turo.com/f/81934/240x240/24053a444a/illo_city_sydney-2x.png' />
                        <h3 className='text-center'>Sydney</h3>
                    </div>
                    <div className='third_slider_img_div'>
                        <img className='third_slider_img' src='https://resources.turo.com/f/81934/240x240/1442627566/illo_city_london-2x.png' />
                        <h3 className='text-center'>London</h3>
                    </div>
                    <div className='third_slider_img_div'>
                        <img className='third_slider_img' src='https://resources.turo.com/f/81934/240x240/101ea2791a/illo_city_jerseycity-2x.png' />
                        <h3 className='text-center'>Jersey City</h3>
                    </div>
                    <div className='third_slider_img_div'>
                        <img className='third_slider_img' src='https://resources.turo.com/f/81934/240x240/c00858690e/illo_city_sanfrancisco-2x.png' />
                        <h3 className='text-center'>San Francisco</h3>
                    </div>
                    <div className='third_slider_img_div'>
                        <img className='third_slider_img' src='https://resources.turo.com/f/81934/240x240/a49b80f1ba/illo_city_atlanta-2x.png' />
                        <h3 className='text-center'>Atlanta</h3>
                    </div>
                </Slider>
            </div>
        </div>

  )
}

export default ThirdSlider
