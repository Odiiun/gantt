// Localization strings for Frappe Gantt
const LOCALE_STRINGS = {
    en: {
        today: 'Today',
        mode: 'Mode',
    },
    pt: {
        today: 'Hoje',
        mode: 'Modo',
    },
    'pt-BR': {
        today: 'Hoje',
        mode: 'Modo',
    },
    es: {
        today: 'Hoy',
        mode: 'Modo',
    },
    fr: {
        today: "Aujourd'hui",
        mode: 'Mode',
    },
    de: {
        today: 'Heute',
        mode: 'Modus',
    },
    it: {
        today: 'Oggi',
        mode: 'Modalità',
    },
    ru: {
        today: 'Сегодня',
        mode: 'Режим',
    },
    zh: {
        today: '今天',
        mode: '模式',
    },
    ja: {
        today: '今日',
        mode: 'モード',
    },
    ko: {
        today: '오늘',
        mode: '모드',
    },
    ar: {
        today: 'اليوم',
        mode: 'وضع',
    },
    hi: {
        today: 'आज',
        mode: 'मोड',
    },
};

export function getLocalizedString(key, lang = 'en') {
    // Try exact match first
    if (LOCALE_STRINGS[lang] && LOCALE_STRINGS[lang][key]) {
        return LOCALE_STRINGS[lang][key];
    }

    // Try language without region (e.g., 'pt' for 'pt-BR')
    const baseLang = lang.split('-')[0];
    if (LOCALE_STRINGS[baseLang] && LOCALE_STRINGS[baseLang][key]) {
        return LOCALE_STRINGS[baseLang][key];
    }

    // Fallback to English
    return LOCALE_STRINGS.en[key] || key;
}

export default { getLocalizedString, LOCALE_STRINGS };
