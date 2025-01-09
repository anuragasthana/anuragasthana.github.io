import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }), // Start invisible
        animate('500ms ease-in', style({ opacity: 1 })) // Fade in
      ])
    ])
  ]
})
export class HomeComponent {

}
