import React from "react";
import "./Recent.css";
import Carousel from 'react-bootstrap/Carousel';
import MusicImg from '../../../assets/music_img.png'
import VideoImg from '../../../assets/video_img.png'
import SimpleSlider from "./MobileUpdated";

const RecentUpdate = ({homeData}) => {

  // Render the static UI
  return (
    <div className='Recent_updates dashboard_bg'>
        <h3>Recent Uploads</h3>

        <div className="Recent_musicVideo">
{homeData?.recent? homeData?.recent?.map((data,index)=>{
    return <div key={index?.toString()} className="recent_innerContent">
    <img src={data?.upload_type=="Music"?MusicImg:VideoImg} alt="" />
    <div><h4>{data?.music_name} </h4>
    <p>{data?.artist_name}</p></div>
</div>
}):''}


        

  
        </div>

        <div className="View_all"><button>View all</button></div>
        <div className="mobile_slider">
<SimpleSlider />
</div>
  </div>
  );
};

export default RecentUpdate;
