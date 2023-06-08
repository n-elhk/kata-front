import {
  Component,
  computed,
  forwardRef,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { CdkStepperModule } from '@angular/cdk/stepper';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { startWith } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import { CivilityPipe } from 'src/app/common/pipes/civility.pipe';
import { StepperComponent } from 'src/app/components/stepper/stepper.component';
import { ToggleComponent } from 'src/app/components/toggle/toggle.component';

const DEFAULT_NBR_VALUE = Infinity;

@Component({
  selector: 'kt-tools',
  standalone: true,
  imports: [
    CommonModule,
    CdkStepperModule,
    ReactiveFormsModule,
    CivilityPipe,
    ToggleComponent,
    RouterOutlet,
    forwardRef(() => StepperComponent),
  ],
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolsComponent {
  /** Injection of {@link FormBuilder}. */
  private builder = inject(FormBuilder);

  /** Form contact for the step 1. */
  public formContact = this.builder.group({
    civilityCtrl: new FormControl<'MR' | 'MME' | ''>('', {
      nonNullable: true,
      validators: Validators.compose([Validators.required]),
    }),
    lastnameCtrl: new FormControl('', {
      nonNullable: true,
      validators: Validators.compose([Validators.required]),
    }),
    firstnameCtrl: new FormControl('', {
      nonNullable: true,
      validators: Validators.compose([Validators.required]),
    }),
    emailCtrl: new FormControl('', {
      nonNullable: true,
      validators: Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ]),
    }),
    phoneCtrl: new FormControl('', {
      nonNullable: true,
      validators: Validators.compose([
        Validators.required,
        Validators.pattern('^(0|\\+33|0033)[1-9](\\d{2}){4}$'),
      ]),
    }),
  });

  /** Form contact for the step 2. */
  public configForm = this.builder.group({
    ownerCtrl: new FormControl(true, {
      nonNullable: true,
      validators: Validators.compose([Validators.required]),
    }),

    peopleCountCtrl: new FormControl(DEFAULT_NBR_VALUE, {
      nonNullable: true,
      validators: Validators.compose([Validators.min(1)]),
    }),

    incomeCtrl: new FormControl(DEFAULT_NBR_VALUE, {
      nonNullable: true,
      validators: Validators.compose([
        Validators.required,
        Validators.min(10_000),
        Validators.max(100_000),
      ]),
    }),

    areaCtrl: new FormControl(DEFAULT_NBR_VALUE, {
      nonNullable: true,
      validators: Validators.compose([Validators.required, Validators.min(1)]),
    }),
  });

  /** area signal for the calcule.  */
  private area = toSignal(
    this.configForm.controls.areaCtrl.valueChanges.pipe(
      startWith(this.configForm.controls.areaCtrl.value)
    ),
    { initialValue: DEFAULT_NBR_VALUE }
  );

  /** income signal for the calcule.  */
  private income = toSignal(
    this.configForm.controls.incomeCtrl.valueChanges.pipe(
      startWith(this.configForm.controls.incomeCtrl.value)
    ),
    { initialValue: DEFAULT_NBR_VALUE }
  );

  /** peopleCount signal for the calcule.  */
  private peopleCount = toSignal(
    this.configForm.controls.peopleCountCtrl.valueChanges.pipe(
      startWith(this.configForm.controls.peopleCountCtrl.value)
    ),
    { initialValue: DEFAULT_NBR_VALUE }
  );

  /** projectCost signal for the calcule.  */
  private projectCost = computed(() => this.area() * 80);

  /** effyHelpCount display the result in the template.  */
  public effyHelpCount = computed(() =>
    this.round(this.computeEffyCountHelp())
  );

  private computeEffyCountHelp(): number {
    return (
      this.projectCost() * 0.75 - (this.income() / this.peopleCount()) * 0.15
    );
  }

  /**
   * 
   * @param toRound toRound.
   * @param pad number of digit after ','.
   * @returns number.
   */
  public round(toRound: number, pad = 100): number {
    return Math.ceil(toRound * pad) / pad;
  }
}
