import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'civility',
  standalone: true,
  pure: true,
})
export class CivilityPipe implements PipeTransform {
  /**
   *
   * @param value civility code
   * @returns The translation.
   */
  public transform(value: 'MR' | 'MME' | ''): string {
    if (value === '') {
      return value;
    }

    return value === 'MR' ? 'Monsieur' : 'Madame';
  }
}
