import React from 'react';
import {
    ServicesContainer,
    ServicesContainer2,
    ServicesH1,
    NavLogoImg,
    ServicesH2
} from './eventElement';

const Services = () => {
    return (
        <>
            <ServicesContainer2 id="evento">
                <ServicesH1>
                    7º Congreso
                </ServicesH1>
                <ServicesH1>
                    De La Palabra
                </ServicesH1>
                <ServicesH2>
                    Enero 29-31, 2021
                </ServicesH2>
                           <NavLogoImg src="images/youtube_giphy.gif"></NavLogoImg>
            </ServicesContainer2>
          <ServicesContainer className="video"
                    id="evento"
                    style={{
                        position: "relative",
                        display: "flex",
                        paddingBottom: "56.25%" /* 16:9 */,
                        paddingTop: 25,
                        height: 0
                    }}>
                        <iframe
                        title="streaming"
                        style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                        }}
                        src={`https://www.youtube.com/embed/ASzQaJP5aP0`}
                        frameBorder="0"
                    />
            {/*} <NavLogoImg src="images/live_now_gif.gif"></NavLogoImg> {*/}
          </ServicesContainer>  
        </>
    )
}

export default Services
