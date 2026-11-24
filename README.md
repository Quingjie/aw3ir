# TP Applications Web – Master 3IR²

Dépôt de mes TP du cours d'Applications Web (Université Sorbonne Paris Nord, Institut Galilée).

Les énoncés sont dans le dépôt du professeur : https://github.com/bilelz/aw3ir.readme

## TP1 – CV en HTML / CSS

[tp1/](tp1/)

- Mon CV en HTML, avec plusieurs pages (expériences, formations) reliées par des liens.
- Mise en forme avec une feuille de style CSS (`cv.css`).

## TP2 – Formulaire HTML

[tp2/](tp2/)

- Formulaire avec nom, prénom, date de naissance, adresse et mail.
- Validation faite par le navigateur (`required`, `minlength`, `type="email"`...).
- Page de résultat (`action.html`) : le JavaScript lit les données dans l'URL et les affiche, avec un lien Google Maps pour l'adresse et un lien `mailto` pour le mail.

## TP3 – Formulaire avec Bootstrap

[tp3/](tp3/)

- Le même formulaire, mis en forme avec Bootstrap 5.
- Validation en JavaScript (`form-validation.js`) : 5 caractères minimum, mail bien formaté, date de naissance pas dans le futur.
- Résultat affiché dans une fenêtre modale Bootstrap (liste des erreurs ou lien vers l'adresse sur Google Maps).

## TP4 – Fonctionnalités HTML5

[tp4/](tp4/)

- Géolocalisation : un bouton « GPS » affiche une carte OpenStreetMap centrée sur ma position (`gps.js`).
- Compteur de caractères à côté de chaque champ, mis à jour à chaque touche (`onkeyup`).
- Les contacts valides sont enregistrés dans le localStorage du navigateur (`store.js`) et affichés dans un tableau, avec un bouton Reset pour vider la liste.

## TP5 – Application météo avec VueJS

[tp5/](tp5/)

- Application Vue 2 : on ajoute des villes à une liste, sans doublon, et on peut les supprimer.
- Au clic sur une ville, la météo est demandée à l'API OpenWeatherMap (`fetch`) et affichée dans une carte Bootstrap, avec une carte OpenStreetMap et les icônes Weather Icons.
- Bonus : bouton « Ma position » qui affiche la météo à partir des coordonnées GPS.

## TP6 – Application météo avec Angular

[tp6/meteo-angular/](tp6/meteo-angular/)

- Projet Angular 19 créé avec Angular CLI (`meteo-angular`).
- Component `meteo` : formulaire avec validation et liste des villes enregistrée dans le localStorage.
- Navigation avec le routeur Angular : la page `/meteo/:name` affiche la météo de la ville choisie.
- Service `MeteoService` pour les appels à OpenWeatherMap, et dates mises en forme avec le filtre `date` (en français).
- Version compilée (`ng build`) dans [tp6/meteo-angular/build/browser/](tp6/meteo-angular/build/browser/), publiée sur GitHub Pages.
