import styled from 'styled-components'

export const ServicesContainer = styled.div`
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.ivory};
`;

export const ServicesContainer2 = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.ivory};
`;

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.navy};
    margin-bottom: 20px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    padding-top: 10px;
    color: ${({ theme }) => theme.colors.navy};
`;

export const NavLogoImg = styled.img`
    height: 200px;
    width: 200px;
    margin-top: 5px;
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    padding-top: 100px;
`;