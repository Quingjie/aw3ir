// On attend que la page soit chargée avant de chercher les éléments
window.onload = () => {
    // Les données du formulaire sont dans l'URL : ?name=...&firstname=...
    const paramsString = document.location.search;
    const searchParams = new URLSearchParams(paramsString);

    // On parcourt chaque donnée : param[0] = nom du champ, param[1] = valeur
    for (const param of searchParams) {
        const elementId = param[0];
        const elementValue = param[1];

        // On cherche l'élément HTML qui a le même id
        const element = document.getElementById(elementId);

        if (element !== null) {
            // On écrit la valeur dans la page
            element.textContent = elementValue;

            // Lien Google Maps pour l'adresse
            if (elementId === "address") {
                element.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(elementValue)}`;
            }

            // Lien de courriel pour l'e-mail
            if (elementId === "email") {
                element.href = `mailto:${elementValue}?subject=Hello!&body=What's up?`;
            }
        }
    }
};