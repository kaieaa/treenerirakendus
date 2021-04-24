import API from '../util/ApiUtil';
import { TrainingplanExercise } from '../app/trainingplan-exercises/trainingplan-exercises.component';

export class TrainingplanExercisesStore {
  public status = 'FETCHING';
  public loginData: any = {};

  public trainingplanExercises: TrainingplanExercise[] = [];
  public oneTrainingplanExercise: TrainingplanExercise[] = [];

  public constructor() {
    this.fetchtrainingplanExercises();
  }
  public fetchtrainingplanExercises = async () => {
    try {
      const response = await API.get('/trainingplanexercises');
      this.trainingplanExercises = response.data.trainingplanExercises;
      console.log(this.trainingplanExercises);
      this.status = 'FETCHED';
      return true;
    } catch (e) {
      console.error(e);
      this.status = 'ERROR';
      return false;
    }
  };

  public addTrainingplanExercises = async (
    trainingplan_ID: number,
    exercise_ID: number
  ) => {
    try {
      const response = await API.post('/trainingplanexercises', {
        trainingplan_ID,
        exercise_ID
      });
      this.trainingplanExercises.push(response.data.trainingplanExercise);
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
      this.oneTrainingplanExercise = [];
      const response = await API.get('/trainingplanexercises/'+id)//, { params: { id } });
      this.oneTrainingplanExercise.push(response.data.trainingplan);
      //this.students2 = response.data.student;
      console.log(this.oneTrainingplanExercise);
    } catch (e) {
      console.error(e);
    }
  };

  public deleteTrainingplanExercise = async (
    id: number
  ) => {
    try {
      console.log(id);
      const response = await API.delete('/trainingplanexercises/'+id)//, {params: { id }});
      //this.students.splice(this.students.indexOf(response.data.student), 1);
      this.trainingplanExercises = this.trainingplanExercises.filter((trainingplanExercise) => trainingplanExercise.ID !== id);
      this.status = 'FETCHED';
      return true;
    } catch (e) {
      console.error(e);
      this.status = 'ERROR';
      return false;
    }
  };
}
