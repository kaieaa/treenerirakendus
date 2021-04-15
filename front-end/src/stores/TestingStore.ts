import API from '../util/ApiUtil';
import { User } from '../app/testPage/random.component';

export class TestingStore {
  public status = 'FETCHING';
  public userData: any = {};
  public testValues: any;

  public users: User[] = [];

  public constructor() {
    this.fetchData();
  }
  public fetchData = async () => {
    try {
      const response = await API.get('/users');
      this.users = response.data.users;
    } catch (e) {
      console.error(e);
    }
  };

  /*public testing = async (id: number, firstName: string, lastName: string, email: string) => {
    try {
      const response = await API.get('/users', {params: {id, firstName, lastName, email}});
      //this.user = response.data.user;
      this.testValues = response.data;
      console.log(response.data);
      const userData = this.testValues;
      console.log(this.testValues);
      //this.values = this.newValues;
      console.log(userData);
      this.status = 'FETCHED';
      return true;
    } catch (e) {
      console.error(e);
      //this.user = null;
      this.status = 'ERROR';
      return false;
    }
  }*/
}
