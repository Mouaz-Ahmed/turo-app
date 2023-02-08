import React, { Component } from "react";
import './SecondSlider.css'
import Slider from "react-slick";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div>
      < MdOutlineArrowForwardIos onClick={onClick} className={className} style={{ color: 'black', top: '90', right: '70px' }} />
    </div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div>
      < MdOutlineArrowBackIosNew onClick={onClick} className={className}  style={{ color: 'black', top: '90', left: '87%' }} />
    </div>
  );
}
const SecondSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div>
      <div>
        <Slider {...settings}>
        <div className="second_slider_main_div">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <img className='sec_slider_img' src="https://resources.turo.com/f/81934/416x284/6e085cbe0e/image_outdoors_416x285.jpg"></img>
                </div>
                <div class="col-md-6 h2_p_div">
                  <h2 className="slider_two_h2"> <span> Find the perfect car </span><span className="blue-span">to conquer the great outdoors</span></h2>
                  <p className="slider_two_p">Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.</p>
                  <button className="button_sec_slider">Browse cars</button>
                </div>
              </div>
            </div>
          </div>

          <div className="second_slider_main_div">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <img className='sec_slider_img' src="https://resources.turo.com/f/81934/416x284/7c424a07d5/image_unwind_416x285.jpg"></img>
                </div>
                <div class="col-md-6 h2_p_div">
                  <h2 className="slider_two_h2"> <span> Find the perfect car </span><span className="blue-span">to unwind for the weekend</span></h2>
                  <p className="slider_two_p">From daily drivers to spirited sports cars, ditch the grind with convenient nearby cars.</p>
                  <button className="button_sec_slider">Browse cars</button>
                </div>
              </div>
            </div>
          </div>

          <div className="second_slider_main_div">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <img className='sec_slider_img' src="https://resources.turo.com/f/81934/416x284/929b21c4fa/image_upgrade_416x285.jpg"></img>
                </div>
                <div class="col-md-6 h2_p_div">
                  <h2 className="slider_two_h2"> <span> Find the perfect car </span><span className="blue-span">to upgrade your vacation plans</span></h2>
                  <p className="slider_two_p">Skip the rental car counter and find the perfect car to complement your vacation vibe.</p>
                  <button className="button_sec_slider">Browse cars</button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default SecondSlider
