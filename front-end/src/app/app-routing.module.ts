import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomComponent } from './testPage/random.component';
import { TestComponent } from './test/test.component';
import { RegisterComponent } from './register/register.component';
import { StudentsComponent } from './students/students.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { TrainingplansComponent } from './trainingplans/trainingplans.component';
import { TrainingplanExercisesComponent } from './trainingplan-exercises/trainingplan-exercises.component';

const routes: Routes = [
  {path: '', component: TestComponent},
  {path: 'login', component: TestComponent},
  {path: 'home', component: RandomComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'exercises', component: ExercisesComponent},
  {path: 'trainings', component: TrainingsComponent},
  {path: 'trainingplans', component: TrainingplansComponent},
  {path: 'trainingplans/exercises', component: TrainingplanExercisesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
