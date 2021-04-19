import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RootStore } from '../../stores/RootStore';
import { StudentsStore } from '../../stores/StudentsStore';

export interface Student {
  ID: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  users_ID: number;
}

@Component({
  selector: 'app-content',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  public students: Student[] = [];
  public student: Student[] = [];
  //public user: any;

  studentsForm: FormGroup;
  loading = false;
  submitted = false;
  error = false;
  public studentsStore: StudentsStore;

  constructor(
    rootStore: RootStore,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.studentsStore = rootStore.studentsStore;
    this.studentsForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  public data: any;

  async ngOnInit(): Promise<void> {}

  get f(): { [key: string]: AbstractControl } {
    return this.studentsForm.controls;
  }

  async onSubmit(): Promise<void> {
    this.submitted = true;

    if (this.studentsForm.invalid) {
      return;
    }

    this.error = false;
    this.loading = true;

    this.studentsStore
      .addStudent(
        this.f.firstName.value,
        this.f.lastName.value,
        this.f.email.value,
        this.f.phone.value
      )
      .then((success) => {
        this.loading = false;
        if (success) {
          this.studentsForm.clearValidators;
          this.router.navigateByUrl('/students');
        } else {
          this.error = true;
          setTimeout(() => {
            this.error = false;
          }, 5000);
        }
      });
  }

  public deleteButton = async (id: number ) => {
    this.studentsStore.deleteStudent(id);
    console.log(id);
  }

public readButton = async (id: number ) => {
  this.studentsStore.fetchStudentById(id);
  console.log(id);
}
}
