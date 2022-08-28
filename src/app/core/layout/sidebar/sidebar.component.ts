import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  public checkRouterLinkActive(linkName: string) {
    console.log(this.router.url)
    return this.router.url.includes(linkName)
  }
}
