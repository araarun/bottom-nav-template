import { Component, ViewChild, ElementRef, HostBinding, EventEmitter, Output } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {
  panelOpenState = false;
  @ViewChild('drawer') drawer: any;
  public selectedItem: string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));
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

  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }

  public doToggleLightDark(toggle: MatSlideToggle) {
    this.lightDarkToggleIcon = toggle.checked ? this.darkThemeIcon : this.lightThemeIcon;
  }

}


