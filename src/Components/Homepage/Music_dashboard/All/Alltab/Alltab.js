import React from 'react'
// import Music_img from "../../../../assets/Frame 11 (1).png";
import First_tab from "../../../../../assets/Frame 29.png";
import Sec_tab from "../../../../../assets/Frame 30.png";
import Third_tab from "../../../../../assets/Frame 31.png";
import Fourth_tab from "../../../../../assets/Frame 33.png";
import Five_img from "../../../../../assets/Frame 34.png";
import Six_img from "../../../../../assets/Frame 35.png";
import filterIcon from "../../../../../assets/filter.png";
// import Content_img from "../../../../assets/Frame 11 (2).png";
// import Artist_img from "../../../../assets/Frame 11 (3).png";
import { useState } from 'react';
import "./alltab.css"

const Alltab = ({filterMusic,content,setContent,music,setMusic,originalMusic,setOriginalMusic,videoSrc,setVideoSrc,audioSrc,setAudioSrc, isContent,setIsContent,showAudioPlayer,showVideoPlayer,setShowAudioPlayer,setShowVideoPlayer}) => {
const [search,setSearch]=useState("")
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
    return (
        <div className="purchases-list1">
            <div className="Top_header" style={{ borderBottom: "none" }}><h2>Explore</h2>
                <div className="iput_search">
            <div className='d-md-none d-block filter_icon'><img src={filterIcon} alt='filterIcon' /></div>

                    <input onChange={(e)=>{
                      setSearch(e.target.value)
                    }} type="text" placeholder="Search by genre" />
                    <span className="search_icon"><button onClick={()=>filterMusic(search)}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#181717" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.0004 21.0004L16.6504 16.6504" stroke="#181717" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></button></span>
                </div>
            </div>
            <div class="header_alltab">
                <h1>Music</h1>
                <a href="#" class="explore-link">Explore all</a>
            </div>



            <div className="Tab_content" style={{ padding: "20px" }}>
               {music?.map((val,i)=>{
                return <div key={i.toString()}>
                <img src={val?.cover_template_link}  onClick={() => handleImageClick(val?.
                    upload_music_link,false)} alt="" />
            </div>
               })}
            </div>
            <div class="header_alltab">
                <h1>Content</h1>
                <a href="#" class="explore-link">Explore all</a>
            </div>
            <div className="Tab_content" style={{ padding: "20px" }}>
              {content?.map((val,i)=>{
                return <div key={i.toString()}>
                <img src={val?.cover_template_link}  onClick={() => handleImageClick(val?.music_links[0]?.link,true)} alt="" />
            </div>
              })}
            </div>
            {showVideoPlayer && (
        <div className="video-player-overlay">
          <div className="video-player">
            <button className="close-button" onClick={handleCloseAudioPlayer}>X</button>
            <iframe style={{width:'100%',height:'100%',border:'none'}} className='video'
      title='Youtube player'
      sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
      src={getEmbedSrc(videoSrc?videoSrc:'')}>
</iframe>
          </div>
        </div>
      )}
  {showAudioPlayer && (
  <div className="audio-player-overlay">
    <div className="audio-player-container">
      <button className="close-button" onClick={handleCloseAudioPlayer}>X</button>
      <div className="audio-player">
        <audio controls src={audioSrc} className="audio-element"></audio>
      </div>
    </div>
  </div>
)}

        </div>
    )
}

export default Alltab