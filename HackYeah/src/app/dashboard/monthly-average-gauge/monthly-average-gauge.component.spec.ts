import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyAverageGaugeComponent } from './monthly-average-gauge.component';

describe('MonthlyAverageGaugeComponent', () => {
  let component: MonthlyAverageGaugeComponent;
  let fixture: ComponentFixture<MonthlyAverageGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyAverageGaugeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyAverageGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
