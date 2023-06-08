import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleComponent } from './toggle.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { runOnPushChangeDetection } from 'src/app/common/testing/testing';

describe('ToggleComponent', () => {
  let component: ToggleComponent, fixture: ComponentFixture<ToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToggleComponent, ReactiveFormsModule, CommonModule],
    });
    fixture = TestBed.createComponent(ToggleComponent);
    component = fixture.componentInstance;
    component.control = new FormControl<boolean>(true, { nonNullable: true });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display label', () => {
    component.label = 'test label';

    runOnPushChangeDetection(fixture);

    expect(fixture.debugElement.query(By.css('.label'))).toBeTruthy();
  });

  it('should not display label', () => {
    runOnPushChangeDetection(fixture);

    const element = fixture.debugElement.query(By.css('.label'));

    expect(element).toBeFalsy();
  });
});
