import { Component } from '@angular/core';
import {EtudiantFiltersComponent} from "../../etudiants/etudiant-filters/etudiant-filters.component";
import {EtudiantTableComponent} from "../../etudiants/etudiant-table/etudiant-table.component";
import {PaginationComponent} from "../../../../shared/components/pagination/pagination.component";
import {AbsenceFiltersComponent} from '../absence-filters/absence-filters.component';
import {AbsenceTableComponent} from '../absence-table/absence-table.component';

@Component({
  selector: 'app-absence-list-page',
    imports: [
        AbsenceFiltersComponent,
        AbsenceTableComponent,
        PaginationComponent
    ],
  templateUrl: './absence-list-page.component.html',
  styleUrl: './absence-list-page.component.css'
})
export class AbsenceListPageComponent {

}
