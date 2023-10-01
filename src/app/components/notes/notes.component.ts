import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  note = "";
  viderLaNote = "";
  tabNote: string[] = [];
  storedNotes: string | null = null;

  constructor() {}

  ngOnInit() {

    this.storedNotes = localStorage.getItem('storedNotes');
    if (this.storedNotes) {
      this.tabNote = JSON.parse(this.storedNotes);
    }
  }

  addNote() {
    if (this.note.trim() !== "") {
      console.log("note", this.note);
      this.tabNote.push(this.note);
      localStorage.setItem('storedNotes', JSON.stringify(this.tabNote));
      this.note = this.viderLaNote;
    }
  }

  deleteNote(note: string) {
    this.tabNote = this.tabNote.filter(data => data !== note);
    localStorage.setItem('storedNotes', JSON.stringify(this.tabNote));
  }
}








