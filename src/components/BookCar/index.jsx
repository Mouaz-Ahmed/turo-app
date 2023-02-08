import React from 'react'
import bookCar from '../../images/bookCar1.png'
import BecomeHost from '../../images/bookCar2.png'
import './BookCar.css'
const BookCar = () => {
    return (
        <div className='bookCar_becomeHost_div'>
            
            <div className='bookCar_div'>
                <img src={bookCar} className="bookCar_img" ></img>
                <div className='a_p_div'>
                <a href="#" className='book_car_a'>Become a host</a>
                <p className='book_car_p'>Down the street or across the country, find the perfect vehicle for your next adventure.</p>
                </div>
            </div>


            <div className='becomeHost_div'>
            <img src={BecomeHost} className="BecomeHost_img" ></img>
            </div>
        </div>
    )
}

export default BookCar
