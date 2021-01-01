import React, {useState} from 'react';
import Video from '../../video/proclama.mp4';
import Mountain from '../../video/drone-mountain.mp4';
import { Button } from '../ButtonElement';
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight,
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
                <HeroH1>Ebenezer Dallas Gerizim</HeroH1>
                <HeroP>Dallas, TX</HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" 
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}>
                        YouTube {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
