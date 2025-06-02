import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ClasseResponseDto} from '../../../../shared/model/classe';
import {NgForOf} from '@angular/common';
import {ClasseService} from '../../../../shared/services/impl/classe.service';

@Component({
  selector: 'app-etudiant-filters',
  imports: [
    NgForOf
  ],
  templateUrl: './etudiant-filters.component.html',
  styleUrl: './etudiant-filters.component.css',
})
export class EtudiantFiltersComponent implements OnInit {
  classes: ClasseResponseDto[] = [];

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

  @Output() filterClasse = new EventEmitter<string>();
  @Output() filterStatut = new EventEmitter<string>();

  onClasseChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const valeur = select.value;
    this.filterClasse.emit(valeur);
  }

  onStatutChange(statut: string): void {
    this.filterStatut.emit(statut);
  }

}
