import { BreakpointObserver } from '@angular/cdk/layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, ViewChild, ElementRef, HostBinding, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {
  panelOpenState = false;
  toggleControl = new FormControl(false);

  nav_position: string = 'end';

  @HostBinding('class') className = 'body';

  private darkThemeIcon = 'wb_sunny';
  private lightThemeIcon = 'nightlight_round';
  public lightDarkToggleIcon = this.darkThemeIcon;
  @Output() darkThemeOn: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private overlay: OverlayContainer, private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    });
  }

  public doToggleLightDark(toggle: MatSlideToggle) {
    this.lightDarkToggleIcon = toggle.checked ? this.darkThemeIcon : this.lightThemeIcon;
  }

}


