import { Component, OnInit } from '@angular/core';
import { Session } from '../../shared/models/sessionsModel';
import { SessionsService } from '../../shared/services/sessions.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PresentateursService } from '../../shared/services/presentateurs.service';
import { Presentateur } from '../../shared/models/presentateursModel';


@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss'],
})
export class SessionsComponent implements OnInit {
  session!: Session;
  id!: number;
  nameSpeakerSession!: string ;
  presentateur!: Presentateur;
  idSpeakerSession !: Number;
  speakersId1!: number;
  speakersId2!: number;
  presentateurName1!: string;
  presentateurName2!: string;


  constructor(private _sessionsService: SessionsService, private _presentateurService: PresentateursService, private _router: Router,
    private _route: ActivatedRoute) { }

    ngOnInit() {
      this._route.params.subscribe(queryId => {
        this.id = queryId['id'];
        this._sessionsService.findAllSession().subscribe(data => {
          if (data.hasOwnProperty(this.id)) {
            this.session = data[this.id];
            this.idSpeakerSession = Number(this.session.speakers);
            this.speakersId1 = this.session.speakers[0];
            this.speakersId2 = this.session.speakers[1];
    
            this._presentateurService.findAllPresentateur().subscribe(presentateurData => {
              if (presentateurData.hasOwnProperty(this.speakersId1)) {
                const premierPresentateur = presentateurData[this.speakersId1];
                this.presentateurName1 = premierPresentateur.name;
              }
              if (presentateurData.hasOwnProperty(this.speakersId2)) {
                const deuxiemePresentateur = presentateurData[this.speakersId2];
                this.presentateurName2 = deuxiemePresentateur.name;
              }
    
              if (this.session.speakers.length == 1) {
                this.nameSpeakerSession = this.presentateurName1;
              } else if (this.session.speakers.length == 2) {
                this.nameSpeakerSession = this.presentateurName1 + " et " + this.presentateurName2;
              } else {
                this.nameSpeakerSession = "inconnu";
              }
            });
          }
        });
      });
    }
}
