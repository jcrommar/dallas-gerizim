import React from 'react';
import {FaFacebook} from 'react-icons/fa';
import { 
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    TopLine2,
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
    topLine2,
    lightText, 
    headline,
    headline2, 
    darkText, 
    description, 
    description2,
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
                                <Heading lightText={lightText}>{headline} <SocialIconLink to="//facebook.com/ebenezer.gerizim" target="_blank" aria-label="Facebook">
                                        <FaFacebook />
                                    </SocialIconLink></Heading>
                                    <TopLine>{topLine}</TopLine>
                                <Heading2 lightText={lightText}>{headline2} <SocialIconLink to="//facebook.com/rebeca.garcia.16718" target="_blank" aria-label="Facebook">
                                        <FaFacebook />
                                    </SocialIconLink></Heading2>
                                    <TopLine2>{topLine2}</TopLine2>
                                <BtnWrap>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <TopLine>{description2}</TopLine>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
