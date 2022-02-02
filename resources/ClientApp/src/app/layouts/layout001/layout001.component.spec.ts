import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Layout001Component } from './layout001.component';

describe('Layout001Component', () => {
  let component: Layout001Component;
  let fixture: ComponentFixture<Layout001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Layout001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Layout001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
