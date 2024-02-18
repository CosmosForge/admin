import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router) {}
  ChangerHome(){
    const currentRoute = this.router.url;

    if (currentRoute.substring(0,5) !== '/admin') {
      return '/';
    } else {
      return '/admin';
    }
  }
}