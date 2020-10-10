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
    this.dropListQuery.changes.subscribe(() => {
      this.dropList = this.dropListQuery.toArray();
    })
    Promise.resolve().then(() => {
      this.dropList = this.dropListQuery.toArray();
    })
  }

  @ViewChildren(CdkDropList) dropListQuery: QueryList<CdkDropList>;
  dropList: CdkDropList[];
  notes = NOTES;

  entered(event: CdkDragEnter) {
    // Container.data - sen indeksi mihin raahataan
    // item.data - sen indeksi, joka raahataan
    console.log("container: " + event.container.data);
    console.log("item: " + event.item.data);
    moveItemInArray(this.notes, event.item.data, event.container.data);

  }
  entered2(event: CdkDragEnter) {
    // Container.data - sen indeksi mihin raahataan
    // item.data - sen indeksi, joka raahataan
    console.log("container: " + event.container.data);
    console.log("item: " + event.item.data);
    moveItemInArray(this.notes, event.item.data, event.container.data);

  }
  

  
}
