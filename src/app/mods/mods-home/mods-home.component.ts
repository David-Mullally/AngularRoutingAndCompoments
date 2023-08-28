import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  showModal: boolean = false;
  items:any = [
    {title: 'Why did the chicken cross the road?', content: 'To get to the other side!'},
    {title: 'Whats green and turns red at the flick of a switch?', content: 'A frog in a liquidizer'},
    {title: 'Why didnt the ghost go to the party?', content: 'Cos her had no body to go with'},
  ]
  constructor() { };
  ngOnInit() { }
  onClick() {
    this.showModal = !this.showModal
    console.log(this.showModal)
  }
}
