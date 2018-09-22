import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'Welcome in SBIRSC Ver 1.0';

  varTime = new Observable(observer => {
    setInterval( () => {
      observer.next(new Date().toString() );
    } , 1000);
  });

  filterBoats(){
    console.log("Boats!")
  }

  constructor() { }

  ngOnInit() {
  }

}
