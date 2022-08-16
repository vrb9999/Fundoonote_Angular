import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/notes/note.service';

@Component({
  selector: 'app-archive-notes',
  templateUrl: './archive-notes.component.html',
  styleUrls: ['./archive-notes.component.scss']
})
export class ArchiveNotesComponent implements OnInit {
  archiveNotes : any;
  isArchive = false;
  @Input() NotesList : any;

  constructor(private note: NoteService) { }

  ngOnInit(): void {
    this.getAllArchiveNotes();
  }

  getAllArchiveNotes(){
    this.note.getArchiveNotes().subscribe((request:any) =>{
      console.log("request data ",request);
      this.archiveNotes = request.data;
      console.log(this.archiveNotes);
       this.archiveNotes.reverse();
      console.log(this.archiveNotes.reverse());
      return this.archiveNotes;
    })
  }
}
