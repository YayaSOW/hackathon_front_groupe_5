import { Component } from '@angular/core';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {EtudiantListPageComponent} from './pages/admin/etudiants/etudiant-list-page/etudiant-list-page.component';
import { RouterOutlet } from '@angular/router';
// import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';

@Component({
  selector: 'app-root',
  imports: [AdminLayoutComponent, EtudiantListPageComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Gestion de suivi des absences';
}
