import { Component } from '@angular/core';
import {SidebarComponent} from '../../shared/components/sidebar/sidebar.component';
import {NavbarComponent} from '../../shared/components/navbar/navbar.component';
import {FooterComponent} from '../../shared/components/footer/footer.component';
import {EtudiantListPageComponent} from '../../pages/admin/etudiants/etudiant-list-page/etudiant-list-page.component';
import {AbsenceListPageComponent} from '../../pages/admin/absences/absence-list-page/absence-list-page.component';
import {RetardListPageComponent} from '../../pages/admin/retards/retard-list-page/retard-list-page.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  imports: [
    SidebarComponent, NavbarComponent, FooterComponent, 
    EtudiantListPageComponent, AbsenceListPageComponent, 
    RetardListPageComponent,RouterOutlet
  ],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

}
