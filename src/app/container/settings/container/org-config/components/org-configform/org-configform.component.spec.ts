import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgConfigformComponent } from './org-configform.component';

describe('OrgConfigformComponent', () => {
  let component: OrgConfigformComponent;
  let fixture: ComponentFixture<OrgConfigformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgConfigformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgConfigformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
