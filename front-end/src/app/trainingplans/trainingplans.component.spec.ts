import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingplansComponent } from './trainingplans.component';

describe('TrainingplansComponent', () => {
  let component: TrainingplansComponent;
  let fixture: ComponentFixture<TrainingplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingplansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
