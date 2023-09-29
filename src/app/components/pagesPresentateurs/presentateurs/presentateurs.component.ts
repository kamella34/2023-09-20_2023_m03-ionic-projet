import { Component, OnInit } from '@angular/core';
import { PresentateursService } from 'src/app/components/shared/services/presentateurs.service';
import { Presentateur } from '../../shared/models/presentateursModel';
import { Router, ActivatedRoute } from '@angular/router';
import { Session } from '../../shared/models/sessionsModel';

@Component({
  selector: 'app-presentateurs',
  templateUrl: './presentateurs.component.html',
  styleUrls: ['./presentateurs.component.scss'],
})
export class PresentateursComponent implements OnInit {
    // session!: Session;
  sessions: Session[] = [];
  presentateur!: Presentateur;
  id!: number;
  nameSpeakerSession: string = "";

  constructor(private _presentateursService: PresentateursService, private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {

    this._route.params.subscribe(queryId => {
      this.id = queryId['id'];
      this._presentateursService.findAllPresentateur().subscribe(data => {
        if (data.hasOwnProperty(this.id)) {
          this.presentateur = data[this.id];
        } else {
          console.error('not found')
        }
      })

    });

  }


}