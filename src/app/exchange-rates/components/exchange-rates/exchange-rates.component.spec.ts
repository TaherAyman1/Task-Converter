import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExchangeRatesComponent } from './exchange-rates.component';

describe('ExchangeRatesComponent', () => {
  let component: ExchangeRatesComponent;
  let fixture: ComponentFixture<ExchangeRatesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ExchangeRatesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
