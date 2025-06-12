import {Component, OnInit} from '@angular/core';
import {Router } from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';
import {PresenceResponseDto} from '../../../../shared/model/presence';
import {PresenceService} from '../../../../shared/services/impl/presence.service';
import {RestResponse} from '../../../../shared/model/restResponse';
import {PaginationComponent} from '../../../../shared/components/pagination/pagination.component';
import {AbsenceFiltersComponent} from '../absence-filters/absence-filters.component';

@Component({
  selector: 'app-absence-table',
  imports: [NgForOf, AbsenceFiltersComponent, PaginationComponent, NgIf],
  templateUrl: './absence-table.component.html',
  styleUrl: './absence-table.component.css'
})
export class AbsenceTableComponent implements OnInit {

  constructor(private router: Router, private presenceService: PresenceService){}

  absences: RestResponse<PresenceResponseDto[]> = {
    status: 200,
    results: [],
    type: 'success',
    currentpage: 0,
    totalPages: 0,
    totalItems: 0,
    first: true,
    last: true,
  };
  selectedType: string = 'ABSENT';

  page = 0;
  size = 5;
  loading = true;

  currentCours = '';
  currentEtat = '';
  currentDate = '';

  ngOnInit(): void {
    this.fetchAbsences();
  }

  onFiltersChange(filters: { cours: string; etat: string, date: string }) {
    this.currentCours = filters.cours;
    this.currentEtat = filters.etat;
    this.currentDate = filters.date;
    this.page = 0; // Reset pagination si filtre change
    this.fetchAbsences();
  }

  onFilterByCours(cours: string) {
    this.currentCours = cours;
    this.page = 0;
    this.fetchAbsences();
  }

  onFilterByEtat(etat: string) {
    this.currentEtat = etat;
    this.page = 0;
    this.fetchAbsences();
  }

  onFilterByDate(date: string) {
    this.currentDate = date;
    this.page = 0;
    this.fetchAbsences();
  }

  onPageChange(page: number) {
    this.page = page;
    this.fetchAbsences()
  }

  private fetchAbsences() {
    this.loading = true;

    const { currentCours: cours, currentEtat: etat, currentDate: date } = this;
    const isCoursActive = cours !== '';
    const isStateActive = etat !== '';
    const isDateActive = date !== '';

    const page = this.page;
    const size = this.size;

    let observable$;

    if (isCoursActive && isStateActive && isDateActive) {
      observable$ = this.presenceService.getAllPresencesByTypeAndEtatAndCoursAndDate(this.selectedType as any, etat, cours, date, page, size);
    } else if (isCoursActive) {
      observable$ = this.presenceService.getAllPresencesByTypeAndCours(this.selectedType as any, cours, page, size);
    } else if (isStateActive) {
      observable$ = this.presenceService.getAllPresencesByTypeAndEtat(this.selectedType as any, etat, page, size);
    } else if (isDateActive) {
      observable$ = this.presenceService.getAllPresencesByTypeAndDate(this.selectedType as any, etat, page, size);
    } else {
      observable$ = this.presenceService.getAllPresencesByType(this.selectedType as any, page, size);
    }

    observable$.subscribe({
      next: (data) => {
        this.absences = data;
        console.log(this.absences);
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  onViewDetails(id?: string) {
    if (id !== undefined) {
      this.router.navigateByUrl(`absence/${id}`);
    } else {
      console.error("ID d'absence non défini");
    }
  }

}
