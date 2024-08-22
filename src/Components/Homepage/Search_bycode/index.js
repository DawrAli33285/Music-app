

import { useState, useRef } from "react";
import Music from "./music";
import Filter from "../Music_dashboard/All/Filter";
import nextTrack from "../../../../src/assets/nextbtn.svg";
import PreTrack from "../../../../src/assets/prebtn.svg";
import VideoIcon from "../../../../src/assets/video_icon.svg";
import HearIcon from "../../../../src/assets/heart.svg";
import QullSound from "../../../../src/assets/quill_sound.svg";
import SolarLink from "../../../../src/assets/solar_link-bold.svg";
import DwnloadBtn from "../../../../src/assets/downloade_btn.png";
import cartFooter from "../../../../src/assets/cart_foter.png";


const SearchBycode = ({ purchases }) => {
        const [currentTrack, setCurrentTrack] = useState(0);
        const [isPlaying, setIsPlaying] = useState(false);



    const [activeTabsopen, setActiveTabopen] = useState('Music');
    const audioRef = useRef(null);

    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleNext = () => {
        setCurrentTrack((prevTrack) => (prevTrack + 1) % purchases.length);
        setIsPlaying(false);
    };

    const handleVolumeChange = (e) => {
        audioRef.current.volume = e.target.value;
    };
    return (
        <div>


            <div className="user-component">
                <div className="tab-content">
                    <div className="tabs">
                        <button className={activeTabsopen === 'All' && 'activeitem'} onClick={() => setActiveTabopen("All")}> All</button>
                        <button className={activeTabsopen === 'Music' && 'activeitem'} onClick={() => setActiveTabopen("Music")}> Music</button>
                        <button className={activeTabsopen === 'Content' && 'activeitem'} onClick={() => setActiveTabopen("Content")}> Content</button>

                    </div>
                    <div >
                        <div className="main_pageWidth">
                        <div className="d-md-block d-none">

                            {activeTabsopen === "Music" && <Filter />}
                        </div>

                        <div>
                            {activeTabsopen === "Music" && <Music />}



                        </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="player && player">
                <div className="play_botto">

                    <div className="left_contentfooter">


                        <button onClick={handlePlayPause}  className="d-md-block d-none">{isPlaying ? '' : ''}<img src={PreTrack} alt="PreTrack" /></button>
                        <audio ref={audioRef} src={purchases && purchases[currentTrack].audio}></audio>
                        <span className="play_btn"><img src={VideoIcon} alt="VideoIcon" /></span>
                        <button onClick={handleNext}  className="d-md-block d-none"><img src={nextTrack} alt="nextTrack" /></button>

                        <h3>{purchases && purchases[currentTrack].title}<span>by Lorem</span></h3>

                    </div>

                    <div className="right_footer">
                        <div className="icons_right">
                            <img src={QullSound} alt="QullSound" />
                            <img src={SolarLink} alt="SolarLink" />
                            <img src={HearIcon} alt="SolarLink" />

                        </div>
                        {/* <input type="range" min="0" max="1" step="0.01" onChange={handleVolumeChange} /> */}
                        <button className="btn_One"><img src={DwnloadBtn} alt="" className="d-md-none d-block"/><span className="d-md-block d-none">Download</span></button>
                        <button className="btn_Two"><img src={cartFooter} alt="" className="d-md-none d-block"/><span className="d-md-block d-none">Buy license</span></button>
                    </div>
                </div>
            </div>





        </div>
        
    );
};

export default SearchBycode;

