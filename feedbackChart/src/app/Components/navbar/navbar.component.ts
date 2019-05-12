import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit() {
    // this.http.getDataUsingSubscribe();
    // this.http.getDataUsingPromise();
    // this.http.getAsyncData();
    // this.http.getConditionalDataUsingAsync();


  }

}
