// import React from 'react';
// import './contenttab.css';

// const Contenttab = () => {
//   const musicItems = [
//     {
//       title: "Lorem ipsum dolor sit",
//       genre: "Lorem ipsum do",
//       mood: "Lorem ipsum do",
//       category: "Music",
//       liked: true,
//     },
//     {
//       title: "Lorem ipsum dolor sit",
//       genre: "Lorem ipsum do",
//       mood: "Lorem ipsum do",
//       category: "content",
//       liked: false,
//     },
//     // Add more items as needed
//   ];

//   return (
//     <div className="music-list container">
//       <div className="header">
//         <div>
//           <button className="back-button">←</button>
//           <h2>AR Rahman</h2>
//         </div>



//         <div>
//           <input
//             type="text"
//             placeholder="Search by artist"
//             className="search-input"
//           />
//         </div>
//       </div>

//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Genres</th>
//             <th>Mood</th>
//             <th>Category</th>
//             <th></th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {musicItems.map((item, index) => (
//             <tr key={index}>
//               <td>
//                 <div className="music-item">
//                   <button className="play-button">▶</button>
//                   <div>
//                     <p className="music-title">{item.title}</p>
//                     <p className="music-artist">by Lorem</p>
//                   </div>
//                 </div>
//               </td>
//               <td>{item.genre}</td>
//               <td>{item.mood}</td>
//               <td>
//                 {item.category === "Music" ? '🎵 Music' : '📺 content'}
//               </td>
//               <td>
//                 <button className="like-button">
//                   {item.liked ? '🖤' : '♡'}
//                 </button>
//               </td>
//               <td>
//                 <button className="buy-button">Buy licence</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Contenttab;


import React, { useRef, useState } from "react";
import './contenttab.css';
import { IoIosMusicalNotes } from "react-icons/io";
import nextTrack from "../../../../../assets/nextbtn.svg"
import PreTrack from "../../../../../assets/prebtn.svg";
import VideoIcon from "../../../../../assets/video_icon.svg";
import { IoVideocamOutline } from "react-icons/io5";
import HearIcon from "../../../../../assets/heart.svg";
import QullSound from "../../../../../assets/quill_sound.svg";
import SolarLink from "../../../../../assets/solar_link-bold.svg";
import filterIcon from "../../../../../assets/filter.png";
import cartFooter from "../../../../../assets/cart_foter.png";
import axios from "axios";


const Contenttab = ({filterMusic,music,setMusic,originalMusic,setOriginalMusic,setShowAudioPlayer,videoSrc,setVideoSrc,audioSrc,setAudioSrc, isContent,setIsContent,showAudioPlayer,showVideoPlayer,setShowVideoPlayer}) => {
  // const musicItems = [
  //   {
  //     title: "Lorem ipsum dolor sit",
  //     genre: "Lorem ipsum do",
  //     mood: "Lorem ipsum do",
  //     artist: "Lorem ipsum do",
  //     liked: true,
  //   },
  //   {
  //     title: "Lorem ipsum dolor sit",
  //     genre: "Lorem ipsum do",
  //     mood: "Lorem ipsum do",
  //     artist: "Lorem ipsum do",
  //     liked: false,
  //   },
  //   // Add more items as needed
  // ];
  // const [currentTrack, setCurrentTrack] = useState(0);
  // const [isPlaying, setIsPlaying] = useState(false);
  // const audioRef = useRef(null);

  // const handlePlayPause = () => {
  //   if (isPlaying) {
  //     audioRef.current.pause();
  //   } else {
  //     audioRef.current.play();
  //   }
  //   setIsPlaying(!isPlaying);
  // };

  // const handleNext = () => {
  //   setCurrentTrack((prevTrack) => (prevTrack + 1) % music?.length);
  //   setIsPlaying(false);
  // };

  // const handleVolumeChange = (e) => {
  //   audioRef.current.volume = e.target.value;
  // };
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
    console.log("THIs")
  console.log("CURRENT")
  console.log(currentUser)


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
    item?.id === index ? { ...item, liked: !item.liked,fav_id:response?.data?.id } : item
  );
  console.log("ADD")
  console.log(response)
}
console.log("UPDATED MUSIC")
console.log(updatedmusic)
  setMusic(updatedmusic);
 }catch(e){

 }
  };
  return (
    <div>


      <div className="purchases-list1">
        {music?.length > 0 ? (
          <div >
            <div className="Top_header"><h2>List of Content</h2>
              <div className="iput_search">
                <div className='d-md-none d-block filter_icon'><img src={filterIcon} alt='filterIcon' /></div>

                <input type="text" onChange={(e)=>{
                  setSearch(e.target.value)
                }} placeholder="Search by genre" />
                <span className="search_icon"><button onClick={()=>filterMusic(search,'content')}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#181717" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M21.0004 21.0004L16.6504 16.6504" stroke="#181717" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg></button></span>
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
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {music?.map((purchase, index) => (
                  <tr key={index}>
                    <td> <span className="play_btn p-2"><img  onClick={() => handleImageClick(purchase?.
                            music_links[0]?.link,true)} style={{width:"5rem",height:"3rem"}} src={purchase?.cover_template_link} alt="VideoIcon" /></span>{purchase?.music_name}</td>
                    <td className="d-md-inline-block d-none">{purchase?.genres[0]?.genre}</td>
                    <td className="d-md-inline-block d-none">{purchase?.moods[0]?.mood}</td>
                    <td className="d-md-inline-block d-none">{purchase?.artist_name}</td>
                    <td>
                      {purchase.category === "Music" ? (

                        <span>
                          <IoIosMusicalNotes /> Music
                        </span>
                      ) : (
                        <span>
                          <IoVideocamOutline /> content
                        </span>
                      )}
                    </td>
                    <td>

                    <td
              style={{ cursor: 'pointer' }}
              onClick={() => toggleLike(purchase?.id)}
            >
              {purchase.liked ? "🖤" : "🤍"}
            </td>

                    </td>
                    {/* <td><img src={HearIcon} alt="SolarLink" /></td> */}
                    <td><button className="btn_Two"><img src={cartFooter} alt="" className="d-md-none d-block" /><span className="d-md-block d-none">Buy license</span></button></td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        ) : (
          <div className="no-purchases">
            <h2>List of Purchases</h2>
            <div className="no-purchases-content">
              <p>No purchase yet</p>
              <p>Browse through our large section of royalty-free music</p>
              <button className="explore-button">Explore more</button>
            </div>
          </div>
        )}




      </div >
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



    </div>

  );
};

export default Contenttab;
