// EVENTOS
// ----------------------------------------------------------------------------
// Para anunciar un evento, copia uno de los bloques de abajo y cambia los datos.
// La página muestra sola el próximo evento, y lo quita al día siguiente
// de que pase. No hace falta borrar los eventos viejos.
//
//   titulo  – nombre del evento
//   fecha   – día del evento, en formato AAAA-MM-DD (ej. '2026-12-24')
//   fechaFin – (opcional) último día, para eventos de varios días
//   hora    – (opcional) hora, tal como quieres que se lea
//   detalle – (opcional) una línea extra, ej. 'Invitado especial: ...'
//   imagen  – el flyer. Pon el archivo en public/images y escribe '/images/nombre.jpg'
//   enlace  – (opcional) a dónde lleva el botón "Más información"
// ----------------------------------------------------------------------------

export const eventos = [
    {
        titulo: 'Santa Cena',
        fecha: '2026-03-01',
        hora: '10:00 AM',
        imagen: '/images/santa_cena_feb_2026.jpg',
        enlace: 'https://www.facebook.com/EbenezerDallasGerizim/',
    },
];
