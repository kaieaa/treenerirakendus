import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RootStore } from '../../stores/RootStore';
import { TrainingStore } from '../../stores/TrainingStore';

export interface Training {
  ID: number;
  startTime: string;
  endTime: string;
  date: string;
  comment: string;
}

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {

  public trainings: Training[] = [];
  public training: Training[] = [];
  //public user: any;

  trainingForm: FormGroup;
  loading = false;
  submitted = false;
  error = false;
  public trainingStore: TrainingStore;

  constructor(
    rootStore: RootStore,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.trainingStore = rootStore.trainingStore;
    this.trainingForm = this.formBuilder.group({
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      date: ['', Validators.required],
      comment: ['']
    });
  }

  public data: any;

  async ngOnInit(): Promise<void> {}

  get f(): { [key: string]: AbstractControl } {
    return this.trainingForm.controls;
  }

  async onSubmit(): Promise<void> {
    this.submitted = true;

    if (this.trainingForm.invalid) {
      return;
    }

    this.error = false;
    this.loading = true;

    this.trainingStore
      .addTraining(
        this.f.startTime.value,
        this.f.lastName.value,
        this.f.endTime.value,
        this.f.comment.value
      )
      .then((success) => {
        this.loading = false;
        if (success) {
          this.trainingForm.clearValidators;
          this.router.navigateByUrl('/trainings');
        } else {
          this.error = true;
          setTimeout(() => {
            this.error = false;
          }, 5000);
        }
      });
  }

  public deleteButton = async (id: number ) => {
    this.trainingStore.deleteTraining(id);
    console.log(id);
  }

public readButton = async (id: number ) => {
  this.trainingStore.fetchTrainingById(id);
  console.log(id);
}
}
