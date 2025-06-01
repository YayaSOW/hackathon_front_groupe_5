import { Routes } from '@angular/router';
import { EtudiantListPageComponent } from './pages/admin/etudiants/etudiant-list-page/etudiant-list-page.component';
import { AbsenceListPageComponent } from './pages/admin/absences/absence-list-page/absence-list-page.component';
import { RetardListPageComponent } from './pages/admin/retards/retard-list-page/retard-list-page.component';
import { AbsenceItemComponent } from './pages/admin/absences/absence-item/absence-item.component';

export const routes: Routes = [
    {
        path: 'etudiant',
        component: EtudiantListPageComponent
    },
    {
        path: 'absence',
        component: AbsenceListPageComponent
    },
    {
        path: 'item',
        component: AbsenceItemComponent
    },
    {
        path: 'retard',
        component: RetardListPageComponent
    }
];
