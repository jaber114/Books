import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  name1: String = 'Jaber rammal';
  email1: String = 'srks662@gmail.com';
  id: number = 316050988;
  name2: String = 'rosol mulla';
  id1: number = 207724659;
  email2: String = 'rosolmulla99@gmail.com';

  constructor() {}

  ngOnInit(): void {}
}
