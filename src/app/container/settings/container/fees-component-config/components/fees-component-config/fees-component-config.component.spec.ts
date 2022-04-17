import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesComponentConfigComponent } from './fees-component-config.component';

describe('FeesComponentConfigComponent', () => {
  let component: FeesComponentConfigComponent;
  let fixture: ComponentFixture<FeesComponentConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeesComponentConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesComponentConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
