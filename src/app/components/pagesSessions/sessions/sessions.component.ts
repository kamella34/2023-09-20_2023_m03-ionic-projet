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
  sessions: Session[] = [];
  // presentateurs: Presentateur[] = [];

  presentateur!: Presentateur;


  constructor(private _sessionsService: SessionsService, private _presentateurService: PresentateursService, private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(queryId => {
      this.id = queryId['id'];
      this._sessionsService.findAllSession().subscribe(data => {
        if (data.hasOwnProperty(this.id)) {
          this.session = data[this.id];

        } else {
          console.error('not found')
        }
        console.log(this.session.speakers);

        this._presentateurService.findAllPresentateur().subscribe(data => {
          if (data.hasOwnProperty(this.id)) {
            this.presentateur = data[this.id];
            console.log(Object.values(data))


          }
        })




      });
    })
  }
}