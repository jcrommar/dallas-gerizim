import React from 'react';
import Icon2 from '../../images/Svg-1.svg';
import Icon3 from '../../images/Svg-1.svg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
} from './ServicesElements';

const Services = () => {
    return (
        <>
          <ServicesContainer id="services">
            <ServicesH1>Nuestros Servicios</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src="images/2018GerizimWhite.png" />
                    <ServicesH2>Martes - 7:30PM</ServicesH2>
                    <ServicesP>Familar | <em>Virtual</em></ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Viernes - 7:30PM</ServicesH2>
                    <ServicesP>Escatologico | <em>Presencial</em></ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Domingo - 9:30AM</ServicesH2>
                    <ServicesP>Dominical | <em>Presencial</em></ServicesP>
                </ServicesCard>
            </ServicesWrapper>
          </ServicesContainer>  
        </>
    )
}

export default Services
