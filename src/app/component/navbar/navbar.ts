import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Bio } from '../../data/constants';

@Component({
  selector: 'app-navbar',
  imports:[RouterModule,CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  bio = Bio;
  fname = this.bio.fname;
  isMenuOpen = true;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
  const toggle = document.getElementById('nav-toggle') as HTMLInputElement;
  if (toggle) toggle.checked = false;
}

}
