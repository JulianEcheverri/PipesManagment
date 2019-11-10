import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule } from '@angular/core'; // para traductor las fechas de un pipe
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';

registerLocaleData(localeEs);
@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Cambiar pipe de Fecha a español
// En la siguiente clase, aprenderemos como funciona el pipe de fecha, pero también una configuración necesaria para cambiarlo a español...

// En la última actualización de Angular, ahora es necesario
// agregar el llamado de una función más... pero aquí les dejo la configuración necesaria en el app.module.ts

// app.module.ts

// import { BrowserModule } from '@angular/platform-browser';
// import { LOCALE_ID, NgModule } from '@angular/core';

// import { AppComponent } from '../src/app/app.component';

// import localeEs from '@angular/common/locales/es';
// import { registerLocaleData } from '@angular/common';
// registerLocaleData(localeEs);

// @NgModule({
//  imports: [ BrowserModule ],
//  declarations: [ AppComponent ],
//  providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
//  bootstrap: [ AppComponent ]
// })
// export class AppModule { }

