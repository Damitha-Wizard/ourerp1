import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorSettingsPageComponent } from './color-settings-page.component';

describe('ColorSettingsPageComponent', () => {
  let component: ColorSettingsPageComponent;
  let fixture: ComponentFixture<ColorSettingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorSettingsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorSettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
