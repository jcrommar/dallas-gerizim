import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const Page = styled.div`
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.navy};
    color: ${({ theme }) => theme.colors.cream};
`;

export const TopBar = styled.header`
    height: 80px;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.img`
    height: 54px;
    width: auto;
    display: block;
`;

export const BackLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 44px;
    color: ${({ theme }) => theme.colors.cream};
    font-weight: 700;
    text-decoration: none;

    &:hover {
        color: ${({ theme }) => theme.colors.brassLight};
    }
`;

export const Main = styled.main`
    max-width: 1100px;
    margin: 0 auto;
    padding: 32px 24px 96px;
`;

export const Eyebrow = styled.p`
    color: ${({ theme }) => theme.colors.brass};
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    margin-bottom: 10px;
`;

export const Title = styled.h1`
    font-size: 48px;
    line-height: 1.1;
    margin-bottom: 28px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;

    @media screen and (max-width: 480px) {
        font-size: 36px;
    }
`;

const pulse = keyframes`
    0% { opacity: 1; }
    50% { opacity: 0.35; }
    100% { opacity: 1; }
`;

export const Badge = styled.span`
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1px;
    padding: 6px 14px;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: ${({ live, theme }) => (live ? '#C62828' : theme.colors.brass)};
    color: ${({ live, theme }) => (live ? '#FFFFFF' : theme.colors.navy)};
`;

export const Dot = styled.span`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #FFFFFF;
    animation: ${pulse} 1.4s ease-in-out infinite;

    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }
`;

export const PlayerBox = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 16px;
    overflow: hidden;
    background: ${({ theme }) => theme.colors.navyDeep};
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);

    @supports not (aspect-ratio: 16 / 9) {
        height: 0;
        padding-bottom: 56.25%;
    }

    /* On phones the offline message needs more height than 16:9 gives it */
    @media screen and (max-width: 640px) {
        ${({ video }) => !video && css`
            aspect-ratio: auto;
            height: auto;
            padding-bottom: 0;
        `}
    }
`;

export const PlayerFrame = styled.div`
    position: absolute;
    inset: 0;

    iframe {
        width: 100%;
        height: 100%;
        border: 0;
        display: block;
    }

    ${({ visible }) => !visible && css`
        visibility: hidden;
        pointer-events: none;
    `}
`;

export const Offline = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px 24px;
    text-align: center;
    background:
        linear-gradient(180deg, rgba(14, 26, 46, 0.78) 0%, rgba(14, 26, 46, 0.92) 100%),
        url('/images/hero-poster.jpg') center / cover no-repeat;

    @media screen and (max-width: 640px) {
        position: relative;
        inset: auto;
        padding: 48px 20px;
    }
`;

export const OfflineInner = styled.div`
    max-width: 560px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

export const OfflineTitle = styled.h2`
    font-size: 34px;
    line-height: 1.15;
    color: ${({ theme }) => theme.colors.cream};

    @media screen and (max-width: 480px) {
        font-size: 28px;
    }
`;

export const OfflineText = styled.p`
    font-size: 17px;
    line-height: 1.55;
    color: #C7CFDA;
`;

export const NextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 18px 28px;
    border: 1px solid rgba(184, 148, 86, 0.5);
    border-radius: 14px;
    background: rgba(20, 35, 60, 0.6);
`;

export const NextLabel = styled.span`
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.brass};
`;

export const NextWhen = styled.span`
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 30px;

    @media screen and (max-width: 480px) {
        font-size: 26px;
    }
    color: ${({ theme }) => theme.colors.cream};
`;

export const NextIn = styled.span`
    font-size: 15px;
    color: #C7CFDA;
`;

export const Actions = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    margin-top: 6px;
`;

const btn = css`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    min-height: 46px;
    padding: 12px 22px;
    border-radius: 999px;
    font-weight: 700;
    font-size: 15px;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
`;

export const PrimaryA = styled.a`
    ${btn}
    background: ${({ theme }) => theme.colors.brass};
    color: ${({ theme }) => theme.colors.navy};

    &:hover {
        background: ${({ theme }) => theme.colors.cream};
    }
`;

export const GhostA = styled.a`
    ${btn}
    border: 1px solid rgba(245, 241, 234, 0.6);
    color: ${({ theme }) => theme.colors.cream};

    &:hover {
        background: ${({ theme }) => theme.colors.cream};
        color: ${({ theme }) => theme.colors.navy};
    }
`;

export const Schedule = styled.ul`
    list-style: none;
    margin-top: 32px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;

    @media screen and (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`;

export const ScheduleItem = styled.li`
    padding: 18px 20px;
    border-radius: 12px;
    background: rgba(245, 241, 234, 0.06);
    border: 1px solid rgba(245, 241, 234, 0.1);
    display: flex;
    flex-direction: column;
    gap: 4px;

    strong {
        color: ${({ theme }) => theme.colors.cream};
        font-size: 18px;
    }

    span {
        color: #C7CFDA;
        font-size: 15px;
    }
`;

export const Note = styled.p`
    margin-top: 24px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: #A9B4C4;
    font-size: 15px;

    svg {
        color: ${({ theme }) => theme.colors.brass};
        font-size: 20px;
        flex-shrink: 0;
    }
`;
