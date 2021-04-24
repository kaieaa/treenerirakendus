import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingplanExercisesComponent } from './trainingplan-exercises.component';

describe('TrainingplanExercisesComponent', () => {
  let component: TrainingplanExercisesComponent;
  let fixture: ComponentFixture<TrainingplanExercisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingplanExercisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingplanExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
