import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgConfigDetailsComponent } from './org-config-details.component';

describe('OrgConfigDetailsComponent', () => {
  let component: OrgConfigDetailsComponent;
  let fixture: ComponentFixture<OrgConfigDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgConfigDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgConfigDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
