import styled from 'styled-components'

export const ServicesContainer = styled.div`
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px
    }
`;

export const ServicesCard = styled.div`
    background: #335592;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 5px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2)
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #213159 ;
    margin-bottom: 40px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    padding-top: 20px;
    color: #fff;
`;

export const NavLogoImg = styled.img`
    height: 100px;
    width: 200px;
    margin-top: 5px;
`;
