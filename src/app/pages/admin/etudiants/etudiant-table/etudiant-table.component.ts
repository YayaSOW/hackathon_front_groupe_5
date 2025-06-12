import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtudiantResponseDto } from '../../../../shared/model/etudiant';
import { EtudiantService } from '../../../../shared/services/impl/etudiant.service';
import { RestResponse } from '../../../../shared/model/restResponse';
import { EtudiantFiltersComponent } from '../etudiant-filters/etudiant-filters.component';
import {PaginationComponent} from '../../../../shared/components/pagination/pagination.component';

@Component({
  selector: 'app-etudiant-table',
  standalone: true,
  imports: [CommonModule, EtudiantFiltersComponent, PaginationComponent],
  templateUrl: './etudiant-table.component.html',
  styleUrl: './etudiant-table.component.css',
})
export class EtudiantTableComponent implements OnInit {
  etudiants: RestResponse<EtudiantResponseDto[]> = {
    status: 200,
    results: [],
    type: 'success',
    currentpage: 0,
    totalPages: 0,
    totalItems: 0,
    first: true,
    last: true,
  };

  page = 0;
  size = 5;
  loading = true;

  // Filtres actifs
  currentClasse: string = '';
  currentStatut: string = 'tous';

  constructor(private etudiantService: EtudiantService) {}

  ngOnInit(): void {
    this.fetchEtudiants(); // Appliquer filtres par défaut au chargement
  }

  onFiltersChange(filters: { classe: string; statut: string }) {
    this.currentClasse = filters.classe;
    this.currentStatut = filters.statut;
    this.page = 0; // Reset pagination si filtre change
    this.fetchEtudiants();
  }

  onPageChange(page: number) {
    this.page = page;
    this.fetchEtudiants();
  }

  private fetchEtudiants() {
      this.loading = true;

      const { currentClasse: classe, currentStatut: statut } = this;
      const isClasseActive = classe !== '';
      const isStatutActive = statut !== 'tous';
      const page = this.page;
      const size = this.size;

    let observable$;

      if (isClasseActive && isStatutActive) {
        observable$ = this.etudiantService.getAllEtudiantsByClasseAndStatut(classe, statut, page, size);
      } else if (isClasseActive) {
        observable$ = this.etudiantService.getAllEtudiantsByClasse(classe, page, size);
      } else if (isStatutActive) {
        observable$ = this.etudiantService.getAllEtudiantsByStatut(statut, page, size);
      } else {
        observable$ = this.etudiantService.getAllEtudiants(page, size);
      }

      observable$.subscribe({
        next: (data) => {
          this.etudiants = data;
          console.log(this.etudiants);
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.loading = false;
        }
      });
    }

}
