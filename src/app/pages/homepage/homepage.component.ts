import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {

  formPlaceholder:string = "What's happening?"
  buttonText:string = "Tweet"

  constructor() {}

  ngOnInit(): void {}

  
}
