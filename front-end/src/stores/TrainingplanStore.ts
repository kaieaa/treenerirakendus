import API from '../util/ApiUtil';
import { Trainingplan } from '../app/trainingplans/trainingplans.component';

export class TrainingplanStore {
  public status = 'FETCHING';
  public loginData: any = {};

  public trainingplans: Trainingplan[] = [];
  public oneTrainingplan: Trainingplan[] = [];

  public constructor() {
    this.fetchUserTrainingplans();
  }
  public fetchUserTrainingplans = async () => {
    try {
      const response = await API.get('/trainingplans');
      this.trainingplans = response.data.trainingplans;
      console.log(this.trainingplans);
      this.status = 'FETCHED';
      return true;
    } catch (e) {
      console.error(e);
      this.status = 'ERROR';
      return false;
    }
  };

  public addTrainingplan = async (
    student_ID: number,
    name: string,
    date: string,
    comment: string
  ) => {
    try {
      const response = await API.post('/trainingplans', {
        student_ID,
        name,
        date,
        comment
      });
      this.trainingplans.push(response.data.trainingplan);
      //console.log(this.student);
      this.status = 'FETCHED';
      return true;
    } catch (e) {
      console.error(e);
      this.status = 'ERROR';
      return false;
    }
  };
  public fetchTrainingplanById = async (id: number) => {
    try {
      this.oneTrainingplan = [];
      const response = await API.get('/trainingplans/'+id)//, { params: { id } });
      this.oneTrainingplan.push(response.data.trainingplan);
      //this.students2 = response.data.student;
      console.log(this.oneTrainingplan);
    } catch (e) {
      console.error(e);
    }
  };

  public deleteTrainingplan = async (
    id: number
  ) => {
    try {
      console.log(id);
      const response = await API.delete('/trainingplans/'+id)//, {params: { id }});
      //this.students.splice(this.students.indexOf(response.data.student), 1);
      this.trainingplans = this.trainingplans.filter((trainingplan) => trainingplan.ID !== id);
      this.status = 'FETCHED';
      return true;
    } catch (e) {
      console.error(e);
      this.status = 'ERROR';
      return false;
    }
  };
}

