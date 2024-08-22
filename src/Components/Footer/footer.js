import React from 'react'
import "./footer.css"
import main_logo from '../../assets/Copyva_logo.png'
import Twitter_img from '../../assets/twitter.png'
import Insta_img from '../../assets/instagram.png'
import Mail_img from '../../assets/mail.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <section className='Footer'>
      <div className='Container'>
        <div className='First_row'>
          <a href='#'><img src={main_logo} alt='' /></a>
          <div className='Footer_menu'>
            <ul>
              <li> <a href='#'>Register</a></li>
              <li> <a href='#'>Request</a></li>
              <li> <a href='#'>Login</a></li>
              <li> <a href='#'>About us</a></li>
              <li> <a href='#'>Contact</a></li>
              <li> <a href='#'>Others</a></li>
            </ul>

          </div>

          <div className='socail_links'>
            <ul>
              <li> <a href='#'><img src={Twitter_img} alt='Twitter_img' /></a></li>
              <li> <a href='#'><img src={Insta_img} alt='Insta_img' /></a></li>
              <li> <a href='#'><img src={Mail_img} alt='Mail_img' /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <hr />

      <div className='Container'>

        <div className='middle_raw'>
          <div className='iput_search'>

            <input type="text" id="gsearch" name="gsearch" placeholder="Check license number " />
            <span className='search_icon'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#181717" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M21.0004 21.0004L16.6504 16.6504" stroke="#181717" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg></span>


          </div>
        </div>


        <div className='Bottom_raw'>
          <div className='Footer_menu'>
            <ul>
              <li> <a href='#'>Purchase Flow</a></li>
              <li> <a href='#'>Terms and Conditions</a></li>
              <li> <a href='#'>Privacy Policy </a></li>
              <li> <a href='#'>Refund and Cancellation</a></li>
            </ul>

          </div>
          <p className='Copy_right'>Copyright © 2024. All Rights Reserved. Design And Developed by webnox.in.</p>
        </div>

      </div>



    </section>
  )
}

export default Footer