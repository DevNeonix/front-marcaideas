import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  goMiPerfil() {
    const user = JSON.parse(localStorage.getItem("user"));
    this.router.navigate(['dashboard/users/' + user.id]);
  }
}
