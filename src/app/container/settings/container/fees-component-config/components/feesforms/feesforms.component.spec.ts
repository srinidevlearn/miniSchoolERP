import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesformsComponent } from './feesforms.component';

describe('FeesformsComponent', () => {
  let component: FeesformsComponent;
  let fixture: ComponentFixture<FeesformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeesformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
