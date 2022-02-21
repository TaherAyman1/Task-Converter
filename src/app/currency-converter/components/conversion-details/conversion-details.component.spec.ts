import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConversionDetailsComponent } from './conversion-details.component';

describe('ConversionDetailsComponent', () => {
  let component: ConversionDetailsComponent;
  let fixture: ComponentFixture<ConversionDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ConversionDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
