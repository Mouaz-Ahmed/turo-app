import React from 'react'
import './ShopGiftCards.css'

const ShopGiftCards = () => {
    return (
        <div className='shop_turo_main_div'>
            <div className='shop_turo_img_div'>
                <img src='https://resources.turo.com/f/81934/751x423/cb9c4231e8/lm-gift-card-2x.png' className='shop_turo_img'></img>
            </div>
            <div className='shop_turo_gift_card_div'>
                <p className='shop_turo_para'>Shop Turo gift cards</p>
                <p className='shop_turo_second_para'>Introducing Turo gift cards! Give the gift of exploration or help make any special occasion extra-memorable.</p>
                {/* <button className='shop_turo_btn'>Shop gift cards</button> */}
                <a href="" className='shop_turo_btn_a'>Shop gift cards</a>
            </div>
        </div>
    )
}

export default ShopGiftCards
