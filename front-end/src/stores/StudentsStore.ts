import API from '../util/ApiUtil';
import { Student } from '../app/students/students.component';

export class StudentsStore {
  public status = 'FETCHING';
  public loginData: any = {};

  public students: Student[] = [];
  public student: Student[] = [];

  public constructor() {
    this.fetchUserStudents();
  }
  public fetchUserStudents = async () => {
    try {
      const response = await API.get('/students');
      this.students = response.data.students;
      console.log(this.students);
      this.status = 'FETCHED';
      return true;
    } catch (e) {
      console.error(e);
      this.status = 'ERROR';
      return false;
    }
  };

  public addStudent = async (
    firstName: string,
    lastName: string,
    email: string,
    phone: string
  ) => {
    try {
      const response = await API.post('/students', {
        firstName,
        lastName,
        email,
        phone
      });
      this.students.push(response.data.student);
      //console.log(this.student);
      this.status = 'FETCHED';
      return true;
    } catch (e) {
      console.error(e);
      this.status = 'ERROR';
      return false;
    }
  };
  public fetchStudentById = async (id: number) => {
    try {
      const response = await API.get('/students/:', { params: { id } });
      this.student = response.data.student;
      console.log(this.students);
    } catch (e) {
      console.error(e);
    }
  };
}
