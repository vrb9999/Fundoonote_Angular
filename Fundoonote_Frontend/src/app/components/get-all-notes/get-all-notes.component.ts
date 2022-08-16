import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/notes/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  notesArray: any;
  
  message: any;
  public subscription: any;
  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }

  getAllNotes(){
    this.note.getAllNotesService().subscribe((request:any) => {
      console.log("request data ",request);
      this.notesArray = request.data;
      console.log("noteArray",this.notesArray);
       this.notesArray.reverse();
      console.log(this.notesArray.reverse());
      return this.notesArray;
    })
  }

}
