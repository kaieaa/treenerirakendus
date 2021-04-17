import API from '../util/ApiUtil';
import { Exercise } from '../app/exercises/exercises.component';
import { LoginStore } from './LoginStore';
import { RootStore } from './RootStore';

export class ExercisesStore {
  public status = 'FETCHING';
  public loginData: any = {};

  public exercises: Exercise[] = [];
  public exercise: Exercise[] = [];

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
    defaultSeries: string,
    defaultReps: string,
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
      console.log(this.exercise);
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
      const response = await API.get('/exercises/:', { params: { id } });
      this.exercise = response.data.exercise;
      console.log(this.exercises);
    } catch (e) {
      console.error(e);
    }
  };
}
