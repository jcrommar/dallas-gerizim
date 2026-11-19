// TRANSMISIONES EN VIVO (YouTube)
// ----------------------------------------------------------------------------
// La página "Ver en vivo" usa esta lista para decir cuándo es la próxima
// transmisión y para revisar más seguido si ya empezó.
// Horario de Dallas (hora del centro).
//   dia: 0 = domingo, 1 = lunes, 2 = martes, 3 = miércoles, 4 = jueves,
//        5 = viernes, 6 = sábado
//   hora: formato de 24 horas (19 = 7 PM)
// ----------------------------------------------------------------------------

export const transmisiones = [
    { dia: 0, hora: 9, minuto: 30, etiqueta: 'Domingo 9:30 AM', nombre: 'Servicio Dominical' },
    { dia: 2, hora: 19, minuto: 30, etiqueta: 'Martes 7:30 PM', nombre: 'Servicio Familiar' },
    { dia: 5, hora: 19, minuto: 30, etiqueta: 'Viernes 7:30 PM', nombre: 'Servicio Escatológico' },
];

export const YOUTUBE_CANAL = 'UC81SMAEkXeXisfnRIYmw_yg';
