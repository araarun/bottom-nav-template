import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeaderWithMenuComponent } from './header-with-menu.component';

describe('HeaderWithMenuComponent', () => {
  let component: HeaderWithMenuComponent;
  let fixture: ComponentFixture<HeaderWithMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderWithMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderWithMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
