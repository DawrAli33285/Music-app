import React, { useRef, useState } from "react";
import "./favroties.css";
import nextTrack from "../../../../src/assets/nextbtn.svg";
import PreTrack from "../../../../src/assets/prebtn.svg";
import VideoIcon from "../../../../src/assets/video_icon.svg";
import HearIcon from "../../../../src/assets/heart.svg";
import QullSound from "../../../../src/assets/quill_sound.svg";
import SolarLink from "../../../../src/assets/solar_link-bold.svg";
import DwnloadBtn from "../../../../src/assets/downloade_btn.png";
import cartFooter from "../../../../src/assets/cart_foter.png";
import pauseicon from "../../../../src/assets/pause.png";
import volumemute from "../../../../src/assets/mute.png"

import axios from "axios";
const FavouritiesList = ({ purchases,setFavourites,currentSong,setCurrentSong}) => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
const [isMuted,setIsMuted]=useState(false)
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrack((prevTrack) => {
      let newIndex = (prevTrack + 1) % purchases?.length;
    
      setFavourites((prev) => {
        if (prev?.length > 0) {
          let old = [...prev];
          setCurrentSong(old[newIndex]);
          return old;
        }
      });
    
     
      return newIndex;
    });

    setIsPlaying(false);
    audioRef.current.pause();
    audioRef.current.src=currentSong?.upload_music_link

  
  };

  const handlePrevious = () => {
    setCurrentTrack((prevTrack) => {
      let newIndex = (prevTrack - 1 + purchases.length) % purchases.length;

    
      setFavourites((prev) => {
        if (prev?.length > 0) {
          let old = [...prev];
          setCurrentSong(old[newIndex]);
          return old;
        }
      });
    
     
      return newIndex;
    });

    setIsPlaying(false);
    audioRef.current.pause();
    audioRef.current.src=currentSong?.upload_music_link

  
  };

  const handleVolumeChange = (e) => {
    audioRef.current.volume = e.target.value;
  };
  const toggleLike = async(index) => {
    let updatedmusic;

    let alreadyLiked=purchases?.find(u=>u?.id==index && u?.liked==true)

 try{
  const BASE_URL = 'http://3.110.212.158:8000';
  const token = localStorage.getItem('authToken')
  let currentUser=await axios.get(`${BASE_URL}/api/current-user/`,{
    headers: {
      Authorization: `Token ${token}`, 
    },
  })

if(alreadyLiked){
 
  let response=await axios.delete(`${BASE_URL}/api/favorites/${alreadyLiked?.fav_id}`,{
    headers: {
      Authorization: `Token ${token}`, 
    },
   })
    updatedmusic = purchases?.filter(u=>u?.id!=index)
  
}
handleNext();
  setFavourites(updatedmusic);
 }catch(e){

 }
  };


  const toggleMute=()=>{
   audioRef.current.muted=!isMuted
    setIsMuted(!isMuted)
  }

  const downloadNow = async () => {
    const url = currentSong?.upload_music_link;
  
    if (!url) {
      console.error("No URL found for the current song");
      alert("No URL found");
      return;
    }
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = `${currentSong?.music_name}.mp3`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };
  return (
    <>
      {purchases?.length > 0 ? (
        <div className="purchases-list">
          <div className="Top_header"><h2>List of Purchases</h2>
            <div className="iput_search">
              <input type="text" placeholder="Search by genre, mood, artist" />
              <span className="search_icon"><button><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#181717" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21.0004 21.0004L16.6504 16.6504" stroke="#181717" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg></button></span>
            </div>
          </div>
          <table className="purchase_table d-md-table d-none">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genres</th>
                <th>Mood</th>
                <th>Artists</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {purchases?.map((purchase, index) => (
                <tr key={index}>
                  <td>{purchase?.music_name}</td>
                  <td>{purchase?.genres[0]?.genre}</td>
                  <td>{purchase?.moods[0]?.mood}</td>
                  <td>{purchase?.artist_name}</td>
                  <td
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLike(purchase?.id)}
            >
              {purchase?.liked ? "🖤" : "🤍"}
            </td>
                  <td><button className="btn_Two">Buy licence</button></td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="d-md-none d-block purchase_list">
                        <div>
                            <ul>
                            <li>
                                    <span className="vide_content">
                                        <img src={VideoIcon} alt="VideoIcon" />
                                       
                                       
                                            <h3>
                                            Lorem ipsum dolor sit 
                                            <p>by Lorem</p>
                                            </h3>
                                        </span>
                                        <span className="cart_icons">
                                        <img src={HearIcon} alt="SolarLink" />
<img src={cartFooter} alt="" className="d-md-none d-block"/>
                                        </span>
                                </li>
                                <li>
                                    <span className="vide_content">
                                        <img src={VideoIcon} alt="VideoIcon" />
                                       
                                       
                                            <h3>
                                            Lorem ipsum dolor sit 
                                            <p>by Lorem</p>
                                            </h3>
                                        </span>
                                        <span className="cart_icons">
                                        <img src={HearIcon} alt="SolarLink" />
<img src={cartFooter} alt="" className="d-md-none d-block"/>
                                        </span>
                                </li>
                                <li>
                                    <span className="vide_content">
                                        <img src={VideoIcon} alt="VideoIcon" />
                                       
                                       
                                            <h3>
                                            Lorem ipsum dolor sit 
                                            <p>by Lorem</p>
                                            </h3>
                                        </span>
                                        <span className="cart_icons">
                                        <img src={HearIcon} alt="SolarLink" />
<img src={cartFooter} alt="" className="d-md-none d-block"/>
                                        </span>
                                </li>
                                <li>
                                    <span className="vide_content">
                                        <img src={VideoIcon} alt="VideoIcon" />
                                       
                                       
                                            <h3>
                                            Lorem ipsum dolor sit 
                                            <p>by Lorem</p>
                                            </h3>
                                        </span>
                                        <span className="cart_icons">
                                        <img src={HearIcon} alt="SolarLink" />
<img src={cartFooter} alt="" className="d-md-none d-block"/>
                                        </span>
                                </li>
                            </ul>
                        </div>

                    </div>

        </div>
      ) : (
        <div className="no-purchases">

          <div className="Top_header">
            <h2>List of Purchases</h2>
            <div className="iput_search">
              <input type="text" placeholder="Search by genre, mood, artist" />
              <span className="search_icon">
                <button>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#181717" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21.0004 21.0004L16.6504 16.6504" stroke="#181717" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </span>
            </div>
          </div>
          <div className="no-purchases-content">
            <h3>No purchase yet</h3>
            <p>Browse through our large section of royalty-free music</p>
            <button className="explore-button">Explore more</button>
          </div>
        </div>
      )}


      <div className="player">
        <div className="play_botto">

          <div className="left_contentfooter">


            <button onClick={handlePrevious}  className="d-md-block d-none">{isPlaying ? '' : ''}<img src={PreTrack} alt="PreTrack" /></button>
            <audio ref={audioRef} src={currentSong?.upload_music_link}></audio>
            <span onClick={ handlePlayPause} className="play_btn"><img src={isPlaying?pauseicon:VideoIcon} alt="VideoIcon" /></span>
            <button onClick={handleNext}  className="d-md-block d-none"><img src={nextTrack} alt="nextTrack" /></button>

            <h3>{currentSong?.music_name}<span>by {currentSong?.artist_name}</span></h3>

          </div>

          <div className="right_footer">
            <div className="icons_right">
             {isMuted?<svg style={{cursor:'pointer'}} onClick={toggleMute} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 3v18l-5.5-4H2V7h4.5L12 3z" fill="#FFFFFF"/>
  <path d="M16 9v6l5.5 4V5.95L16 9zM1.5 2.5L2.91 1.09 22.09 20.27 20.68 21.68 1.5 2.5z" fill="#FFFFFF"/>
</svg>
: <img onClick={toggleMute} src={isMuted?volumemute:QullSound} alt="QullSound" />}
             
              <img onClick={()=>{
                navigator.clipboard.writeText(currentSong?.upload_music_link)
              }} src={SolarLink} alt="SolarLink" />
                        <td
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLike(currentSong?.id)}
            >
              {currentSong?.liked ? "🖤" : "🤍"}
            </td>

            </div>
            {/* <input type="range" min="0" max="1" step="0.01" onChange={handleVolumeChange} /> */}
            <button onClick={downloadNow} className="btn_One"><img src={DwnloadBtn} alt="" className="d-md-none d-block"/><span className="d-md-block d-none">Download</span></button>
            <button className="btn_Two"><img src={cartFooter} alt="" className="d-md-none d-block"/><span className="d-md-block d-none">Buy license</span></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavouritiesList;
