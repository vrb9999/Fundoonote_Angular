import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/notes/note.service';

@Component({
  selector: 'app-trash-notes',
  templateUrl: './trash-notes.component.html',
  styleUrls: ['./trash-notes.component.scss']
})
export class TrashNotesComponent implements OnInit {
  trashNotes : any;
  @Input() NotesList : any;

  constructor(private note: NoteService) { }

  ngOnInit(): void {
    this.getAllTrashNotes();
  }

  getAllTrashNotes(){
    this.note.getTrashNotes().subscribe((request:any) =>{
      console.log("request data ",request);
      this.trashNotes = request.data;
      console.log(this.trashNotes);
       this.trashNotes.reverse();
      console.log(this.trashNotes.reverse());
      return this.trashNotes;
    })
  }



}
