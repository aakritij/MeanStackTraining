import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcompComponent } from './testcomp.component';

describe('TestcompComponent', () => {
  let component: TestcompComponent;
  let fixture: ComponentFixture<TestcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component.title).toBe("Finastra");
  });

  it('should create', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect (compiled.querySelector('h1').textContent).toContain("Finastra");
  }); 
});
