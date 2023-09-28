import { Component, OnInit } from '@angular/core';
import { PresentateursService } from 'src/app/components/shared/services/presentateurs.service';
import { Presentateur } from '../../shared/models/presentateursModel';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-presentateurs',
  templateUrl: './presentateurs.component.html',
  styleUrls: ['./presentateurs.component.scss'],
})
export class PresentateursComponent implements OnInit {


  presentateur!: Presentateur;

  id!: number;
  constructor(private presentateursService: PresentateursService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(queryId => {
      this.id = queryId['id'];

  

    this.presentateursService.findAll().subscribe(data => {
      if (data.hasOwnProperty(this.id)) {
        this.presentateur = data[this.id];
      } else {
        console.error('error not found')
      }
    })

  });

  }


}