import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { CgChevronDoubleDownR, CgChevronDoubleDown  } from 'react-icons/cg';

export const HeroContainer = styled.div`
    background: ${({ theme }) => theme.colors.navy};
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
            rgba(20, 35, 60, 0.55) 0%, 
            rgba(20, 35, 60, 0.85) 100%
            ), 
            linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
        z-index: 2; 
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
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
    background: ${({ theme }) => theme.colors.navy};
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
    height: 100px;
    width: auto;
    margin-bottom: 28px;
`;

export const SpotImg = styled.img`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 35px;
    width: 140px;
    margin-bottom: 20px;
`;

export const HeroH1 = styled.div`
    color: ${({ theme }) => theme.colors.cream};
    font-family: ${({ theme }) => theme.fonts.heading};
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
    margin-top: 110px;
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
        color: ${({ theme }) => theme.colors.brassLight};
        transition: 0.3s ease-out
    }
`;


export const HeroCtas = styled.div`
    display: flex;
    gap: 14px;
    margin-bottom: 28px;
    flex-wrap: wrap;
    justify-content: center;
`;

const ctaBase = `
    border-radius: 999px;
    font-weight: 700;
    font-size: 16px;
    padding: 14px 28px;
    min-height: 48px;
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s ease-in-out;
`;

export const HeroCtaPrimary = styled(LinkR)`
    ${ctaBase}
    background: ${({ theme }) => theme.colors.brass};
    color: ${({ theme }) => theme.colors.navy};
    border: 1px solid ${({ theme }) => theme.colors.brass};

    &:hover {
        background: ${({ theme }) => theme.colors.cream};
        border-color: ${({ theme }) => theme.colors.cream};
    }
`;

export const HeroCtaGhost = styled(LinkS)`
    ${ctaBase}
    background: rgba(20, 35, 60, 0.35);
    color: ${({ theme }) => theme.colors.cream};
    border: 1px solid rgba(245, 241, 234, 0.6);

    &:hover {
        background: ${({ theme }) => theme.colors.cream};
        color: ${({ theme }) => theme.colors.navy};
    }
`;
