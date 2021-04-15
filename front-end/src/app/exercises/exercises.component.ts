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

@Component({
  selector: 'app-content',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css'],
})
export class ExercisesComponent implements OnInit {
  exercisesForm: FormGroup;
  loading = false;
  submitted = false;
  error = false;
  private exercisesStore: ExercisesStore;

  constructor(
    rootStore: RootStore,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.exercisesStore = rootStore.exercisesStore;
    this.exercisesForm = this.formBuilder.group({
      name: ['', Validators.required],
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

    this.exercisesStore.exercises(this.f.name.value).then((success) => {
      if (success) {
        this.router.navigateByUrl('/exercises');
      } else {
        this.loading = false;
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 5000);
      }
    });
  }
}
