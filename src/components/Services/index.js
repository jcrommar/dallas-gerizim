import React from 'react'
import Icon1 from '../../images/Svg-1.svg'
import Icon2 from '../../images/Svg-1.svg'
import Icon3 from '../../images/Svg-1.svg'
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
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Martes</ServicesH2>
                    <ServicesP>Familar | Virtual</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Viernes</ServicesH2>
                    <ServicesP>Escatologico | Presencial</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Domingo</ServicesH2>
                    <ServicesP>Dominical | Presencial</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
          </ServicesContainer>  
        </>
    )
}

export default Services
