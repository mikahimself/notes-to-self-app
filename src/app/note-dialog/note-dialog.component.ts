import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Note } from '../notes/note';

@Component({
  selector: 'app-note-dialog',
  templateUrl: './note-dialog.component.html',
  styleUrls: ['./note-dialog.component.scss']
})
export class NoteDialogComponent implements OnInit {

  note: Note;
  constructor(public dialogRef: MatDialogRef<NoteDialogComponent>, @Inject(MAT_DIALOG_DATA) public noteData: any) {}
  ngOnInit(): void {
    this.note = this.noteData.note;
  }

  onDialogClose() {
    this.dialogRef.close();
  }
}
