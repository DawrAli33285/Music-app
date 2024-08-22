import React, { useRef, useState } from "react";
import "./musictab.css";
import nextTrack from "../../../../../assets/nextbtn.svg";
import PreTrack from "../../../../../assets/prebtn.svg";
import VideoIcon from "../../../../../assets/video_icon.svg";
import HearIcon from "../../../../../assets/heart.svg";
import QullSound from "../../../../../assets/quill_sound.svg";
import SolarLink from "../../../../../assets/solar_link-bold.svg";
import Five_img from "../../../../../assets/Frame 34.png";
import videoIcons from "../../../../../assets/Vector_td.png";

import DwnloadBtn from "../../../../../assets/downloade_btn.png";
import cartFooter from "../../../../../assets/cart_foter.png";
import filterIcon from "../../../../../assets/filter.png";
import axios from "axios";

// import Frame from "../../../assets/Frame 22.png";
const Musictab = ({filterMusic,music,setMusic,originalMusic,setOriginalMusic,setShowAudioPlayer,videoSrc,setVideoSrc,audioSrc,setAudioSrc, isContent,setIsContent,showAudioPlayer,showVideoPlayer,setShowVideoPlayer}) => {

  const [currentTrack, setCurrentTrack] = useState(0);
  const [search,setSearch]=useState("")
  const [isPlaying, setIsPlaying] = useState(false);


  const audioRef = useRef(null);

  const handleImageClick = (audioSrc, content) => {
       
    if (content === true) {
      setShowVideoPlayer(true);
      setIsContent(true);
  let indexOfYoutube=audioSrc?.indexOf("=")
  let id=audioSrc?.slice(indexOfYoutube+1,audioSrc?.length)


setVideoSrc(audioSrc)
setAudioSrc("");
setShowAudioPlayer(false);
    } else {
      setIsContent(false);
      setAudioSrc(audioSrc);
      setShowVideoPlayer(false);
   
setVideoSrc("")
      setShowAudioPlayer(true);
    }
  };

  const handleCloseAudioPlayer = () => {

    if(isContent===true){
setVideoSrc("")
setShowVideoPlayer(false)
setIsContent(false)
    }else{
      setShowAudioPlayer(false);
      setAudioSrc("");
    }

  };

  const getEmbedSrc = (url) => {

    if (url.includes('youtube.com')) {
      const videoId = new URLSearchParams(new URL(url).search).get('v');
     
      return `https://youtube.com/embed/${videoId}?autoplay=1`;
    } 
    if (url.includes('spotify.com')) {
      const trackId = url.split('/').pop().split('?')[0];
      return `https://open.spotify.com/embed/track/${trackId}`;
    }
    if (url.includes('music.apple.com')) {
      const trackId = url.split('/').pop();
      return `https://embed.music.apple.com/us/album/${trackId}`;
    }
    if (url.includes('gaana.com')) {
      const trackId = url.split('/').pop().split('?')[0];
      return `https://www.gaana.com/embed/${trackId}`;
    }
    if (url.includes('amazon.com') || url.includes('music.amazon.com')) {
      const trackId = url.split('/').pop().split('?')[0];
      return `https://music.amazon.com/embed/${trackId}`;
    }
    if (url.includes('jiosaavn.com')) {
      const trackId = url.split('/').pop().split('?')[0];
      return `https://www.jiosaavn.com/embed/${trackId}`;
    }
    if (url.includes('wynk.in')) {
      const trackId = url.split('/').pop().split('?')[0];
      return `https://www.wynk.in/music/embed/${trackId}`;
    }
    return ''; // Default fallback
  };
  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrack((prevTrack) => (prevTrack + 1) % music.length);
    setIsPlaying(false);
  };

  const handleVolumeChange = (e) => {
    audioRef.current.volume = e.target.value;
  };


  const handleCloseVideoPlayer = () => {
    setShowVideoPlayer(false);
    setVideoSrc("");
  };
  const toggleLike = async(index) => {
    let updatedmusic;

    let alreadyLiked=music.find(u=>u?.id==index && u?.liked==true)

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
    updatedmusic = music.map((item, i) => 
    item?.id === index ? { ...item, liked: !item.liked } : item
  );
   console.log("DELETE")
   console.log(response)
}else{
  let response=await axios.post(`${BASE_URL}/api/favorites/`,{music_detail:index,user:currentUser?.data?.id},{
    headers: {
      Authorization: `Token ${token}`, 
    },
   })
    updatedmusic = music.map((item, i) => 
    item?.id === index ? { ...item, liked: !item.liked,fav_id:response?.data?.id} : item
  );
}

  setMusic(updatedmusic);
 }catch(e){

 }
  };
  return (
    <div>
      <div className={`purchases-list1 ${showVideoPlayer ? 'blurred' : ''}`}>
        {music.length > 0 ? (
          <div>
            <div className="Top_header">
              <h2>List of Music</h2>
              <div className="iput_search">
                <input onChange={(e)=>{
                  setSearch(e.target.value)
                }} type="text" placeholder="Search by genre" />
                <div className='d-md-none d-block filter_icon'><img src={filterIcon} alt='filterIcon' /></div>

                <span className="search_icon">
                  <button onClick={()=>filterMusic(search,'music')}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#181717" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M21.0004 21.0004L16.6504 16.6504" stroke="#181717" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </span>
              </div>
            </div>
            <table className="purchase_table">
              <thead className="thheader">
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
                {music?.map((purchase, index) => (
                  <tr key={index}>
                    <td>
                      <div className="music-item">
                        <img
                          src={purchase?.cover_template_link}
                          style={{cursor:'pointer'}}
                          alt="video"
                          className="music-image"
                          onClick={() => handleImageClick(purchase?.
                            upload_music_link,false)}
                        />
                        <img src={videoIcons} alt={videoIcons} className="video_sec" />
                        <div>
                          <p className="music-title">{purchase?.music_name}</p>
                          <p className="music-artist">by {purchase?.artist_name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="d-md-inline-block d-none">{purchase?.genres[0]?.genre}</td>
                    <td className="d-md-inline-block d-none">{purchase?.moods[0]?.mood}</td>
                    <td className="d-md-inline-block d-none">{purchase?.artist_name}</td>
                    <td
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLike(purchase?.id)}
            >
              {purchase.liked ? "🖤" : "🤍"}
            </td>
                    <td><button className="btn_Two"><img src={cartFooter} alt="" className="d-md-none d-block" /><span className="d-md-block d-none">Buy license</span></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="no-purchases">

            <div className="Top_header">
              <h2>List of Purchases</h2>
              <div className="iput_search">
                <input type="text" placeholder="Search by genre, mood, artist" className="d-md-block d-none" />
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
      </div>
      <div>
        <div className="player d-none">
          <div className="play_botto">
            <div className="left_contentfooter">
              <button onClick={handlePlayPause} className="d-md-block d-none">
                <img src={PreTrack} alt="PreTrack" />
              </button>
              <audio ref={audioRef} src={music[currentTrack]?.audio}></audio>
              <span className="play_btn"><img src={VideoIcon} alt="VideoIcon" /></span>
              <button onClick={handleNext} className="d-md-block d-none"><img src={nextTrack} alt="nextTrack" /></button>
              <h3>{music[currentTrack]?.title}<span>by Lorem</span></h3>
            </div>
            <div className="right_footer">
              <div className="icons_right">
                <img src={QullSound} alt="QullSound" />
                <img src={SolarLink} alt="SolarLink" />
                <img src={HearIcon} alt="SolarLink" />
              </div>
              <button style={{zIndex:'-5'}} className="btn_One"><img src={DwnloadBtn} alt="" className="d-md-none d-block" /><span className="d-md-block d-none">Download</span></button>
              <button style={{zIndex:'-5'}} className="btn_Two"><img src={cartFooter} alt="" className="d-md-none d-block" /><span className="d-md-block d-none">Buy license</span></button>
            </div>
          </div>
        </div>
      </div>


      {showAudioPlayer && (
  <div className="video-player-overlay">
    <div className="audio-player-container">
      <button className="close-button" onClick={handleCloseAudioPlayer}>X</button>
      <div className="audio-player">
        <audio controls src={audioSrc} className="audio-element"></audio>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default Musictab;
