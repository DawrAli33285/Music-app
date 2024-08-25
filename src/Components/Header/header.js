import React, { useState, useEffect } from "react";
import "./header.css";
import Logo_web from "../../../src/assets/Copyva_logo.png";
import UserIcon from "../../../src/assets/user_icon.png";
import UserComponent from "../usercomponent";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import cartLogo from '../../assets/header_cart.svg'
import { GetCurrentUser } from "../../Hooks/ApiService";


const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('');
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUser = async () => {
      
  if(localStorage.getItem('authToken')){
    const User = await GetCurrentUser();
    if (User) {
      setIsLoggedIn(true);
      setUserProfile(User);
    }
  }
    }
    fetchUser()
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    setUserProfile(null);
    setIsMenuOpen(false);
    navigate('/auth')
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    toggleMenu();
  };

  const loginHandler = () => {
    navigate('/auth')
  }
  const PiracyHandler=()=>{
    navigate('/piracycomplaints')
  }
  const location = useLocation();
  return (
    <>
      <section className={location.pathname === '/' ? "header_Sec" : "header_Sec all_sections"}>
        <div className="header_main">
          <div className="Web_logo">
            <Link to='/'><img src={Logo_web} alt="main_logo" /></Link>
          </div>
          <div className="Header_btns">
          
         <button type="button"  onClick={()=>PiracyHandler()}>Report content piracy</button> 
           
            {(location.pathname === '/usercomponent' || location.pathname === '/serch_bycode') && (

              <Link to='#'><img src={cartLogo} alt="cart_logo" /></Link>
            )}
            {isLoggedIn ? (
              <div className="profile-container" onClick={toggleMenu}>
                <img src={UserIcon} alt="user_icon" className="user-icon" />
                <div className="profile_name d-md-block d-none"><span className="profile_name" >{userProfile.first_name}</span>
                  <span className="view_profile" >View profile</span>
                </div>

              </div>
            ) : (
              <button type="button" onClick={() => loginHandler()}>Login</button>
            )}
          </div>
        </div>
      </section>
      {isMenuOpen && userProfile && (
        <div className="side-menu">
          <div onClick={()=>{
            setIsMenuOpen(false)
          }} style={{cursor:'pointer',width:'100%',display:'flex',justifyContent:'flex-end',alignItems:'flex-end'}}>
          <svg width="35" height="38" fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5 c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4 C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"></path> </g></svg>
          </div>
          <div className="side-menu-header">
            <h2>Your profile</h2>
            <button className="close-button" onClick={toggleMenu}><IoClose /></button>
          </div>
          <div className="side-menu-content">
            <div><h3>Hello <br></br>{userProfile.first_name}</h3>
              <ul>
                <li onClick={() => handleTabClick('purchases')}>
                  <Link to='/usercomponent'>Purchases <span><IoIosArrowForward /> </span>               </Link>
                </li>
                <li onClick={() => handleTabClick('favourites')}>
                  <Link to='/usercomponent'>Favourites <span><IoIosArrowForward />  </span>              </Link>
                </li>
                <li onClick={() => handleTabClick('userinfo')}>
                  <Link to='/usercomponent'>User info <span><IoIosArrowForward /> </span>               </Link>
                </li>
              </ul>
            </div>
            <button className="logout-button" onClick={handleLogout}>Log out</button>
          </div>
        </div>
      )}
      {/* <UserComponent /> */}
    </>
  );
};

export default Header;
