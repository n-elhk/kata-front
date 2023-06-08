import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import type { FormControl } from '@angular/forms';

@Component({
  selector: 'kt-toggle',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleComponent {
  @Input() public label = '';

  @Input({ required: true }) public control!: FormControl<boolean>;
}
