import { Component, OnInit } from '@angular/core';

interface NavElement {
  url: string;
  name: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  public headerElements: NavElement[] = [
    {url: '/login', name: 'Login'}, {url: '/leht', name: 'Testimiseks'}, {url: '/students', name: 'Õpilased'}, {url: '/exercises', name: 'Harjutused'}
  ];

  ngOnInit(): void {
  }

}
