import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptcompComponent } from './deptcomp.component';

describe('DeptcompComponent', () => {
  let component: DeptcompComponent;
  let fixture: ComponentFixture<DeptcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
