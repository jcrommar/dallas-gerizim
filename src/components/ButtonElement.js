import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';

export const Button = styled(LinkS)`
    border-radius: 999px;
    font-weight: 700;
    background: ${({ primary, theme }) => (primary ? theme.colors.brass : theme.colors.navy)};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark, theme }) => (dark ? theme.colors.navy : theme.colors.cream)};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    text-decoration: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary, theme }) => (primary ? theme.colors.cream : theme.colors.brass)};
        color: ${({ theme }) => theme.colors.navy};
    }
`;

export const ButtonLink = styled(LinkR)`
    border-radius: 999px;
    font-weight: 700;
    background: ${({ primary, theme }) => (primary ? theme.colors.brass : theme.colors.navy)};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark, theme }) => (dark ? theme.colors.navy : theme.colors.cream)};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    text-decoration: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary, theme }) => (primary ? theme.colors.cream : theme.colors.brass)};
        color: ${({ theme }) => theme.colors.navy};
    }
`;

