import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenureListComponent } from './tenure-list.component';

describe('TenureListComponent', () => {
  let component: TenureListComponent;
  let fixture: ComponentFixture<TenureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenureListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
