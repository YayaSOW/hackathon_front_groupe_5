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

  currentClasse: string = '';
  currentStatut?: string;

  constructor(private etudiantService: EtudiantService) {}

  ngOnInit(): void {
    this.chargerEtudiants();
  }

  chargerEtudiants() {
    this.loading = true;

    if (this.currentClasse) {
      this.etudiantService.getAllEtudiantsByClasse(this.currentClasse, this.page, this.size).subscribe({
        next: (data) => {
          this.etudiants = data;
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.loading = false;
        }
      });
    } else if (this.currentStatut !== undefined) {
      this.etudiantService.getAllEtudiantsByStatut(this.currentStatut, this.page, this.size).subscribe({
        next: (data) => {
          this.etudiants = data;
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.loading = false;
        }
      });
    } else {
      this.etudiantService.getAllEtudiants(this.page, this.size).subscribe({
        next: (data) => {
          this.etudiants = data;
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.loading = false;
        }
      });
    }
  }

  onFilterByClasse(classe: string) {
    this.currentClasse = classe;
    this.currentStatut = undefined;
    this.page = 0;
    this.chargerEtudiants();
  }

  onFilterByStatut(statut: string) {
    this.currentStatut = statut;
    this.currentClasse = '';
    this.page = 0;
    this.chargerEtudiants();
  }

  precedent() {
    if (!this.etudiants.first) {
      this.page--;
      this.chargerEtudiants();
    }
  }

  suivant() {
    if (!this.etudiants.last) {
      this.page++;
      this.chargerEtudiants();
    }
  }

  onPageChange(page: number) {
    this.page = page;

    if (this.currentClasse) {
      this.onFilterByClasse(this.currentClasse);
    } else if (this.currentStatut !== undefined) {
      this.onFilterByStatut(this.currentStatut);
    } else {
      this.chargerEtudiants(); // sans filtre
    }
  }

}
