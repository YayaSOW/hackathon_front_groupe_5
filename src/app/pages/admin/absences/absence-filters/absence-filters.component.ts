import { Component } from '@angular/core';
import {CoursService} from '../../../../shared/services/impl/cours.service';
import {Cours} from '../../../../shared/model/cours';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-absence-filters',
  imports: [
    NgForOf
  ],
  templateUrl: './absence-filters.component.html',
  styleUrl: './absence-filters.component.css'
})
export class AbsenceFiltersComponent {
  cours: Cours[] = [];

  constructor(private coursService: CoursService) {
    this.coursService.getCours().subscribe(data => {
      this.cours = data;
    });
  }
}
