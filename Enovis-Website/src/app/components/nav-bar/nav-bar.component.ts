import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive, CommonModule ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isSoftwareSolutions: boolean = false;
  isNavbarVisible: boolean = false;
  
  toggleSoftwareSolutions() {
    this.isSoftwareSolutions = !this.isSoftwareSolutions;
  }

  toggleNavbarVisibility() {
    this.isNavbarVisible = !this.isNavbarVisible;
  }

  hideNavbar() {
    this.isNavbarVisible = false;
  }
}
