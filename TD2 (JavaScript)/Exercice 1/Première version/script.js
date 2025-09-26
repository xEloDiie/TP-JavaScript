// Taux de conversion
const tauxUSD = 1.01;  // 1 € = 1.01 USD
const tauxAUD = 1.47;  // 1 € = 1.47 AUD

function convertir() {
    // Récupérer la valeur entrée en euros
    let euros = document.getElementById("euros").value;

    // Vérifier si le champ est vide, on affiche une alerte
    if (euros === "") {
        // Renvoyer un message d'erreur sur la page
        alert("Veuillez entrer une valeur en euros.");
        return; // Stopper la fonction ici pour ne pas calculer un champ vide (sinon "0.0" sera affiché)
    }

    // Conversion
    let DUS = euros * tauxUSD;
    let DAU = euros * tauxAUD;

    // Afficher les résultats dans les champs correspondants
    document.getElementById("usd").value = DUS.toFixed(1); // Le nombre entre parenthèses correspond aux chiffres après la virgule qui seront affichés
    document.getElementById("aud").value = DAU.toFixed(1);
}
