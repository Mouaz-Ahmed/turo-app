import './FirstSlider.css'
import React, { Component } from "react";
import Slider from "react-slick";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";
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
const FirstSlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
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
                <h1 className='slider_h1'>Browse by make</h1>
                <Slider {...settings}>
                    <div className='slick_div_car'>
                        <img className='slick_img_car' src='https://resources.turo.com/f/81934/386x308/9bf274f19e/image_make_jeep-2x.jpg' />
                        <h3 className='text-center'>Jeep</h3>
                    </div>
                    <div className='slick_div_car'>
                        <img className='slick_img_car' src='https://resources.turo.com/f/81934/386x308/7dcf9bff19/image_make_tesla-2x.jpg' />
                        <h3 className='text-center'>Tesla</h3>
                    </div>
                    <div className='slick_div_car'>
                        <img className='slick_img_car' src='https://resources.turo.com/f/81934/386x308/ef857a4438/image_make_subaru-2x.jpg' />
                        <h3 className='text-center'>Subaru</h3>
                    </div>
                    <div className='slick_div_car'>
                        <img className='slick_img_car' src='https://resources.turo.com/f/81934/386x308/7e7ce60797/image_make_porsche-2x.jpg' />
                        <h3 className='text-center'>Porsche</h3>
                    </div>
                    <div className='slick_div_car'>
                        <img className='slick_img_car' src='https://resources.turo.com/f/81934/386x308/0c4f5f5186/image_make_bmw-2x.jpg' />
                        <h3 className='text-center'>BMW</h3>
                    </div>
                    <div className='slick_div_car'>
                        <img className='slick_img_car' src='https://resources.turo.com/f/81934/386x308/065308f2c4/image_make_mb-2x.jpg' />
                        <h3 className='text-center'>Marcedes-Benz</h3>
                    </div>
                    <div className='slick_div_car'>
                        <img className='slick_img_car' src='https://resources.turo.com/f/81934/386x308/2809ca8702/image_make_toyota-2x.jpg' />
                        <h3 className='text-center'>Toyota</h3>
                    </div>
                    <div className='slick_div_car'>
                        <img className='slick_img_car' src='https://resources.turo.com/f/81934/386x308/a470b4f290/image_make_lambo-2x.jpg' />
                        <h3 className='text-center'>Lamborghini</h3>
                    </div>
                </Slider>
            </div>
        </div>

    )
}

export default FirstSlider


