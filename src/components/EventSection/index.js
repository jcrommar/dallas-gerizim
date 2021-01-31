import React from 'react';
import YouTubeSubscribe from "../youtubeSubscribe";
import {
    ServicesContainer,
    ServicesContainer2,
    ServicesH1,
    NavLogoImg,
    ServicesH2
} from './eventElement';

const Services = () => {

    let channelid = "UC81SMAEkXeXisfnRIYmw_yg";

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
                    <section className="c-share">
                        <YouTubeSubscribe
                        // channelName={channelName}
                        channelid={channelid}
                        theme={"default"}
                        layout={"full"}
                        count={"default"}
                        />
                    </section>
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
                        src={`https://www.youtube.com/embed/1CbnAzLlrlA`}
                        frameBorder="0"
                    />
            {/*} <NavLogoImg src="images/live_now_gif.gif"></NavLogoImg> {*/}
          </ServicesContainer>  
        </>
    )
}

export default Services