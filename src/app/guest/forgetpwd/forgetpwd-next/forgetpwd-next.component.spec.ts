import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetpwdNextComponent } from './forgetpwd-next.component';

describe('ForgetpwdNextComponent', () => {
  let component: ForgetpwdNextComponent;
  let fixture: ComponentFixture<ForgetpwdNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetpwdNextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetpwdNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
