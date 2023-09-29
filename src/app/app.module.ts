import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PresentateursComponent } from './components/pagesPresentateurs/presentateurs/presentateurs.component';
import { SessionsComponent } from './components/pagesSessions/sessions/sessions.component';
import { ListePresentateursComponent } from './components/pagesPresentateurs/liste-presentateurs/liste-presentateurs.component';
import { ListeSessionsComponent } from './components/pagesSessions/liste-sessions/liste-sessions.component';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './components/notes/notes.component';




@NgModule({
  declarations: [AppComponent, AccueilComponent,FooterComponent, HeaderComponent,PresentateursComponent, SessionsComponent, ListeSessionsComponent,ListePresentateursComponent,NotesComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,CommonModule,HttpClientModule,RouterModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
