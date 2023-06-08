import { ComponentFixture, TestBed } from '@angular/core/testing';
import {  RouterTestingModule} from '@angular/router/testing';

import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeComponent, RouterTestingModule]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('title should be Kata', () => {
    const titleElement = fixture.debugElement.query(By.css('.heading-1')).nativeElement as HTMLElement;
    expect(component.title).toBe('Kata');
    expect(titleElement.textContent).toBe('Kata');
  });
});
