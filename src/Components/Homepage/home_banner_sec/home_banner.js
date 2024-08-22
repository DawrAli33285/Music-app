import React from 'react'
import "./homebanner.css"
import { Link } from 'react-router-dom';

const Homebanner = () => {


    return (
        <section className='banner_main'>

            <div className='banner_content'>
                <h1>Enjoy Your Creative Freedom With Copyva</h1>
                <p>Unlock your creativity without the fear of copyright infringement. Buy licences for music and content, or monetise your original creations by selling their licences with us.</p>
                <div className='iput_search'>

                    <input type="text" id="gsearch" name="gsearch" placeholder="Search by code " />
                    <Link to='/serch_bycode'>
                        <span className='search_icon'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#181717" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M21.0004 21.0004L16.6504 16.6504" stroke="#181717" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></span>
                    </Link>



                </div>
            </div>

        </section>
    );
}


export default Homebanner