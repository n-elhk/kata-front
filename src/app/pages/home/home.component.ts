import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'mb-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  public title = 'Kata';
}
