import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RandomComponent } from './testPage/random.component';
import { RootStore } from '../stores/RootStore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { StudentsComponent } from './students/students.component';
import { RegisterComponent } from './register/register.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { TrainingplansComponent } from './trainingplans/trainingplans.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    RandomComponent,
    HeaderComponent,
    ExercisesComponent,
    StudentsComponent,
    RegisterComponent,
    TrainingsComponent,
    TrainingplansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RootStore],
  bootstrap: [AppComponent]
})
export class AppModule { }


