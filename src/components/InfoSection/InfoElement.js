import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const InfoContainer = styled.div`
    color #fff;
    background: ${({ lightBg }) => (lightBg ? '#E7E3D4' : '#29648A')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => 
        imgStart ? `'col2 col1'` : `'col1 col2'`};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => 
        imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 5px;
    padding: 0 5px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 5px;
    padding: 0 5px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#2E9CCA')};
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 32px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#213159')};

    @media screen and (max-widht: 480px) {
        font-size: 32px;
    } 
`;

export const TopLine2 = styled.p`
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#2E9CCA')};
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading2 = styled.h1`
    margin-bottom: 24px;
    font-size: 32px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#213159')};

    @media screen and (max-widht: 480px) {
        font-size: 32px;
    } 
`;

export const Subtitle = styled.p`
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#FFF')};
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    background: url('https://github.com/jcrommar/dallas-gerizim/blob/gh-pages/images/800px-Dallas_view.jpg?raw=true');
    padding-right: 0;
    border-radius: 16px;
    border: 1px solid #2E9CCA;
    box-shadow:
        0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12)
`;

export const SocialIconLink = styled(LinkR)`
    color: #fff;
    font-size: 30px;
    justify-content: space-between;
    align-items: center;
    width: 50px;
    margin-bottom: 12px;

    &:hover{
        color: #B23850;
        transition: 0.3s ease-out
    }
`;
