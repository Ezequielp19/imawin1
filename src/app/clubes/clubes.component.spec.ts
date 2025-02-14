/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClubesComponent } from './clubes.component';

describe('ClubesComponent', () => {
  let component: ClubesComponent;
  let fixture: ComponentFixture<ClubesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
