import "./musicsec.css";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
// import type { ReactTabsFunctionComponent, TabProps } from "react-tabs";
import { useEffect, useState } from "react";
import Music_img from "../../../assets/music_tab.png";
import Music_arrow from "../../../assets/arrow_vec.svg";
import Dashboard_img from "../../../assets/dahboard_img.png";
import axios from "axios";

const Musictab = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [music,setMusic]=useState([])


  return (
    <section className="Music_sec">
      <div className="Container">
        <div className="music_content">
          <h2>Manage All Your Music/ Content At One Dashboard</h2>
          <div className="music_tab">
            <Tabs
              selectedIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
            >
              <TabList classID="music_tablist">
                <Tab>
                  <div className="music_lisContent">
                    <img src={Music_img} alt="Music_img" />
                    <div>
                      <h5>Your purchases</h5>
                      <p>Check out the new purchases you’ve made</p>
                      <a href="#">
                        Get Started <img src={Music_arrow} alt="Music_arrow" />
                      </a>
                      <div className="mobile_Img">
                        <img src={Dashboard_img} alt="Dashboard_img" />{" "}
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="music_lisContent">
                    <img src={Music_img} alt="Music_img" />
                    <div>
                      <h5>Your music</h5>
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="music_lisContent">
                    <img src={Music_img} alt="Music_img" />
                    <div>
                      <h5>Your content</h5>
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="music_lisContent">
                    <img src={Music_img} alt="Music_img" />
                    <div>
                      <h5>Sale history</h5>
                    </div>
                  </div>
                </Tab>
              </TabList>

              <TabPanel>
                <div className="music_tabContent">
                  <img src={Dashboard_img} alt="Dashboard_img" />
                  
                </div>
              </TabPanel>

              <TabPanel>
                <div className="music_tabContent">
                  <img src={Dashboard_img} alt="Dashboard_img" />
                  
                </div>
              </TabPanel>

              <TabPanel>
                <div className="music_tabContent">
                  <img src={Dashboard_img} alt="Dashboard_img" />
                </div>
              </TabPanel>

              <TabPanel>
                <div className="music_tabContent">
                  <img src={Dashboard_img} alt="Dashboard_img" />
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Musictab;
