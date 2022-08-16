import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selectedMenu:any='dashboard';
  isArchive: boolean=false;
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goTo(paramText:string){
    this.selectedMenu = paramText;
  }

  notes(){
    this.route.navigateByUrl('dashboard/notes');
  }

  trash() {
    this.route.navigateByUrl('dashboard/trash')
  }

  archive(){
    this.route.navigateByUrl('dashboard/archive')
  }
}
