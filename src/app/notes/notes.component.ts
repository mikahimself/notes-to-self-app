import { Component, OnInit } from '@angular/core';
import { NOTES } from '../mock-notes';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  notes = NOTES;

}
