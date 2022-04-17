import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesdetailsComponent } from './feesdetails.component';

describe('FeesdetailsComponent', () => {
  let component: FeesdetailsComponent;
  let fixture: ComponentFixture<FeesdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeesdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
