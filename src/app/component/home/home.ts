import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bio } from '../../data/constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html', 
  styleUrls: ['./home.css']
})
export class Home implements OnInit, OnDestroy {
  bio = Bio;
  name = this.bio.name;

  roles: string[] = this.bio.roles;

  description = this.bio.description;
  resumeLink = this.bio.resume;

  currentText = '';

  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private intervalId: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      const currentRole = this.roles[this.roleIndex];

      if (!this.deleting) {
        this.currentText = currentRole.slice(0, this.charIndex + 1);
        this.charIndex++;

        if (this.charIndex === currentRole.length) {
          setTimeout(() => {
            this.deleting = true;
          }, 1000);
        }
      } else {
        this.currentText = currentRole.slice(0, this.charIndex - 1);
        this.charIndex--;

        if (this.charIndex === 0) {
          this.deleting = false;
          this.roleIndex = (this.roleIndex + 1) % this.roles.length;
        }
      }

      // 🔥 FORCE ANGULAR TO UPDATE VIEW
      this.cdr.detectChanges();

    }, this.deleting ? 60 : 120);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
