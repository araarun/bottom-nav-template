import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ForgetpwdComponent } from './forgetpwd.component';

describe('ForgetpwdComponent', () => {
  let component: ForgetpwdComponent;
  let fixture: ComponentFixture<ForgetpwdComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetpwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetpwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
