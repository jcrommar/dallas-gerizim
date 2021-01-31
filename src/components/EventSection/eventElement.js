import styled from 'styled-components'

export const ServicesContainer = styled.div`
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;
`;

export const ServicesContainer2 = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
`;

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #213159 ;
    margin-bottom: 20px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    padding-top: 10px;
    color: #213159;
`;

export const NavLogoImg = styled.img`
    height: 200px;
    width: 200px;
    margin-top: 5px;
`;
