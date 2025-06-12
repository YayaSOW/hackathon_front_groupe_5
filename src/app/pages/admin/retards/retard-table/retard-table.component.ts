import {Component, OnInit} from '@angular/core';
import {PresenceResponseDto} from '../../../../shared/model/presence';
import {NgForOf, NgIf} from '@angular/common';
import {Router} from '@angular/router';
import {RestResponse} from '../../../../shared/model/restResponse';
import {PresenceService} from '../../../../shared/services/impl/presence.service';
import {RetardFiltersComponent} from '../retard-filters/retard-filters.component';
import {AbsenceFiltersComponent} from '../../absences/absence-filters/absence-filters.component';
import {PaginationComponent} from '../../../../shared/components/pagination/pagination.component';

@Component({
  selector: 'app-retard-table',
  imports: [
    NgForOf,
    RetardFiltersComponent,
    AbsenceFiltersComponent,
    NgIf,
    PaginationComponent
  ],
  templateUrl: './retard-table.component.html',
  styleUrl: './retard-table.component.css'
})
export class RetardTableComponent implements OnInit {
  constructor(private router: Router, private presenceService: PresenceService){}

  retards: RestResponse<PresenceResponseDto[]> = {
    status: 200,
    results: [],
    type: 'success',
    currentpage: 0,
    totalPages: 0,
    totalItems: 0,
    first: true,
    last: true,
  };
  selectedType: string = 'RETARD';

  page = 0;
  size = 5;
  loading = true;

  currentCours = '';
  currentDate = '';

  ngOnInit(): void {
    this.fetchRetards();
  }

  onFiltersChange(filters: { cours: string; date: string }) {
    this.currentCours = filters.cours;
    this.currentDate = filters.date;
    this.page = 0; // Reset pagination si filtre change
    this.fetchRetards();
  }

  onFilterByCours(cours: string) {
    this.currentCours = cours;
    this.page = 0;
    this.fetchRetards();
  }

  onFilterByDate(date: string) {
    this.currentDate = date;
    this.page = 0;
    this.fetchRetards();
  }

  onPageChange(page: number) {
    this.page = page;
    this.fetchRetards()
  }

  private fetchRetards() {
    this.loading = true;

    const { currentCours: cours, currentDate: date } = this;
    const isCoursActive = cours !== '';
    const isDateActive = date !== '';

    const page = this.page;
    const size = this.size;

    let observable$;

    if (isCoursActive && isDateActive) {
      observable$ = this.presenceService.getAllPresencesByTypeAndCoursAndDate(this.selectedType as any, cours, date, page, size);
    } else if (isCoursActive) {
      observable$ = this.presenceService.getAllPresencesByTypeAndCours(this.selectedType as any, cours, page, size);
    } else if (isDateActive) {
      observable$ = this.presenceService.getAllPresencesByTypeAndDate(this.selectedType as any, date, page, size);
    } else {
      observable$ = this.presenceService.getAllPresencesByType(this.selectedType as any, page, size);
    }

    observable$.subscribe({
      next: (data) => {
        this.retards = data;
        console.log(this.retards);
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

}
