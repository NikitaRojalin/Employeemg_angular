import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpdetComponent } from './empdet.component';

describe('EmpdetComponent', () => {
  let component: EmpdetComponent;
  let fixture: ComponentFixture<EmpdetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpdetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
