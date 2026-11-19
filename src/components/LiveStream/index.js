import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaYoutube, FaRegBell, FaHistory } from 'react-icons/fa';
import { transmisiones, YOUTUBE_CANAL } from '../../data/schedule';
import {
    Page, TopBar, Logo, BackLink, Main, Eyebrow, Title, Badge, Dot,
    PlayerBox, PlayerFrame, Offline, OfflineInner, OfflineTitle, OfflineText,
    NextBox, NextLabel, NextWhen, NextIn, Actions, PrimaryA, GhostA,
    Schedule, ScheduleItem, Note,
} from './LiveElements';

// ---------- time helpers (always in Dallas time, whatever the viewer's zone) ----------
const SEMANA = 7 * 24 * 60;
const DIAS = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

const minutosAhoraDallas = () => {
    const parts = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Chicago', weekday: 'short', hour: 'numeric', minute: 'numeric', hourCycle: 'h23',
    }).formatToParts(new Date());
    const get = (t) => parts.find((p) => p.type === t).value;
    return DIAS[get('weekday')] * 1440 + Number(get('hour')) * 60 + Number(get('minute'));
};

const minutosDe = (t) => t.dia * 1440 + t.hora * 60 + t.minuto;

// Where we are relative to the schedule
const estadoHorario = () => {
    const ahora = minutosAhoraDallas();
    let proxima = null;
    let faltan = Infinity;
    let enVentana = false;
    transmisiones.forEach((t) => {
        const inicio = minutosDe(t);
        const hasta = (inicio - ahora + SEMANA) % SEMANA; // minutes until start
        const desde = (ahora - inicio + SEMANA) % SEMANA; // minutes since start
        if (hasta <= 20 || desde <= 150) enVentana = true; // 20 min before → 2.5 h after
        if (hasta > 0 && hasta < faltan) { faltan = hasta; proxima = t; }
    });
    return { proxima, faltan, enVentana };
};

const textoFaltan = (min) => {
    if (!isFinite(min)) return '';
    const d = Math.floor(min / 1440);
    const h = Math.floor((min % 1440) / 60);
    const m = min % 60;
    if (d > 0) return `en ${d}\u00a0${d === 1 ? 'día' : 'días'}${h ? `, ${h}\u00a0h` : ''}`;
    if (h > 0) return `en ${h}\u00a0h${m ? ` ${m}\u00a0min` : ''}`;
    return `en ${m}\u00a0min`;
};

// ---------- YouTube IFrame API ----------
const cargarYT = () => new Promise((resolve) => {
    if (window.YT && window.YT.Player) { resolve(window.YT); return; }
    const anterior = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => { if (anterior) anterior(); resolve(window.YT); };
    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const s = document.createElement('script');
        s.src = 'https://www.youtube.com/iframe_api';
        document.head.appendChild(s);
    }
});

const LiveStream = () => {
    // 'buscando' | 'envivo' (confirmed live) | 'pronto' (stream found, not confirmed yet) | 'fuera'
    const [estado, setEstado] = useState('buscando');
    const [horario, setHorario] = useState(estadoHorario);
    const slotRef = useRef(null);
    const playerRef = useRef(null);
    const timerRef = useRef(null);
    const activoRef = useRef(true);

    const programarRevision = useRef(() => {});

    const revisar = useCallback(async () => {
        clearTimeout(timerRef.current);
        // If YouTube's script can't load (ad blocker, bad connection), don't hang on "Buscando…"
        const YT = await Promise.race([cargarYT(), new Promise((r) => setTimeout(() => r(null), 8000))]);
        if (!activoRef.current || !slotRef.current) return;
        if (!YT) { setEstado('fuera'); programarRevision.current(); return; }

        if (playerRef.current) { try { playerRef.current.destroy(); } catch (e) { /* ignore */ } }
        slotRef.current.innerHTML = '';
        const iframe = document.createElement('iframe');
        iframe.id = 'gerizim-live';
        iframe.title = 'Transmisión en vivo de Ebenezer Dallas Gerizim';
        iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
        iframe.setAttribute('allowfullscreen', '');
        iframe.src = `https://www.youtube.com/embed/live_stream?channel=${YOUTUBE_CANAL}`
            + `&enablejsapi=1&rel=0&origin=${encodeURIComponent(window.location.origin)}`;
        slotRef.current.appendChild(iframe);

        let ultimo = null;
        let idReal = null;
        let enVivo = false;
        const decidir = (nuevo) => {
            if (!activoRef.current || ultimo === nuevo) return;
            // once decided, only allow "offline" -> "video found" (YouTube can be slow to confirm)
            // also allow 'pronto' -> 'envivo' once playback confirms it's live
            if (ultimo && !(ultimo === 'fuera' && nuevo !== 'fuera') && !(ultimo === 'pronto' && nuevo === 'envivo')) return;
            ultimo = nuevo;
            setEstado(nuevo);
            if (nuevo === 'fuera') programarRevision.current();
            else clearTimeout(timerRef.current);
        };
        const leerVideo = (p) => {
            try {
                const vd = p.getVideoData() || {};
                if (vd.video_id && vd.video_id !== 'live_stream') { idReal = vd.video_id; enVivo = !!vd.isLive; }
            } catch (e) { /* ignore */ }
        };

        playerRef.current = new YT.Player(iframe, {
            events: {
                onReady: (e) => { leerVideo(e.target); if (idReal) decidir(enVivo ? 'envivo' : 'pronto'); },
                onStateChange: (e) => { leerVideo(e.target); if (idReal) decidir(enVivo ? 'envivo' : 'pronto'); },
                // 150/101/100: nothing live on the channel right now
                onError: () => decidir('fuera'),
            },
        });
        // Safety net: if YouTube says nothing either way, decide after 10 s
        setTimeout(() => decidir(idReal ? (enVivo ? 'envivo' : 'pronto') : 'fuera'), 10000);
    }, []);

    // While offline, check again: every minute around service times, every 10 min otherwise
    programarRevision.current = () => {
        clearTimeout(timerRef.current);
        const { enVentana } = estadoHorario();
        timerRef.current = setTimeout(() => {
            if (document.visibilityState === 'visible') revisar();
            else programarRevision.current();
        }, (enVentana ? 1 : 10) * 60 * 1000);
    };

    useEffect(() => {
        activoRef.current = true;
        window.scrollTo(0, 0);
        revisar();
        const reloj = setInterval(() => setHorario(estadoHorario()), 30 * 1000);
        const alVolver = () => {
            if (document.visibilityState === 'visible') setHorario(estadoHorario());
        };
        document.addEventListener('visibilitychange', alVolver);
        return () => {
            activoRef.current = false;
            clearInterval(reloj);
            clearTimeout(timerRef.current);
            document.removeEventListener('visibilitychange', alVolver);
            if (playerRef.current) { try { playerRef.current.destroy(); } catch (e) { /* ignore */ } }
        };
    }, [revisar]);

    const mostrarVideo = estado === 'envivo' || estado === 'pronto';
    const canal = `https://www.youtube.com/channel/${YOUTUBE_CANAL}`;

    return (
        <Page>
            <TopBar>
                <Link to="/" aria-label="Ir al inicio">
                    <Logo src="/images/Gerizim2021LOGO_AllWHITE.png" alt="Ebenezer Dallas Gerizim" />
                </Link>
                <BackLink to="/"><FaArrowLeft aria-hidden="true" /> Inicio</BackLink>
            </TopBar>

            <Main>
                <Eyebrow>Transmisión en vivo</Eyebrow>
                <Title>
                    Servicio en vivo
                    {estado === 'envivo' && <Badge live><Dot /> EN VIVO</Badge>}
                </Title>

                <PlayerBox video={mostrarVideo}>
                    <PlayerFrame ref={slotRef} visible={mostrarVideo} />
                    {!mostrarVideo && (
                        <Offline role="status" aria-live="polite">
                            <OfflineInner>
                                {estado === 'buscando' ? (
                                    <>
                                        <OfflineTitle>Buscando la transmisión…</OfflineTitle>
                                        <OfflineText>Un momento, por favor.</OfflineText>
                                    </>
                                ) : horario.enVentana ? (
                                    <>
                                        <OfflineTitle>La transmisión comenzará en breve</OfflineTitle>
                                        <OfflineText>
                                            Esta página se actualiza sola. En cuanto empiece el servicio,
                                            el video aparecerá aquí.
                                        </OfflineText>
                                    </>
                                ) : (
                                    <>
                                        <OfflineTitle>No estamos en vivo en este momento</OfflineTitle>
                                        {horario.proxima && (
                                            <NextBox>
                                                <NextLabel>Próxima transmisión</NextLabel>
                                                <NextWhen>{horario.proxima.etiqueta}</NextWhen>
                                                <NextIn>{horario.proxima.nombre} · {textoFaltan(horario.faltan)}</NextIn>
                                            </NextBox>
                                        )}
                                        <OfflineText>
                                            Deja esta página abierta: el video aparecerá solo cuando comencemos.
                                        </OfflineText>
                                    </>
                                )}
                                {estado !== 'buscando' && (
                                    <Actions>
                                        <PrimaryA href={`${canal}/live`} target="_blank" rel="noopener noreferrer">
                                            <FaYoutube aria-hidden="true" /> Abrir en YouTube
                                        </PrimaryA>
                                        <GhostA href={`${canal}/streams`} target="_blank" rel="noopener noreferrer">
                                            <FaHistory aria-hidden="true" /> Transmisiones anteriores
                                        </GhostA>
                                        <GhostA href={`${canal}?sub_confirmation=1`} target="_blank" rel="noopener noreferrer">
                                            <FaRegBell aria-hidden="true" /> Suscríbete
                                        </GhostA>
                                    </Actions>
                                )}
                            </OfflineInner>
                        </Offline>
                    )}
                </PlayerBox>

                <Schedule aria-label="Horario de transmisiones">
                    {transmisiones.map((t) => (
                        <ScheduleItem key={t.etiqueta}>
                            <strong>{t.etiqueta}</strong>
                            <span>{t.nombre}</span>
                        </ScheduleItem>
                    ))}
                </Schedule>
                <Note>
                    <FaYoutube aria-hidden="true" /> Activa la campanita en YouTube para recibir un aviso cuando comencemos.
                </Note>
            </Main>
        </Page>
    );
};

export default LiveStream;
