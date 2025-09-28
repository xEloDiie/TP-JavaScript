// Redirection vers le site français de Wikipédia

// On sélectionne l'endroit dans le HTML où le lien se trouve
const lienWiki = document.querySelector('a[href="https://wikipedia.org"]');

// On remplace ce lien par le lien français
lienWiki.href = "https://fr.wikipedia.org";


// Envoi du formulaire si "oui" ou "non" d'entré

// On sélectionne le formulaire et l'input champ de texte
const formulaire = document.querySelector('form'); // On cible le formulaire
const inputText = document.querySelector('#champ'); // On cible le champ texte

// On écoute sur la page dès que le bouton submit dans le formulaire a été pressé pour lancer la fonction
formulaire.addEventListener('submit', function(event) {
    const valeur = inputText.value.toLowerCase().trim(); // Transformer la valeur entrée en minuscules + sans espaces

    if (valeur === "oui" || valeur === "non") { // On regarde si c'est bien oui ou non
        // Si c'est oui, le formulaire peut s’envoyer
        alert("Le formulaire a bien été envoyé !");
    } else { // Sinon
        // On bloque l’envoi
        event.preventDefault();
        inputText.value = ""; // On vide le champ
        inputText.placeholder = "Il faut mettre Oui ou Non"; // Message d’erreur dans l'étiquette
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
radio3.nextSibling.textContent = "Bluetooth ";


// Modification du texte de volume pour chaque périphérique 

// Sélection de l'input du volume
const volumeInput = document.querySelector('#volume');
// Sélection de tous les inputs radio du groupe "choix"
const radios = document.querySelectorAll('input[name="choix"]');

// Écoute du changement sur chaque radio
for (let i = 0; i < radios.length; i++) {
    radios[i].onclick = function() {
        const volumeLabel = volumeInput.nextSibling; // le texte "Volume"

        if (this.value === "1") volumeLabel.textContent = "Volume HP";
        else if (this.value === "2") volumeLabel.textContent = "Volume Casque";
        else if (this.value === "3") volumeLabel.textContent = "Volume Bluetooth";
    };
}


// Modification du max du volume

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
const imageUPHF = document.createElement('img');
imageUPHF.src = "https://upload.wikimedia.org/wikipedia/commons/b/bd/UPHF_logo.svg";
imageUPHF.width = 280; // largeur en pixels (par défaut)
imageUPHF.alt = "Logo UPHF";

// Sélectionner la section "Lien et images"
const sectionLien = document.getElementById('LienEtImages');

// Ajouter l'image à la fin de la section
sectionLien.appendChild(imageUPHF);


// Ajout d'un menu toggle

// Au démarrage de la page
document.addEventListener("DOMContentLoaded", function() {
    // Création du conteneur principal du menu
    const menu = document.createElement("div");
    menu.id = "menu";

    // Ajout d'un titre "Menu"
    const titre = document.createElement("h2");
    titre.textContent = "Menu";
    menu.appendChild(titre);

    // Tableau avec les sections de la page web reliées à leur coche correspondante
    const sections = [
        { id: "toggleHeader", texte: "Afficher la section Lien et images", sectionId: "Section1" },
        { id: "toggleBody", texte: "Afficher le formulaire", sectionId: "Section2" },
        { id: "toggleFooter", texte: "Afficher barres de progression", sectionId: "Section3" }
    ];

    // Boucle classique pour créer chaque case et gérer son lien avec une section
    for (let i = 0; i < sections.length; i++) {
        const item = sections[i];

        // Création d'un label contenant une case et du texte
        const label = document.createElement("label");

        // Création de la case à cocher
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = item.id;

        // Forcer le décochage de la case dès le départ
        checkbox.checked = false;

        // Insertion de la case et du texte dans le label
        label.appendChild(checkbox);
        label.append(" " + item.texte);

        // Ajout du label au menu
        menu.appendChild(label);
        menu.appendChild(document.createElement("br"));

        // Récupération de la section correspondante
        const section = document.getElementById(item.sectionId);

        // Cacher la section au démarrage
        section.style.display = "none";

        // Ajout d'un listener sur la case pour afficher/masquer la section
        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                section.style.display = "block"; // afficher la section
            } else {
                section.style.display = "none"; // cacher la section
            }
        });
    }

    // Ajout d'une ligne de séparation en bas du menu
    menu.appendChild(document.createElement("hr"));

    // Ajout du menu au tout début du body
    document.body.insertBefore(menu, document.body.firstChild);
});


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
    if (valBarreProgression < 100 && valEspDisp < 100) { // Si la valeur de progression des deux barres sont en-dessous de 100%
        valBarreProgression += 5; // La progression de la première barre augmente de 5
        valEspDisp += 5; // De même pour la deuxième 
        barreProgression.value = valBarreProgression; // On met à jour le pourcentage actuel de la première barre
        espDisp.value = valEspDisp; // De même pour la deuxième
    } else {
        clearInterval(progression); // Stop à 100%
    }
}, 1000); // 1000ms = 1s