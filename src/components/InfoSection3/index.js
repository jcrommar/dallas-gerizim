import React from 'react';
import { ButtonLink } from '../ButtonElement';
import { 
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap,
    ImgWrap,
} from './InfoElement3';

const InfoSection = ({
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description, 
    buttonLabel, 
    img, 
    alt,
    primary,
    dark,
    dark2
}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <ButtonLink to="//google.com/maps/place/1499+Regal+Row,+Dallas,+TX+75247/@32.8348657,-96.8805066,17z/data=!4m5!3m4!1s0x864e9cf80c2af5f9:0xf216c9fd6e58612c!8m2!3d32.8348843!4d-96.8782809" target="_blank" aria-label="Direccion"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                    >
                                    {buttonLabel}</ButtonLink>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                            <iframe title="gerizim_map" width="300" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.391504112216!2d-96.88046958481648!3d32.83488428095454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9cf80c2af5f9%3A0xf216c9fd6e58612c!2s1499%20Regal%20Row%2C%20Dallas%2C%20TX%2075247!5e0!3m2!1sen!2sus!4v1611537328685!5m2!1sen!2sus"></iframe><script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=6220d179aa9341408b0bfcaadc0e91c62b9226d8'></script>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
