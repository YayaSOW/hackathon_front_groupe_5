import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../../services/impl/auth.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sidebar',
  imports: [RouterLink,CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  currentUser: string | null = null;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user ? `${user.prenom} ${user.nom}` : null;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
