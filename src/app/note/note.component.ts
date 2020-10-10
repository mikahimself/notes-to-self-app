import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../notes/note';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input() note: Note;

  constructor() { }

  ngOnInit(): void {
  }

}
