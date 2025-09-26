// Redirection vers le site français de Wikipédia

// On sélectionne l'endroit dans le HTML où le lien se trouve
const lienWiki = document.querySelector('a[href="https://wikipedia.org"]');

// On remplace ce lien par le lien français
lienWiki.href = "https://fr.wikipedia.org";


// Ouverture du site si "oui" d'entré, sinon ne pas ouvrir le lien

// Sélection des éléments
const inputText = document.querySelector('#champ');   

// Vérification lors du clic sur le lien
lienWiki.addEventListener('click', function(event) {
    const valeur = inputText.value.toLowerCase().trim(); // transforme en minuscules et supprime les espaces

    if (valeur === "oui") {
        // tout est correct, la page s'ouvrira normalement
    } 
    else if (valeur === "non") {
        event.preventDefault(); // empêche la navigation
        alert("Vous avez entré Non, la page ne va pas s'ouvrir !");
    } 
    else {
        event.preventDefault(); // empêche la navigation
        alert("Il faut répondre par Oui ou Non !");
    }
});


// Modification des 3 choix

// On renomme chacun des choix pour les changer individuellement
const radio1 = document.querySelector('#c1');
const radio2 = document.querySelector('#c2');
const radio3 = document.querySelector('#c3');

// On modifie le nom de chacun
radio1.nextSibling.textContent = "HP ";
radio2.nextSibling.textContent = "Casque ";
radio3.nextSibling.textContent = "Bluetooth ";;


// Modification du texte de volume pour chaque périphérique 

// Sélection de tous les inputs radio du groupe "choix"
const radios = document.querySelectorAll('input[name="choix"]');

// Écoute du changement sur chaque radio
for (let i = 0; i < radios.length; i++) {
    radios[i].onclick = function() {
        const volumeLabel = volumeInput.nextSibling; // le texte "Volume"

        if (this.value === "c1") volumeLabel.textContent = "Volume HP";
        else if (this.value === "c2") volumeLabel.textContent = "Volume Casque";
        else if (this.value === "c3") volumeLabel.textContent = "Volume Bluetooth";
    };
}


// Modification du max du volume

// Sélection de l'input du volume
const volumeInput = document.querySelector('#volume');

// Sélection de la valeur (texte) du volume
const valeurVolume = document.getElementById('valeurVolume');

// Modification du maximum
volumeInput.max = 1000;
// Mettre la valeur actuelle à la moitié du maximum
volumeInput.value = volumeInput.max / 2; // moitié du max
valeurVolume.textContent = volumeInput.value; // Affecter la valeur actuelle de volume au span dans l'HTML

// Afficher la valeur max du volume dans la console
console.log("Valeur max du volume :", volumeInput.max);

// Fonction pour afficher la valeur du slider
function afficherVolume(slider) {
    valeurVolume.textContent = slider.value;
}
window.afficherVolume = afficherVolume;


// Modifier le bouton cochable simple en bouton "Mute"

// Sélection du label associé à la case à cocher
const muteLabel = document.querySelector("label[for='mute']");

// Modifier le texte
muteLabel.textContent = "Mute";


// Si bouton Mute pressé, désactive le volume

// Sélection de la checkbox
const caseMute = document.querySelector("input[name='mute']");

// Écoute de l'événement 'change' sur la checkbox
caseMute.addEventListener('change', function() {
    if (this.checked) {
        // Si la case est cochée, on désactive le volume
        volumeInput.disabled = true;
    } else {
        // Sinon, on réactive le volume
        volumeInput.disabled = false;
    }
});


// Ajout d'une image

// Créer l'image et la récupérer
const nouvelleImage = document.createElement('img');
nouvelleImage.src = "https://upload.wikimedia.org/wikipedia/commons/b/bd/UPHF_logo.svg";
nouvelleImage.width = 200; // largeur en pixels (par défaut)
nouvelleImage.alt = "Logo UPHF";

// Sélectionner la section "Lien et images"
const sectionLien = document.getElementById('LienEtImages');

// Ajouter l'image à la fin de la section
sectionLien.appendChild(nouvelleImage);


// Ajout d'un menu toggle

// Tableau avec les sections de la page web reliées à leur coche correspondante
const sections = [
    { checkboxId: "toggleHeader", sectionId: "Section1" },
    { checkboxId: "toggleBody", sectionId: "Section2" },
    { checkboxId: "toggleFooter", sectionId: "Section3" }
];

// Boucle sur tous les "couples" dans le tableau
for (let i = 0; i < sections.length; i++) {
    const checkbox = document.getElementById(sections[i].checkboxId);
    const section = document.getElementById(sections[i].sectionId);

    // Vérifier que les cases et sections existent
    if (checkbox && section) {
        // Cacher la section au départ et décocher la case pour être sûr
        section.style.display = "none";
        checkbox.checked = false;

        // Listener si coché ou décoché
        checkbox.addEventListener("change", function () {
            // Afficher ou non en conséquence
            if (checkbox.checked) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });
    }
};

// Callback de démarrage (inutile ici car le navigateur reset la page à chaque réactualisation)
function initMenu() {
    // Tableau contenant les 3 cases à cocher du menu
    const toggles = ["toggleHeader", "toggleBody", "toggleFooter"];

    // Boucle sur chaque élément du tableau
    for (let i = 0; i < toggles.length; i++) {

        // Récupère la checkbox correspondante via son id
        const checkbox = document.getElementById(toggles[i]);
        // Si les cases existent
        if (checkbox) {
            checkbox.checked = false; // Les décocher d'entrée de jeu
        }
    }
}

// Exécution au démarrage
initMenu();


// Afficher l'année dans la console 

// On sélectionne la date complète
const dateInput = document.querySelector('input[type="date"]');

// On détecte dès qu'un changement a été effectué pour lancer la fonction
dateInput.addEventListener('change', function() {
    const selectedDate = new Date(this.value); // On affecte la date à une constante
    if (!isNaN(selectedDate)) { // Si la date est un nombre
        console.log("Année choisie :", selectedDate.getFullYear()); // On affiche dans la console l'année
    }
});


// Progression des barres de 5% toutes les secondes

// Sélectionner la barre de téléchargement
const barreProgression = document.querySelector('#barreProgression');
// Sélectionner la barre d'espace disponible
const espDisp = document.querySelector('#ed');

// Initialisation à 0 des barres de progression
let valBarreProgression = 0;
let valEspDisp = 0;

barreProgression.value = valBarreProgression;
espDisp.value = valEspDisp;

// Fonction pour incrémenter de 5% toutes les secondes
const progression = setInterval(function() {
    if (valBarreProgression < 100) {
        valBarreProgression += 5;
        valEspDisp += 5;
        barreProgression.value = valBarreProgression;
        espDisp.value = valEspDisp;
    } else {
        clearInterval(progression); // stop à 100%
    }
}, 1000); // 1000ms = 1s