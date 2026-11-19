// Gerizim site theme — "Marino y Latón" (navy + brass + ivory).
// Every color and font on the site comes from here, so a future palette
// change is a one-file edit.

const theme = {
    colors: {
        navy: '#14233C',       // main dark sections, scrolled navbar, dark buttons
        navyDeep: '#0E1A2E',   // footer
        brass: '#B89456',      // primary accent: CTA buttons, icons, active nav line
        brassLight: '#D4B77E', // hover/links on dark backgrounds
        brassDark: '#7F6130',  // small accent text on light backgrounds (AA contrast)
        ivory: '#FAF8F4',      // light section background
        mist: '#EEF1F4',       // alternate light section background
        cream: '#F5F1EA',      // text on dark backgrounds
        slate: '#5B6B7F',      // borders, muted text on dark
        ink: '#2E3440',        // body text on light backgrounds
        white: '#FFFFFF',
    },
    fonts: {
        heading: "'DM Serif Display', Georgia, serif",
        body: "'DM Sans', system-ui, sans-serif",
    },
    shadow: '0 12px 32px rgba(20, 35, 60, 0.12)',
    radius: {
        pill: '999px',
        card: '16px',
    },
};

export default theme;
