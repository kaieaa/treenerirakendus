import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RootStore } from '../../stores/RootStore';
import { TrainingplanStore } from '../../stores/TrainingplanStore';
import { StudentsStore } from '../../stores/StudentsStore';
import { Student } from '../students/students.component';


export interface Trainingplan {
  ID: number;
  student_ID: string;
  name: string;
  date: string;
  comment: string;
}

@Component({
  selector: 'app-trainingplans',
  templateUrl: './trainingplans.component.html',
  styleUrls: ['./trainingplans.component.css']
})
export class TrainingplansComponent implements OnInit {

  public trainingplans: Trainingplan[] = [];
  public students: Student[] = [];
  public trainingplan: Trainingplan[] = [];
  //public user: any;

  trainingplanForm: FormGroup;
  loading = false;
  submitted = false;
  error = false;
  public trainingplanStore: TrainingplanStore;
  public studentsStore: StudentsStore;

  constructor(
    rootStore: RootStore,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.trainingplanStore = rootStore.trainingplanStore;
    this.studentsStore = rootStore.studentsStore;
    this.trainingplanForm = this.formBuilder.group({
      student_ID: ['', Validators.required],
      name: [''],
      date: [''],
      comment: ['']
    });
  }

  public data: any;

  async ngOnInit(): Promise<void> {}

  get f(): { [key: string]: AbstractControl } {
    return this.trainingplanForm.controls;
  }

  async onSubmit(): Promise<void> {
    this.submitted = true;

    if (this.trainingplanForm.invalid) {
      return;
    }

    this.error = false;
    this.loading = true;

    this.trainingplanStore
      .addTrainingplan(
        this.f.student_ID.value,
        this.f.name.value,
        this.f.date.value,
        this.f.comment.value
      )
      .then((success) => {
        this.loading = false;
        if (success) {
          this.trainingplanForm.clearValidators;
          this.router.navigateByUrl('/trainingplans');
        } else {
          this.error = true;
          setTimeout(() => {
            this.error = false;
          }, 5000);
        }
      });
  }

  public deleteButton = async (id: number ) => {
    this.trainingplanStore.deleteTrainingplan(id);
    console.log(id);
  }

public readButton = async (id: number ) => {
  this.trainingplanStore.fetchTrainingplanById(id);
  console.log(id);
}
}
