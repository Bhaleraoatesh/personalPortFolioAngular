import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Bio } from '../../data/constants';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ REQUIRED
  templateUrl: './navbar.html',
})
export class Navbar {
  @Input() fname: string = Bio.fname;
  mobileMenuOpen = false;

  menuItems = ['home', 'experience', 'skills', 'projects','education', 'contact'];

  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
