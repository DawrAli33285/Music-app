import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { useEffect } from "react";
import "./tabs.css";
import { useState } from "react";
import Music_img from "../../../assets/Frame 11 (1).png";
import First_tab from "../../../assets/Frame 29.png";
import Sec_tab from "../../../assets/Frame 30.png";
import Third_tab from "../../../assets/Frame 31.png";
import Fourth_tab from "../../../assets/Frame 33.png";
import Five_img from "../../../assets/Frame 34.png";
import Six_img from "../../../assets/Frame 35.png";
import Content_img from "../../../assets/Frame 11 (2).png";
import Artist_img from "../../../assets/Frame 11 (3).png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const TabsSection = () => {
  // const musicItems = [
  //   {
  //     title: "Lorem ipsum dolor sit",
  //     genre: "Lorem ipsum do",
  //     mood: "Lorem ipsum do",
  //     artist: "Lorem ipsum do",
  //     liked: true,
  //     videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4", // Use a direct video link here
  //   },
  //   {
  //     title: "Lorem ipsum dolor sit",
  //     genre: "Lorem ipsum do",
  //     mood: "Lorem ipsum do",
  //     artist: "Lorem ipsum do",
  //     liked: false,
  //     videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4", // Use a direct video link here
  //   },
  //   // Add more items as needed
  // ];
  const [tabIndex, setTabIndex] = useState(0);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const [showAudioPlayer, setShowAudioPlayer] = useState(false);
const [audioSrc, setAudioSrc] = useState("");
const [videoId,setVideoId]=useState("")
const [isContent,setIsContent]=useState(false)
const [content,setContent]=useState([])

  const navigate = useNavigate();
  const handler = () => {
    navigate("/viewall");
  };
  // const handleImageClick = (videoSrc) => {
    
  //   setVideoSrc(videoSrc);

  // };
  const handleImageClick = (audioSrc, content) => {
    if (content === true) {
      setShowVideoPlayer(true);
      setIsContent(true);
  let indexOfYoutube=audioSrc?.indexOf("=")
  let id=audioSrc?.slice(indexOfYoutube+1,audioSrc?.length)

setVideoId(id)
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
  

  // const handleCloseVideoPlayer = () => {
  //   setShowVideoPlayer(false);
  //   setVideoSrc("");
  // };
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
  

  const [musicItems ,setMusic]=useState([])
  useEffect(()=>{
  const fetchMusic=async()=>{
try{
  const BASE_URL = 'http://3.110.212.158:8000';
  const page = 2; 
  const pageSize = 10; 

  try {
    const response = await axios.get(`${BASE_URL}/api/music_details/`, {
      params: {
        page: page,
        page_size: pageSize,
      },
    
    });
    
    const responseContent = await axios.get(`${BASE_URL}/api/music_details/`, {
      params: {
        page: 1,
        page_size: pageSize,
        upload_type:'Content'
        
      },
    
    });
    setContent(responseContent?.data?.results)
    console.log("CONTENT")
    console.log(responseContent)
 
  setMusic(response.data)

    setMusic(response.data.results);
  } catch (error) {
    console.error('Error fetching music details:', error.message);
  }

}catch(e){
  console.log(e.message)

}
  }
  fetchMusic()
  },[])


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
    <section className="Container tabs_section">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList classID="tab_list">
          <Tab>
            <h4>
              <img src={Music_img} alt="Music_img" />
              Music
            </h4>
          </Tab>
          <Tab>
            <h4>
              <img src={Content_img} alt="Content_img" />
              Content
            </h4>
          </Tab>
          <Tab>
            <h4>
              <img src={Artist_img} alt="Artist_img" />
              Artist
            </h4>
          </Tab>
        </TabList>
        <TabPanel>
          <div className="Tab_content">
         {musicItems?.map((musicItem,index)=>{
          return <>
              <div key={index.toString()}>
                <img src={musicItem?.cover_template_link} alt="video"
                  // className="music-image"
                  onClick={() => handleImageClick(musicItem?.
                    upload_music_link,false)} />
              </div>
            
           
          </>
         })}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="Tab_content">
          {content?.map((musicItem,index)=>{
            return <>
             <div key={index.toString()}>
              <img src={musicItem?.cover_template_link} alt="video"
          
                onClick={() => handleImageClick(musicItem?.music_links[0]?.link,true)} />
            </div>
           
            </>
           })}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="Tab_content">
           {musicItems?.map((musicItem,index)=>{
            return <>
             <div key={index.toString()}>
              <img src={musicItem?.cover_template_link} alt="video"
          
                onClick={() => handleImageClick(musicItem?.music_links[0]?.link)} />
            </div>
           
            </>
           })}
          </div>

        </TabPanel>
      </Tabs>
      <button type="otton" className="btn_one" onClick={() => handler()}>
        View all
      </button>
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
  <div className="video-player-overlay">
    <div className="audio-player-container">
      <button className="close-button" onClick={handleCloseAudioPlayer}>X</button>
      <div className="audio-player">
        <audio controls src={audioSrc} className="audio-element"></audio>
      </div>
    </div>
  </div>
)}
    </section>
  );
};

export default TabsSection;
