import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../../shared/services/sessions.service';
import {Session} from '../../shared/models/sessionsModel'

@Component({
  selector: 'app-liste-sessions',
  templateUrl: './liste-sessions.component.html',
  styleUrls: ['./liste-sessions.component.scss'],
})
export class ListeSessionsComponent implements OnInit {

  sessions: Session[] = [];

  constructor(private sessionsService: SessionsService) { }

  ngOnInit() {
    
    this.sessionsService.findAllSession().subscribe((data) => {
      console.log(data);
      this.sessions = Object.values(data);
    })
  }
}