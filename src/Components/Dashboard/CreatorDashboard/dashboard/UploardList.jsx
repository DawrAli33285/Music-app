
import React, { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import UploadEdit from '../../../../assets/upload_edit.svg'
import UploadSucces from '../../../../assets/uploade_success.svg'
import CloseImg from '../../../../assets/closeImg.svg'
import axios from 'axios';

const UploardList = () => {
  const [isActive, setIsActive] = useState(false);
  const [uploaded,setUploaded]=useState([])
  const [originaluploaded,originalsetUploaded]=useState([])

  const toggleClass = () => {
    setIsActive(!isActive);
  };
  const close = () => {
    setIsActive(false);
  };


  useEffect(()=>{
const fetchUploaded=async()=>{
  try{
    const token = localStorage.getItem('authToken')
    let uploadedResult=await axios.get(`http://3.110.212.158:8000/api/music_details/user_uploads/`,{
      headers: {
        Authorization: `Token ${token}`, 
       },
     })
     console.log("UPLOADED")
     console.log(uploadedResult)
     setUploaded(uploadedResult?.data?.results)
     originalsetUploaded(uploadedResult?.data?.results)
  }catch(e){

  }
}
fetchUploaded();
  },[])

  const searchUpload = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setUploaded((prev) => {
      if (originaluploaded?.length > 0) {
        return originaluploaded.filter((u) => u?.music_name?.toLowerCase().includes(searchValue));
      } else {
        return originaluploaded;
      }
    });
  };
  return (
    <div className={isActive ? 'Statement_page active' : 'Statement_page'}>
     
<div className='popupbg'>
  <div className='Popu_div'>
    <img src={CloseImg} alt='' className="close_btn" onClick={close}/>
    <img src={UploadSucces} alt='' />  
    <h3>Music uploaded successfully</h3>
    <button>Upload list</button>
    </div>
</div>




      <div class="Statement_page_firstcontent">
        <div>
          <h4>Upload List</h4>
        </div>
        <div className='statement_search'>
        <CiSearch />
<input onChange={searchUpload} type="text" placeholder="Search name..." />

        </div>
      </div>





      <div className='Statemenet_table mt-3'>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Song name</th>
              <th scope="col">Affilliate link</th>
              <th scope="col">Artist name</th>
              <th scope="col"> Copyright owners</th>

            </tr>
          </thead>
          <tbody>
{uploaded?.map((upload,index)=>{
  return <tr key={index.toString()}>


  <td>{upload?.upload_type}</td>
  <td>{upload?.music_name}<a href="#" onClick={toggleClass}> <img src={UploadEdit} alt='UploadEdit' width={16} height={16}/></a></td>
  <td>{upload?.upload_music_link}</td>
  <td>{upload?.artist_name}</td>
  <td>{upload?.owner_name}</td>
</tr>
})}
        
          </tbody>
        </table>


      </div>





    </div>
  )
}

export default UploardList