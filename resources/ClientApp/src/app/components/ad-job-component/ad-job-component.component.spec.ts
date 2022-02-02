import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdJobComponentComponent } from './ad-job-component.component';

describe('AdJobComponentComponent', () => {
  let component: AdJobComponentComponent;
  let fixture: ComponentFixture<AdJobComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdJobComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdJobComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
