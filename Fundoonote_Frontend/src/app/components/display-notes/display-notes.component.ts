import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CreateNotesComponent } from '../create-notes/create-notes.component';
import { EditNotesComponent } from '../edit-notes/edit-notes.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  @Input() NotesList: any;
  notecard: boolean = false;


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(EditNotesComponent);
  }

  closecard():void{
    this.notecard=false;
  }
}
