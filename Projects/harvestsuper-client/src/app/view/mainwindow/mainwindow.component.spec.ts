import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainwindowComponent } from './mainwindow.component';

describe('EmployeeComponent', () => {
  let component: MainwindowComponent;
  let fixture: ComponentFixture<MainwindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainwindowComponent]
    });
    fixture = TestBed.createComponent(MainwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
