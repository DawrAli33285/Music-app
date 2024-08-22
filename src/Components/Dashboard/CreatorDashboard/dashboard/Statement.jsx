import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";


const Statement = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };
  return (
    <div className='Statement_page'>

      <div class="Statement_page_firstcontent">
        <div>
          <h4>Statement</h4>
        </div>
        <div className={`statement_search ${isActive ? 'active' : ''}`}>
        <span onClick={toggleClass} className='search_icons'><CiSearch /></span>
        <span onClick={toggleClass} className='close_icon d-none'><IoMdClose /> </span>
<input type="text" placeholder="Search..." />

        </div>
      </div>

      <div className='d-flex gap-2 gap-md-3 flex-nowrap flex-md-wrap'>


        <div className='Statement_dashboard bg_blue col-md-3'>
          <h4>Over total </h4>
          <h3><b>1,270</b></h3>
        </div>
        <div className='Statement_dashboard  col-md-3'>
          <h4>Music </h4>
          <h3><b>1,200</b></h3>
        </div>
        <div className='Statement_dashboard  col-md-3'>
          <h4>Content </h4>
          <h3><b>270</b></h3>
        </div>

        <div className='col-md-3'>

        </div>

      </div>



      <div className='Statemenet_table mt-3'>
        <table class="table">
          <thead class="thead-dark">
            <tr class='border-radius'>
              <th scope="col ">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Customer name</th>
              <th scope="col">Licence code</th>
              <th scope="col">Music name</th>
              <th scope="col">Valid date</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              
              <td>Aug 12 2022</td>
              <td>12:00PM</td>
              <td>Murali Kumar </td>
              <td>232345 </td>
              <td>copyva Proma  </td>
              <td>Sep 23 2024  </td>
              <td>₹ 1,200  </td>
            </tr>
            <tr>
            
              <td>Aug 12 2022</td>
              <td>12:00PM</td>
              <td>Murali Kumar </td>
              <td>232345 </td>
              <td>copyva Proma  </td>
              <td className='expired'>Expired</td>
              <td>₹ 1,200  </td>
            </tr>
            <tr>
             
              <td>Aug 12 2022</td>
              <td>12:00PM</td>
              <td>Murali Kumar </td>
              <td>232345 </td>
              <td>copyva Proma  </td>
              <td>Sep 23 2024  </td>
              <td>₹ 1,200  </td>
            </tr>
          </tbody>
        </table>


      </div>





    </div>
  )
}

export default Statement