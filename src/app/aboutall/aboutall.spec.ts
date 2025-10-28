import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutall } from './aboutall';

describe('Aboutall', () => {
  let component: Aboutall;
  let fixture: ComponentFixture<Aboutall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aboutall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aboutall);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
