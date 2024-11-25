// Objeto com os textos traduzidos
const translations = {
    pt: {
        menu: {
            title: "Menu",
            como_chegar: "Como Chegar"
        },
        content: {
            como_chegar: {
                title: "Como Chegar",
                option1: "Opção 1 (preferível): De trem através da estação Autódromo.",
                option2: "Opção 2: De carro até a estação Jurubatura, e de trem até a estação Autódromo.",
                option3: "Opção 3 (menos preferível): De carro até a região do Autódromo.",
            },
            parabens: 
            {
                title: "Parabéns, se você chegou até esse site, significa que você tem interesse em visitar o Autódromo de Interlagos em São Paulo. Neste site que é alimentado por moradores da região, você vai encontrar informações simplificadas de como visitar o Autódromo."
            },
            telefones_uteis: {
                title: "Telefones Úteis",
                samu: "SAMU: 192",
                policia: "Polícia: 190",
                bombeiros: "Bombeiros: 193",
            },
        },
    },
    es: {
        menu: {
            title: "Menú",
            como_chegar: "Cómo Llegar"
        },
        content: {
            como_chegar: {
                title: "Cómo Llegar",
                option1: "Opción 1 (preferida): En tren hasta la estación Autódromo.",
                option2: "Opción 2: En coche hasta la estación Jurubatura, y en tren hasta la estación Autódromo.",
                option3: "Opción 3 (menos preferida): En coche hasta la región del Autódromo.",
            },
            parabens: 
            {
                title: "Felicitaciones, si has llegado a este sitio significa que tienes interés en visitar el Autódromo de Interlagos en São Paulo. En este sitio, que es mantenido por residentes de la región, encontrarás información simplificada sobre cómo visitar el Autódromo."
            },
            telefones_uteis: {
                title: "Teléfonos Útiles",
                samu: "SAMU: 192",
                policia: "Policía: 190",
                bombeiros: "Bomberos: 193",
            },
        },
    },
    en: {
        menu: {
            title: "Menu",
            como_chegar: "How to Get There"
        },
        content: {
            como_chegar: {
                title: "How to Get There",
                option1: "Option 1 (preferable): By train through Autódromo station.",
                option2: "Option 2: By car to Jurubatura station, then by train to Autódromo station.",
                option3: "Option 3 (less preferable): By car to the Autódromo area.",
            },
            parabens: 
            {
                title: "Congratulations, if you have reached this website, it means you are interested in visiting the Interlagos Racetrack in São Paulo. On this website, which is maintained by local residents, you will find simplified information on how to visit the racetrack."
            },
            telefones_uteis: {
                title: "Useful Phones",
                samu: "SAMU: 192",
                policia: "Police: 190",
                bombeiros: "Firefighters: 193",
            },
        },
    },
};

// Função para trocar o idioma
function setLanguage(lang) {
    // Atualiza o título do menu
    //document.querySelector(".menu-header h2").textContent = translations[lang].menu.title;

    // Atualiza itens do menu
    const menuItems = document.querySelectorAll(".menu li");
    menuItems[3].textContent = translations[lang].menu.como_chegar;

    // Atualiza conteúdo "parabens"
    const parabensSection = translations[lang].content.parabens;
    document.querySelector("#parabens h1").textContent = parabensSection.title;

    // Atualiza conteúdo "Como Chegar"
    const comoChegarSection = translations[lang].content.como_chegar;
    document.querySelector("#como-chegar h1").textContent = comoChegarSection.title;
    const articles = document.querySelectorAll("#como-chegar article");
    articles[0].querySelector("p").textContent = comoChegarSection.option1;
    articles[1].querySelector("p").textContent = comoChegarSection.option2;
    articles[2].querySelector("p").textContent = comoChegarSection.option3;

    // Atualiza conteúdo "Telefones Úteis"
    const telefonesUteisSection = translations[lang].content.telefones_uteis;
    const telefonesUteis = document.querySelector("#telefones-uteis");
    telefonesUteis.querySelector("h1").textContent = telefonesUteisSection.title;
    telefonesUteis.querySelector("p:nth-child(2)").textContent = telefonesUteisSection.samu;
    telefonesUteis.querySelector("p:nth-child(3)").textContent = telefonesUteisSection.policia;
    telefonesUteis.querySelector("p:nth-child(4)").textContent = telefonesUteisSection.bombeiros;
}

// Define o idioma padrão
setLanguage("es");
