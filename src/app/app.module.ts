import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
    apiKey: "AIzaSyDWuwf5DaMytiIbUKhKlniXHwDdY9r5j90",
    authDomain: "contactos-52c43.firebaseapp.com",
    databaseURL: "https://contactos-52c43.firebaseio.com",
    projectId: "contactos-52c43",
    storageBucket: "contactos-52c43.appspot.com",
    messagingSenderId: "335462454032"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
