
import "./trust.css"
import { useState } from 'react';
import Youtube from '../../../assets/youtube.png'
import Spotify from '../../../assets/spotify.png'
import Wynk_logo from '../../../assets/wynk.png'
import Jiosavan from '../../../assets/jio_savan.png'
import Amazon_logo from '../../../assets/amazon.png'
import Applw_logo from '../../../assets/apple.png'


const TrustLogo = () => {

    return (
        <section className='bg_trustSec'>
            <div className="Container">
                <div className="trust_content">
                    <h3>Trusted By World's Best Content Distribution Platforms</h3>
                <div className="Logo_sec">
                    <img src={Youtube}  alt="Youtube" />
                    <img src={Spotify}  alt="Spotify" />
                    <img src={Wynk_logo}  alt="Wynk_logo" />
                    <img src={Jiosavan}  alt="Jiosavan" />
                    <img src={Amazon_logo}  alt="Amazon_logo" />
                    <img src={Applw_logo}  alt="Applw_logo" />

                    </div>
                    </div>
                

            </div>


      </section>
    );
}


export default TrustLogo