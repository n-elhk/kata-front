import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsComponent } from './tools.component';

describe('ToolsComponent', () => {
  let component: ToolsComponent, fixture: ComponentFixture<ToolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToolsComponent],
    });
    fixture = TestBed.createComponent(ToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should round', () => {
    expect(component.round(10.567)).toBe(10.57);
    expect(component.round(10.563)).toBe(10.57);
    expect(component.round(10.543)).toBe(10.55);
    expect(component.round(10.55)).toBe(10.55);
    expect(component.round(10.54)).toBe(10.54);
  });
});
