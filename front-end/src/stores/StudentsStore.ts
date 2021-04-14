import API from '../util/ApiUtil';

export class StudentsStore {

  public status = 'FETCHING';
  public loginData: any = {};
  public user: any;

  public students = async (firstName: string, lastName: string, email: string, phone: string) => {
    try {
      const response = await API.get('/students');
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
