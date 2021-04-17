import { Component, OnInit } from '@angular/core';
import { LoginStore } from '../../stores/LoginStore';
import { RootStore } from '../../stores/RootStore';

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

  public loginStore: LoginStore;


  constructor(rootStore: RootStore) {
    this.loginStore = rootStore.loginStore;
  }

  public headerElements: NavElement[] = [
    {url: '/login', name: 'Login'}, {url: '/leht', name: 'Testimiseks'}, {url: '/students', name: 'Õpilased'}, {url: '/exercises', name: 'Harjutused'}
  ];

  ngOnInit(): void {
  }

  public logOutButton = async () => {
    this.loginStore.logOut();
  }
}
