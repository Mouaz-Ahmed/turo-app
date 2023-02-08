import React from 'react'
import './SearchBar.css'
import { AiOutlineSearch } from "react-icons/ai";
const SearchBar = () => {
    return (
        <div className='main_div'>
            <div className='searchBar_div'>
                <div className='searchBar_input1_div'>
                    <span className='span'>Where</span>
                    <input type="text" className='inputs' placeholder='City, airport, adress or hotel' />
                </div>
                <div className='searchBar_input2_div'>
                    <span className='span'>From</span>
                    <input type="date" className='inputs' />
                    <input type="time" className='inputs' />
                </div>
                <div className='searchBar_input3_div'>
                    <span className='span'>Until</span>
                    <input type="date" className='inputs' />
                    <input type="time" className='inputs' />
                </div>
                <div className='search_icon_div'>
                    < AiOutlineSearch className='react_icons' />
                </div>
            </div>
        </div>
    )
}

export default SearchBar
