// javascript/translate.js

const translations = {
    fr: {
        home: "ACCUEIL",
        about: "À PROPOS",
        "about-title": "À<br>PROPOS",
        team: "ÉQUIPE",
        team2: "NOTRE<br>ÉQUIPE",
        //endroit a modifier pour la traduction française pour le about
        "about-text-1": "Chez HUE Studio, nous créons des expériences qui repoussent les limites du storytelling et explorent des styles visuels uniques.",
        "about-text-2": "Nous travaillons avec des développeurs et artistes talentueux pour donner vie à de nouvelles visions dans le monde du jeu vidéo et de l'animation.",
        "about-text-3": "En tant que studio dirigé par des femmes, nous sommes passionnés par la création d'un espace inclusif où les voix plus discrètes peuvent résonner et être amplifiées.",
        contact: "CONTACT",
        tagline: "Des jeux faits pour vous",
        ourwork: "NOS PROJETS",
        games: "NOS JEUX",
        services: "NOS SERVICES",
        newsletter: "INFOLETTRE",
        "contact-title": "Contactez-nous",
        ourgames: "NOS JEUX<br><br>",
        //endroit a modifier pour la traduction française pour les jeu
        "crumbs-text": "Laissez les bon temps rouler! C'est moi, Remy Lebeau! Gambit ne plie jamais! Vous avez eu une mauvaise main, Logan. Je suis désolé.",
        "witch-text": "Laissez les bon temps rouler! C'est moi, Remy Lebeau! Gambit ne plie jamais! Vous avez eu une mauvaise main, Logan. Je suis désolé.",
        "hiraeth-text": "Incarnez une petite créature perdue dans un monde divisé et aidez-la à retrouver son chemin. HIRAETH est un jeu de puzzle-plateforme sur l'expérience des immigrés de deuxième génération.",
        ourservices: "NOS SERVICES",
        //endroit a modifier pour la traduction française pour les card de nos service
        "service1-title": "Développement d'animation 3D",
        "service1-text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit facilisis elit, at eleifend tellus sagittis sed. Pellentesque aliquet lacus mauris.",
        "service1-link": "Réserver une consultation",
        "service2-title": "Développement de jeux",
        "service2-text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit facilisis elit, at eleifend tellus sagittis sed. Pellentesque aliquet lacus mauris.",
        "service2-link": "Réserver une consultation",
        "service3-title": "Développement d'animation 3D",
        "service3-text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit facilisis elit, at eleifend tellus sagittis sed. Pellentesque aliquet lacus mauris.",
        "service3-link": "Réserver une consultation",
    },
    en: {
        home: "HOME",
        about: "ABOUT US",
        "about-title": "ABOUT<br>US",
        team: "OUR TEAM",
        team2: "OUR<br>TEAM",
        //endroit a modifier pour la traduction anglaise pour le about
        "about-text-1": "At HUE Studio, creating experiences that push the limits of storytelling and explore unique visual styles is what we do.",
        "about-text-2": "We work with talented developers and artists to bring new visions to life in the world of video games and animation.",
        "about-text-3": "As a women-led studio, we are passionate about creating an inclusive space where the quieter voices can resonate and be amplified.",
        contact: "CONTACT",
        tagline: "Games For You Too",
        ourwork: "OUR WORK",
        games: "OUR GAMES",
        services: "OUR SERVICES",
        newsletter: "NEWSLETTER",
        "contact-title": "Contact us",
        ourgames: "Our Games<br><br>",
        //endroit a modifier pour la traduction anglaise pour les jeu
        "crumbs-text": "Laissez les bon temps rouler! C'est moi, Remy Lebeau! Gambit never folds!!! You got dealt a bad hand, Logan. Je suis désolé.",
        "witch-text": "Laissez les bon temps rouler! C'est moi, Remy Lebeau! Gambit never folds!!! You got dealt a bad hand, Logan. Je suis désolé.",
        "hiraeth-text": "Play as a small creature lost in a divided world and help them find its way. HIRAETH is a puzzle-platformer game about the second-generation immigrant experience.",
        ourservices: "Our Services",
        //endroit a modifier pour la traduction anglaise pour les card de nos service
        "service1-title": "3D Animation Development",
        "service1-text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit facilisis elit, at eleifend tellus sagittis sed. Pellentesque aliquet lacus mauris.",
        "service1-link": "Book a consultation",
        "service2-title": "Game Development",
        "service2-text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit facilisis elit, at eleifend tellus sagittis sed. Pellentesque aliquet lacus mauris.",
        "service2-link": "Book a consultation",
        "service3-title": "3D Animation Development",
        "service3-text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit facilisis elit, at eleifend tellus sagittis sed. Pellentesque aliquet lacus mauris.",
        "service3-link": "Book a consultation",
    }
};

// Récupère la langue sauvegardée ou met "en" par défaut
let currentLang = localStorage.getItem("lang") || "en";

// Fonction de traduction
function translatePage() {
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        if(translations[currentLang][key]){
            el.innerHTML = translations[currentLang][key];
        }
    });
    const btn = document.getElementById("translate-btn");
    if(btn) btn.textContent = currentLang === "en" ? "FR" : "EN";
}

// Bouton pour changer la langue
document.addEventListener("DOMContentLoaded", () => {
    translatePage();
    const btn = document.getElementById("translate-btn");
    if(btn){
        btn.addEventListener("click", () => {
            currentLang = currentLang === "en" ? "fr" : "en";
            localStorage.setItem("lang", currentLang); // sauvegarde
            translatePage();
        });
    }
});