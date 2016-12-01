/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DriversGridComponent } from './drivers-grid.component';

describe('DriversGridComponent', () => {
  let component: DriversGridComponent;
  let fixture: ComponentFixture<DriversGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriversGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriversGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
