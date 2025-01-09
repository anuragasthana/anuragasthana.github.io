import { AfterViewInit, Component, signal } from '@angular/core';
import { WelcomeComponent } from '../base-comps/welcome/welcome.component';
import { HomeComponent } from '../base-comps/home/home.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-base',
  imports: [WelcomeComponent, HomeComponent, NgIf],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent implements AfterViewInit {
  welcomeComplete = signal(false);

  ngAfterViewInit() {
    // Switch to home component after welcome sequence
      setTimeout(() => {
        this.welcomeComplete.set(true);
      }, 4000); // Same timing as when welcome is removed
  }
}
