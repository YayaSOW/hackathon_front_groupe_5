import {Component, OnInit} from '@angular/core';
import {ClasseService} from '../../../../shared/mock/services/classe.service';
import {Classe} from '../../../../shared/model/classe';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-etudiant-filters',
  imports: [
    NgForOf
  ],
  templateUrl: './etudiant-filters.component.html',
  styleUrl: './etudiant-filters.component.css',
})
export class EtudiantFiltersComponent implements OnInit {
  classes: Classe[] = [];

  constructor(private classeService: ClasseService) {
  }

  ngOnInit(): void {
    this.classeService.getClasses().subscribe(data => {
      console.log('data', data);
      this.classes = data;
    });
    }
}
