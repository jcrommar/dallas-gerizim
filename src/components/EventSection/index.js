import React from 'react';
import {
    ServicesContainer,
    ServicesH1,
    ServicesCard,
    ServicesH2,
} from './eventElement';

const Services = () => {
    return (
        <>
          <ServicesContainer id="evento">
            <ServicesH1>7º Congreso</ServicesH1>
            <ServicesH1>De La Palabra</ServicesH1>
            <ServicesCard>
                <iframe width="350" height="315" title="streaming" src="https://www.youtube.com/embed/mYhbo-GGOt8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <ServicesH2>Apostol Raul Martinez</ServicesH2>
            </ServicesCard>
           {/*} <NavLogoImg src="images/live_now_gif.gif"></NavLogoImg> {*/}
          </ServicesContainer>  
        </>
    )
}

export default Services
