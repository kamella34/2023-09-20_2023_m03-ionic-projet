import { Component, OnInit } from '@angular/core';
import { PresentateursService } from 'src/app/components/shared/services/presentateurs.service';
import { Presentateur } from '../../shared/models/presentateursModel';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-liste-presentateurs',
  templateUrl: './liste-presentateurs.component.html',
  styleUrls: ['./liste-presentateurs.component.scss'],
})
export class ListePresentateursComponent implements OnInit {
 
  presentateurs: Presentateur[] = [];

  constructor(private presentateursService: PresentateursService,private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.presentateursService.findAllPresentateur().subscribe((data) => {
      console.log(data)
      this.presentateurs = Object.values(data);
   })

 
 
   }
}