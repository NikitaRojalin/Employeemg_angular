import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateempComponent } from './createemp.component';

describe('CreateempComponent', () => {
  let component: CreateempComponent;
  let fixture: ComponentFixture<CreateempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
