// debut du fichier
import { NgModule, LOCALE_ID } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DatePipe, registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";

// on charge les règles du français (noms des jours, des mois...)
registerLocaleData(localeFr);

import { AppRoutingModule } from "./app-routing.module";
// <-- dans la suite du TP, Ajouter les références aux autres modules ici aussi

import { AppComponent } from "./app.component";
import { MeteoComponent } from "./meteo/meteo.component";
import { MeteoDetailComponent } from './meteo-detail/meteo-detail.component';
// <-- dans la suite du TP, Ajouter les références à MeteoDetailComponent aussi

@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent,
    MeteoDetailComponent,
    // <-- dans la suite du TP,ajouter MeteoDetailComponent ici
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // <-- dans la suite du TP, Ajouter les références aux autres modules ici
  ],
  providers: [DatePipe, { provide: LOCALE_ID, useValue: "fr" }],
  bootstrap: [AppComponent],
})
export class AppModule {}