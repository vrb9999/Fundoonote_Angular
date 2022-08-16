import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  token:any;

  constructor(private httpService: HttpService) { 
    this.token=localStorage.getItem('token');
    console.log(this.token);
  }

  createNote(reqdata: any)
  {
    console.log(reqdata);

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':"Bearer "+this.token
      })
    }

    return this.httpService.postService('/Note/AddNote',reqdata,true,header)
  }

  getAllNotesService(){

    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': "Bearer "+this.token
      })
    }
    return this.httpService.getService('/Note/GetAllNote', true, headers);
  }

  getArchiveNotes() {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpService.getService('/Note/GetAllArchiveNote', true, header);
  }

  getTrashNotes(){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.token
      })
    }
    return this.httpService.getService('/Note/GetAllTrashNote', true, header);
  }
}
