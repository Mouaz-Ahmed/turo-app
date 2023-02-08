import React from 'react'
import './MeetTheHost.css'
import Slider from "react-slick";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";
import { BsBatteryCharging, BsStars } from "react-icons/bs";
import { FaPaw, FaCarSide } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";
import { TiHeartHalfOutline } from "react-icons/ti";
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
import { MdStars } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import { AiTwotoneStar } from "react-icons/ai";




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
const MeetTheHost = () => {
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
        <div>
            <h2 className='meet_host_h2 text-center'>Meet the hosts</h2>
            <div className='first_slider_main_div'>
                <div className='container first_slider_second_main_div'>
                    <h1 className='fourth_slider_h1'>Top hosts on Turo</h1>
                    <Slider {...settings}>
                        <div className='meet_host_slider_div'>
                            <div className='host_img_div'>
                                <img src='https://images.turo.com/media/driver/edc4lzlWTHGwKOpT3WF4Og.160x160.jpg' className='host_img'></img>
                                <div className='host_info'>
                                    <p className='host_para'>kevin M.</p>
                                    <span className='all_star_span'>< MdStars />
                                        <p className='all_star_span_p'>All-Star Host</p>
                                    </span>
                                    <p className='joined_para'>567 trips <BsDot /> Joined Aug 2020</p>
                                </div>
                            </div>
                            <div className='stars_div'>
                                < AiTwotoneStar className='star_icon' />< AiTwotoneStar className='star_icon' />< AiTwotoneStar className='star_icon' />< AiTwotoneStar className='star_icon' />< AiTwotoneStar className='star_icon' />
                            </div>
                            <p className='second_last_para'>He came thru for us at the last minute (I was literally on the plane when I got a call that my <b>car</b> from a <b>rental agency</b>...</p>
                            <p className='host_name'>Donna S. -Nov 2022</p>
                        </div>

                        <div className='meet_host_slider_div'>
                            <div className='host_img_div'>
                                <img src='https://images.turo.com/media/driver/3DmzLIRpRVakbsGXUzwdCA.160x160.jpg' className='host_img'></img>
                                <div className='host_info'>
                                    <p className='host_para'>LCR ..</p>
                                    <span className='all_star_span'>< MdStars />
                                        <p className='all_star_span_p'>All-Star Host</p>
                                    </span>
                                    <p className='joined_para'>158 trips <BsDot /> Joined june 2019</p>
                                </div>
                            </div>
                            <div className='stars_div'>
                                < AiTwotoneStar className='star_icon' />< AiTwotoneStar className='star_icon' />< AiTwotoneStar className='star_icon' />< AiTwotoneStar className='star_icon' />< AiTwotoneStar className='star_icon' />
                            </div>
                            <p className='second_last_para'>Nice <b>car</b> for a great <b>price.</b></p>
                            <p className='host_name'>Donna S. -Nov 2022</p>
                        </div>

                        <div className='meet_host_slider_div'>
                            <div className='host_img_div'>
                                <img src='https://images.turo.com/media/driver/oIuGRUy_SD2f3BuB6MFj7A.160x160.jpg' className='host_img'></img>
                                <div className='host_info'>
                                    <p className='host_para'>Saul Z.</p>
                                    <span className='all_star_span'>< MdStars />
                                        <p className='all_star_span_p'>All-Star Host</p>
                                    </span>
                                    <p className='joined_para'>213 trips <BsDot />joined May 2021</p>
                                </div>
                            </div>
                            <div className='stars_div'>
                                < AiTwotoneStar className='star_icon' />< AiTwotoneStar className='star_icon' />< AiTwotoneStar className='star_icon' />< AiTwotoneStar className='star_icon' />< AiTwotoneStar className='star_icon' />
                            </div>
                            <p className='second_last_para'>Including when I need to make a slight adjustment to my <b>reservation</b></p>
                            <p className='host_name'>Donna S. -Nov 2022</p>
                        </div>
                        <div className='meet_host_slider_div'>
                            <div className='host_img_div'>
                                <img src='https://images.turo.com/media/driver/qjUvxhT8TH-cpJnbhG5w2A.160x160.jpg' className='host_img'></img>
                                <div className='host_info'>
                                    <p className='host_para'>jack H.</p>
                                    <span className='all_star_span'>< MdStars />
                                        <p className='all_star_span_p'>All-Star Host</p>
                                    </span>
                                    <p className='joined_para'>567 trips <BsDot /> Joined Aug 2020</p>
                                </div>
                            </div>
                            <div className='stars_div'>
                                < AiTwotoneStar className='star_icon' />< AiTwotoneStar className='star_icon' />< AiTwotoneStar className='star_icon' />< AiTwotoneStar className='star_icon' />< AiTwotoneStar className='star_icon' />
                            </div>
                            <p className='second_last_para'>Including when I need to make a slight adjustment to my <b>reservation</b></p>
                            <p className='host_name'>Donna S. -Nov 2022</p>
                        </div>

                        <div className='meet_host_slider_div'>
                            <div className='host_img_div'>
                                <img src='https://scontent.fkhi16-1.fna.fbcdn.net/v/t1.6435-9/99157966_250791406190783_1653192169894182912_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFGlQMrq1epOo3NH-uU2kwk1ADPvSogCBrUAM-9KiAIGkDXCxr8L9Vo-AyfV0PemMTlXiMV4QFjkMrWcY8Zp_1f&_nc_ohc=nAp0EcgBz7EAX9EJply&_nc_ht=scontent.fkhi16-1.fna&oh=00_AfB3YZcR3bFDeLaxKf2Uj5lVU8wSKmD5ZjmIG0FmdhEyww&oe=63F7A9A3' className='host_img'></img>
                                <div className='host_info'>
                                    <p className='host_para'>Mouaz Ahmed.</p>
                                    <span className='all_star_span'>< MdStars />
                                        <p className='all_star_span_p'>All-Star Host</p>
                                    </span>
                                    <p className='joined_para'>567 trips <BsDot />Joined Aug 2020</p>
                                </div>
                            </div>
                            <div className='stars_div'>
                                < AiTwotoneStar className='star_icon' />< AiTwotoneStar className='star_icon' />< AiTwotoneStar className='star_icon' />< AiTwotoneStar className='star_icon' />< AiTwotoneStar className='star_icon' />
                            </div>
                            <p className='second_last_para'>Nice Mehran !!!</p>
                            <p className='host_name'>Donna S. -Nov 2022</p>
                        </div>
                        <div className='meet_host_slider_div'>
                            <div className='host_img_div'>
                                <img src='https://images.turo.com/media/driver/zpaZmE29QHaLypyAXccC-A.160x160.jpg' className='host_img'></img>
                                <div className='host_info'>
                                    <p className='host_para'>Igor K.</p>
                                    <span className='all_star_span'>< MdStars />
                                        <p className='all_star_span_p'>All-Star Host</p>
                                    </span>
                                    <p className='joined_para'>456 trips <BsDot /> Joined Aug 2020</p>
                                </div>
                            </div>
                            <div className='stars_div'>
                                < AiTwotoneStar className='star_icon' />< AiTwotoneStar className='star_icon' />< AiTwotoneStar className='star_icon' />< AiTwotoneStar className='star_icon' />< AiTwotoneStar className='star_icon' />
                            </div>
                            <p className='second_last_para'>Including when I need to make a slight adjustment to my <b>reservation</b></p>
                            <p className='host_name'>Donna S. -Nov 2022</p>
                        </div>
                      
                      
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default MeetTheHost
