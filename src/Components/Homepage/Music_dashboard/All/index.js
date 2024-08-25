import React, { useEffect,useState } from 'react';
import './index.css';
import Filter from './Filter';
// import Content from './content';
import TabsComponent from './TabsComponent';
import axios from 'axios';
const ViewAll = () => {
const [music,setMusic]=useState([])
const [originalMusic,setOriginalMusic]=useState([])
const [filter,setFilter]=useState("")
const [languageFilter,setLanguageFilter]=useState("")
const [content,setContent]=useState([])
  useEffect(()=>{

    const fetchMusic=async()=>{
   
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
        const responseContent = await axios.get(`${BASE_URL}/api/music_details/`, {
          params: {
            page: 1,
            page_size: pageSize,
            upload_type:"Content"
          },
        
        });
        console.log(responseContent);
        console.log("RESPONSECONTENT")
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
              fav_id:null
            }
          }
        })


        let allContent=responseContent.data.results.map((data,index)=>{
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
              fav_id:null
            }
          }
        })

        setMusic(allMusic);
        console.log("ALL CONTENT")
        console.log(allContent)
        setContent(allContent)
        setOriginalMusic(allMusic)
      } catch (error) {
        console.error('Error fetching music details:', error.message);
      }
      }
      fetchMusic()
  },[])
  const filterMusic = async (filterValue,filtering) => {
    let latestFilter;

    setFilter((prev) => {
        // Only allow one checkbox to be selected at a time
        if (prev === filterValue) {
            latestFilter = ''; // If the same checkbox is clicked again, clear the selection
        } else {
            latestFilter = filterValue; // Set the newly selected filter value
        }

        return latestFilter;
    });

    console.log("LATEST FILTER:", latestFilter);

    const BASE_URL = 'http://3.110.212.158:8000';
    const page = 1; 
    const pageSize = 6; 

    try {
        const response = await axios.get(`${BASE_URL}/api/music_details/`, {
            params: {
                page: page,
                moods: [latestFilter], // Pass the selected filter value
                languages:[languageFilter],
                page_size: pageSize,
            },
        });

        const responseContent = await axios.get(`${BASE_URL}/api/music_details/`, {
            params: {
                page: 1,
                upload_type: 'Content',
                moods: [latestFilter], // Pass the selected filter value
              languages:[languageFilter],
                page_size: pageSize,
            },
        });

        const token = localStorage.getItem('authToken');
        let liked = await axios.get(`${BASE_URL}/api/favorites/`, {
            headers: {
                Authorization: `Token ${token}`, 
            },
        });

        let allMusic = response.data.results.map((data, index) => {
            let matchfound = liked.data.find(u => u?.music_detail === data?.id);
            return {
                ...data,
                liked: !!matchfound,
                fav_id: matchfound?.id,
            };
        });

        let allContent = responseContent.data.results.map((data, index) => {
            let matchfound = liked.data.find(u => u?.music_detail === data?.id);
            return {
                ...data,
                liked: !!matchfound,
                fav_id: matchfound?.id,
            };
        });

       if(filtering!="content"){
        setMusic(allMusic);
       }
       if(filtering!="music"){

         setContent(allContent);
       }
    } catch (error) {
        console.error('Error fetching music details:', error.message);
    }
}
const handleLanguageChange = async (language, filtering) => {
  let latestFilter;

  setLanguageFilter((prev) => {
    if (prev === language.target.value) {
      latestFilter = "";
      return "";
    } else {
      latestFilter = language.target.value;
      return language.target.value;
    }
  });
};

const handleLanguageFilter = async () => {
 
  const BASE_URL = 'http://3.110.212.158:8000';
  const page = 1;
  const pageSize = 6;
  let response;
  let responseContent;

  try {
    if (languageFilter?.length === 0 && filter?.length > 0) {
     
      response = await axios.get(`${BASE_URL}/api/music_details/`, {
        params: {
          page: page,
          moods: [filter],
          page_size: pageSize,
        },
      });

      responseContent = await axios.get(`${BASE_URL}/api/music_details/`, {
        params: {
          page: 1,
          upload_type: 'Content',
          moods: [filter],
          page_size: pageSize,
        },
      });

    } else if (languageFilter?.length === 0 && filter?.length === 0) {
  
      response = await axios.get(`${BASE_URL}/api/music_details/`, {
        params: {
          page: page,
          page_size: pageSize,
        },
      });

      responseContent = await axios.get(`${BASE_URL}/api/music_details/`, {
        params: {
          page: 1,
          upload_type: 'Content',
          page_size: pageSize,
        },
      });
    } else if (languageFilter?.length > 0 && filter?.length === 0) {
   
      response = await axios.get(`${BASE_URL}/api/music_details/`, {
        params: {
          page: page,
          page_size: pageSize,
          languages: [languageFilter],
        },
      });

      responseContent = await axios.get(`${BASE_URL}/api/music_details/`, {
        params: {
          page: 1,
          upload_type: 'Content',
          page_size: pageSize,
          languages: [languageFilter],
        },
      });
    } else {
    
      response = await axios.get(`${BASE_URL}/api/music_details/`, {
        params: {
          page: page,
          page_size: pageSize,
          moods: [filter],
          languages: [languageFilter],
        },
      });

      responseContent = await axios.get(`${BASE_URL}/api/music_details/`, {
        params: {
          page: 1,
          upload_type: 'Content',
          page_size: pageSize,
          moods: [filter],
          languages: [languageFilter],
        },
      });
    }

    const token = localStorage.getItem('authToken');
    let liked = await axios.get(`${BASE_URL}/api/favorites/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });

    let allMusic = response.data.results.map((data, index) => {
      let matchfound = liked.data.find(u => u?.music_detail === data?.id);
      return {
        ...data,
        liked: !!matchfound,
        fav_id: matchfound?.id,
      };
    });

    let allContent = responseContent.data.results.map((data, index) => {
      let matchfound = liked.data.find(u => u?.music_detail === data?.id);
      return {
        ...data,
        liked: !!matchfound,
        fav_id: matchfound?.id,
      };
    });
    console.log("MUSIC TO MY EARS")
console.log(content)
    setMusic(allMusic);
    
    setContent(allContent);

  } catch (error) {
    console.error('Error fetching music details:', error.message);
  }
};

useEffect(() => {
  handleLanguageFilter();
}, [languageFilter]);

  return (
    <div >

      {/* <div className="main-content">
        <Filter />
       
      </div> */}
      <div>
        <TabsComponent handleLanguageChange={handleLanguageChange} languageFilter={languageFilter} setLanguageFilter={setLanguageFilter} content={content} setContent={setContent} filterMusic={filterMusic} filter={filter} setFilter={setFilter} music={music} originalMusic={originalMusic} setOriginalMusic={setOriginalMusic} setMusic={setMusic} />
      </div>
    </div>
  );
};

export default ViewAll;



