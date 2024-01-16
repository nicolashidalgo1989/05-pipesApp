import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";

// configuracion del locale de la app (idiomas)
import localeEsCL from '@angular/common/locales/es-CL'
import localeNo from '@angular/common/locales/no'
import { registerLocaleData }  from '@angular/common'
registerLocaleData( localeEsCL );
registerLocaleData( localeNo );

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
      // establecer idioma local por defecto en toda la app
      {
        provide: LOCALE_ID, useValue: 'es-CL'
      }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule
    ]
})
export class AppModule { }
