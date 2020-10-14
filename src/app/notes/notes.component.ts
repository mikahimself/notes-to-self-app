import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NOTES } from '../mock-notes';
import { Note } from './note';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CdkDragDrop, CdkDragEnter, CdkDropList, CdkDragStart, CdkDragEnd, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { NoteDialogComponent } from '../note-dialog/note-dialog.component';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    // DropListQuery not immediately available. 
    // Defer assignment to another another JVM turn
    // to avoid error message.
    setTimeout(() =>
      this.dropList = this.dropListQuery.toArray()
    )
  }

  @ViewChildren(CdkDropList) dropListQuery: QueryList<CdkDropList>;
  dropList: CdkDropList[];
  notes = NOTES;

  openNote(id: number) {
    const openNote = this.notes.filter(note => note.id === id)[0];
    this.dialog.open(NoteDialogComponent, { data: { note: openNote}})

  }

  entered(event: CdkDragEnter) {
    // event.container.data - Index of the item on which stuff gets dragged. Assigned through cdkDropListData.
    // event.item.data - Original index of the item that is being dragged. Assigned through cdkDragData.
    moveItemInArray(this.notes, event.item.data, event.container.data);
  }

  dragStarted(event: CdkDragStart, item: number) {
    const elem = document.getElementById('tile' + item);
    elem.classList.remove('shady')
  }

  dragEnded(event: CdkDragEnd, item: number) {
    const elem = document.getElementById('tile' + item);
    elem.classList.add('shady')
  }
}
