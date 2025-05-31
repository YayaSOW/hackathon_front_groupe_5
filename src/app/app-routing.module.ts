// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AbsenceComponent } from './pages/absence/absence.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'absence', component: AbsenceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
