import React from 'react'
import "./testimonial.css"
import Testimoanil_img from '../../../assets/testimonialimg.png'

const Testimonial = () => {
   

    return (
        <section className='Testimonial_sec'>

 <div className='Container'>
    <h2> Know Their Opinions</h2>
    <div className='testimoani_wrapper'>
        <div className='testimoani_wrap_content'>
            <div className='img_content'>
                <img src={Testimoanil_img} alt='Testimoanil_img' />
                <span>
                    <b>Sarah</b>
                    <p>Content Creator</p>
                </span>
            </div>
            <p>Copyva revolutionised the way I source music for my videos. Their platform made it easy to find the perfect tracks for my content, and their licensing process was seamless.</p>
        </div>

        <div className='testimoani_wrap_content'>
            <div className='img_content'>
                <img src={Testimoanil_img} alt='Testimoanil_img' />
                <span>
                    <b>Sarah</b>
                    <p>Content Creator</p>
                </span>
            </div>
            <p>Copyva revolutionised the way I source music for my videos. Their platform made it easy to find the perfect tracks for my content, and their licensing process was seamless.</p>
        </div>

        <div className='testimoani_wrap_content'>
            <div className='img_content'>
                <img src={Testimoanil_img} alt='Testimoanil_img' />
                <span>
                    <b>Sarah</b>
                    <p>Content Creator</p>
                </span>
            </div>
            <p>Copyva revolutionised the way I source music for my videos. Their platform made it easy to find the perfect tracks for my content, and their licensing process was seamless.</p>
        </div>
    </div>
 </div>
     
      </section>
    );
}


export default Testimonial