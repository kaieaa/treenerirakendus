import API from '../util/ApiUtil';

export class LoginStore {

  public status = 'FETCHING';
  public user: any;

 public constructor() {
    this.fetchSession();
    }
    private fetchSession = async () => {
    try {
      const response = await API.get('/session');
      this.user = response.data;
    } catch (e) {
      this.user = null;
      //window.location.assign('/login');
      }
    }

  public login = async (email: string, password: string) => {
    try {
      const response = await API.post('/login', {email, password});
      this.user = response.data.user;
      this.status = 'FETCHED';
      return true;
    } catch (e) {
      console.error(e);
      this.user = null;
      this.status = 'ERROR';
      return false;
    }
  }
}