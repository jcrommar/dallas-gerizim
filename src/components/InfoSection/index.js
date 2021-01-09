import React from 'react';
import {FaFacebook, FaInstagram} from 'react-icons/fa';
import { 
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Heading2,
    Subtitle, 
    BtnWrap,
    ImgWrap,
    Img,
    SocialIconLink
} from './InfoElement';

const InfoSection = ({
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline,
    headline2, 
    darkText, 
    description, 
    img, 
    alt,
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
                                <Heading2 lightText={lightText}>{headline2}</Heading2>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <SocialIconLink to="//facebook.com/ebenezer.gerizim" target="_blank" aria-label="Facebook">
                                        <FaFacebook />
                                    </SocialIconLink>
                                    <SocialIconLink to="//instagram.com/apostolraulmartinez/" target="_blank" aria-label="Instagram">
                                        <FaInstagram />
                                    </SocialIconLink>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
