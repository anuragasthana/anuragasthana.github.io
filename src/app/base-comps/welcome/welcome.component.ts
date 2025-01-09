// welcome.component.ts
import { AfterViewInit, Component, OnInit, signal } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [NgIf],
  animations: [
    trigger('welcomeAnimation', [
      transition(':enter', [
        style({ 
          opacity: 0,
          transform: 'translateY(-100%)'
        }),
        animate('1000ms ease-out', style({ 
          opacity: 1,
          transform: 'translateY(-50%)'
        }))
      ]),
      transition(':leave', [
        animate('1000ms ease-in', style({ 
          opacity: 0,
          transform: 'translateY(-50%)'
        }))
      ])
    ])
  ]
})
export class WelcomeComponent implements OnInit {
  isRemoved = signal(false);
  animationState = '';

  ngOnInit() {
    // Start fade out after 3 seconds
    setTimeout(() => {
      this.isRemoved.set(true);
    }, 4000);
  }
}