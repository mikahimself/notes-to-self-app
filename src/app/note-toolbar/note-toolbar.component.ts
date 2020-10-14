import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'note-toolbar',
  templateUrl: './note-toolbar.component.html',
  styleUrls: ['./note-toolbar.component.scss']
})
export class NoteToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
