import {
  Component,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-background',
  standalone: true,
  templateUrl: './background.html',
  styleUrl: './background.css'
})
export class Background implements AfterViewInit, OnDestroy {

  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private animationId = 0;

  private stars: any[] = [];
  private readonly STAR_COUNT = 500;

  ngAfterViewInit(): void {
    this.canvas = document.getElementById('starCanvas') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d')!;

    this.resize();
    this.createStars();
    this.animate();

    window.addEventListener('resize', this.resize);
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationId);
    window.removeEventListener('resize', this.resize);
  }

  /* ===================== */

  private resize = () => {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  };

  private createStars() {
    this.stars = [];
    for (let i = 0; i < this.STAR_COUNT; i++) {
      this.stars.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        r: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.2 + 0.05,
        opacity: Math.random() * 0.8 + 0.2
      });
    }
  }

  private animate = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (const star of this.stars) {
      // Move stars downward slowly
      star.y += star.speed;

      if (star.y > this.canvas.height) {
        star.y = 0;
        star.x = Math.random() * this.canvas.width;
      }

      this.ctx.beginPath();
      this.ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      this.ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      this.ctx.fill();
    }

    this.animationId = requestAnimationFrame(this.animate);
  };
}
