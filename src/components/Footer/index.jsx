import React from 'react'
import './Footer.css'
import appStore from '../../images/appStore.png'
import googlePlay from '../../images/googlePlay.png'
import americanFlag from '../../images/americanFlag.png'
import Flag from '../../images/flag.png'
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter, AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
    return (
        <div className='footer_main_div'>
            <ul className='footer_ul'>
                <li>
                    <li> <h1 className='footer_li_h1'>Turo</h1></li>
                    <li>About</li>
                    <li>Team</li>
                    <li>Policies</li>
                    <li>Careers</li>
                    <li>Press</li>
                    <li>OpenRoad</li>
                    <li>Turo shop</li>
                </li>

                <li>
                    <li> <h1 className='footer_li_h1'>Locations</h1></li>
                    <li>USA (EN)</li>
                    <li>Australia (EN)</li>
                    <li> Canada (EN)</li>
                    <li>Canada (FR)</li>
                    <li> UK (EN)</li>
                </li>

                <li>
                    <li> <h1 className='footer_li_h1'>Explore</h1></li>
                    <li>Book a car</li>
                    <li>Trust & safety</li>
                    <li> Weddings</li>
                    <li>Sustainability</li>
                    <li>FAQs</li>
                    <li>Get help</li>
                </li>

                <li>
                    <li> <h1 className='footer_li_h1'>Hosting</h1></li>
                    <li> List your car</li>
                    <li> Carculator</li>
                    <li> All-Star Hosts</li>
                    <li>Host tools</li>
                    <li>Insurance & protection</li>
                    <li>FAQs</li>
                </li>
                <li>
                    < BsFacebook className='footer_icons fb_icon' />
                    < AiOutlineTwitter className='footer_icons' />
                    < AiOutlineInstagram className='footer_icons' />
                    < AiFillYoutube className='footer_icons' />
                    <div className='blog'>blog</div>
                    <div className='app_store_google_play_div'>
                        <img src={appStore} className='appStore' ></img>
                        <img src={googlePlay} className='googlePlay' ></img>
                    </div>

                    <div className='footer_dropdown_div'>
                        < IoIosArrowUp className='uparrow' />
                        <img src={Flag} className='flag'></img>
                        <span className='english_span'>English</span>
                    </div>
                </li>
            </ul>

            <ul className='footer_ul'>
                <li>
                    <li> <h1 className='footer_li_h1'>Types</h1></li>
                    <li>Trucks</li>
                    <li>Vans</li>
                    <li>Exotic</li>
                    <li>Convertible</li>
                    <li>Sport</li>
                    <li>Classics</li>
                    <li>SUVs</li>
                    <li>Electric</li>
                    <li>Cars</li>
                </li>

                <li>
                    <li> <h1 className='footer_li_h1'>Makes</h1></li>
                    <li>Tesla</li>
                    <li>Lamborghini</li>
                    <li>Jeep</li>
                    <li>Maserati</li>
                    <li>Rolls-Royce</li>
                    <li> Ferrari-Benz</li>
                    <li>Porsche</li>
                    <li>BMW vehicles</li>
                    <li>Subaru</li>
                </li>

                <li>
                    <li> <h1 className='footer_li_h1'>Top Cities</h1></li>
                    <li>Atlanta</li>
                    <li>Austin</li>
                    <li> Weddings</li>
                    <li>Chicago</li>
                    <li>Dallas</li>
                    <li>Houston</li>
                    <li>Denver</li>
                    <li>Fort</li>
                    <li>Honolulu</li>
                </li>

                <li>
                    <li> <h1 className='footer_li_h1'>Top Cities</h1></li>
                    <li> List your car</li>
                    <li> Carculator</li>
                    <li> All-Star Hosts</li>
                    <li>Host tools</li>
                    <li>Insurance & protection</li>
                    <li>FAQs</li>
                </li>
              
            </ul>
        </div>
    )
}

export default Footer

