import React from 'react';
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
                    <ServicesIcon src="../../images/family_.svg" />
                    <ServicesH2>Martes - 7:30PM</ServicesH2>
                    <ServicesP>Familar | <em>Virtual</em></ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src="../../images/school.svg" />
                    <ServicesH2>Viernes - 7:30PM</ServicesH2>
                    <ServicesP>Escatologico | <em>Presencial</em></ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src="../../images/conference_presentation_.svg" />
                    <ServicesH2>Domingo - 9:30AM</ServicesH2>
                    <ServicesP>Dominical | <em>Presencial</em></ServicesP>
                </ServicesCard>
            </ServicesWrapper>
          </ServicesContainer>  
        </>
    )
}

export default Services
