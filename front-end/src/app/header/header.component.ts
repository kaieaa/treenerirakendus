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
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public loginStore: LoginStore;

  constructor(rootStore: RootStore) {
    this.loginStore = rootStore.loginStore;
  }

  public headerElements: NavElement[] = [
    { url: '/login', name: 'Login' },
    { url: '/leht', name: 'Testimiseks' },
    { url: '/students', name: 'Õpilased' },
    { url: '/exercises', name: 'Harjutused' },
  ];

  ngOnInit(): void {}

  public logOutButton = async () => {
    document.cookie = 'trainerSessionCookie=; Max-Age=0; path=/; domain=' + location.host;
    this.loginStore.user = null;
    console.log('LoginStore fetchSession this.user: ' + this.loginStore.user);
    window.location.assign('/login');
  };
}
