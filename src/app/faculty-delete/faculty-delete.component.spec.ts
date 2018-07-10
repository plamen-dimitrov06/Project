import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyDeleteComponent } from './faculty-delete.component';

describe('FacultyDeleteComponent', () => {
  let component: FacultyDeleteComponent;
  let fixture: ComponentFixture<FacultyDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
