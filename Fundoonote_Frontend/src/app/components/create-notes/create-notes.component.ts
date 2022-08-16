import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/app/services/notes/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {
  createNoteForm!: FormGroup;
  submitted = false;
  notecard: boolean=false;
  color!:string;
  
  constructor(private formBuilder: FormBuilder, private note: NoteService, private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.createNoteForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      bgcolor: 'Red',
  });
  }

   // convenience getter for easy access to form fields
   get f() { return this.createNoteForm.controls; }

   onSubmit() {
       this.submitted = true;

       // stop here if form is invalid
       if (this.createNoteForm.invalid) {
           return;
       }
       console.log(this.createNoteForm.value);
       let reqdata={
         Title: this.createNoteForm.value.title,
         Description: this.createNoteForm.value.description,
         Bgcolor: this.createNoteForm.value.bgcolor,
       }

       this.note.createNote(reqdata).subscribe((response:any)=>{
         console.log(response);        
       })

       this.snackbar.open("Note created Successfully","",{
        duration:2000,
      });
   }

   onReset() {
    this.submitted = false;
    this.createNoteForm.reset();
}

  openNoteCard(): void{
    this.notecard=true;
  }

  closecard():void{
    this.notecard=false;
  }

  onColorselect(color:string)
  {
    this.color=color;
  }
}
