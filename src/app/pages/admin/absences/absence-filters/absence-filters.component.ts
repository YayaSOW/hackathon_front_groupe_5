import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CoursResponseDto} from '../../../../shared/model/cours';
import {NgClass, NgForOf} from '@angular/common';
import {CoursService} from '../../../../shared/services/impl/cours.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-absence-filters',
  imports: [
    NgForOf,
    ReactiveFormsModule,
    FormsModule,
    NgClass
  ],
  templateUrl: './absence-filters.component.html',
  styleUrl: './absence-filters.component.css'
})
export class AbsenceFiltersComponent implements OnInit{
  cours: CoursResponseDto[] = [];
  selectedCours: string = '';
  selectedEtat: string = 'tous';
  selectedDate: string = '';

  constructor(private coursService: CoursService) {
  }

  ngOnInit(): void {
    this.coursService.getAllCours().subscribe({
      next: (data) => {
        this.cours = data.results;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  @Output() filtersChange = new EventEmitter<{ cours: string; etat: string; date: string }>();

  onCoursChange(event: Event): void {
    this.selectedCours = (event.target as HTMLSelectElement).value;
    this.emitFilters();
  }

  onEtatChange(etat: string): void {
    this.selectedEtat = etat;
    this.emitFilters();
  }

  onDateChange(date: string): void {
    this.selectedDate = date;
    this.emitFilters();
  }

  emitFilters(): void {
    this.filtersChange.emit({
      cours: this.selectedCours,
      etat: this.selectedEtat,
      date: this.selectedDate,
    });
  }
}
