import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgStyle, RouterLinkActive, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'personal-website';

  isPaused = false;
  isMobile = false;
  bubbles: Array<{
    size: number;
    left: number;
    delay: number;
    duration: number;
  }> = [];

  private readonly GRID_CELLS = 6; // Divide screen into 6x6 grid
  private gridOccupancy: boolean[][] = Array(this.GRID_CELLS).fill(false)
    .map(() => Array(this.GRID_CELLS).fill(false));

  constructor() {
    this.generateBubbles();
    this.checkMobileSize();
    window.addEventListener('resize', () => this.checkMobileSize());
  }

  generateBubbles() {
    // Reset grid occupancy
    this.gridOccupancy = Array(this.GRID_CELLS).fill(false)
      .map(() => Array(this.GRID_CELLS).fill(false));

    this.bubbles = [];
    let attempts = 0;
    const maxAttempts = 100; // Prevent infinite loops

    while (this.bubbles.length < 15 && attempts < maxAttempts) {
      const size = Math.random() * 250 + 20;
      const left = Math.random() * 100;
      
      // Convert position to grid coordinates
      const gridX = Math.floor((left / 100) * this.GRID_CELLS);
      const gridY = Math.floor(Math.random() * this.GRID_CELLS);

      // Check surrounding cells for occupancy
      let canPlace = true;
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          const checkX = gridX + dx;
          const checkY = gridY + dy;
          if (
            checkX >= 0 && checkX < this.GRID_CELLS &&
            checkY >= 0 && checkY < this.GRID_CELLS &&
            this.gridOccupancy[checkX][checkY]
          ) {
            canPlace = false;
            break;
          }
        }
      }

      if (canPlace) {
        this.gridOccupancy[gridX][gridY] = true;
        this.bubbles.push({
          size,
          left,
          delay: Math.random() * -20,
          duration: Math.random() * 10 + 15
        });
      }

      attempts++;
    }
  }

  checkMobileSize() {
    this.isMobile = window.innerWidth <= 768;
  }

  toggleAnimation() {
    this.isPaused = !this.isPaused;
  }

  getBubbleStyles(bubble: any) {
    return {
      width: `${bubble.size}px`,
      height: `${bubble.size}px`,
      left: `${bubble.left}%`,
      animationDelay: `${bubble.delay}s`,
      animationDuration: `${bubble.duration}s`
    };
  }
}
