import API from '../util/ApiUtil';
import { Exercise } from '../app/exercises/exercises.component';

export class ExercisesStore {
  public status = 'FETCHING';
  public loginData: any = {};

  public exercises: Exercise[] = [];
  public oneExercise: Exercise[] = [];

  public constructor() {
    this.fetchUserExercises();
  }

  public fetchUserExercises = async () => {
    try {
      const response = await API.get('/exercises');
      this.exercises = response.data.exercises;
      this.status = 'FETCHED';
      return true;
    } catch (e) {
      console.error(e);
      this.status = 'ERROR';
      return false;
    }
  };

  public addExercise = async (
    name: string,
    desc: string,
    defaultSeries: number,
    defaultReps: number,
    defaultRepsType: string,
    defaultEquip: string,
    defaultWeight: string,
    video1: string,
    video2: string,
    comment: string
  ) => {
    try {
      const response = await API.post('/exercises', {
        name,
        desc,
        defaultSeries,
        defaultReps,
        defaultRepsType,
        defaultEquip,
        defaultWeight,
        video1,
        video2,
        comment,
      });
      console.log(response.data.exercise);
      this.exercises.push(response.data.exercise);
      this.status = 'FETCHED';
      return true;
    } catch (e) {
      console.error(e);
      this.status = 'ERROR';
      return false;
    }
  };

  public fetchExerciseById = async (id: number) => {
    try {
      this.oneExercise = [];
      const response = await API.get('/exercises/'+id);
      this.oneExercise.push(response.data.exercise);
      //this.exercise = response.data.exercise;
      console.log(this.exercises);
    } catch (e) {
      console.error(e);
    }
  };

  public deleteExercise = async (
    id: number
  ) => {
    try {
      console.log(id);
      const response = await API.delete('/exercises/' +id);
      //this.replies.splice(this.replies.indexOf(reply), 1);
      //this.exercises.splice(response.data.exercise, 1);
      this.status = 'FETCHED';
      return true;
    } catch (e) {
      console.error(e);
      this.status = 'ERROR';
      return false;
    }
  };
}
