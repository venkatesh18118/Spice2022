import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpDatesComponent } from './imp-dates.component';

describe('ImpDatesComponent', () => {
  let component: ImpDatesComponent;
  let fixture: ComponentFixture<ImpDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
