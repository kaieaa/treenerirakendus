import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomComponent } from './testPage/random.component';
import { TestComponent } from './test/test.component';
import { RegisterComponent } from './register/register.component';
import { StudentsComponent } from './students/students.component';
import { ExercisesComponent } from './exercises/exercises.component';

const routes: Routes = [
  {path: 'login', component: TestComponent},
  {path: 'leht', component: RandomComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'exercises', component: ExercisesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
