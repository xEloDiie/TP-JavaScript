// Taux de conversion
const tauxUSD = 1.01;  // 1 € = 1.01 USD
const tauxAUD = 1.47;  // 1 € = 1.47 AUD

// Quand l'utilisateur tape dans le champ "euros"
document.getElementById("euros").addEventListener("input", convertir);

function convertir() {
    // Récupérer la valeur entrée en euros
    let euros = document.getElementById("euros").value;

    // Vérifier si le champ est vide, rien ne s'affiche si c'est le cas
    if (euros === "") {
        document.getElementById("usd").value = "";
        document.getElementById("aud").value = "";
        return; // Stopper la fonction
    }

    // Conversion
    let DUS = euros * tauxUSD;
    let DAU = euros * tauxAUD;

    // Afficher les résultats dans les champs correspondants
    document.getElementById("usd").value = DUS.toFixed(2); // Le nombre entre parenthèses correspond aux
    document.getElementById("aud").value = DAU.toFixed(2); // chiffres après la virgule qui seront affichés
}
