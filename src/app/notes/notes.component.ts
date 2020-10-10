import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NOTES } from '../mock-notes';
import { Note } from './note';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CdkDragDrop, CdkDragEnter, CdkDropList, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {

  constructor() { }

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

  entered(event: CdkDragEnter) {
    // event.container.data - Index of the item on which stuff gets dragged. Assigned through cdkDropListData.
    // event.item.data - Original index of the item that is being dragged. Assigned through cdkDragData.
    moveItemInArray(this.notes, event.item.data, event.container.data);
  }
}
