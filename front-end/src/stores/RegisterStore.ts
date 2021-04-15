import API from '../util/ApiUtil';

export class RegisterStore {
  public status = 'FETCHING';
  public loginData: any = {};
  //public user: any;

  public register = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => {
    try {
      const response = await API.post('/users', {
        firstName,
        lastName,
        email,
        password,
      });
      //this.user = response.data.user;
      this.status = 'FETCHED';
      return true;
    } catch (e) {
      console.error(e);
      //this.user = null;
      this.status = 'ERROR';
      return false;
    }
  };
}
