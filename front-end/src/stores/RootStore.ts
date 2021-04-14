import { LoginStore } from './LoginStore';
import { RegisterStore } from './RegisterStore';
import { StudentsStore } from './StudentsStore';
import { ExercisesStore } from './ExercisesStore';

export class RootStore {
  public loginStore: LoginStore;
  public registerStore: RegisterStore;
  public studentsStore: StudentsStore;
  public exercisesStore: ExercisesStore;

  public constructor() {
    this.loginStore = new LoginStore();
    this.registerStore = new RegisterStore();
    this.studentsStore = new StudentsStore();
    this.exercisesStore = new ExercisesStore();
  }
}
