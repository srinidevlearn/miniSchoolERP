import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenureformComponent } from './tenureform.component';

describe('TenureformComponent', () => {
  let component: TenureformComponent;
  let fixture: ComponentFixture<TenureformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenureformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenureformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
