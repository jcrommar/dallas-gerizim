// PLANEA TU VISITA
// ----------------------------------------------------------------------------
// Textos de la sección para personas que nos visitan por primera vez.
// Cambia lo que quieras; para agregar una tarjeta, copia un bloque.
//   icono: 'reloj' | 'biblia' | 'mapa' | 'mensaje' | 'ninos' | 'auto' | 'corazon'
// ----------------------------------------------------------------------------

export const visita = {
    titulo: 'Planea tu visita',
    intro: '¿Es tu primera vez? Nos encantaría conocerte. Esto es lo que puedes esperar cuando nos visites.',
    tarjetas: [
        {
            icono: 'reloj',
            titulo: 'Cuándo',
            lineas: [
                'Domingo 9:30 AM · Presencial',
                'Viernes 7:30 PM · Presencial',
                'Martes 7:30 PM · Virtual',
            ],
        },
        {
            icono: 'biblia',
            titulo: 'Qué esperar',
            lineas: [
                'Un tiempo de alabanza y adoración, oración y la predicación de la Palabra.',
                'Ven como estés: lo importante es que vengas.',
            ],
        },
        {
            icono: 'mapa',
            titulo: 'Dónde',
            lineas: ['1200 West Shore Dr', 'Richardson, TX 75080'],
            boton: {
                texto: 'Cómo llegar',
                enlace: 'https://www.google.com/maps/dir/?api=1&destination=1200+West+Shore+Dr,+Richardson,+TX+75080',
            },
        },
        {
            icono: 'mensaje',
            titulo: '¿Tienes preguntas?',
            lineas: ['Escríbenos por Facebook y con gusto te ayudamos.'],
            boton: {
                texto: 'Enviar mensaje',
                enlace: 'https://m.me/EbenezerDallasGerizim',
            },
        },
    ],
};
