import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ClasseResponseDto} from '../../../../shared/model/classe';
import {NgClass, NgForOf} from '@angular/common';
import {ClasseService} from '../../../../shared/services/impl/classe.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-etudiant-filters',
  imports: [
    NgForOf,
    FormsModule,
    NgClass
  ],
  templateUrl: './etudiant-filters.component.html',
  styleUrl: './etudiant-filters.component.css',
})
export class EtudiantFiltersComponent implements OnInit {
  classes: ClasseResponseDto[] = [];
  selectedClasse: string = '';
  selectedStatut: string = 'tous';

  constructor(private classeService: ClasseService) {
  }

  ngOnInit(): void {
    this.classeService.getAllClasses().subscribe({
      next: (data) => {
        this.classes = data.results;
      },
      error: (err) => {
        console.error(err);
      }
    });
    }

  @Output() filtersChange = new EventEmitter<{ classe: string; statut: string }>();

  onClasseChange(event: Event): void {
    this.selectedClasse = (event.target as HTMLSelectElement).value;
    this.emitFilters();
  }

  onStatutChange(statut: string): void {
    this.selectedStatut = statut;
    this.emitFilters();
  }

  emitFilters(): void {
    this.filtersChange.emit({
      classe: this.selectedClasse,
      statut: this.selectedStatut,
    });
  }

}
