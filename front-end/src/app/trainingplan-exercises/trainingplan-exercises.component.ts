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
import { Trainingplan } from '../trainingplans/trainingplans.component';
import { ExercisesStore } from '../../stores/ExercisesStore';
import { Exercise } from '../exercises/exercises.component';
import { TrainingplanExercisesStore } from '../../stores/TrainingplanExercisesStore';



export interface TrainingplanExercise {
  ID: number;
  trainingplan_ID: number;
  exercise_ID: number;
}

@Component({
  selector: 'app-trainingplans',
  templateUrl: './trainingplan-exercises.component.html',
  styleUrls: ['./trainingplan-exercises.component.css']
})
export class TrainingplanExercisesComponent implements OnInit {

  public trainingplans: Trainingplan[] = [];
  public trainingplan: Trainingplan[] = [];
  public exercises: Exercise[] = [];
  public trainingplanExercises: TrainingplanExercise[] = [];
  //public user: any;

  trainingplanForm: FormGroup;
  loading = false;
  submitted = false;
  error = false;
  public trainingplanStore: TrainingplanStore;
  public exercisesStore: ExercisesStore;
  public trainingplanExercisesStore: TrainingplanExercisesStore;

  constructor(
    rootStore: RootStore,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.trainingplanStore = rootStore.trainingplanStore;
    this.exercisesStore = rootStore.exercisesStore;
    this.trainingplanExercisesStore = rootStore.trainingplanExercisesStore;
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
