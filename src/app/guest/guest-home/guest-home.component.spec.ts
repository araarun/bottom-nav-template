import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GuestHomeComponent } from './guest-home.component';

describe('GuestHomeComponent', () => {
  let component: GuestHomeComponent;
  let fixture: ComponentFixture<GuestHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
