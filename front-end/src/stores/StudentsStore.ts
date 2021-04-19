import API from '../util/ApiUtil';
import { Student } from '../app/students/students.component';

export class StudentsStore {
  public status = 'FETCHING';
  public loginData: any = {};

  public students: Student[] = [];
  public oneStudent: Student[] = [];

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
      this.oneStudent = [];
      const response = await API.get('/students/'+id)//, { params: { id } });
      this.oneStudent.push(response.data.student);
      //this.students2 = response.data.student;
      console.log(this.oneStudent);
    } catch (e) {
      console.error(e);
    }
  };

  public deleteStudent = async (
    id: number
  ) => {
    try {
      console.log(id);
      const response = await API.delete('/students/'+id)//, {params: { id }});
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
