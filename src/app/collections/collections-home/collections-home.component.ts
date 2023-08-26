import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent {
  data:any = [
    { name: 'Dengo', age: 40, job: 'Full Stack Web Developer', employed: true },
    { name: 'Doodles', age: 30, job: 'Software Tester', employed: true},
    { name: 'Aoife', age: 1, job: 'Baby', employed: false},
  ];
  headers: any = [
    { key: 'employed', label: 'Employed' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];
}
