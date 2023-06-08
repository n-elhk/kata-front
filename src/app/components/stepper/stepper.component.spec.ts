import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperComponent } from './stepper.component';
import { CommonModule } from '@angular/common';
import { CdkStepperModule } from '@angular/cdk/stepper';

describe('StepperComponent', () => {
  let component: StepperComponent;
  let fixture: ComponentFixture<StepperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StepperComponent, CommonModule, CdkStepperModule]
    });
    fixture = TestBed.createComponent(StepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
