import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobMenuComponent } from './job-menu.component';

describe('JobMenuComponent', () => {
  let component: JobMenuComponent;
  let fixture: ComponentFixture<JobMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
