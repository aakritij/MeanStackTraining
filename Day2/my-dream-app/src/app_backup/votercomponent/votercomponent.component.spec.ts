import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotercomponentComponent } from './votercomponent.component';

describe('VotercomponentComponent', () => {
  let component: VotercomponentComponent;
  let fixture: ComponentFixture<VotercomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotercomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
