import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  HostBinding,
  QueryList,
} from '@angular/core';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { CdkStep, CdkStepper, CdkStepperModule } from '@angular/cdk/stepper';

@Component({
  selector: 'kt-stepper',
  providers: [{ provide: CdkStepper, useExisting: StepperComponent }],
  standalone: true,
  imports: [NgTemplateOutlet, CdkStepperModule, NgFor, NgIf],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperComponent extends CdkStepper {
  @ContentChildren(CdkStep, { descendants: true }) public cdkChildren:
    | QueryList<CdkStep>
    | undefined = undefined;

  /** add attribute value in css to change the cursor style. */
  @HostBinding('attr.step-not-valid') get notValidStepAttr() {
    const children = this.cdkChildren;
    if (!children) {
      return null;
    }

    const currentChild = children.toArray().at(this.selectedIndex);

    /** stepControl can be undefined. */
    if (!currentChild || !currentChild.stepControl) {
      return null;
    }

    return currentChild.stepControl.valid ? null : '';
  }

  public selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}
