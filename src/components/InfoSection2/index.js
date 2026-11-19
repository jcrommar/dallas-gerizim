import React from 'react';
import { ButtonLink } from '../ButtonElement';
import { eventos } from '../../data/events';
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
    MoreList,
    MoreItem,
    EmptyWrap,
} from './InfoElement2';

const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio',
    'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
const FACEBOOK = 'https://www.facebook.com/EbenezerDallasGerizim/';

// '2026-03-01' -> local Date (avoids the UTC off-by-one-day bug)
const toDate = (s) => {
    const [y, m, d] = s.split('-').map(Number);
    return new Date(y, m - 1, d);
};

const fechaLarga = (d) => `${d.getDate()} de ${MESES[d.getMonth()]}, ${d.getFullYear()}`;

const rango = (ev) => {
    const ini = toDate(ev.fecha);
    if (!ev.fechaFin) return fechaLarga(ini);
    const fin = toDate(ev.fechaFin);
    return ini.getMonth() === fin.getMonth()
        ? `${ini.getDate()}–${fin.getDate()} de ${MESES[fin.getMonth()]}, ${fin.getFullYear()}`
        : `${fechaLarga(ini)} – ${fechaLarga(fin)}`;
};

// Upcoming = the event's last day hasn't ended yet. Sorted soonest first.
export const proximosEventos = (lista = eventos, hoy = new Date()) => {
    const inicioHoy = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
    return lista
        .filter((ev) => ev.fecha && toDate(ev.fechaFin || ev.fecha) >= inicioHoy)
        .sort((a, b) => toDate(a.fecha) - toDate(b.fecha));
};

const BotonInfo = ({ href, children }) => (
    <ButtonLink as="a" href={href} target="_blank" rel="noopener noreferrer">
        {children}
    </ButtonLink>
);

const EventSection = ({ id }) => {
    const proximos = proximosEventos();

    if (proximos.length === 0) {
        return (
            <InfoContainer lightBg id={id}>
                <EmptyWrap>
                    <TopLine>Eventos</TopLine>
                    <Heading>Próximos eventos</Heading>
                    <Subtitle darkText>
                        Muy pronto anunciaremos nuestro próximo evento. Síguenos en
                        Facebook para enterarte primero.
                    </Subtitle>
                    <BotonInfo href={FACEBOOK}>Ver en Facebook</BotonInfo>
                </EmptyWrap>
            </InfoContainer>
        );
    }

    const [ev, ...resto] = proximos;
    const ini = toDate(ev.fecha);
    const mes = MESES[ini.getMonth()];

    return (
        <InfoContainer lightBg id={id}>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                        <ImgWrap>
                            {ev.imagen && <Img src={ev.imagen} alt={`Flyer: ${ev.titulo}`} />}
                        </ImgWrap>
                    </Column1>
                    <Column2>
                        <TextWrapper>
                            <TopLine>{`${mes} ${ini.getFullYear()}`}</TopLine>
                            <Heading>{ev.titulo}</Heading>
                            <Subtitle darkText>
                                {rango(ev)}{ev.hora ? ` | ${ev.hora}` : ''}
                                {ev.detalle && (<><br />{ev.detalle}</>)}
                            </Subtitle>
                            <BtnWrap>
                                <BotonInfo href={ev.enlace || FACEBOOK}>Más información</BotonInfo>
                            </BtnWrap>
                            {resto.length > 0 && (
                                <MoreList>
                                    <TopLine as="h3">También próximamente</TopLine>
                                    {resto.slice(0, 3).map((e) => (
                                        <MoreItem key={e.titulo + e.fecha}>
                                            <strong>{e.titulo}</strong>
                                            <span>{rango(e)}{e.hora ? ` · ${e.hora}` : ''}</span>
                                        </MoreItem>
                                    ))}
                                </MoreList>
                            )}
                        </TextWrapper>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    );
};

export default EventSection;
