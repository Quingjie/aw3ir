// Fonction de validation d'email (fournie dans l'énoncé)
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

window.onload = function () {
  // Ce code est exécuté une fois que toute la page est chargée
  console.log("DOM ready!");

  // Quand on clique sur "Envoyer"
  document.querySelector("form").addEventListener("submit", function (event) {
    // Empêche le rechargement de la page
    event.preventDefault();

    // Récupération des valeurs saisies
    const lastname = document.querySelector("#lastname").value;
    const firstname = document.querySelector("#firstname").value;
    const birthday = document.querySelector("#birthday").value;
    const address = document.querySelector("#address").value;
    const email = document.querySelector("#email").value;

    // Liste des erreurs trouvées (vide au départ)
    const erreurs = [];

    // Les champs texte doivent avoir 5 caractères minimum
    if (lastname.length < 5) {
      erreurs.push("Le nom doit contenir au moins 5 caractères");
    }
    if (firstname.length < 5) {
      erreurs.push("Le prénom doit contenir au moins 5 caractères");
    }
    if (address.length < 5) {
      erreurs.push("L'adresse doit contenir au moins 5 caractères");
    }

    // Le mail doit être bien formaté
    if (!validateEmail(email)) {
      erreurs.push("L'adresse mail n'est pas valide");
    }

    // La date de naissance ne doit pas être dans le futur
    if (birthday === "") {
      erreurs.push("La date de naissance est obligatoire");
    } else {
      const birthdayTimestamp = new Date(birthday).getTime();
      const nowTimestamp = Date.now();
      if (birthdayTimestamp > nowTimestamp) {
        erreurs.push("La date de naissance ne peut pas être dans le futur");
      }
    }

    // Les deux endroits de la modal qu'on va remplir
    const modalTitle = document.querySelector(".modal-title");
    const modalBody = document.querySelector(".modal-body");

    if (erreurs.length === 0) {
      // Tout est correct : message + lien vers Google Maps
      modalTitle.textContent = "Formulaire valide";
      modalBody.innerHTML =
        "<p>Tous les champs sont corrects.</p>" +
        "<p>Votre adresse sur Google Maps : " +
        '<a href="http://maps.google.com/maps?q=' +
        encodeURIComponent(address) +
        '" target="_blank"></a></p>';
      // On écrit l'adresse dans le lien avec textContent (plus sûr que innerHTML)
      modalBody.querySelector("a").textContent = address;
    } else {
      // Au moins une erreur : on les affiche sous forme de liste
      modalTitle.textContent = "Le formulaire contient des erreurs";
      let liste = "<ul>";
      for (let i = 0; i < erreurs.length; i++) {
        liste += "<li>" + erreurs[i] + "</li>";
      }
      liste += "</ul>";
      modalBody.innerHTML = liste;
    }

    // Affichage de la modal
    const myModal = new bootstrap.Modal(document.getElementById("myModal"));
    myModal.show();
  });
};