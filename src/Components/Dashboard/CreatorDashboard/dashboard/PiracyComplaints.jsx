import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const PiracyComplaints = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };
  return (
    <div className='Statement_page'>

      <div class="Statement_page_firstcontent">
        <div>
        <h4><span className='desktoponly'>Piracy</span> Complaints</h4>
        </div>
        <div className={`statement_search ${isActive ? 'active' : ''}`}>
        <span onClick={toggleClass} className='search_icons'><CiSearch /></span>
        <span onClick={toggleClass} className='close_icon d-none'><IoMdClose /> </span>
<input type="text" placeholder="Search..." />

        </div>
      </div>





      <div className='Statemenet_table mt-3'>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Song name</th>
              <th scope="col">Complaint filed on</th>
              <th scope="col">Pincode</th>
              <th scope="col">Time frame of Copyright violation</th>

            </tr>
          </thead>
          <tbody>
            <tr>

              <td>Music</td>
              <td>Demo music</td>
              <td>Aug 12 2024,4:00PM </td>
              <td>Demo Nmae</td>
              <td>Aug 12 2024,4:00PM  </td>

            </tr>
            <tr>

              <td>Music</td>
              <td>Demo music</td>
              <td>Aug 12 2024,4:00PM </td>
              <td>Demo Nmae</td>
              <td>Aug 12 2024,4:00PM  </td>
            </tr>
            <tr>

              <td>Music</td>
              <td>Demo music</td>
              <td>Aug 12 2024,4:00PM </td>
              <td>Demo Nmae</td>
              <td>Aug 12 2024,4:00PM  </td>
            </tr>
          </tbody>
        </table>


      </div>





    </div>
  )
}

export default PiracyComplaints