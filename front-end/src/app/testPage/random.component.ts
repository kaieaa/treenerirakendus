import { Component } from '@angular/core';
import API from '../../util/ApiUtil';
import { TestingStore } from '../../stores/TestingStore';
import { RootStore } from '../../stores/RootStore';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

@Component({
  selector: 'app-content',
  templateUrl: './random.component.html',
})
export class RandomComponent {
  public users: User[] = [];

  public testingStore: TestingStore;

  constructor(rootStore: RootStore) {
    this.testingStore = rootStore.testingStore;
  }

  async ngOnInit(): Promise<void> {}

  /*public fetchData = async () => {
    try {
      const response = await API.get('/users');
      this.users = response.data.users;
    } catch (e) {
      console.error(e);
    }
  }*/
}
