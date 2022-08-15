import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var main:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
    new main()
  }
  goto(url:any){
    this.route.navigate([url])
  }

}
