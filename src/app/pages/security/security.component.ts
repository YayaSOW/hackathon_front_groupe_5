import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../shared/services/impl/auth.service';
import { Router } from '@angular/router';
import { LoginResponse } from '../../shared/model/auth';

@Component({
  selector: 'app-security',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent {
  login: string = '';
  password: string = '';
  errorMessage: string = '';
  showPassword: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    console.log('Formulaire soumis', { login: this.login, password: this.password });
    this.authService.login(this.login, this.password).subscribe({
      next: (response: LoginResponse) => {
        console.log('Réponse AuthService:', response);
        if (response.success) {
          this.errorMessage = '';
          console.log('Tentative de redirection vers /etudiant');
          this.router.navigate(['/absence']).then(success => {
            console.log('Redirection réussie ?', success);
          }).catch(err => {
            console.error('Erreur de redirection:', err);
          });
        } else {
          this.errorMessage = response.message;
        }
      },
      error: (err) => {
        console.error('Erreur lors de la connexion:', err);
        this.errorMessage = 'Une erreur est survenue. Veuillez réessayer.';
      }
    });
  }

  onButtonClick() {
    console.log('Bouton Connexion cliqué');
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}