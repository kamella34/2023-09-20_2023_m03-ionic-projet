import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@capacitor/clipboard';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {

  constructor() { }

  ngOnInit() {


  };

  public write() {
    Clipboard.write({
     
    }).then(function () {
      alert("Text copied to clipboard!");
    }).catch(function (error) {
      console.error("Error copying to clipboard:", error);
    });
  }

 public  check() {
    Clipboard.read().then(function ({ type, value }) {
      alert("Got " + type + " from clipboard: " + value);
    }).catch(function (error) {
      console.error("Error reading from clipboard:", error);
    });
  }

  
}



