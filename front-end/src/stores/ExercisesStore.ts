import API from '../util/ApiUtil';
import { LoginStore } from './LoginStore';
import { RootStore } from './RootStore';

export class ExercisesStore {

  public status = 'FETCHING';
  public loginData: any = {};
  public user: any;

  private loginStore: LoginStore;

  public constructor(rootStore: RootStore) {
     this.loginStore = rootStore.loginStore
     this.user = this.loginStore.user.id;
  };

  public exercises = async (name: string) => { //Ajutine, ei tööta.
    try {
      const response = await API.post('/login', {name});
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
  public addExecise = async (userId: number, desc: string, defaultSeries: string, defaultReps: string, defaultRepsType: string, defaultEquip: string, defaultWeight: string, video1: string, video2: string, comment: string) => {
    try {
      userId = this.user;
      const response = await API.post('/exercises', {desc, defaultSeries, defaultReps, defaultRepsType, defaultEquip, defaultWeight, video1, video2, comment});
      this.status = 'FETCHED';
      return true;
    } catch (e) {
      console.error(e);
      this.user = null;
      this.status = 'ERROR';
      return false;
    }
  }
public readExecises = async (name: string, desc: string) => {
  try {
    const response = await API.get('/exercises', {params: {name, desc}});
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
};
