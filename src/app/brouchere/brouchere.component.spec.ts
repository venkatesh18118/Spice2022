import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrouchereComponent } from './brouchere.component';

describe('BrouchereComponent', () => {
  let component: BrouchereComponent;
  let fixture: ComponentFixture<BrouchereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrouchereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrouchereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
