import React, { useEffect, useRef, useState } from 'react';
import USerImg from "../../../../assets/dashboard_img.png";
import RecentUpdate from "../../Recent_Uploads/Recent";
import MusisVideo from "../../upload_music_videoCard/musicvideo";
import LiveChart from '../../liveChart/liveChart';
import axios from 'axios'

export default function Home() {
const [homeData,setHomeData]=useState({
  userInfo:'',
  music:'',
  content:'',
  recent:''
})


useEffect(()=>{
const fetchHomeData=async()=>{
  try{
    const token = localStorage.getItem('authToken')
let response=await axios.get(`http://3.110.212.158:8000/api/current-user/`,{
  headers:{
    Authorization: `Token ${token}`, 
  }
})
let uploadedResult=await axios.get(`http://3.110.212.158:8000/api/music_details/count_user_music_content/`,{
  headers: {
    Authorization: `Token ${token}`, 
   },
   params: {
    upload_type: 'Music', 
  },
 })
 let uploadedResultContent=await axios.get(`http://3.110.212.158:8000/api/music_details/count_user_music_content/`,{
  headers: {
    Authorization: `Token ${token}`, 
   },
   params: {
    upload_type: 'Content', 
  },
 })
 let recentResult=await axios.get(`http://3.110.212.158:8000/api/music_details/recent_uploads/`,{
  headers:{
    Authorization: `Token ${token}`, 
  }
 })


let musics=uploadedResult?.data?.music_count
let content=uploadedResultContent?.data?.content_count

setHomeData({
  userInfo:response.data,
  music:musics,
  content:content,
  recent:recentResult.data
})
  }catch(e){
console.log("ERRO")
console.log(e.message)
  }
}

fetchHomeData()
},[])

  return (
    <div className="home_dashboard">
      <div>
        <div className="users_dashboard dashboard_bg">
          <div className="Dashbaordimg_content">
            <img src={USerImg} alt="USerImg" />
            <div>
              <h4>Welcome to Copyva </h4>
              <h4>
                <b>{homeData?.userInfo?.first_name}</b>
              </h4>
            </div>
          </div>

          <div className="Dashbaordimg_content">
            <div className="Music_update">
              <h5>Music Uploaded </h5>
              <p>{homeData?.music}</p>
            </div>

            <div className="Content_update">
              <h5>Content Uploaded </h5>
              <p>{homeData?.content}</p>
            </div>
          </div>
        </div>

        <MusisVideo />

        <LiveChart homeData={homeData} />

       
      </div>

      <RecentUpdate homeData={homeData} />
    </div>
  );
}
