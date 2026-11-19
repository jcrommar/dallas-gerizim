import React from 'react';
import styled from 'styled-components';
import {
    FaRegClock, FaBible, FaMapMarkerAlt, FaRegCommentDots,
    FaChild, FaCar, FaRegHeart,
} from 'react-icons/fa';
import { visita } from '../../data/visit';

const ICONOS = {
    reloj: FaRegClock,
    biblia: FaBible,
    mapa: FaMapMarkerAlt,
    mensaje: FaRegCommentDots,
    ninos: FaChild,
    auto: FaCar,
    corazon: FaRegHeart,
};

const Section = styled.section`
    background: ${({ theme }) => theme.colors.ivory};
    padding: 120px 24px;
`;

const Inner = styled.div`
    max-width: 1100px;
    margin: 0 auto;
`;

const Header = styled.div`
    max-width: 640px;
    margin: 0 auto 56px;
    text-align: center;
`;

const Eyebrow = styled.p`
    color: ${({ theme }) => theme.colors.brassDark};
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    margin-bottom: 14px;
`;

const Title = styled.h2`
    color: ${({ theme }) => theme.colors.navy};
    font-size: 48px;
    line-height: 1.1;
    margin-bottom: 18px;

    @media screen and (max-width: 480px) {
        font-size: 36px;
    }
`;

const Intro = styled.p`
    color: ${({ theme }) => theme.colors.ink};
    font-size: 18px;
    line-height: 1.6;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 20px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media screen and (max-width: 560px) {
        grid-template-columns: 1fr;
    }
`;

const Card = styled.div`
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid rgba(20, 35, 60, 0.08);
    border-radius: ${({ theme }) => theme.radius.card};
    padding: 28px 24px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const IconWrap = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgba(184, 148, 86, 0.14);
    color: ${({ theme }) => theme.colors.brassDark};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-bottom: 6px;
`;

const CardTitle = styled.h3`
    color: ${({ theme }) => theme.colors.navy};
    font-size: 20px;
    font-weight: 700;
`;

const Line = styled.p`
    color: ${({ theme }) => theme.colors.ink};
    font-size: 16px;
    line-height: 1.5;
`;

const CardLink = styled.a`
    margin-top: auto;
    padding-top: 10px;
    align-self: flex-start;
    color: ${({ theme }) => theme.colors.navy};
    font-weight: 700;
    font-size: 15px;
    text-decoration: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.brass};
    padding-bottom: 2px;

    &:hover {
        color: ${({ theme }) => theme.colors.brassDark};
    }
`;

const VisitSection = () => (
    <Section id="visita" aria-labelledby="visita-titulo">
        <Inner>
            <Header>
                <Eyebrow>Bienvenido</Eyebrow>
                <Title id="visita-titulo">{visita.titulo}</Title>
                <Intro>{visita.intro}</Intro>
            </Header>
            <Grid>
                {visita.tarjetas.map((t) => {
                    const Icon = ICONOS[t.icono] || FaRegHeart;
                    return (
                        <Card key={t.titulo}>
                            <IconWrap aria-hidden="true"><Icon /></IconWrap>
                            <CardTitle>{t.titulo}</CardTitle>
                            {t.lineas.map((l) => <Line key={l}>{l}</Line>)}
                            {t.boton && (
                                <CardLink href={t.boton.enlace} target="_blank" rel="noopener noreferrer">
                                    {t.boton.texto} →
                                </CardLink>
                            )}
                        </Card>
                    );
                })}
            </Grid>
        </Inner>
    </Section>
);

export default VisitSection;
