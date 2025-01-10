import { animate, state, style, transition, trigger } from '@angular/animations';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface NavBubble {
  text: string;
  link: string;
  color: string;
  position: {
    top: string;
    left: string;
  };
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }), // Start invisible
        animate('500ms ease-in', style({ opacity: 1 })) // Fade in
      ])
    ]),
    trigger('bubbleHover', [
      state('idle', style({
        transform: 'translateY(0)'
      })),
      state('hover', style({
        transform: 'translateY(-10px)'
      })),
      transition('idle <=> hover', animate('300ms ease-in-out'))
    ])
  ]
})
export class HomeComponent {
  navBubbles: NavBubble[] = [
    {
      text: 'Projects',
      link: '/projects',
      color: '#1E88E5',  // Material Blue 600
      position: { top: '-25%', left: '-10%' }
    },
    {
      text: 'Dance',
      link: '/dance',
      color: '#1565C0',  // Material Blue 800
      position: { top: '-25%', left: '75%' }
    },
    {
      text: 'About',
      link: '/about',
      color: '#0D47A1',  // Material Blue 900
      position: { top: '60%', left: '-10%' }
    },
    {
      text: 'Contact',
      link: '/contact',
      color: '#2979FF',  // Material Blue A700
      position: { top: '60%', left: '75%' }
    }
  ];
}
