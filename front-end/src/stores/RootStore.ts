import { LoginStore } from './LoginStore';
import { RegisterStore } from './RegisterStore';
import { StudentsStore } from './StudentsStore';
import { ExercisesStore } from './ExercisesStore';
import { TestingStore } from './TestingStore';
import { TrainingStore } from './TrainingStore';
import { TrainingplanStore } from './TrainingplanStore';

export class RootStore {
  public loginStore: LoginStore;
  public registerStore: RegisterStore;
  public studentsStore: StudentsStore;
  public exercisesStore: ExercisesStore;
  public testingStore: TestingStore;
  public trainingStore: TrainingStore;
  public trainingplanStore: TrainingplanStore;

  public constructor() {
    this.loginStore = new LoginStore();
    this.registerStore = new RegisterStore();
    this.studentsStore = new StudentsStore();
    this.exercisesStore = new ExercisesStore();
    this.testingStore = new TestingStore();
    this.trainingStore = new TrainingStore();
    this.trainingplanStore = new TrainingplanStore();
  }
}
