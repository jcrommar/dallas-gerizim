import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { CgChevronDoubleDownR, CgChevronDoubleDown  } from 'react-icons/cg';

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            180deg, 
            rgba(0, 0, 0, 0.2) 0%, 
            rgba(0, 0, 0, 0.6) 100%
            ), 
            linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
        z-index: 2; 
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroImg = styled.img`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 200px;
    width: 200px;
    margin-bottom: 20px;
`;

export const SpotImg = styled.img`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50px;
    width: 200px;
    margin-bottom: 20px;
`;

export const HeroH1 = styled.div`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowDown = styled(CgChevronDoubleDownR)`
    font-size: 23px;
`;

export const ArrowDown2 = styled(CgChevronDoubleDown)`
    font-size: 25px;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    width: 200px;
`;

export const SocialIconLink = styled(LinkR)`
    color: #fff;
    font-size: 24px;
    
    &:hover{
        color: #2E9CCA;
        transition: 0.3s ease-out
    }
`;

