import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExercisesStore } from '../../stores/ExercisesStore';
import { RootStore } from '../../stores/RootStore';

export interface Exercise {
  ID: number;
  name: string;
  desc: string;
  defaultSeries: number;
  defaultReps: number;
  defaultRepsType: string;
  defaultEquip: string;
  defaultWeight: number;
  video1: string;
  video2: string;
  comment: string;
  users_ID: number;
}
@Component({
  selector: 'app-content',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css'],
})
export class ExercisesComponent implements OnInit {
  public exercises: Exercise[] = [];

  exercisesForm: FormGroup;
  loading = false;
  submitted = false;
  error = false;
  public exercisesStore: ExercisesStore;

  constructor(
    rootStore: RootStore,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.exercisesStore = rootStore.exercisesStore;
    this.exercisesForm = this.formBuilder.group({
      name: ['', Validators.required],
      desc: ['', Validators.required],
      defaultSeries: ['', Validators.required],
      defaultReps: [Validators.required],
      defaultRepsType: ['', Validators.required],
      defaultEquip: ['', Validators.required],
      defaultWeight: ['', Validators.required],
      video1: ['', Validators.required],
      video2: [],
      comment: ['', Validators.required],
    });
  }

  public data: any;

  async ngOnInit(): Promise<void> {}

  get f(): { [key: string]: AbstractControl } {
    return this.exercisesForm.controls;
  }

  async onSubmit(): Promise<void> {
    this.submitted = true;

    if (this.exercisesForm.invalid) {
      return;
    }

    this.error = false;
    this.loading = true;

    this.exercisesStore
      .addExercise(
        this.f.name.value,
        this.f.desc.value,
        this.f.defaultSeries.value,
        this.f.defaultReps.value,
        this.f.defaultRepsType.value,
        this.f.defaultEquip.value,
        this.f.defaultWeight.value,
        this.f.video1.value,
        this.f.video2.value,
        this.f.comment.value
      )
      .then((success) => {
        this.loading = false;
        if (success) {
          this.exercisesForm.clearValidators;
          this.router.navigateByUrl('/exercises');
        } else {
          this.error = true;
          setTimeout(() => {
            this.error = false;
          }, 5000);
        }
      });
  }
  //public exercise: Exercise;

  public deleteButton = async (id: number ) => {
    this.exercisesStore.deleteExercise(id);
    console.log(id);
  }
}
