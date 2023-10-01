import { Component, OnInit } from '@angular/core';
import { Session } from '../../shared/models/sessionsModel';
import { SessionsService } from '../../shared/services/sessions.service';
import { ActivatedRoute } from '@angular/router';
import { PresentateursService } from '../../shared/services/presentateurs.service';



@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss'],
})
export class SessionsComponent implements OnInit {
  session!: Session;
  id!: number;
  idSpeakerSession: Number[] = [];
  sessionSpeakerNames: string[] = [];

  constructor(private _sessionsService: SessionsService, private _presentateurService: PresentateursService,
    private _route: ActivatedRoute,) { }

  ngOnInit() {
    this._route.params.subscribe(queryId => {
      this.id = queryId['id'];
      this._sessionsService.findAllSession().subscribe(data => {
        if (data.hasOwnProperty(this.id)) {
          this.session = data[this.id];
          this.idSpeakerSession = this.session.speakers;
          console.log('this.idSpeakerSession', this.idSpeakerSession)

          if (this.idSpeakerSession) {
            this.idSpeakerSession.forEach(sessionSpeakerId => {
              this._route.params.subscribe(queryId => {
                this.id = queryId['id'];
                this._presentateurService.findAllPresentateur().subscribe(presentateurData => {
                  this.sessionSpeakerNames.push(presentateurData[sessionSpeakerId.valueOf()].name)
                }, error => {
                  console.error(error);
                });
              });
            });
          }
        }
      });
    });
  }
}