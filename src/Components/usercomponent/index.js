import React, { useEffect, useState } from "react";
import "./index.css";
import PurchasesList from "./Purchases/purchase";
import UserProfile from "./userprofile/userprofile";
import { useParams } from "react-router-dom";
import FavouritiesList from "./favroties/favroties";
import { GetCurrentUser } from "../../Hooks/ApiService";
import axios from 'axios'
const Purchases = () => {
  const dummyPurchases = [
    {
      title: "Lorem ipsum dolor sit",
      genres: "Lorem ipsum do",
      mood: "Lorem ipsum do",
      artists: "Lorem ipsum do",
      link: "Lorem ipsum do",
      audio: "path/to/audio1.mp3",
    },
    {
      title: "Lorem ipsum dolor sit",
      genres: "Lorem ipsum do",
      mood: "Lorem ipsum do",
      artists: "Lorem ipsum do",
      link: "Lorem ipsum do",
      audio: "path/to/audio2.mp3",
    },
    {
      title: "Lorem ipsum dolor sit",
      genres: "Lorem ipsum do",
      mood: "Lorem ipsum do",
      artists: "Lorem ipsum do",
      link: "Lorem ipsum do",
      audio: "path/to/audio3.mp3",
    },
    {
      title: "Lorem ipsum dolor sit",
      genres: "Lorem ipsum do",
      mood: "Lorem ipsum do",
      artists: "Lorem ipsum do",
      link: "Lorem ipsum do",
      audio: "path/to/audio4.mp3",
    },
    {
      title: "Lorem ipsum dolor sit",
      genres: "Lorem ipsum do",
      mood: "Lorem ipsum do",
      artists: "Lorem ipsum do",
      link: "Lorem ipsum do",
      audio: "path/to/audio5.mp3",
    },
    {
      title: "Lorem ipsum dolor sit",
      genres: "Lorem ipsum do",
      mood: "Lorem ipsum do",
      artists: "Lorem ipsum do",
      link: "Lorem ipsum do",
      audio: "path/to/audio6.mp3",
    },
    {
      title: "Lorem ipsum dolor sit",
      genres: "Lorem ipsum do",
      mood: "Lorem ipsum do",
      artists: "Lorem ipsum do",
      link: "Lorem ipsum do",
      audio: "path/to/audio7.mp3",
    },
    {
      title: "Lorem ipsum dolor sit",
      genres: "Lorem ipsum do",
      mood: "Lorem ipsum do",
      artists: "Lorem ipsum do",
      link: "Lorem ipsum do",
      audio: "path/to/audio8.mp3",
    },
  ];

  const [purchases, setPurchases] = useState(dummyPurchases);

  return (
    <div className="App">
      {purchases.length !== 0 && <PurchasesList purchases={purchases} />}
    </div>
  );
};
const Favourites = ({favourites,setFavourites,currentSong,setCurrentSong}) => {
 

  return (
    <div className="App">
      {favourites?.length !== 0 && <FavouritiesList currentSong={currentSong} setCurrentSong={setCurrentSong} setFavourites={setFavourites} purchases={favourites} />}
    </div>
  );
};
const UserInfo = ({userProfile}) => (
  <div>
    <UserProfile userProfile={userProfile}/>
  </div>
);

const UserComponent = () => {
  const [activeTabs, setActiveTab] = useState('purchases');
  const [userProfile, setUserProfile] = useState(null);
const [currentSong,setCurrentSong]=useState()
  
const [favourites,setFavourites]=useState([])
  const { tab } = useParams();


  useEffect(() => {
    const fetchUser = async () => {
      
      const User = await GetCurrentUser();
      if (User) {
        setUserProfile(User);
      }
    }
const fetchFavourites=async()=>{

  const BASE_URL = 'http://3.110.212.158:8000';
  const page = 2; 
  const pageSize = 10; 
  const token = localStorage.getItem('authToken')
  try {
    const response = await axios.get(`${BASE_URL}/api/music_details/`, {
      params: {
        page: page,
        page_size: pageSize,
      },
    
    });
    console.log(response.data);
    let liked=await axios.get(`${BASE_URL}/api/favorites/`,{
      headers: {
        Authorization: `Token ${token}`, 
      },

    })

    console.log("LIKED")
    console.log(liked)
    let allMusic=response.data.results.map((data,index)=>{
      let matchfound=liked.data.find(u=>u?.music_detail==data?.id)

 
      if(matchfound){
        return {
          ...data,
          liked:true,
          fav_id:matchfound?.id
        }
      }else{
        return{
          ...data,
          liked:false,
          fav_id:matchfound?.id
        }
      }
    })
console.log("ALL MUSIC")
allMusic=allMusic?.filter(u=>u?.liked==true)
console.log(allMusic)
setCurrentSong(allMusic[0])
    setFavourites(allMusic);

}catch(e){
  
}
}

    fetchUser()
    fetchFavourites();
  }, []);

  return (
    <div className="user-component">
      <div className="tab-content">
        <div className="tabs">

          <button className={activeTabs === 'purchases' && 'activeitem'} onClick={() => setActiveTab("purchases")}>Purchases</button>
          <button className={activeTabs === 'favourites' && 'activeitem'} onClick={() => setActiveTab("favourites")}>Favourites</button>
          <button className={activeTabs === 'userinfo' && 'activeitem'} onClick={() => setActiveTab("userinfo")}>User Info</button>
        </div>
        {activeTabs === "purchases" && <Purchases />}
        {activeTabs === "favourites" && <Favourites currentSong={currentSong} setCurrentSong={setCurrentSong} favourites={favourites} setFavourites={setFavourites} />}
        {activeTabs === "userinfo" && <UserInfo userProfile={userProfile} />}
      </div>
    </div>
  );
};

export default UserComponent;