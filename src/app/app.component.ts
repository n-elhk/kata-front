import { Component, computed, forwardRef, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './components/stepper/stepper.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CivilityPipe } from './common/pipes/civility.pipe';
import { ToggleComponent } from './components/toggle/toggle.component';
import { startWith } from 'rxjs';
import { RouterOutlet } from '@angular/router';

const DEFAULT_NBR_VALUE = 1;

@Component({
  selector: 'kt-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule,
    StepperComponent,
    forwardRef(() => StepperComponent),
    CdkStepperModule,
    ReactiveFormsModule,
    CivilityPipe,
    ToggleComponent,
    RouterOutlet,
  ],
})
export class AppComponent {
  public title = ''
}
