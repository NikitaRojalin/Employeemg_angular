import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrchempComponent } from './srchemp.component';

describe('SrchempComponent', () => {
  let component: SrchempComponent;
  let fixture: ComponentFixture<SrchempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrchempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SrchempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
