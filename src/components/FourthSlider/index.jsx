import './FourthSlider.css'
import React, { Component } from "react";
import Slider from "react-slick";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";
import { BsBatteryCharging  , BsStars} from "react-icons/bs";
import {FaPaw,FaCarSide} from "react-icons/fa";
import {GiSteeringWheel} from "react-icons/gi";
import {TiHeartHalfOutline} from "react-icons/ti";
import slider1 from '../../images/slider1.jpg'
import slider2 from '../../images/slider2.jpg'
import slider3 from '../../images/slider3.jpg'
import slider4 from '../../images/slider4.jpg'
import slider5 from '../../images/slider5.jpg'
import slider6 from '../../images/slider6.jpg'
import slider7 from '../../images/slider7.jpg'
import slider8 from '../../images/slider8.jpg'
import slider9 from '../../images/slider9.jpg'
import slider10 from '../../images/slider10.jpg'


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
const FourthSlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 4000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />

    }
    return (
        <div className='container-fluid fourth_slider_main_div'>
            <div className='container fourth_slider_second_main_div'>
                <h1 className='fourth_slider_h1'>Browse by experience</h1>
                <Slider {...settings}>
                    <div className='fourth_slider_img_div'>
                        <img className='fourth_slider_img' src='https://resources.turo.com/f/81934/328x262/8e60a37cc1/image_experience_electric.jpg' />
                        < BsBatteryCharging className='fourth_slider_icons'/> <span className='icons_span'>Electric</span>
                    </div>
                    <div className='fourth_slider_img_div'>
                        <img className='fourth_slider_img' src=' https://resources.turo.com/f/81934/328x262/1d0c1a5bd7/image_experience_deluxesuperdeluxe.jpg' />
                        < BsStars className='fourth_slider_icons'/> <span className='icons_span'>Deluxe & Super Deluxe</span>
                    </div>
                    <div className='fourth_slider_img_div'>
                        <img className='fourth_slider_img' src='https://resources.turo.com/f/81934/328x262/0d5b069ff2/image_experience_petfriendly.jpg' />
                        < FaPaw className='fourth_slider_icons'/> <span className='icons_span'>Pet-friendly</span>
                    </div>
                    <div className='fourth_slider_img_div'>
                        <img className='fourth_slider_img' src='https://resources.turo.com/f/81934/328x262/61e1aebed5/image_experience_convertibles.jpg' />
                        < FaCarSide className='fourth_slider_icons'/> <span className='icons_span'>convertibles</span>
                    </div>
                    <div className='fourth_slider_img_div'>
                        <img className='fourth_slider_img' src='https://resources.turo.com/f/81934/328x262/6a22a954a4/image_experience_allwheeldrive.jpg' />
                        < GiSteeringWheel className='fourth_slider_icons'/> <span className='icons_span'>All-wheel drive</span>
                    </div>
                    <div className='fourth_slider_img_div'>
                        <img className='fourth_slider_img' src='https://resources.turo.com/f/81934/328x262/294b8f8aec/image_experience_classiccars.jpg' />
                        < TiHeartHalfOutline className='fourth_slider_icons'/> <span className='icons_span'>Electric</span>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default FourthSlider

// https://resources.turo.com/f/81934/328x262/8e60a37cc1/image_experience_electric.jpg
// https://resources.turo.com/f/81934/328x262/1d0c1a5bd7/image_experience_deluxesuperdeluxe.jpg
// https://resources.turo.com/f/81934/328x262/0d5b069ff2/image_experience_petfriendly.jpg
// https://resources.turo.com/f/81934/328x262/61e1aebed5/image_experience_convertibles.jpg
// https://resources.turo.com/f/81934/328x262/6a22a954a4/image_experience_allwheeldrive.jpg
// https://resources.turo.com/f/81934/328x262/294b8f8aec/image_experience_classiccars.jpg