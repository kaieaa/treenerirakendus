import API from '../util/ApiUtil';
import { Training } from '../app/trainings/trainings.component';

export class TrainingStore {
  public status = 'FETCHING';
  public loginData: any = {};

  public trainings: Training[] = [];
  public oneTraining: Training[] = [];

  public constructor() {
    this.fetchUserTrainings();
  }
  public fetchUserTrainings = async () => {
    try {
      const response = await API.get('/trainings');
      this.trainings = response.data.trainings;
      console.log(this.trainings);
      this.status = 'FETCHED';
      return true;
    } catch (e) {
      console.error(e);
      this.status = 'ERROR';
      return false;
    }
  };

  public addTraining = async (
    startTime: string,
    endTime: string,
    date: string,
    comment: string
  ) => {
    try {
      const response = await API.post('/students', {
        startTime,
        endTime,
        date,
        comment
      });
      this.trainings.push(response.data.training);
      //console.log(this.student);
      this.status = 'FETCHED';
      return true;
    } catch (e) {
      console.error(e);
      this.status = 'ERROR';
      return false;
    }
  };
  public fetchTrainingById = async (id: number) => {
    try {
      this.oneTraining = [];
      const response = await API.get('/trainings/'+id)//, { params: { id } });
      this.oneTraining.push(response.data.training);
      //this.students2 = response.data.student;
      console.log(this.oneTraining);
    } catch (e) {
      console.error(e);
    }
  };

  public deleteTraining = async (
    id: number
  ) => {
    try {
      console.log(id);
      const response = await API.delete('/trainings/'+id)//, {params: { id }});
      //this.students.splice(this.students.indexOf(response.data.student), 1);
      this.trainings = this.trainings.filter((training) => training.ID !== id);
      this.status = 'FETCHED';
      return true;
    } catch (e) {
      console.error(e);
      this.status = 'ERROR';
      return false;
    }
  };
}
