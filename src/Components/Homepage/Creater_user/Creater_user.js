import React from 'react'
import "./Creater_user.css"
import Right_arrow from '../../../assets/right_arrow.svg'
import User_img from '../../../assets/User.svg'
import Creator_Img from '../../../assets/Creator.svg'
import { Link } from 'react-router-dom'


const Createuser = () => {
   

    return (
        <section className='Creator_Div'>


<div className='Creator_user_sec'>
<Link to='/dashboard/Music-upload' style={{textDecoration:'none'}}>
    <div className='Creator_sec'>
        <img src={Creator_Img} alt='Creator_Img' className='creator_user'/>
        <div className='creator_heading'> <h4>Creator - Music/ Content <img src={Right_arrow} alt='Right_arrow' className='Mobi_arrow'/></h4>   <p>Sell the licence of your music/ content</p>
        
      
        </div>
     <img src={Right_arrow} alt='Right_arrow' className='Desk_arrow'/>
    </div>
</Link>
<Link to='/dashboard/upload-content' style={{textDecoration:'none'}}>
    <div className='Creator_sec'>
        <img src={User_img} alt='Creator_Img' className='creator_user' />
        <div className='creator_heading'> <h4>User - Music/ Content  <img src={Right_arrow} alt='Right_arrow' className='Mobi_arrow'/></h4>
        <p>Buy the music/ content of your choice</p>
        
        </div>
       <img src={Right_arrow} alt='Right_arrow' className='Desk_arrow'/>
    </div>
</Link>
</div>
     
      </section>
    );
}


export default Createuser