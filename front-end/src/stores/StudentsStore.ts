import API from '../util/ApiUtil';
import { Student } from '../app/students/students.component';
import { LoginStore } from '../stores/LoginStore';
import { RootStore } from './RootStore';

export class StudentsStore {
  public status = 'FETCHING';
  public loginData: any = {};
  public userId: any;

  public students: Student[] = [];

  public constructor() {
    console.log(this.userId);
    this.fetchAllStudents(this.userId);
  }
  public fetchAllStudents = async (userId: number) => {
    try {
      const response = await API.get('/students', { params: { userId } });
      this.students = response.data.students;
      console.log(this.students);
    } catch (e) {
      console.error(e);
    }
  };

  public addStudent = async (
    firstName: string,
    lastName: string,
    email: string,
    phone: string
  ) => {
    try {
      const response = await API.get('/students');
      this.students = response.data.students;
      this.status = 'FETCHED';
      return true;
    } catch (e) {
      console.error(e);
      //this.students = null;
      this.status = 'ERROR';
      return false;
    }
  };
}
