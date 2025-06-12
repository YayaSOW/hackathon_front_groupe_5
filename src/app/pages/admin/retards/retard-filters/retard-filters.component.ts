import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CoursResponseDto} from '../../../../shared/model/cours';
import {CoursService} from '../../../../shared/services/impl/cours.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-retard-filters',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgForOf
  ],
  templateUrl: './retard-filters.component.html',
  styleUrl: './retard-filters.component.css'
})
export class RetardFiltersComponent implements OnInit {
  cours: CoursResponseDto[] = [];
  selectedCours: string = '';
  selectedDate: string = '';

  constructor(private coursService: CoursService) {}

  ngOnInit() {
    this.coursService.getAllCours().subscribe({
      next: (data) => {
        this.cours = data.results;
        console.log(this.cours);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  @Output() filtersChange = new EventEmitter<{ cours: string; date: string }>();

  onCoursChange(event: Event): void {
    this.selectedCours = (event.target as HTMLSelectElement).value;
    this.emitFilters();
  }

  onDateChange(date: string): void {
    this.selectedDate = date;
    this.emitFilters();
  }

  emitFilters(): void {
    this.filtersChange.emit({
      cours: this.selectedCours,
      date: this.selectedDate,
    });
  }
}
