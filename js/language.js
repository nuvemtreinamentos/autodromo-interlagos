// Objeto com os textos traduzidos
const translations = {
    pt: {
        menu: {
            title: "Menu",
            como_chegar: "Como Chegar",
            onde_se_alimentar: "Onde se Alimentar",
            onde_se_hospedar: "Onde se Hospedar",
            zonas_de_risco: "Zonas de Risco",
            telefones_uteis: "Telefones Úteis",
        },
        content: {
            como_chegar: {
                title: "Como Chegar",
                option1: "Opção 1 (preferível): De trem através da estação Autódromo.",
                option2: "Opção 2: De carro até a estação Jurubatura, e de trem até a estação Autódromo.",
                option3: "Opção 3 (menos preferível): De carro até a região do Autódromo.",
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
            como_chegar: "Cómo Llegar",
            onde_se_alimentar: "Dónde Comer",
            onde_se_hospedar: "Dónde Hospedarse",
            zonas_de_risco: "Zonas de Riesgo",
            telefones_uteis: "Teléfonos Útiles",
        },
        content: {
            como_chegar: {
                title: "Cómo Llegar",
                option1: "Opción 1 (preferida): En tren hasta la estación Autódromo.",
                option2: "Opción 2: En coche hasta la estación Jurubatura, y en tren hasta la estación Autódromo.",
                option3: "Opción 3 (menos preferida): En coche hasta la región del Autódromo.",
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
            como_chegar: "How to Get There",
            onde_se_alimentar: "Where to Eat",
            onde_se_hospedar: "Where to Stay",
            zonas_de_risco: "Risk Zones",
            telefones_uteis: "Useful Phones",
        },
        content: {
            como_chegar: {
                title: "How to Get There",
                option1: "Option 1 (preferable): By train through Autódromo station.",
                option2: "Option 2: By car to Jurubatura station, then by train to Autódromo station.",
                option3: "Option 3 (less preferable): By car to the Autódromo area.",
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
    menuItems[4].textContent = translations[lang].menu.onde_se_alimentar;
    menuItems[5].textContent = translations[lang].menu.onde_se_hospedar;
    menuItems[6].textContent = translations[lang].menu.zonas_de_risco;
    menuItems[7].textContent = translations[lang].menu.telefones_uteis;

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
