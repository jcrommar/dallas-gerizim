import React, {useState} from 'react';
import Video from '../../video/proclama.mp4';
import { Button } from '../ButtonElement';
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroImg,
    HeroBtnWrapper, 
    ArrowDown,
    ArrowDown2,
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
            <HeroImg src="https://github.com/jcrommar/dallas-gerizim/blob/main/public/images/2018GerizimCCWhite.png?raw=true"></HeroImg>
                <HeroH1>Ebenezer Dallas</HeroH1>
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
