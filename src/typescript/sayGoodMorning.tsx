function sayGoodMorning(country: keyof typeof localization) {

    return <i>{localization[country]}</i>;
}

const localization = {
    de: "Guten Morgen",
    nl: "Goedemorgen",
    fr: "Bon matin",
    es: "Buones Dias",
    en: "Good morning"
};

export const element = <h1>{sayGoodMorning("es")}, Sara!</h1>;
