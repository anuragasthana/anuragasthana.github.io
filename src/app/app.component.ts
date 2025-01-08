import { AfterViewInit, Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WelcomeComponent, HomeComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent implements AfterViewInit {
  welcomeComplete = signal(false);

  ngAfterViewInit() {
    // Switch to home component after welcome sequence
      setTimeout(() => {
        this.welcomeComplete.set(true);
      }, 4000); // Same timing as when welcome is removed
  }
}
