import { Component } from '@angular/core';
import { EtudiantFiltersComponent } from '../etudiant-filters/etudiant-filters.component';
import { EtudiantTableComponent } from '../etudiant-table/etudiant-table.component';
import {PaginationComponent} from '../../../../shared/components/pagination/pagination.component';

@Component({
  selector: 'app-etudiant-list-page',
  imports: [EtudiantTableComponent],
  templateUrl: './etudiant-list-page.component.html',
  styleUrl: './etudiant-list-page.component.css',
})
export class EtudiantListPageComponent {}
