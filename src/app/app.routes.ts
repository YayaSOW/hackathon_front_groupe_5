import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EtudiantListPageComponent } from './pages/admin/etudiants/etudiant-list-page/etudiant-list-page.component';
import { AbsenceListPageComponent } from './pages/admin/absences/absence-list-page/absence-list-page.component';
import { RetardListPageComponent } from './pages/admin/retards/retard-list-page/retard-list-page.component';
import { AbsenceItemComponent } from './pages/admin/absences/absence-item/absence-item.component';
import { SecurityComponent } from './pages/security/security.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/guards/auth.guard';
import {
  AbsenceItemJustificatifComponent
} from './pages/admin/absences/absence-item-justificatif/absence-item-justificatif.component';


export const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'etudiant', component: EtudiantListPageComponent },
      { path: 'absence', component: AbsenceListPageComponent },
      { path: 'absence/:id', component: AbsenceItemComponent },
      { path: 'absence/:id/justificatif', component: AbsenceItemJustificatifComponent },
      { path: 'retard', component: RetardListPageComponent },
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: SecurityComponent }
    ]
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];
