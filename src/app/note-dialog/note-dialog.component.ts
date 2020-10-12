import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from '../notes/note';

@Component({
  selector: 'app-note-dialog',
  templateUrl: './note-dialog.component.html',
  styleUrls: ['./note-dialog.component.scss']
})
export class NoteDialogComponent implements OnInit {

  note: Note;
  constructor(@Inject(MAT_DIALOG_DATA) public noteData: any) {}
  ngOnInit(): void {
    this.note = this.noteData.note;
  }
}
