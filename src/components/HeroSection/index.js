import React, {useState} from 'react';
import Video from '../../video/Recompensa2024.mp4';
import { Button } from '../ButtonElement';
import {FaFacebook, FaInstagram, FaYoutube, FaSpotify} from 'react-icons/fa';
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroImg,
    HeroBtnWrapper, 
    ArrowDown,
    ArrowDown2,
    SocialIconLink,
    SocialIcons,
    SpotImg,
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted playsInline src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
            <HeroImg src="https://github.com/jcrommar/dallas-gerizim/blob/main/public/images/Gerizim2021LOGO_AllWHITE.png?raw=true"></HeroImg>
                <SocialIcons>
                            <SocialIconLink to="//facebook.com/EbenezerDallasGerizim" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink to="//instagram.com/EbenezerDallasGerizim/?fbclid=IwAR3sOM_xz0s4vorox1qV_e_EALUMi7oOEKD8NLbU6yGOSfuylRGqYSdUsmk" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink to="//youtube.com/channel/UC81SMAEkXeXisfnRIYmw_yg" target="_blank" aria-label="YouTube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink to="//open.spotify.com/show/2DoPcLbIxoW5uv6d32EWhB" target="_blank" aria-label="Spotify">
                                <FaSpotify />
                            </SocialIconLink>
                </SocialIcons>
                <SpotImg src="https://github.com/jcrommar/dallas-gerizim/blob/main/public/images/spotify-podcast-badge-blk-grn-660x160.png?raw=true"></SpotImg>
                <HeroBtnWrapper>
                    <Button
                    to="about" 
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}>{hover ? <ArrowDown /> : <ArrowDown2 />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
