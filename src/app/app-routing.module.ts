import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ListeSessionsComponent } from './components/pagesSessions/liste-sessions/liste-sessions.component';
import { ListePresentateursComponent } from './components/pagesPresentateurs/liste-presentateurs/liste-presentateurs.component';
import { SessionsComponent } from './components/pagesSessions/sessions/sessions.component';
import { PresentateursComponent } from './components/pagesPresentateurs/presentateurs/presentateurs.component';
import { NotesComponent } from './components/notes/notes.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: "full",
  },
  {path: 'accueil', component: AccueilComponent,},
  { path: 'presentateursList', component: ListePresentateursComponent },
  { path: 'presentateur/:id', component: PresentateursComponent },
  { path: 'sessionsList', component: ListeSessionsComponent },
  { path: 'session/:id', component: SessionsComponent },
  { path: 'notes', component: NotesComponent },


]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
