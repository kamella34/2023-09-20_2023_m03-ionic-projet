import { Component, OnInit } from '@angular/core';
import { PresentateursService } from 'src/app/components/shared/services/presentateurs.service';
import { Presentateur } from '../../shared/models/presentateursModel';
import { ActivatedRoute } from '@angular/router';
import { SessionsService } from '../../shared/services/sessions.service';


@Component({
  selector: 'app-presentateurs',
  templateUrl: './presentateurs.component.html',
  styleUrls: ['./presentateurs.component.scss'],
})
export class PresentateursComponent implements OnInit {

  presentateur!: Presentateur;
  id!: number;
  speakerId!: number;
  sessionSpeakers: number[] = [];
  sessionTitle!: string;
  sessionPresentateur!: string;

  constructor(private _presentateursService: PresentateursService,
    private _route: ActivatedRoute, private _sessionsService: SessionsService) { }

  ngOnInit() {

    this._route.params.subscribe(queryId => {
      this.id = queryId['id'];
      this._presentateursService.findAllPresentateur().subscribe(data => {
        if (data.hasOwnProperty(this.id)) {
          this.presentateur = data[this.id];
          this.speakerId = data[this.id].id;
        }

        this._sessionsService.findAllSession().subscribe(data => {
          for (let idSession in data) {
            this.sessionSpeakers = data[idSession].speakers;
            this.sessionTitle = data[idSession].title;

            if (this.sessionSpeakers != null) {
              this.sessionSpeakers.forEach(element => {
                if (element == this.speakerId) {
                  this.sessionPresentateur = this.sessionTitle
                }
              });
            }
          }
        })

      })
    })
  }
}

