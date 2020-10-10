import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotesComponent } from './notes/notes.component';
import { MatCardModule } from '@angular/material/card';
import { NoteComponent } from './note/note.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIcon, MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    DragDropModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
