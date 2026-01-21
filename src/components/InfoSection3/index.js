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
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <BtnWrap>
                                    <ButtonLink to="//google.com/maps/place/1200+West+Shore+Dr,+Richardson,+TX+75080/@32.9666657,-96.7496225,17z/data=!3m1!4b1!4m5!3m4!1s0x864c1f5fa4e8042d:0xced14266b4f95d38!8m2!3d32.9666657!4d-96.7474338" target="_blank" aria-label="Direccion"
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
                            <iframe title="gerizim_map" width="300" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.4068741660562!2d-96.74962248481313!3d32.966665680915135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1f5fa4e8042d%3A0xced14266b4f95d38!2s1200%20West%20Shore%20Dr%2C%20Richardson%2C%20TX%2075080!5e0!3m2!1sen!2sus!4v1643956629961!5m2!1sen!2sus">
                                </iframe>
                                <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=6220d179aa9341408b0bfcaadc0e91c62b9226d8'>
                                </script>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
