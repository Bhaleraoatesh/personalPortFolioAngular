import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ REQUIRED
  templateUrl: './navbar.html',
})
export class Navbar {
  @Input() fname: string = '';
  mobileMenuOpen = false;

  menuItems = ['home', 'experience', 'skills', 'projects', 'contact'];

  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
